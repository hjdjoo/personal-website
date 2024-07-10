import { createClient } from "../client";

export default async function getEventResource(eventId: number) {
  "use server";

  const supabase = createClient();

  const { data, error } = await supabase
    .from("event_resources")
    .select("*")
    .eq("event_id", eventId);

  return { data: data, error: error }

}