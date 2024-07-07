import { musicIconSvg, gearIconSvg } from "@/lib/icons"

interface PortfolioHeaderProps {
  category: "engineering" | "music"
}

export default function PortfolioHeader(props: PortfolioHeaderProps) {

  const { category } = props;

  const musicIcon = musicIconSvg();
  const gearIcon = gearIconSvg();


  return (

    <div id="engineering-page-title"
      className="flex my-8">
      <h1 className="text-2xl font-bold my-auto">
        {category === "engineering" && "Engineering Projects"}
        {category === "music" && "Music"}
      </h1>
      <div className="size-10 ml-4 my-auto">
        {category === "engineering" && gearIcon}
        {category === "music" && musicIcon}
      </div>
    </div>

  )

}