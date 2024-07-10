import getAlbums from "@/utils/supabase/clientActions/getAlbums"

export default async function AlbumsPage() {

  const { data, error } = await getAlbums();



  return (
    <div>
      Albums Page
    </div>
  )
}