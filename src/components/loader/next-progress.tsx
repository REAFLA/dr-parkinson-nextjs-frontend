"use client"

import NextTopLoader from "nextjs-toploader"

export default function NextProgress() {
  return (
    <NextTopLoader
      color="#2563EB" // TopLoader의 기본 색상을 변경합니다.
      initialPosition={0.08} // TopLoader의 초기 위치를 백분율로 변경합니다. 0.08 = 8%.
      crawl={true} // TopLoader의 자동 증가 동작을 설정합니다.
      height={3} // TopLoader의 높이를 px로 설정합니다.
      showSpinner={true} // 스피너를 표시할지 여부를 설정합니다.
      speed={200} // TopLoader의 애니메이션 속도를 ms로 설정합니다.
      crawlSpeed={200} // 증가 지연 속도를 ms로 설정합니다.
      showAtBottom={false} // TopLoader를 하단에 표시할지 여부를 설정합니다. (모바일 장치에서 가시성을 보장하기 위해 TopLoader의 높이를 증가시킵니다.)
      zIndex={9999} // TopLoader의 zIndex를 정의합니다.
    />
  )
}
