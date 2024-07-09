import { AlbumData, EventData } from "../../types/element-types";

/**
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


interface DialogueProps {
  event: EventData
  album: AlbumData | undefined
  dialoguePosition: string
}


export const Dialogue = ({ event, album, dialoguePosition }: DialogueProps) => {

  return (
    <div className={`absolute w-full top-10 z-40 rounded-lg ${dialoguePosition === "left" ? "md:translate-x-52" : "md:-translate-x-52"}`}>
      <div className="absolute w-full min-h-fit">
        <div className={`px-4 w-full bg-slate-300 dark:bg-zinc-700 ${album ? "rounded-t-lg" : "rounded-lg"} flex flex-col justify-around py-4 ${dialoguePosition === "left" ? "items-start" : "items-end"} italic`}>
          <p>{event.date}:</p>
          <p>{event.blurb}.</p>
        </div>
        {album && <div className="px-4 py-4 bg-sky-100 dark:bg-indigo-900 rounded-b-lg">
          <p>
            {album?.name}
          </p>
          <p>
            {album?.details}
          </p>
        </div>}
      </div>

    </div>
  )
}