/**
 * @interface NavProps
 * @property {string} className - 클래스명
 * @property {React.ReactNode} children - 자식 엘리먼트
 */
interface NavProps {
  className?: string
  children?: React.ReactNode
}

/**
 * @function NavComponent
 * @description 메인 네비게이션 엘리먼트
 * @returns {JSX.Element}
 */
export default function NavComponent(props: NavProps): JSX.Element {
  return <>{props.children}</>
}
