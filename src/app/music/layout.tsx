export default function MusicLayout({ children, album }: { children: React.ReactNode, album: React.ReactNode }) {

  return (
    <>
      {children}
      {album}
    </>
  )

}