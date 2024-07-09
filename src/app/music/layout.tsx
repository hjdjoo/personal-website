export default function MusicLayout({ children, timeline, discography }: { children: React.ReactNode, timeline: React.ReactNode, discography: React.ReactNode }) {

  return (
    <>
      {children}
      {timeline}
      {discography}
    </>
  )

}