import AlbumsPage from "@/app/music/albums/page"

export default async function PortfolioDiscogSlot() {

  console.log("portfolio discog slot")

  return (
    <div id="discography-slot"
      className="w-full"
      hidden={true}>
      <AlbumsPage />
    </div>
  )
}