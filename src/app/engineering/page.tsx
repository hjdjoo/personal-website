import DropDisplay from "@/app/_components/DropDisplay";
import { gearIconSvg } from "@/lib/icons";

const defaultData = [
  {
    projectName: "Beers Flower Shop",
    projectDescription: "E-commerce and business management application",
    projectData: []
  },
  {
    projectName: "Kmon",
    projectDescription: "Monitoring and alerting for K-Raft mode Kafka clusters",
    projectData: []
  },
  {
    projectName: "Swoop NYC",
    projectDescription: "Iteration on a NYC stooping project",
    projectData: []
  },
  {
    projectName: "Systemazing",
    projectDescription: "AI-powered system design analysis tool",
    projectData: [],
  }
]

export default function EngineeringPage() {

  const Projects = defaultData.map(project => {
    return (
      <>
        <DropDisplay
          key={`${project.projectName}-display`}
          projectName={project.projectName} projectDescription={project.projectDescription} />
      </>)
  })

  const gearIcon = gearIconSvg();

  return (
    <div id="engineering-page"
      className="h-3/4 w-full max-w-screen flex flex-col items-center justify-center py-12 lg:px-12">
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