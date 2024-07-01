import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import DarkModeProvider from "@/contexts/DarkMode";
import { headers } from "next/headers";
import { isMobile } from "@/utils/actions/isMobile";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Darryl Joo",
  description: "Darryl's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const userAgent = headers().get("user-agent") || "";
  const mobileCheck = isMobile(userAgent);

  return (
    <>
      <head>
        <script id="dark-mode-script" dangerouslySetInnerHTML={{
          __html: `if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {  document.documentElement.classList.add('dark'); } else { document.documentElement.classList.remove('dark');}`
        }}>
        </script>
      </head>
      <html lang="en" suppressHydrationWarning={true}>
        <body className={dmSans.className}>
          <DarkModeProvider>
            <Navbar />
            <main id="main" className={`flex min-h-fit max-w-screen ${mobileCheck ? "pt-20" : ""} flex-col items-center justify-center px-6 md:px-24 dark:text-stone-100 bg-fixed bg-gradient-to-t from-slate-200 to-slate-100 dark:bg-gradient-to-t dark:from-indigo-950 from-25% dark:to-sky-800`}>
              {children}
            </main>
            <Footer />
          </DarkModeProvider>
        </body>
      </html>
    </>
  );
}
