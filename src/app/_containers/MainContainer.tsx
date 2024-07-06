"use client"
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function MainContainer({ children }: { children: React.ReactNode }) {

  const path = usePathname();

  useEffect(() => {
    const portfolio = path.replace("/", "")
    const portfolioPage = document.getElementById(`${portfolio}-page`);

    if (portfolioPage) {
      const portfolioPosition = portfolioPage.getBoundingClientRect();

      document.documentElement.scrollBy({
        top: portfolioPosition.top,
        behavior: "smooth"
      })
    }

  }, [path])

  return (
    <>
      {children}
    </>
  )
}