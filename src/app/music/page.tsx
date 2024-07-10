"use server"

import MusicContainer from "./_containers/MusicContainer";
import { demoAlbumData, demoEvents } from "./lib/demoData";
// import { EventData, AlbumData } from "./types/element-types";
import { AlbumResource, Album, MusicEvent, EventResource } from "@/types/client-types/types";
import formatDate from "@/utils/actions/formatDate";

import getAlbums from "@/utils/supabase/clientActions/getAlbums";
import getEvents from "@/utils/supabase/clientActions/getEvents";

/**
 Music page should:

 Display a splash with media quotes
  Todo: Re-factor portfolio as parallel route to enable SSR/SEO optimization for music page.

 Display a scrollable timeline.
  Timeline will have interactive points at scaled distances for album releases and other general events
    Expected db structure: 
    album {
      id: int8(serial)
      name: text
      description: text
      date: text
    }
    album_resource {
      id: int8(serial)
      eventId: int8 //fk - public.albums.id
      name: text
      type: text
      description: text
      src: text
      alt_text: text
      date: text
    }
    music_event {
      id: int8(serial)
      name: text
      details: text
      date: text
    }

  Hovering on each point will display a dialogue box.

  Dialogue {
    event: event.id
    eventName: event.name
  };

  And the dialogue box could make a fetch (or middleware can fetch server-side for /music routes) for relevant info for its child components (Mini-player, press links, highlights, other media);

  from("album_resources")
  .select("*") : Array<MusicEventResources>

  Use the filetype to filter data and render appropriately.

 */

interface MusicPageProps {
  // children: React.ReactNode
}

export default async function MusicPage() {

  const { data: events, error: eventErr } = await getEvents();
  const { data: albums, error: albumErr } = await getAlbums();


  events.sort((a, b) => {
    return Date.parse(a.date) - Date.parse(b.date)
  })
  albums.sort((a, b) => {
    return Date.parse(a.releaseDate) - Date.parse(b.releaseDate)
  });

  const albumHash = Array(events.length).fill(undefined);

  events.forEach((event, idx) => {
    if (event.date === albums[0].releaseDate) {
      albumHash[idx] = albums.shift();
    }
  })

  return (
    <>
      <MusicContainer className="max-w-screen min-h-screen flex-1 
flex flex-col items-center justify-center py-12 mt-24" events={events} albums={albumHash} />
    </>
  )
}

