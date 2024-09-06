/**
 * @interface ISVG
 * @description SVG 인터페이스
 * @property {string} className - 클래스명
 * @property {string} fill - 색상
 * @property {number} width - 너비
 * @property {number} height - 높이
 * @property {() => void} onClick - 클릭 이벤트
 */
export interface ISVG {
  /**
   * @property {string} className - 클래스명
   */
  className?: string
  /**
   * @property {string} fill - 색상
   */
  fill?: string
  /**
   * @property {number} width - 너비
   */
  width: number
  /**
   * @property {number} height - 높이
   */
  height: number
  /**
   * @property {() => void} onClick - 클릭 이벤트
   */
  onClick?: () => void
}
