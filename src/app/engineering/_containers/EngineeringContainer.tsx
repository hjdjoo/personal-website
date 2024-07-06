import DropDisplay from "../_components/DropDisplay";

import getProjectData from "@/utils/supabase/clientActions/getProjectData";

export default async function EngineeringContainer({ children }: { children: React.ReactNode }) {

  const { data, error } = await getProjectData("engineering");

  if (error) {
    throw new Error("Error while querying db")
  }

  const beersFlowers = data.filter((project) => {
    return project.projectName === "Beers Flower Shop"
  });

  const otherProjects = data.filter((project => { return project.projectName !== "Beers Flower Shop" }))

  const projects = beersFlowers.concat(otherProjects);

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
      {children}
      {ProjectDisplays}
    </div>
  )

}