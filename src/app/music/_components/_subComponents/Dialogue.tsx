import { Album, MusicEvent } from "@/types/client-types/types";
import { dmSans } from "@/lib/fonts";
import getEventResource from "@/utils/supabase/clientActions/getEventResource";

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
  event: MusicEvent
  album?: Album
  dialoguePosition: string
}


export const Dialogue = ({ event, album, dialoguePosition }: DialogueProps) => {

  const parsedDate = event.date.replace("/1/", "/")

  return (
    <div className={`absolute w-full top-10 z-40 rounded-lg ${dialoguePosition === "left" ? "lg:translate-x-52" : "lg:-translate-x-52"}`}>
      <div className="absolute w-full min-h-fit">
        <div className={`px-4 w-full bg-slate-300 dark:bg-indigo-950 ${album ? "rounded-t-lg" : "rounded-lg"} flex flex-col justify-around py-4`}>
          <p className="text-sm my-2 italic underline">{parsedDate}:</p>
          <p className={`text-justify text-sm md:text-md ${dmSans.className}`}>{event.description}</p>
        </div>
        {album && <div className={`px-4 py-4 bg-sky-100 dark:bg-indigo-900 rounded-b-lg ${dmSans.className}`}>
          <p className="font-bold my-2">
            {album.name}
          </p>
          <p className="text-justify">
            {album.description}
          </p>
          <div className="flex justify-center hover:cursor-pointer"
            onClick={() => {
              const discogSlot = document.getElementById("discography-slot");

              if (!discogSlot) return;
              if (discogSlot.hidden) discogSlot.hidden = false;

              const offset = discogSlot.offsetTop - 150;

              window.scrollTo({ top: offset, behavior: "smooth" })

            }}
          >
            <p className="mt-3 underline">Go to Album</p>
          </div>
        </div>}
      </div>

    </div>
  )
}