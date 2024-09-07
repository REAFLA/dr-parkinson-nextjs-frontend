"use client"

import { BarsRegularIcon, XmarkRegularIcon } from "@/assets/svg-icon"
import FooterHelperModal from "@/components/layout/footer/footer-helper-modal"
import {
  Button,
  Drawer,
  IconButton,
  Navbar,
  Typography,
} from "@material-tailwind/react"
import Link from "next/link"
import { Dispatch, SetStateAction, useLayoutEffect, useState } from "react"

/**
 * @function HeaderComponent
 * @description 헤더 컴포넌트
 * @returns {JSX.Element}
 */
export default function HeaderComponent(): JSX.Element {
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
    // {
    //   label: "문의하기",
    //   href: "/contact",
    // },
  ]

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
      {/* 모바일일때 */}
      {isMobile && (
        <MobilePage
          menuData={menuData}
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
        />
      )}
      {/* 모바일이 아닐때 */}
      {!isMobile && (
        <DesktopPage
          menuData={menuData}
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
        />
      )}
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

function DesktopPage({
  menuData,
  isModalVisible,
  setIsModalVisible,
}: {
  menuData: { label: string; href: string }[]
  isModalVisible: boolean
  setIsModalVisible: Dispatch<SetStateAction<boolean>>
}): JSX.Element {
  return (
    <header className="flex flex-col items-center w-full z-[998]">
      <Navbar
        className="flex flex-wrap items-center justify-between p-[20px]"
        shadow={false}
        fullWidth
      >
        <Link href="/" className="flex items-center h-full">
          <Typography variant="h5" color="blue-gray">
            닥터파킨슨
          </Typography>
        </Link>
        <ul className="flex gap-[20px]">
          {menuData.map((value, index) => (
            <li key={`desktop-${index}`}>
              {/* 문의하기가 아닌 경우 */}
              {value.label !== "문의하기" && (
                <Link href={value.href}>
                  <Typography
                    as="a"
                    color="white"
                    className="font-medium text-primary transition-colors hover:!text-gray-900"
                  >
                    {value.label}
                  </Typography>
                </Link>
              )}
              {/* 문의하기인 경우 */}
              {value.label === "문의하기" && (
                <Button
                  type="button"
                  className="!p-0 !border-0 !bg-transparent !shadow-none"
                  onClick={() => setIsModalVisible(!isModalVisible)}
                >
                  <Typography
                    as="a"
                    color="white"
                    className="font-medium text-primary transition-colors hover:!text-gray-900"
                  >
                    {value.label}
                  </Typography>
                </Button>
              )}
            </li>
          ))}
        </ul>
        <div className="w-[100px]">
          <Button
            size="sm"
            variant="outlined"
            onClick={() => setIsModalVisible(!isModalVisible)}
          >
            문의하기
          </Button>
        </div>
      </Navbar>
    </header>
  )
}

function MobilePage({
  menuData,
  isModalVisible,
  setIsModalVisible,
}: {
  menuData: { label: string; href: string }[]
  isModalVisible: boolean
  setIsModalVisible: Dispatch<SetStateAction<boolean>>
}): JSX.Element {
  // 메뉴 상태
  const [isMenuVisible, setIsMenuVisible] = useState(false)
  // 메뉴 데이터
  const [menuDatas, _] = useState<{ label: string; href: string }[]>([
    ...menuData,
    {
      label: "문의하기",
      href: "/contact",
    },
  ])

  return (
    <>
      <header className="sticky top-0 flex flex-col items-center p-[20px] bg-white w-full z-[998]">
        <Navbar className="p-0 text-right" shadow={false} fullWidth>
          <IconButton
            variant="text"
            onClick={() => setIsMenuVisible(!isMenuVisible)}
          >
            <BarsRegularIcon width={20} height={20} />
          </IconButton>
        </Navbar>
      </header>
      <Drawer
        placement="right"
        className="flex flex-col gap-[20px] p-[20px]"
        open={isMenuVisible}
        onClose={() => setIsMenuVisible(!isMenuVisible)}
      >
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center pl-[20px] h-full">
            <Typography variant="h5" color="blue-gray">
              닥터파킨슨
            </Typography>
          </Link>
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={() => setIsMenuVisible(!isMenuVisible)}
          >
            <XmarkRegularIcon width={22} height={22} />
          </IconButton>
        </div>
        <ul>
          {menuDatas.map((value, index) => (
            <li key={`mobile-${index}`} className="hover:bg-gray-100">
              {/* 문의하기가 아닌 경우 */}
              {value.label !== "문의하기" && (
                <Link
                  href={value.href}
                  className="block p-[20px] w-full hover:!text-gray-900 transition-colors"
                >
                  {value.label}
                </Link>
              )}
              {/* 문의하기인 경우 */}
              {value.label === "문의하기" && (
                <Button
                  type="button"
                  className="block p-[20px] w-full text-md !font-medium !text-primary !border-0 !bg-transparent text-left !shadow-none transition-colors hover:underline"
                  onClick={() => setIsModalVisible(!isModalVisible)}
                >
                  {value.label}
                </Button>
              )}
            </li>
          ))}
        </ul>
      </Drawer>
    </>
  )
}
