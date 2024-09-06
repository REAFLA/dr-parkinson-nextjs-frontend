import { match } from "@formatjs/intl-localematcher"
import Negotiator from "negotiator"
import { NextFetchEvent, NextRequest, NextResponse } from "next/server"

/**
 * @name config
 * @description 미들웨어 설정
 * @property {string[]} matcher 미들웨어 경로
 * @see https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
 */
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}

const headers = { "accept-language": "ko-KR,ko;q=0.5" }
const languages = new Negotiator({ headers }).languages()
const locales = ["ko-KR", "en-US"]
const defaultLocale = "ko-KR"

match(languages, locales, defaultLocale)

/**
 * @function middleware
 * @description 미들웨어 함수
 * @param {NextRequest} request
 * @param {NextResponse} response
 * @param {NextFetchEvent} event
 * @returns {Promise<NextResponse>}
 * @see https://nextjs.org/docs/app/building-your-application/routing/middleware
 * @see https://nextjs.org/docs/app/building-your-application/routing/middleware#using-cookies
 */
export default async function middleware(
  request: NextRequest,
  response: NextResponse,
  event: NextFetchEvent,
): Promise<NextResponse> {
  return NextResponse.next()
}
