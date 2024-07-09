"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import MusicContainer from "./_containers/MusicContainer";
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

interface MusicPageProps {
  // children: React.ReactNode
}

export default function MusicPage() {

  const [showTimeline, setShowTimeline] = useState<boolean>(false);
  const [showDiscography, setShowDiscography] = useState<boolean>(false);

  const handleTimeline = () => {

  }

  const handleDiscography = () => {

  }


  return (
    <div id="splash-font-provider"
      className={`flex-1 flex flex-col ${vollkorn.className}`}>
      <MusicSplash />
      <div id="music-page-links"
        className={`flex w-full space-between`}>
        <div
          className="py-2 mx-1 rounded-lg text-center flex-1 border border-current italic text-sm">
          <button onClick={handleDiscography}>the music</button>
        </div>
        <div
          className="py-2 mx-1 rounded-lg text-center flex-1 border border-current italic text-sm">
          <button onClick={handleTimeline}>the story</button>
        </div>
      </div>

    </div>
  )
}