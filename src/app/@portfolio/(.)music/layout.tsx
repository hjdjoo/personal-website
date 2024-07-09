import MusicContainer from "@/app/music/_containers/MusicContainer"

export default function MusicPortfolioLayout({ children, }: { children: React.ReactNode }) {

  return (
    <MusicContainer className="max-w-screen min-h-screen flex-1 flex flex-col items-center justify-center py-12 mt-24">
      {children}
    </MusicContainer>
  )
}