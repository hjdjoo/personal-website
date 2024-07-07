import DropDisplay from "../_components/DropDisplay";

import type { Project } from "@/types/client-types/types";

interface EngineeringContainerProps {
  projects: Project[]
  children: React.ReactNode
}

export default async function EngineeringContainer(props: EngineeringContainerProps) {

  const { projects } = props;

  const ProjectDisplays = projects.length ? projects.map((project) => {
    return (
      <DropDisplay
        key={`${project.projectName!}-display`}
        projectName={project.projectName} projectDescription={project.projectDescription} projectData={project.projectData} techStack={project.techStack} githubRepo={project.githubRepo} />
    )
  }) : [];

  return (
    <div id="engineering-page"
      className="h-3/4 w-full max-w-screen
      md:max-w-[1080px] lg:max-w-[1200px] flex flex-col items-center justify-center py-12 lg:px-12">
      {props.children}
      {ProjectDisplays}
    </div>
  )

}