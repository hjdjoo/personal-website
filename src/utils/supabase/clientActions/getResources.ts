import { createClient } from "../client";
import { Album_Resource } from "@/types/db-types/types";


export default async function getAlbumResources(albumId: number) {

  const supabase = createClient();

  const { data, error } = await supabase
    .from("album_resources")
    .select("*")
    .eq("album_id", albumId)
    .returns<Album_Resource[]>();

  const clientData = data?.map(entry => {

    const { id, album_id, name, description, src, alt_text } = entry

    return {
      id: id,
      albumId: album_id,
      name: name,
      description: description,
      src: src,
      altText: alt_text
    };
  });

  return {
    data: clientData,
    error: error
  }

}