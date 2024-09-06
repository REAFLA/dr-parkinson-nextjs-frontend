/**
 * @interface Props
 * @property {string} className - 클래스명
 */
interface Props {
  className?: string
}

/**
 * @function GlobalRequriedComponent
 * @description 전역 필수 컴포넌트
 * @returns {JSX.Element}
 */

export default function GlobalRequriedComponent(props: Props): JSX.Element {
  return (
    <>
      <span className={`${props.className || ""} text-red-600`}>*</span>
    </>
  )
}
