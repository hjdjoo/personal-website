"use client"

import Link from "next/link";

import { musicIconSvg, sweIconSvg } from "@/lib/icons";

export default function Splash() {

  const aboutMeText = ["I'm a software engineer.", "I'm an audio engineer.", "I'm a songwriter.", "I'm an educator.", "I'm a science lover.", "I'm a philosphy nerd.", "I'm a history enthusiast.", "I'm a software engineer."]

  const aboutMe = aboutMeText.map((info, idx) => {
    return (
      <li key={`about-darryl-${idx + 1}`}
        aria-hidden={idx === aboutMeText.length - 1}
        className="w-full text-xl"
      >
        {info}
      </li>
    )
  })

  const musicIcon = musicIconSvg();
  const sweIcon = sweIconSvg();

  return (
    <>
      <div id="splash-container" className="h-screen w-full py-12 pb-12 flex flex-col justify-center items-center">
        <div id="content-container"
          className="flex-1 min-h-[550px] max-h-[550px] w-full flex flex-col items-center justify-between text-center overflow-x-none object-contain">
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
          <div id="download-resume"
            className="transition duration-300 hover:translate-y-1"
          >
            <a href="/darryl_joo_resume.pdf" download
              className="font-bold bg-slate-300 dark:bg-slate-500 px-2 py-2 rounded-lg transition duration-200 hover:bg-slate-600 hover:dark:bg-slate-700 hover:text-slate-200">
              Download Resume
            </a>
          </div>
          <div>
            <p className="text-lg">You can learn more below.</p>
          </div>
          <div id="buttons-container"
            className="w-full md:w-3/4 lg:w-1/2 mb-20 flex flex-row justify-between">
            <div id="engineering-portfolio-link-div"
              className="flex-1 flex flex-col min-h-fit items-center mx-2">
              <Link
                className="border-2 border-current flex-1 flex flex-col items-center px-2 py-2 rounded-lg"
                href="/engineering" scroll={false}>
                <div id="software-engineering-icon"
                  className="size-20 sm:size-32 hover:translate-y-1 hover:scale-105 duration-100 mb-2"
                >
                  {sweIcon}
                </div>
                <p className="text-xs">Explore Engineering Projects</p>
              </Link>
            </div>
            <div id="music-portfolio-link-div"
              className="flex-1 flex flex-col min-h-fit items-center mx-2">
              <Link
                className="border-2 border-current w-full flex-1 flex flex-col items-center px-2 py-2 rounded-lg"
                href="/music" scroll={false}>
                <div id="music-profile-div"
                  className="size-20 sm:size-32 hover:translate-y-1 hover:scale-105 duration-100 mb-2"
                >
                  {musicIcon}

                </div>
                <p className="text-xs">Explore Music Projects</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )

}