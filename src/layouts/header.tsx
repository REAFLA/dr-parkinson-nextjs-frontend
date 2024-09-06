/**
 * @interface Props
 * @property {string} className - 클래스명
 */
interface Props {
  className?: string
}

/**
 * @function HeaderComponent
 * @description 헤더 컴포넌트
 * @returns {JSX.Element}
 */
export default function HeaderComponent(props: Props): JSX.Element {
  return (
    <>
      <header
        className={`${props.className} top-0 flex flex-col items-center w-full min-w-[1200px] h-[60px] z-[998]`}
      >
        <div className="flex items-center justify-between px-[20px] w-full max-w-[1200px] h-[60px]"></div>
      </header>
    </>
  )
}
