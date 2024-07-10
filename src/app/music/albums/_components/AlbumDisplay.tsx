import { Album } from "@/types/client-types/types"
import Image from "next/image"

interface AlbumDisplayProps {
  children?: React.ReactNode
  album: Album
}

export default function AlbumDisplay(props: AlbumDisplayProps) {

  const { album } = props;

  const { albumResources } = album;

  // console.log(albumResources);

  const pressResources = albumResources ? albumResources.filter(resource => {
    return resource.type === "press" || "interview"
  }) : []

  const albumCover = albumResources ? albumResources.filter(resource => {
    return resource.type === "album cover"
  }) : []

  const videoResources = albumResources ? albumResources.filter(resource => {
    return resource.type === "video"
  }) : []


  return (
    <div className="w-full flex flex-col items-center">
      <div id="album-intro-div"
        className="mt-12 flex flex-col md:flex-row justify-between">
        <div className="min-w-80 min-h-80 mb-8 md:mb-0 relative">
          <Image src={`${albumCover[0].src}`} alt={`${albumCover[0].altText}`} sizes={"70vw"} style={{ objectFit: "contain" }} fill />
        </div>
        <div id="album-description"
          className="flex items-center text-justify md:mx-6">
          <p>
            {album.description}
          </p>
        </div>
      </div>
    </div>
  )
}