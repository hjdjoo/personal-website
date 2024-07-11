"use client";

import Script from "next/script";
import { useEffect } from "react";

export default function SpotifyPlayer(uri: string) {


  return (
    <>
      <Script src="https://open.spotify.com/embed/iframe-api/v1" onReady={() => {
        window.onSpotifyIframeApiReady = (IFrameApi) => {
          const element = document.getElementById("embed-iframe");
          const options = {
            uri: uri
          };
          const callback = (EmbedController: any) => { };
          IFrameApi.createController(element, options, callback)
        }
      }} />
      <div id="embed-iframe"></div>
    </>
  )

}