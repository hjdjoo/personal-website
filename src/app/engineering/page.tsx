import DropDisplay from "@/app/_components/DropDisplay";

const defaultData = [
  {
    projectName: "Beers Flower Shop",
    projectDescription: "E-commerce and business management application",
    images: []
  },
  {
    projectName: "Kmon",
    projectDescription: "Monitoring and alerting for KRaft clusters",
    images: []
  },
  {
    projectName: "Swoop NYC",
    projectDescription: "Iteration on a NYC stooping project",
  },
  {
    projectName: "Systemazing",
    projectDescription: "AI-powered system design analysis tool"
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

  return (
    <main className="flex min-h-screen max-w-screen flex-col items-center justify-center py-12 px-24">
      <h1 className="text-2xl my-10">Engineering Projects:</h1>
      <div className="w-5/6 h-[600px] flex flex-col justify-start items-center">
        {Projects}
      </div>
    </main>
  )
}