"use client"

import { useRef, useState, useContext } from "react"
import { lightIconSvg, darkIconSvg, homeIconSvg, } from "@/lib/icons";
import Link from "next/link";

import { DarkModeContext } from "@/contexts/DarkMode";

export default function Navbar() {

  const lightIcon = lightIconSvg();
  const darkIcon = darkIconSvg();

  const darkModeButton = useRef<HTMLDivElement>(null);
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext)

  const [showHome, setShowHome] = useState<boolean>(false);

  const toggleModeButton = () => {
    if (!darkMode) {
      darkModeButton.current?.classList.remove("bg-yellow-500", "-translate-x-2");
      darkModeButton.current?.classList.add("bg-gray-700", "translate-x-full");
      localStorage.setItem("theme", "dark")

    } else {
      darkModeButton.current?.classList.remove("bg-gray-700", "translate-x-full");
      darkModeButton.current?.classList.add("bg-yellow-500", "-translate-x-2");
      localStorage.setItem("theme", "light")
    };
    toggleDarkMode();

  }

  const homeIcon = homeIconSvg();

  return (
    <div id="navbar"
      className="absolute w-full">
      <div className="relative size-10 md:size-12 left-5 top-5 dark:text-stone-100">
        <button className="w-full" onClick={() => setShowHome(!showHome)}>
          {homeIcon}
        </button>
        {showHome && <>
          <div className="absolute w-64 left-16 top-0 bg-slate-500/50 flex justify-center">
            <p className="text-sm">
              Home is just, like, a state of mind, man...
            </p>
          </div>
        </>}
      </div>
      <div id="dark-mode-toggle-box"
        className="absolute right-8 md:right-10 lg:right-14 top-6 w-8 h-4">
        <button className="relative w-8 h-4 md:w-12 md:h-6 lg:w-16 lg:h-8 rounded-full bg-slate-200 dark:bg-slate-500 flex items-center transition duration-300 focus:outline-none shadow"
          onClick={toggleModeButton}>
          <div id="toggle-switch"
            className={`size-6 md:size-8 lg:size-10 relative rounded-full p-1 text-slate-100 transition duration-500 transform ${darkMode ? "bg-blue-950 translate-x-full" : "bg-yellow-500 -translate-x-2"}`}
            ref={darkModeButton}>
            {darkMode ? darkIcon : lightIcon}
          </div>
        </button>
      </div>
    </div>
  )


}