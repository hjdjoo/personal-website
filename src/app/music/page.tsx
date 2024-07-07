import { musicNoteIconSvg } from "@/lib/icons"

import MusicContainer from "./_container/MusicContainer";
import MusicSplash from "./_components/MusicSplash";
import PortfolioHeader from "../_components/PortfolioHeader";

/**
 Music page should:

 Display a splash with media quotes
  Todo: Re-factor portfolio as parallel route to enable SSR/SEO optimization for music page.

 Display a scrollable timeline.
  Timeline will have interactive points at scaled distances for album releases and other general events
    Expected db structure: 
    music_event {
      id: int8(serial)
      name: text
      description: text
      date: text
    }
    music_event_resource {
      id: int8(serial)
      eventId: int8 //fk - public.music_events.id
      name: text
      type: text
      description: text
      src: text
      alt_text: text
    }

  Hovering on each point will display a dialogue box.
  Dialogue {
    eventId: music_events.id
    eventName: music_events.name
  };

  And the dialogue box should make a fetch for relevant info for its child components (Mini-player, press links, highlights, other media);

  from("music_event_resources")
  .select("*") : Array<MusicEventResources>

  Use the filetype to filter data and render appropriately.

 */

export default async function MusicPage() {

  // {data, error} = await getMusicEvents();
  // getMusicEvents: fetches db_data and returns as clientData;
  // passes data to MusicContainer as events;


  return (
    <>
      <MusicContainer>
        <PortfolioHeader category="music" />
        <MusicSplash />
      </MusicContainer>
    </>
  )

}