import { RouteEnum } from "@/definitions/enum/route.enum"

/**
 * @function Route
 * @summary 주어진 경로와 파라미터를 사용하여 완전한 경로를 생성하는 헬퍼 함수
 * @param route 라우트 Enum 값
 * @param param 경로 파라미터 값
 * @param query 쿼리 파라미터 객체
 */
export default function Route(
  route: RouteEnum,
  param?: string | number,
  query?: { [key: string]: string | number } | string,
): string {
  let path = route as string

  if (param) {
    path = path.replace(":id", String(param))
  }

  if (query) {
    let queryString
    if (typeof query === "string") {
      queryString = query
    } else {
      queryString = Object.keys(query)
        .map(
          (key) =>
            `${encodeURIComponent(key)}=${encodeURIComponent(String(query[key]))}`,
        )
        .join("&")
    }
    path += `?${queryString}`
  }

  return path
}
