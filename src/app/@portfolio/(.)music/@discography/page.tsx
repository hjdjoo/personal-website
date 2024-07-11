import AlbumsPage from "@/app/music/albums/page"

export default async function PortfolioDiscogSlot() {

  return (
    <div id="discography-slot"
      className="w-full"
      hidden={true}>
      <AlbumsPage />
    </div>
  )
}