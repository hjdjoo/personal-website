import { musicIconSvg, gearIconSvg } from "@/lib/icons"
import Image from "next/image";

interface PortfolioHeaderProps {
  category: "engineering" | "music"
}

export default function PortfolioHeader(props: PortfolioHeaderProps) {

  const { category } = props;

  const logos = [
    { name: "html", src: "./logos/html.svg" },
    { name: "css", src: "./logos/css.svg" },
    { name: "javascript", src: "./logos/javascript.svg" },
    { name: "typescript", src: "./logos/typescript.svg" },
    { name: "react", src: "./logos/react.svg" },
    { name: "nodejs", src: "./logos/node.svg" },
    { name: "postgresql", src: "./logos/psql.svg" },
    { name: "nextjs", src: "./logos/next.svg" },
    { name: "vercel", src: "./logos/vercel.svg" },
    { name: "tailwindcss", src: "./logos/tailwind.svg" },
    { name: "aws", src: "./logos/aws.svg" },
    { name: "mongodb", src: "./logos/mongodb.svg" },
    { name: "docker", src: "./logos/docker.svg" },
  ]

  const musicIcon = musicIconSvg();
  const gearIcon = gearIconSvg();

  return (
    <div id="portfolio-header" className="w-full">
      {category === "engineering" && (
        <div id="tech-logos" className="w-full mt-8 mb-4 flex flex-wrap justify-center items-center">
          {logos.map((logo, idx) => {
            return (
              <div key={`tech-logo-${idx + 1}`}
                className={`size-12 m-4 relative grow-1`}>
                <Image
                  className=""
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  objectPosition="contain"
                  fill
                />
              </div>
            )
          })}
        </div>
      )}
      <div id="engineering-page-title"
        className="flex flex-col items-center my-4">
        <div className="flex">
          <div className="size-6 mr-4 my-auto">
            {category === "engineering" && gearIcon}
            {category === "music" && musicIcon}
          </div>
          <h1 className="text-2xl font-bold my-auto">
            {category === "engineering" && "Engineering Projects"}
            {category === "music" && "Music"}
          </h1>
        </div>
      </div>
    </div>

  )

}