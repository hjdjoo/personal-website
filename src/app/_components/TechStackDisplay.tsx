
interface TechStackDisplayProps {
  className: string,
  projectName: string,
  techStack: string[],
}


export default function TechStackDisplay(props: TechStackDisplayProps) {

  const { className, projectName, techStack } = props;

  const techDisplays = techStack.map((tech, idx) => {
    return <p key={`${projectName}-tech-${idx + 1}`}
      className="px-2"
    >{tech}</p>
  })

  return (
    <div className={`${className} transition-colors bg-slate-500/30 duration-300 `}>
      {techDisplays}
    </div>
  )
}