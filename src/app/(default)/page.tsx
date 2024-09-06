"use server"

import HomePage from "./home-page"

/**
 * @function Page
 * @description 서버사이드 페이지
 * @returns {Promise<JSX.Element>}
 */
export default async function Page({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: any
}): Promise<JSX.Element> {
  return <HomePage />
}
