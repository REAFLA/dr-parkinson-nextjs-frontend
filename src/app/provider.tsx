"use client"

import { ThemeProvider } from "@material-tailwind/react"

/**
 * @function NextThemesProvider
 * @description 테마 프로바이더
 * @returns {JSX.Element}
 */
export default function NextThemesProvider({ children }: any): JSX.Element {
  return <ThemeProvider>{children}</ThemeProvider>
}
