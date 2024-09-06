/**
 * @name RouteEnum
 * @summary 라우트 경로
 */
export enum RouteEnum {
  /**
   * @summary 홈 화면
   */
  HOME = `/`,
  /**
   * @summary 개인정보 처리방침 화면
   */
  PRIVACY_POLICY = `/privacy-policy`,
  /**
   * @summary 이용약관 화면
   */
  TERMS_OF_USE = `/terms-of-use`,
  /**
   * @summary FAQ 화면
   */
  FAQ = `/faq`,
  /**
   * @summary 404 에러 화면
   */
  ERROR_404 = `/not-found`,
  /**
   * @summary 500 에러 화면
   */
  ERROR_500 = `/error`,
  /**
   * @summary 유지보수 화면
   */
  ERROR_MAINTENANCE = `/maintenance`,
}
