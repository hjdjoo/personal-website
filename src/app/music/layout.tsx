import MusicPage from "./page"
import MusicContainer from "./_containers/MusicContainer"

export default function MusicLayout({ children, story }: { children: React.ReactNode, story: React.ReactNode }) {

  console.log("hit layout in music")

  return (
    <MusicContainer className="max-w-screen min-h-screen flex-1 flex flex-col items-center justify-center py-12 mt-24">
      {children}
      {story}
    </MusicContainer>
  )

}