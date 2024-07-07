"use server"

import MusicContainer from "./_container/MusicContainer";
import MusicSplash from "./_components/MusicSplash";
import PortfolioHeader from "../_components/PortfolioHeader";
import { vollkorn } from "@/lib/fonts";

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
    }

  Hovering on each point will display a dialogue box.

  Dialogue {
    albumId: album.id
    albumName: album.name
  };

  And the dialogue box should make a fetch (or middleware can fetch server-side for /music routes) for relevant info for its child components (Mini-player, press links, highlights, other media);

  from("album_resources")
  .select("*") : Array<MusicEventResources>

  Use the filetype to filter data and render appropriately.

 */

export default async function MusicPage() {

  // {data, error} = await getMusicEvents();
  // getMusicEvents: fetches db_data and returns as clientData;
  // passes data to MusicContainer as events;

  return (
    <>
      <MusicContainer className="max-w-screen min-h-screen flex-1 flex flex-col items-center justify-center py-12 mt-24">
        <div id="splash-font-provider"
          className={`flex-1 flex flex-col ${vollkorn.className}`}>
          <MusicSplash />
        </div>
      </MusicContainer>
    </>
  )

}