"use server"

import FooterComponent from "@/layouts/footer"

/**
 * @function Template
 * @description 템플릿 컴포넌트
 * @description `Header`, `Footer`, `Nav`, `Aside` 등을 포함하는 템플릿 입니다.
 * @returns {Promise<JSX.Element>}
 */
export default async function Template({
  children,
  test,
}: {
  children: React.ReactNode
  test: string
}): Promise<JSX.Element> {
  return (
    <>
      {/* <HeaderComponent /> */}
      <main className="flex-grow w-full h-full">{children}</main>
      <FooterComponent />
    </>
  )
}
