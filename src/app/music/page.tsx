"use server"

import MusicContainer from "./_containers/MusicContainer";

import getAlbums from "@/utils/supabase/clientActions/getAlbums";
import getEvents from "@/utils/supabase/clientActions/getEvents";

/**
 Music page should:

 Display a splash with media quotes
  finished: refactored as parallel route for SSR/SEO optimization

 Display a scrollable timeline.
  Timeline will have interactive points at scaled distances for album releases and other general events
    Expected db structure: 
    album {
      id: int8(serial)
      name: text
      description: text
      date: text
    }
    resource {
      id: int8(serial)
      eventId || albumId: int8 // fk - public.events.id || public.albums.id
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
  
  And each point should display a dialogue box that renders key information.
  Dialogue {
    event: music_event,
    eventResources: event_resource[],
    album: album,
    albumResources: album_resource[],
  }

  The dialogue receives its info in a fetch call to the DB (either as a server action or passed down through props), which will return each album with its resources, as well as each event with its resources.
  Something like:
  .from(tableName)
  .select("*, referencingTable(*))
  .eq("tableName_id", "id")

  Ensure that the content of UX components reflects their function.
  Example: A "view discography" button should not act as a toggle button. If hidden, toggle; if visible, navigate.
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
    if (!albums.length) return;
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

