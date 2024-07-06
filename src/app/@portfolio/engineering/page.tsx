"use client"

import { useState, useEffect } from "react";

// import DropDisplay from "@/app/engineering/_components/DropDisplay";
import DropDisplay from "./_components/DropDisplay";

import { gearIconSvg } from "@/lib/icons";
import type { Project } from "@/types/client-types/types";

import getProjectData from "@/utils/supabase/clientActions/getProjectData";


export default function EngineeringPage() {

  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {

    (async () => {
      try {
        const { data, error } = await getProjectData("engineering");

        if (error) {
          throw new Error("Error while querying db")
        }

        const beersFlowers = data.filter((project) => {
          return project.projectName === "Beers Flower Shop"
        });

        const otherProjects = data.filter((project => { return project.projectName !== "Beers Flower Shop" }))

        setProjects([...beersFlowers, ...otherProjects]);
      }
      catch (e) {
        console.error(e);
      }
    })();

  }, [])

  const Projects = projects.length ? projects.map((project) => {
    return (
      <DropDisplay
        key={`${project.projectName!}-display`}
        projectName={project.projectName} projectDescription={project.projectDescription} projectData={project.projectData} techStack={project.techStack} githubRepo={project.githubRepo} />
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