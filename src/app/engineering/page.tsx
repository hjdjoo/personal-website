import DropDisplay from "@/app/_components/DropDisplay";
import { gearIconSvg } from "@/lib/icons";
import type { Project } from "@/types/client-types/types";


const defaultData: Array<Project | undefined> = [
  {
    projectName: "Beers Flower Shop",
    inProduction: false,
    projectDescription: "E-commerce and business management application",
    projectData: [
      {
        fileName: "",
        fileType: "",
        fileSrc: "",
        description: "",
        altText: "",
      },
      {
        fileName: "",
        fileType: "",
        fileSrc: "",
        description: "",
        altText: "",
      },
    ]
  },
  {
    projectName: "Kmon",
    inProduction: true,
    projectDescription: "Monitoring for K-Raft mode Kafka clusters",
    projectData: [
      {
        fileName: "",
        fileType: "",
        fileSrc: "",
        description: "",
        altText: "",
      },
      {
        fileName: "",
        fileType: "",
        fileSrc: "",
        description: "",
        altText: "",
      },
    ]
  },
  {
    projectName: "Swoop NYC",
    inProduction: true,
    projectDescription: "Iteration on a NYC stooping project",
    projectData: [
      {
        fileName: "",
        fileType: "",
        fileSrc: "",
        description: "",
        altText: "",
      },
    ]
  },
  {
    projectName: "Systemazing",
    inProduction: false,
    projectDescription: "AI-powered system design analysis tool",
    projectData: [
      {
        fileName: "",
        fileType: "",
        fileSrc: "",
        description: "",
        altText: "",
      },
    ],
  }
]

export default function EngineeringPage() {

  const Projects = defaultData.length ? defaultData.map(project => {
    if (!project) return;
    return (
      <>
        <DropDisplay
          key={`${project.projectName}-display`}
          projectName={project.projectName} projectDescription={project.projectDescription} />
      </>)
  }) : [];

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