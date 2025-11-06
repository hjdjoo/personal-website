import { useState, useEffect, useRef, forwardRef, ForwardedRef } from "react"

import TechStackDisplay from "../_components/TechStackDisplay";

/**
TechStackDisplayProps {
  className: string,
  projectName: string,
  techStack: string[],
}
 */

interface TechStackProps {
  projectName: string,
  techStack: string[]
  githubRepo: string
}

export default function TechStackContainer(props: TechStackProps) {

  const { projectName, githubRepo, techStack } = props;

  const techStackDisplay = useRef<HTMLDivElement>(null);
  const [showTechStack, setShowTechStack] = useState<boolean>(false);
  const [techStackOpen, setTechStackOpen] = useState<boolean>(false);

  useEffect(() => {
    if (!showTechStack) return;
    setTimeout(() => {
      setTechStackOpen(showTechStack)
    }, 100)

  }, [showTechStack])

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
    <div id={`${projectName}-tech-stack-box`}
      className="w-full text-slate-950 dark:text-slate-200 rounded-b-md">
      <div
        className="w-full h-10 bg-indigo-300/30 dark:bg-slate-800 flex justify-around items-center rounded-b-md">
        <div id={`${projectName}-tech-stack-toggle`}
          className="text-xs sm:text-sm md:text-md hover:cursor-pointer transition duration-300 hover:translate-y-[2px]"
          onClick={handleShowTechStack}
        >
          {projectName === "Darryl's Personal Website" ? "View Portfolio Tech Stack >" : "View Tech Stack >"}
        </div>
        <div id={`${projectName}-github-link`} className="text-xs sm:text-sm md:text-md transition duration-300 hover:translate-y-[2px]">
          <a href={`${githubRepo}`}>Visit Github Repo {">"}</a>
        </div>
      </div>
      <div id={`${projectName}-tech-stack-list`}
        className="z-20 min-h-full flex flex-col"
        ref={techStackDisplay}
      >
        {showTechStack &&
          <TechStackDisplay
            className={`z-50 max-w-full flex-1 flex justify-center flex-wrap py-1 italic text-sm bg-slate-300/15 transition-opacity ease-in duration-100 ${showTechStack ? "" : "hidden"} ${techStackOpen ? "opacity-100" : "opacity-0"}`}
            projectName={projectName} techStack={techStack} />}
      </div>
    </div >
  );
}