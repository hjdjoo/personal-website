"use server"

import Image from "next/image";

import Link from "next/link";

import MusicContainer from "./_container/MusicContainer";
import MusicSplash from "./_components/MusicSplash";
import Timeline from "./_components/Timeline";
import { vollkorn } from "@/lib/fonts";
import { EventData, AlbumData } from "./types/element-types";
import formatDate from "@/utils/actions/formatDate";

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

  And the dialogue box should make a fetch (or middleware can fetch server-side for /music routes) for relevant info for its child components (Mini-player, press links, highlights, other media);

  from("album_resources")
  .select("*") : Array<MusicEventResources>

  Use the filetype to filter data and render appropriately.

 */

const demoAlbumData = [
  {
    id: 2,
    name: "demo 2",
    details: "demo album 2 details lorem ipsum dolor est blah blah",
    releaseDate: "4/31/2009"
  },
  {
    id: 1,
    name: "demo 1",
    details: "demo album 1 details lorem ipsum dolor est blah blah",
    releaseDate: "12/31/2007"
  },
  {
    id: 3,
    name: "demo 3",
    details: "demo album 3 details lorem ipsum dolor est blah blah",
    releaseDate: "2/28/2010"
  },
]

const demoEvents = [
  {
    id: 2,
    name: "Album 1 release",
    blurb: "Demo Album 1 is released",
    date: "12/31/2007"
  },
  {
    id: 1,
    name: "Darryl is born",
    blurb: "The world keeps spinning",
    date: "6/20/2007"
  },
  {
    id: 3,
    name: "Southern tour 1",
    blurb: "American Ghost tour - Philadelphia, DC, Virginia",
    date: "4/21/2008"
  },
  {
    id: 4,
    name: "Album 2 Release",
    blurb: "Demo Album 2 is released",
    date: "4/31/2009"
  }
]

export default async function MusicPage() {

  // {data, error} = await getAlbums();
  // getAlbums: fetches db_data and returns as clientData;
  // passes data to MusicContainer as Albums;

  const albums: AlbumData[] = [...demoAlbumData]

  const events: EventData[] = demoEvents;

  // sort events and albums by date - should improve resiliency to db updates while working;

  albums.sort((a, b) => Date.parse(a.releaseDate) - Date.parse(b.releaseDate));

  events.sort((a, b) => Date.parse(a.date) - Date.parse(b.date));

  // hash albums to enable simpler processing
  const albumHash: Array<AlbumData | undefined> = Array(events.length).fill(undefined);

  events.forEach((event, idx) => {
    if (event.date === albums[0].releaseDate) {
      albumHash[idx] = albums.shift();
    }
  })

  // console.log(albumHash);

  return (
    <>
      <MusicContainer className="max-w-screen min-h-[calc(100vh*2)] flex-1 flex flex-col items-center justify-center py-12 mt-24">
        <div id="splash-font-provider"
          className={`flex-1 flex flex-col ${vollkorn.className}`}>
          <MusicSplash />
        </div>
        <div
          className="relative w-full h-[450px] md:h-[600px] lg:h-[600px] flex flex-col mt-24 mb-10"
        >
          <Image
            className="flex-1 opacity-85 dark:opacity-75"
            src="/BWQ-Mask-Transparent.png" alt="BWQ Mask Image"
            fill
            quality={100}
            style={{
              objectFit: "contain"
            }} />
        </div>
        <div id="music-page-links"
          className={`flex w-full space-between ${vollkorn.className}`}>
          <div
            className="py-2 mx-1 rounded-lg text-center flex-1 border border-s-white italic text-sm">
            <Link href="/music/discography">the music</Link>
          </div>
          <div
            className="py-2 mx-1 rounded-lg text-center flex-1 border border-s-white italic text-sm">
            <Link href="/music/timeline">the story</Link>
          </div>
        </div>
        {/* Have timeline and music players as slots. allow user to nav to timeline or music player. Timeline is collapsible "about" page. */}
      </MusicContainer>
    </>
  )
}