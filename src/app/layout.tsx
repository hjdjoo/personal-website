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
            {children}
          </DarkModeProvider>
        </body>
      </html>
    </>
  );
}
