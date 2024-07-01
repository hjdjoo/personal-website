"use client";

import { createContext, useState, useEffect, Dispatch, SetStateAction } from "react";



interface DarkModeContext {
  darkMode: boolean | undefined,
  toggleDarkMode: () => void;
}

export const DarkModeContext = createContext<DarkModeContext>({
  darkMode: undefined,
  toggleDarkMode: () => { }
})

export default function DarkModeProvider({ children }: { children: React.ReactNode }) {

  const [darkMode, setDarkMode] = useState<boolean>();

  // toggleDarkMode()
  const toggleDarkMode = () => {
    if (!darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
    setDarkMode(!darkMode)
  }

  useEffect(() => {
    if (document.documentElement.classList.contains("dark")) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, [])


  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )


}