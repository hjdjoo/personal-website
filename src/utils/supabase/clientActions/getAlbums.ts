import { createClient } from "../client";
import { Album } from "@/types/db-types/types";
import { Album as ClientAlbum } from "@/types/client-types/types";

export default async function getAlbums() {

  const supabase = createClient();

  const { data, error } = await supabase
    .from("albums")
    .select("*, album_resources(*)")
    .returns<Album[]>();

  const clientData = data ? data.map(album => {

    const { id, name, description, release_date, album_resources } = album;


    return {
      id: id,
      name: name,
      description: description,
      releaseDate: release_date,
      albumResources: album_resources ? album_resources.map(resource => {
        return {
          id: resource.id,
          name: resource.name,
          albumId: resource.album_id,
          type: resource.type,
          description: resource.description,
          src: resource.src,
          altText: resource.alt_text
        }
      }) : []
    }
  }) as ClientAlbum[] : [];

  return {
    data: clientData,
    error: error
  }
}