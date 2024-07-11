"use client"
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function MainContainer({ children }: { children: React.ReactNode }) {

  const path = usePathname();
  const router = useRouter();

  useEffect(() => {

    const portfolio = path.replace("/", "")
    const portfolioPage = document.getElementById(`${portfolio}-page`);

    if (portfolioPage) {
      const portfolioPosition = portfolioPage.getBoundingClientRect();

      document.documentElement.scrollBy({
        top: portfolioPosition.top,
        behavior: "smooth"
      });
    }

  }, [path, router])

  return (
    <>
      {children}
    </>
  )
}