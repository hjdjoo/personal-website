import { createClient } from "../client";

export default async function getMusicResource(musicId: number) {
  "use server";

  const supabase = createClient();

  const { data, error } = await supabase
    .from("music_resources")
    .select("*")
    .eq("event_id", musicId);

  return { data: data, error: error }

}