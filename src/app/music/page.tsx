import { constructionIconSvg } from "@/lib/icons"
import { musicNoteIconSvg } from "@/lib/icons"


/**
 Music page should:

 Display a splash with media quotes
  Todo: Re-factor portfolio as parallel route to enable SSR/SEO optimization for music page.

 Display a scrollable timeline.
  Timeline will have interactive points at scaled distances for album releases and general events
    Expected db structure: 
    music_events {
      id: int8(serial)
      name: text
      description: text
    }
    music_portfolio_resources {
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

  from("music_portfolio_resources")
  .select("*") : Array<MusicPortfolioResources>

  Use the filetype to filter data and render appropriately.

 */

export default function MusicPage() {

  const musicNoteIcon = musicNoteIconSvg();

  return (
    <div id="music-page"
      className="h-3/4 max-w-screen flex flex-col items-center justify-center py-12">
      <div id="engineering-page-title"
        className="flex my-8">
        <h1 className="text-2xl font-bold my-auto">
          Music
        </h1>
        <div className="size-10 ml-4 my-auto">
          {musicNoteIcon}
        </div>
      </div>
    </div>
  )

}