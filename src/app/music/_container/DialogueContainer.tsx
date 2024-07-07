
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

export default function DialogueContainer() {

  return (
    <>

    </>
  )


}