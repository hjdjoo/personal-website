import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import DarkModeProvider from "@/contexts/DarkMode";

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
            <main className="flex min-h-fit max-w-screen flex-col items-center justify-center px-24 dark:text-stone-100 bg-fixed bg-gradient-to-t from-slate-200 to-slate-100 dark:bg-gradient-to-t dark:from-indigo-950 from-25% dark:to-sky-800">
              {children}
            </main>
          </DarkModeProvider>
        </body>
      </html>
    </>
  );
}
