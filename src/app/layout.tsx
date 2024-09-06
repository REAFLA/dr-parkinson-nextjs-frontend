import NextProgress from "@/components/loader/next-progress"
import "@/styles/globals.css"
import { cn } from "@/utils/utils"
import { Metadata, Viewport } from "next"
import { Roboto } from "next/font/google"
import { Toaster } from "react-hot-toast"
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/thumbs"
import NextThemesProvider from "./provider"

// https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
// https://velog.io/@jiaegong/Next.js-13%EB%B2%84%EC%A0%84%EC%97%90%EC%84%9C-%EB%A1%9C%EC%BB%AC-%ED%8F%B0%ED%8A%B8-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0
const fontSans = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
})

/**
 * @name metadata
 * @description 메타데이터
 * @type {Metadata}
 * @property {string} title 제목
 * @property {string} description 설명
 */
export const metadata: Metadata = {
  title: {
    default:
      "닥터파킨슨 - 파킨슨 병에 대한 정보와 건강관리를 위한 다양한 기능 제공",
    template: `%s - 파킨슨 병에 대한 정보와 건강관리를 위한 다양한 기능 제공`,
  },
  description:
    "닥터파킨슨 앱은 파킨슨병 환자를 위한 건강 관리, 미션 관리, 약물 검색, 자가진단, 운동 기록, 투약 관리, 사회복지제도 정보를 제공합니다.",
  applicationName: process.env.NEXT_PUBLIC_ENV_APPLICATION_SHORT_NAME,
  // themeColor: [
  //   { media: "(prefers-color-scheme: light)", color: "white" },
  //   { media: "(prefers-color-scheme: dark)", color: "black" },
  // ],
  icons: {
    icon: `${process.env.NEXT_PUBLIC_ENV_CLOUD_FRONT_URL}/assets/favicon.ico`,
    // shortcut: "/favicon-16x16.png",
    // apple: "/apple-touch-icon.png",
  },
}

/**
 * @name viewport
 * @description 뷰포트
 * @type {Viewport}
 * @property {null | string | ThemeColorDescriptor | ThemeColorDescriptor[]} themeColor 테마 색상
 * @property {null | ColorSchemeEnum} colorScheme 색상 체계
 */
export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
}

/**
 * @function Layout
 * @description 레이아웃
 * @returns {JSX.Element}
 */
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>): JSX.Element {
  return (
    <html lang="ko" className="light" suppressHydrationWarning>
      <body
        className={cn(
          "flex flex-col font-sans min-h-screen bg-background antialiased",
          fontSans.variable,
        )}
        suppressHydrationWarning
      >
        <NextThemesProvider>
          <NextProgress />
          {children}
        </NextThemesProvider>

        {/* 토스트 */}
        <Toaster
          position="top-right"
          reverseOrder={false}
          containerStyle={{ zIndex: 99999 }}
          toastOptions={{
            duration: 3000,
            style: {
              fontFamily: "Roboto, sans-serif",
              fontWeight: 400,
              color: "#fff",
              paddingLeft: "15px",
              paddingRight: "15px",
              maxWidth: 700,
              borderRadius: "7.5px",
              background: "#333",
            },
          }}
        />
      </body>
    </html>
  )
}
