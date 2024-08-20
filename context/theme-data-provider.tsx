"use client"
import { useTheme } from "next-themes"
import { ThemeProviderProps } from "next-themes/dist/types"
import { createContext, useContext, useLayoutEffect, useState } from "react"

import setGlobalColorTheme from "@/lib/theme-colors"
import { ThemeColors, ThemeColorStateParams } from "@/types/theme-types"

const ThemeContext = createContext<ThemeColorStateParams>({} as ThemeColorStateParams)

export default function ThemeDataProvider({ children }: ThemeProviderProps) {
  const getSavedThemeColor = () => {
    try {
      return (localStorage.getItem("themeColor") as ThemeColors) || "Zinc"
    } catch (error) {
      "Zinc" as ThemeColors
    }
  }

  const [themeColor, setThemeColor] = useState<ThemeColors>(getSavedThemeColor() as ThemeColors)
  const [isMounted, setIsMounted] = useState(false)
  const { theme } = useTheme()

  useLayoutEffect(() => {
    localStorage.setItem("themeColor", themeColor)
    setGlobalColorTheme(theme as "light" | "dark", themeColor)
    if (!isMounted) {
      setIsMounted(true)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [themeColor, theme])

  if (!isMounted) {
    return children
  }

  return <ThemeContext.Provider value={{ themeColor, setThemeColor }}>{children}</ThemeContext.Provider>
}

export function useThemeContext() {
  return useContext(ThemeContext)
}
