import { createClient } from "../client";
import type { Music_Event } from "@/types/db-types/types";

export default async function getEvents() {

  const supabase = createClient();

  const { data, error } = await supabase
    .from("music_events")
    .select("*, event_resources(*)")
    .returns<Music_Event[]>();

  const clientData = data ? data.map(event => {

    const { id, name, description, date, event_resources } = event;

    return {
      id: id,
      name: name,
      description: description,
      date: date,
      eventResources: event_resources || []
    }
  }) : []

  return {
    data: clientData,
    error: error
  }

}