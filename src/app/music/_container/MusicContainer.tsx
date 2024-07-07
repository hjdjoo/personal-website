import Timeline from "../_components/Timeline";

export default function MusicContainer({ children }: { children: React.ReactNode }) {



  return (
    <div id="music-page"
      className="h-3/4 max-w-screen flex flex-col items-center justify-center py-12">
      {children}
      <Timeline />
    </div>
  )
}