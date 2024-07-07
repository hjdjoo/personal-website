import Timeline from "../_components/Timeline";

interface MusicContainerProps {
  children: React.ReactNode,
  className: string
}

export default function MusicContainer({ children, className }: MusicContainerProps) {

  return (
    <div id="music-page"
      className={`${className}`}>
      {children}
      <Timeline />
    </div>
  )
}