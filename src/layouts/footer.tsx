"use client"

import FooterHelperModal from "@/components/layout/footer/footer-helper-modal"
import { Typography } from "@material-tailwind/react"
import { useLayoutEffect, useState } from "react"

/**
 * @interface Props
 */
interface Props {
  className?: string
}

/**
 * @function FooterComponent
 * @description 푸터 컴포넌트
 * @returns {JSX.Element}
 */
export default function FooterComponent(props: Props): JSX.Element {
  // 모바일 여부
  const [isMobile, setIsMobile] = useState(false)
  // 모달 상태
  const [isModalVisible, setIsModalVisible] = useState(false)
  // 메뉴 데이터
  const menuData = [
    {
      label: "이용약관",
      href: "/terms-of-use",
    },
    {
      label: "개인정보처리방침",
      href: "/privacy-policy",
    },
    {
      label: "자주묻는질문",
      href: "/faq",
    },
    {
      label: "문의하기",
      href: "/contact",
    },
  ]
  // 현재 년도
  const currentYear = new Date().getFullYear()

  // 모바일 여부를 체크하는 로직
  useLayoutEffect(() => {
    const handleResize = () => {
      const currentWidth = window.innerWidth
      setIsMobile(currentWidth <= 1024) // 1024px 이하를 모바일로 간주
    }

    // 처음 로드 시 화면 너비와 모바일 여부 체크
    handleResize()

    // 창 크기 변경 시마다 화면 너비와 모바일 여부를 체크
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <>
      <footer className="flex flex-col items-center p-[20px] w-full z-[998]">
        <div className="container mx-auto flex flex-col items-center gap-[30px] w-full">
          {/* 모바일이 아닐때 */}
          {!isMobile && (
            <></>
            // <div className="flex flex-wrap items-center justify-center gap-[20px] p-[20px] w-full">
            //   {menuData.map((value, index) => (
            //     <ul key={index}>
            //       <li>
            //         {/* 문의하기가 아닌 경우 */}
            //         {value.label !== "문의하기" && (
            //           <Link href={value.href}>
            //             <Typography
            //               as="a"
            //               color="white"
            //               className="font-medium !text-gray-500 transition-colors hover:!text-gray-900"
            //             >
            //               {value.label}
            //             </Typography>
            //           </Link>
            //         )}
            //         {/* 문의하기인 경우 */}
            //         {value.label === "문의하기" && (
            //           <Button
            //             type="button"
            //             className="!p-0 !border-0 !bg-transparent !shadow-none"
            //             onClick={() => setIsModalVisible(!isModalVisible)}
            //           >
            //             <Typography
            //               as="a"
            //               color="white"
            //               className="font-medium !text-gray-500 transition-colors hover:!text-gray-900"
            //             >
            //               {value.label}
            //             </Typography>
            //           </Button>
            //         )}
            //       </li>
            //     </ul>
            //   ))}
            // </div>
          )}
          <Typography
            color="blue-gray"
            className="!text-sm !font-normal text-gray-500"
          >
            Copyright &copy; {currentYear} The Korean Movement Disorder Society.
            All rights reserved.
          </Typography>
        </div>
      </footer>

      {/* 문의하기 모달 */}
      {isModalVisible && (
        <FooterHelperModal
          isModalVisible={isModalVisible}
          setIsModalVisible={() => setIsModalVisible(!isModalVisible)}
        />
      )}
    </>
  )
}
