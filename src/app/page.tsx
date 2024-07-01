"use client";

import { useState, useEffect, useRef } from "react";
// import Link from "next/link";

import EngineeringPage from "./engineering/page";
import MusicPage from "./music/page";

import TechStackDisplay from "./_components/TechStackDisplay";
import { musicIconSvg, sweIconSvg } from "@/lib/icons";

const techStack = ["NextJS", "React", "TypeScript", "TailwindCSS", "PostgreSQL"]

export default function Home() {

  const portfolio = useRef<HTMLDivElement>(null)
  const [showPortfolio, setShowPortfolio] = useState<"engineering" | "music" | undefined>();
  const [showTechStack, setShowTechStack] = useState<boolean>(false);
  const [techStackOpen, setTechStackOpen] = useState<boolean>(false);

  useEffect(() => {
    if (!showTechStack) return;
    setTimeout(() => {
      setTechStackOpen(showTechStack)
    }, 100)

  }, [showTechStack])

  useEffect(() => {

    scrollToPortfolio();

  }, [showPortfolio])

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

  function scrollToPortfolio() {

    if (!portfolio.current) return;

    const position = portfolio.current?.getBoundingClientRect();

    const { top } = position!

    setTimeout(() => {
      document.documentElement.scrollTo({ left: 0, top: top, behavior: "smooth" })
    }, 100)

  }

  function backToTop() {
    setTimeout(() => {
      scrollTo({ left: 0, top: 0, behavior: "smooth" })
    }, 100)
    setTimeout(() => {
      setShowPortfolio(undefined);
    }, 800)
  }


  const handleShowTechStack = () => {

    if (!showTechStack && !techStackOpen) {
      setShowTechStack(!showTechStack);
      return;
    } else if (showTechStack && techStackOpen) {
      setTechStackOpen(!techStackOpen);
      setTimeout(() => {
        setShowTechStack(!showTechStack);
      }, 300);
    };
  }


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
            <div className="flex-1 flex flex-col items-center ml-1">
              <button id="software-engineering-profile-button"
                className="size-24 sm:size-32 hover:translate-y-1 hover:scale-105 duration-100 mb-2"
                onClick={() => {
                  if (showPortfolio !== "engineering") setShowPortfolio("engineering");
                  else scrollToPortfolio()
                }}
              >
                {sweIcon}
                <p className="relative text-sm">Explore Engineering Projects</p>
              </button>
            </div>
            <div className="flex-1 flex flex-col items-center mr-4">
              <button id="music-profile-button"
                className="size-24 sm:size-32 hover:translate-y-1 hover:scale-105 duration-100 mb-2"
                onClick={() => {
                  if (showPortfolio !== "music") setShowPortfolio("music");
                  else scrollToPortfolio();
                }}>
                {musicIcon}
                <p className="text-sm">Explore Music Projects</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      {showPortfolio &&
        <div
          ref={portfolio}
          id="portfolio"
          className={`flex flex-col w-screen items-center ${showPortfolio ? "min-h-screen" : ""}`}
        >
          {showPortfolio === "engineering" && <EngineeringPage />}
          {showPortfolio === "music" && <MusicPage />}
          <button id="close-portfolio"
            className="relative w-24 mb-4 underline"
            onClick={() => {
              backToTop();
            }}
          >
            Back to Top
          </button>
          <div id="portfolio-info-div"
            className="w-full md:max-w-[1080px] lg:max-w-[1200px]h-fit mt-12 flex flex-col items-center">
            <div
              className="w-5/6 h-fit px-2 py-2 bg-gradient-to-r from-sky-400/15 to-sky-300/15 dark:bg-gradient-to-r dark:from-sky-950 dark:to-indigo-900 flex justify-around items-center ">
              <div id="portfolio-tech-stack"
                className="text-sm sm:text-md  hover:cursor-pointer transition duration-300  hover:translate-y-[2px]"
                onClick={handleShowTechStack}
              >
                View Portfolio Tech Stack {">"}
              </div>
              <div id="portfolio-github-link"
                className="text-sm sm:text-md  transition duration-300 hover:translate-y-[2px]">
                <a href="https://github.com/hjdjoo/personal-website">Portfolio Github Repo {">"}</a>
              </div>
            </div>
            <div id="portfolio-tech-stack-list"
              className="z-20 mb-40 4min-h-full w-5/6 flex flex-col">
              {showTechStack &&
                <TechStackDisplay
                  className={`z-50 max-w-full flex-1 flex justify-center py-1 flex-wrap bg-slate-400/15 italic text-xs transition-opacity ease-in duration-100 ${showTechStack ? "" : "hidden"} ${techStackOpen ? "opacity-100" : "opacity-0"}`}
                  projectName="portfolio" techStack={techStack} />}
            </div>
          </div>
        </div>
      }
    </>
  );
}
