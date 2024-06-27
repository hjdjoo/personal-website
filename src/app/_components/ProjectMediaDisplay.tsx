import Image from "next/image";
import type { ProjectData } from "@/types/client-types/types";


interface ProjectMediaDisplayProps {
  projectData: ProjectData
}

export default function ProjectMediaDisplay(props: ProjectMediaDisplayProps) {

  const { fileType, fileDescription, altText, src } = props.projectData;
  // console.log("ProjectMedia/", props.projectData)
  // console.log("fileType, fileDescription", fileType, fileDescription);
  if (!props.projectData) {
    return (
      <>
      </>
    )
  }
  else return (
    <div>
      {fileType.includes("video") ? (
        <>
          <video controls width="100%" preload="auto" src={src} >
            <source src={src} type={fileType} />
          </video>
          <p className="text-center my-4">{fileDescription}</p>
        </>
      ) : (
        <>
          <Image src={`${src}`} alt={`${altText}`}></Image >
          <p>{fileDescription}</p>
        </>
      )}
    </div>
  )


}