

export default function MusicLayout({ children, discography }: { children: React.ReactNode, discography: React.ReactNode }) {

  return (
    <>
      {children}
      <section>
        {discography}
      </section>
    </>
  )
}