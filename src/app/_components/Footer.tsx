"use client"
import Link from "next/link"
import TechStackContainer from "../engineering/_containers/TechStackContainer"

const portfolioTechStack = ["NextJS", "React", "TypeScript", "TailwindCSS", "PostgreSQL"]

const portfolioGithub = "https://www.github.com/hjdjoo/personal-website"

export default function Footer() {

  return (
    <div id="footer-container"
      className="bottom-0 pb-12 text-slate-900 bg-slate-200 dark:text-slate-200  dark:bg-indigo-950 w-full flex flex-col items-center">
      <div id="back-to-top-link"
        className="my-8 underline"
      >
        <Link href="/">Back to Top</Link>
      </div>
      <div id="contact-box"
        className="my-10"
      >
        <a id="contact-me"
          href="mailto:joo.darryl@gmail.com"
          className="underline"
        >Contact Me {">"}</a>
      </div>
      <div id="portfolio-tech-stack-div"
        className="w-full">
        <TechStackContainer projectName="Darryl's Personal Website" techStack={portfolioTechStack} githubRepo={portfolioGithub} />
      </div>
    </div>
  )

}