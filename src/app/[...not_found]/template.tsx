/**
 * @function Template
 * @description 템플릿 컴포넌트
 * @description `Header`, `Footer`, `Nav`, `Aside` 등을 포함하는 템플릿 입니다.
 * @returns {JSX.Element}
 */
export default function Template({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <>
      <main className="flex-grow">{children}</main>
    </>
  )
}
