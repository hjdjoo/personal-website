import { useState, useEffect } from "react";

import DropDisplay from "@/app/_components/DropDisplay";

import { gearIconSvg } from "@/lib/icons";
import type { Project } from "@/types/client-types/types";

// import { createClient } from "@/utils/supabase/client";
import getProjectData from "@/utils/supabase/clientActions/getProjectData";


// const defaultData: Array<Project | undefined> = [
//   {
//     projectName: "Beers Flower Shop",
//     projectDescription: "E-commerce and business management application",
//     projectData: [
//       {
//         fileType: "",
//         src: "",
//         fileDescription: "",
//         altText: "",
//       },
//       {
//         fileType: "",
//         src: "",
//         fileDescription: "",
//         altText: "",
//       },
//     ]
//   },
//   {
//     projectName: "Kmon",
//     projectDescription: "Monitoring for K-Raft mode Kafka clusters",
//     projectData: [
//       {
//         fileType: "",
//         src: "",
//         fileDescription: "",
//         altText: "",
//       },
//       {
//         fileType: "",
//         src: "",
//         fileDescription: "",
//         altText: "",
//       },
//     ]
//   },
//   {
//     projectName: "Swoop NYC",
//     projectDescription: "Iteration on a NYC stooping project",
//     projectData: [
//       {
//         fileType: "",
//         src: "",
//         fileDescription: "",
//         altText: "",
//       },
//     ]
//   },
//   {
//     projectName: "Systemazing",
//     projectDescription: "AI-powered system design analysis tool",
//     projectData: [
//       {
//         fileType: "",
//         src: "",
//         fileDescription: "",
//         altText: "",
//       },
//     ],
//   }
// ]

export default function EngineeringPage() {

  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {

    (async () => {
      const { data, error } = await getProjectData("engineering")
      setProjects([...data])
    })();

  }, [])

  const Projects = projects.length ? projects.map((project) => {
    return (

      <DropDisplay
        key={`${project.projectName!}-display`}
        projectName={project.projectName} projectDescription={project.projectDescription} projectData={project.projectData} />
    )
  }) : [];

  const gearIcon = gearIconSvg();

  return (
    <div id="engineering-page"
      className="h-3/4 w-full max-w-screen
      md:max-w-[1080px] lg:max-w-[1200px] flex flex-col items-center justify-center py-12 lg:px-12">
      <div id="engineering-page-title"
        className="flex my-8">
        <h1 className="text-2xl font-bold my-auto">
          Engineering Projects
        </h1>
        <div className="size-10 ml-4 my-auto">
          {gearIcon}
        </div>
      </div>
      <div id="project-display"
        className="h-auto w-5/6 flex flex-col justify-start items-center">
        {Projects}
      </div>
    </div>
  )
}