interface TechStackDisplayProps {
  className: string,
  projectName: string,
  techStack: string[],
}

export default function TechStackDisplay(props: TechStackDisplayProps) {

  const { className, projectName, techStack } = props;

  const techNames = techStack.map((tech, idx) => {
    return <p key={`${projectName}-tech-${idx + 1}`}
      className="px-2"
    >{tech}</p>
  })

  return (
    <div className={`${className} `}>
      {techNames}
    </div>
  )
}