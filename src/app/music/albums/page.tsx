import getAlbums from "@/utils/supabase/clientActions/getAlbums"
import AlbumContainer from "./_containers/AlbumContainer";

export default async function AlbumsPage() {

  const { data: albums, error } = await getAlbums();


  return (
    <div id="albums-page"
      className="flex flex-col items-center"
    >
      <p className="font-bold ">Discography:</p>
      <AlbumContainer albums={albums} />
    </div>
  )
}