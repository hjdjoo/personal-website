import Image from "next/image";
import type { ProjectData } from "@/types/client-types/types";


interface ProjectMediaDisplayProps {
  projectData: ProjectData
}

export default function ProjectMediaDisplay(props: ProjectMediaDisplayProps) {

  const { fileType, fileDescription, altText, src } = props.projectData;

  const storageUrl = "https://dfmighgxjphnvfivmctg.supabase.co/storage/v1/object/public/project_videos/"
  const isVideo = fileType.includes("video");

  const posterImage = isVideo ? src.replace(storageUrl, "").replace(/(.[a-z0-9]*)$/, "") : ""

  // console.log(posterImage);

  if (!props.projectData) {
    return (
      <>
      </>
    )
  }
  else return (
    <div id={`${posterImage}-media-container`} className="max-w-[350px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px]">
      {isVideo ? (
        <div>
          <video controls width="100%" height="100%" preload="auto" src={src} poster={`/video-stills/${posterImage}.jpeg`} >
            <source src={src} type={fileType} />
          </video>
          <p className="text-center my-4">{fileDescription}</p>
        </div>
      ) : (
        <div>
          <Image src={`${src}`} fill alt={`${altText}`} />
          <p>{fileDescription}</p>
        </div>
      )}
    </div>
  )


}