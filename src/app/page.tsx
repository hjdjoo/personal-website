"use client"

import { useState, useEffect, useRef } from "react";

import Image from "next/image";
import Link from "next/link";

import darkIcon from "../../public/dark-icon.svg"
import lightIcon from "../../public/light-icon.svg"

import { lightIconSvg, darkIconSvg, musicIconSvg, sweIconSvg } from "@/lib/icons";

export default function Home() {

  const darkModeButton = useRef<HTMLDivElement>(null);
  const [darkMode, setDarkMode] = useState<boolean>(false);
  // const darkModeOn = useRef<boolean>(false);

  const aboutMeText = ["I'm a software engineer.", "I'm a musician.", "I'm an audio engineer.", "I'm an educator.", "I'm a science lover.", "I'm a philosphy nerd.", "I'm a history enthusiast.", "I'm a software engineer."]

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

  const musicIcon = musicIconSvg();
  const sweIcon = sweIconSvg();
  const lightIcon = lightIconSvg();
  const darkIcon = darkIconSvg();


  useEffect(() => {
    console.log("initial useEffect: setting theme")
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [])

  useEffect(() => {
    console.log("useEffect/darkmode: setting theme")
    localStorage.setItem('theme', darkMode ? "dark" : "light")
    if (localStorage.theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode])

  const toggleDarkMode = () => {

    // if (!darkModeButton.current) return;
    if (darkMode === false) {
      darkModeButton.current?.classList.remove("bg-yellow-500", "-translate-x-2");
      darkModeButton.current?.classList.add("bg-gray-700", "translate-x-full");
      localStorage.setItem("theme", "dark")

    } else {
      darkModeButton.current?.classList.remove("bg-gray-700", "translate-x-full");
      darkModeButton.current?.classList.add("bg-yellow-500", "-translate-x-2");
      localStorage.setItem("theme", "light")
    };
    setDarkMode(!darkMode);

    console.log("toggleDarkMode/localStorage.theme", localStorage.theme)

  }

  return (
    <main className="flex min-h-screen max-w-screen flex-col items-center justify-center py-12 px-24 dark:text-stone-100 bg-gradient-to-t from-slate-200 to-slate-100 dark:bg-gradient-to-t dark:from-indigo-950 from-25% dark:to-sky-800">
      <button className="absolute right-6 top-6 w-8 h-4 md:w-12 md:h-6 lg:w-16 lg:h-8 rounded-full bg-slate-200 dark:bg-slate-500 flex items-center transition duration-300 focus:outline-none shadow"
        onClick={toggleDarkMode}>
        <div id="switch-toggle"
          className="size-6 md:size-8 lg:size-10 relative rounded-full transition duration-500 transform bg-yellow-500 -translate-x-2 p-1 text-slate-100"
          ref={darkModeButton}>
          {darkMode ? darkIcon : lightIcon}
        </div>
      </button>
      <div id="splash-container"
        className="flex-1 max-h-[500px] w-full flex flex-col items-center justify-between text-center overflow-x-hidden object-contain">
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
          <div className="flex flex-col items-center">
            <button id="software-engineering-profile-button"
              className="size-32 hover:translate-y-1 hover:scale-105 duration-100 mb-2"
            >
              <Link href="/engineering">
                {sweIcon}
              </Link>
            </button>
            <p className="relative text-sm">Explore Engineering Projects</p>
          </div>
          <div className="flex flex-col items-center">
            <button id="music-profile-button"
              className="size-32 hover:translate-y-1 hover:scale-105 duration-100 mb-2">
              <Link href="music">
                {musicIcon}
              </Link>
            </button>
            <p className="text-sm">Explore Music Projects</p>
          </div>
        </div>
      </div>
    </main>
  );
}
