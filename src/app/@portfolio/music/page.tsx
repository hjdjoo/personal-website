import { constructionIconSvg } from "@/lib/icons"
import { musicNoteIconSvg } from "@/lib/icons"


/**
 Music page should:

 Display a splash with media quotes

 Display a scrollable timeline.
  Timeline will have interactive points at scaled distances for album releases and general events
  Hovering on each point will display a dialogue with information for album (streaming, info, etc);

  Dialogue {
    albumName: string

  }

 */

export default function MusicPage() {


  const musicNoteIcon = musicNoteIconSvg();
  const constructionIcon = constructionIconSvg();

  return (
    <div className="h-3/4 max-w-screen flex flex-col items-center justify-center py-12">
      <div id="engineering-page-title"
        className="flex my-8">
        <h1 className="text-2xl font-bold my-auto">
          Music Projects
        </h1>
        <div className="size-10 ml-4 my-auto">
          {musicNoteIcon}
        </div>
      </div>
    </div>
  )

}