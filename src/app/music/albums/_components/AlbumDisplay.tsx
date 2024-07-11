import { Album } from "@/types/client-types/types"
import Image from "next/image"

interface AlbumDisplayProps {
  children?: React.ReactNode
  album: Album
}

export default function AlbumDisplay(props: AlbumDisplayProps) {

  const { album } = props;

  const { albumResources } = album;

  let spotifyEmbed;
  let albumCover;

  if (!albumResources) throw new Error("Couldn't get resources!")

  for (let resource of albumResources) {
    if (resource.type === "spotify link") {
      spotifyEmbed = resource;
    }
    if (resource.type === "album cover") {
      albumCover = resource;
    }
  }
  // console.log(albumResources);

  const pressResources = albumResources ? albumResources.filter(resource => {
    return resource.type === "press" || "interview"
  }) : [];

  // const albumCover = albumResources ? albumResources.filter(resource => {
  //   return resource.type === "album cover"
  // }) : [];

  const videoResources = albumResources ? albumResources.filter(resource => {
    return resource.type === "video"
  }) : [];

  const spotify = albumResources ? albumResources.filter(resource => {
    return resource.type === "spotify link"
  }) : [];


  return (
    <div className="w-full flex flex-col items-center">
      <div id="album-intro-div"
        className="mt-12 flex flex-col md:flex-row justify-between">
        <div className="min-w-80 min-h-80 mb-8 md:mb-0 relative">
          {albumCover &&
            <Image src={`${albumCover.src}`} alt={`${albumCover.altText}`} sizes={"70vw"} style={{ objectFit: "contain" }} fill />}
        </div>
        <div id="album-description"
          className="flex items-center text-justify px-2 md:mx-6">
          <p>
            {album.description}
          </p>
        </div>
        <div id={`${album.name}-spotify-embed`}
          className="my-4">
          {spotifyEmbed &&
            <iframe style={{ borderRadius: "12px" }} src={spotifyEmbed.src} width="100%" height="450" allowFullScreen={false} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>}
        </div>
      </div>
    </div>
  )
}