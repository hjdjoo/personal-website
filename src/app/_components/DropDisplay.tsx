"use client";

import { useState } from "react";


interface DropDisplayProps {
  projectName: string,
  projectDescription: string,

}

export default function DropDisplay(props: DropDisplayProps) {

  const { projectName, projectDescription } = props;

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div id={`${projectName}-drop-display`}
        className="relative mt-8 w-full h-12 flex flex-col justify-center px-6 bg-gradient-to-r from-30% from-slate-300 via-red-100 to-orange-100 dark:bg-gradient-to-r dark:from-30% dark:from-sky-950 dark:via-cyan-900 dark:to-slate-600 "
        onClick={() => {
          console.log("click!")
          setIsOpen(!isOpen)
        }}>
        <div id={`${projectName}-header`}
          className={`flex flex-row w-full`}
        >
          <span className="text-xl font-semibold underline justify-self-start">
            {projectName}:
          </span>
          <span className="text-lg ml-3 font-light italic self-start">
            {projectDescription}
          </span>
          <span className="ml-auto">
            {">"}
          </span>
        </div>
      </div>
      <div className={`w-full border border-white border-solid ${isOpen ? "scale-y-200" : "scale-y-0"}`}>

      </div>
    </>
  )
}