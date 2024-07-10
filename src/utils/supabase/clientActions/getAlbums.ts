import { createClient } from "../client";
import { Album } from "@/types/db-types/types";

export default async function getAlbums() {

  const supabase = createClient();

  const { data, error } = await supabase
    .from("albums")
    .select("*, album_resources(id)")
    .returns<Album[]>();

  const clientData = data ? data.map(album => {

    const { id, name, description, release_date, album_resources } = album;

    return {
      id: id,
      name: name,
      description: description,
      releaseDate: release_date,
      albumResources: album_resources || []
    }
  }) : [];

  return {
    data: clientData,
    error: error
  }
}