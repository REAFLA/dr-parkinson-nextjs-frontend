/**
 * @interface AsideProps
 * @property {string} className - 클래스명
 * @property {React.ReactNode} children - 자식 엘리먼트
 */
interface AsideProps {
  className?: string
  children?: React.ReactNode
}

/**
 * @function AsideComponent
 * @description 메인 어사이드 엘리먼트
 * @returns {JSX.Element}
 */
export default function AsideComponent(props: AsideProps): JSX.Element {
  return <>{props.children}</>
}
