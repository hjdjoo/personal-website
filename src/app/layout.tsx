import type { Metadata } from "next";
import "./globals.css";
import DarkModeProvider from "@/contexts/DarkMode";

import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import MainContainer from "./_containers/MainContainer";
// import RouteProvider from "@/contexts/RouteContext";
import { headers } from "next/headers";
import { isMobile } from "@/utils/serverActions/isMobile";

import { dmSans, vollkorn } from "@/lib/fonts";


export const metadata: Metadata = {
  title: "Darryl Joo",
  description: "Hee Je (Darryl) Joo's personal website for music and engineering",
};

export default async function RootLayout({
  children,
  portfolio,
}: Readonly<{
  children: React.ReactNode,
  portfolio: React.ReactNode,
}>) {

  const mobileCheck = await isMobile();

  return (
    <>
      <head>
        <script id="dark-mode-script" dangerouslySetInnerHTML={{
          __html: `if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {  document.documentElement.classList.add('dark'); } else { document.documentElement.classList.remove('dark');}`
        }}>
        </script>
      </head>
      <html lang="en" suppressHydrationWarning={true} style={{ scrollBehavior: "smooth" }}>
        <body className={`${dmSans.className}`}>
          <DarkModeProvider>
            <Navbar />
            <main id="main" className={`flex min-h-fit max-w-screen flex-col items-center justify-center pb-24 px-6 md:px-24 ${mobileCheck ? "pt-20" : ""} bg-fixed dark:text-stone-100 bg-gradient-to-t from-slate-200 to-slate-100 dark:bg-gradient-to-t dark:from-indigo-950 from-25% dark:to-sky-800`}>
              <MainContainer>
                {children}
                {portfolio}
              </MainContainer>
            </main>
            <Footer />
          </DarkModeProvider>
        </body>
      </html>
    </>
  );
}
