"use client"

import { useState, useEffect } from "react";

import Image from "next/image";
import sweIcon from "../../public/computer-settings.svg"
import musicIcon from "../../public/music-notes.svg"

export default function Home() {

  const aboutMeText = ["I'm a software engineer.", "I'm a musician.", "I'm an audio engineer.", "I'm an educator.", "I'm a philosphy nerd.", "I'm a software engineer."]

  const aboutMe = aboutMeText.map((info, idx) => {
    return (
      <li key={`about-darryl-${idx + 1}`}
        aria-hidden={idx === aboutMeText.length - 1}
        className="text-2xl"
      >
        {info}
      </li>
    )
  })

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      console.log("dark theme enabled");
    } else {
      document.documentElement.classList.remove('dark');
      console.log("dark theme disabled");
    }
  }, [])

  return (
    <main className="flex min-h-screen max-w-screen flex-col items-center justify-center p-24 dark:bg-indigo-950">
      <div className="absolute justify-self-end">
        <button className="size-1 border border-black"></button>
      </div>
      <div id="splash-container"
        className="flex-1 max-h-96 w-full flex flex-col items-center justify-between text-center overflow-x-hidden object-contain">
        <div id="intro-box"
          className="w-min">
          <h1 className="text-5xl my-3 whitespace-nowrap">Hello, world!</h1>
          <p className="text-lg my-1 whitespace-nowrap">My name is Darryl. </p>
        </div>
        <span id="about-me"
          className="inline-flex flex-col overflow-y-hidden h-[calc(theme(fontSize.2xl)*theme(lineHeight.tight))]">
          <ul id="block"
            className="h-8 list-none mx-2 relative sm:max-w-sm md:max-w-md about-me-scroller animate-scroll-up [&_li]:block">
            {aboutMe}
          </ul>
        </span>
        <div>
          <p className="text-lg">You can learn more below.</p>
        </div>
        <div id="buttons-container"
          className="w-5/6 md:w-3/4 lg:w-1/2 flex flex-row justify-between">
          <button id="software-engineering-profile-button">
            <Image className="transition ease-in-out delay-75 hover:translate-y-1 hover:scale-105" src={sweIcon} width={125} alt="software engineering icon"></Image>
          </button>
          <button>
            <Image id="music-profile-button" className="transition ease-in-out delay-75 hover:translate-y-1 hover:scale-105" src={musicIcon} width={125} alt="software engineering icon"></Image>
          </button>
        </div>
      </div>
    </main>
  );
}
