"use client"

import { Button, Typography } from "@material-tailwind/react"
import Image from "next/image"
import Link from "next/link"
import { useLayoutEffect, useState } from "react"
import YouTube, { YouTubeEvent, YouTubeProps } from "react-youtube"

/**
 * @function HomePage
 * @description 홈 페이지
 * @returns {JSX.Element}
 */
export default function HomePage(): JSX.Element {
  // 모바일 여부
  const [isMobile, setIsMobile] = useState(false)
  // 화면 너비
  const [width, setWidth] = useState(0)

  // 모바일 여부를 체크하는 로직
  useLayoutEffect(() => {
    const handleResize = () => {
      const currentWidth = window.innerWidth
      setWidth(currentWidth) // 화면 너비 업데이트
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

  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo()
  }

  return isMobile
    ? MobilePage(onPlayerReady, width)
    : DesktopPage(onPlayerReady)
}

function DesktopPage(
  onPlayerReady: (event: YouTubeEvent) => void,
): JSX.Element {
  return (
    <section className="flex flex-col items-center justify-center gap-[50px] mx-auto py-[100px] h-[calc(100vh-216.75px)]">
      <div className="flex items-center justify-between gap-[20px] w-full">
        <div className="flex-1 flex flex-col gap-[50px]">
          <div className="flex flex-col gap-[10px]">
            <Typography
              variant="h1"
              color="blue-gray"
              className="text-6xl text-[#2e6ff6]"
            >
              닥터파킨슨
            </Typography>
            <Typography variant="lead" className="w-full">
              파킨슨 병에 대한 정보와 건강관리를 위한 다양한 기능 제공
            </Typography>
            <Typography variant="lead" className="text-gray-500 text-md w-full">
              전문의가 직접 알려주는 닥터파킨슨 앱은 파킨슨 병 환자들을 위한
              건강 관리와 더불어 미션 관리를 지원합니다.약물 검색과 자가진단 등
              다양한 건강 관리 기능이 제공되며, 운동 기록과 투약 관리를 위한
              미션 관리 기능도 함께 제공됩니다. 또한, 파킨슨 병 관련한
              사회복지제도 정보도 한눈에 볼 수 있습니다.
            </Typography>
          </div>
          <div className="flex justify-between gap-[20px]">
            <Link href="#" target="_blank" className="w-full">
              <Button
                size="sm"
                variant="outlined"
                className="flex items-center justify-center gap-3 px-3 w-full"
              >
                <div className="flex items-center gap-[10px]">
                  <Image
                    src="https://www.material-tailwind.com/logos/logo-google-play.svg"
                    blurDataURL={
                      process.env.NEXT_PUBLIC_ENV_IMAGE_BLUR_DATA_URL
                    }
                    alt="google-play"
                    className="object-cover object-center"
                    width={40}
                    height={40}
                    loading="lazy"
                    placeholder="blur"
                  />
                  <div className="grid place-items-start">
                    <Typography className="text-xs !font-normal">
                      get it on
                    </Typography>
                    <Typography className="font-medium capitalize !text-xl">
                      google play
                    </Typography>
                  </div>
                </div>
              </Button>
            </Link>
            <Link
              href="https://apps.apple.com/kr/app/%EB%8B%A5%ED%84%B0%ED%8C%8C%ED%82%A8%EC%8A%A8/id6448748285"
              target="_blank"
              className="w-full"
            >
              <Button
                size="sm"
                color="gray"
                className="flex items-center justify-center w-full"
              >
                <div className="flex items-center gap-[10px]">
                  <Image
                    src="https://www.material-tailwind.com/logos/logo-ios.svg"
                    blurDataURL={
                      process.env.NEXT_PUBLIC_ENV_IMAGE_BLUR_DATA_URL
                    }
                    alt="apple-ios"
                    className="object-cover object-center"
                    width={40}
                    height={40}
                    loading="lazy"
                    placeholder="blur"
                  />
                  <div className="grid place-items-start mt-1">
                    <Typography
                      color="white"
                      className="!text-xs font-normal -mb-1 capitalize"
                    >
                      Download on the
                    </Typography>
                    <Typography
                      color="white"
                      className="font-medium capitalize !text-xl"
                    >
                      App Store
                    </Typography>
                  </div>
                </div>
              </Button>
            </Link>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-0 lg:justify-start">
            <Image
              src="/logo2.webp"
              blurDataURL={process.env.NEXT_PUBLIC_ENV_IMAGE_BLUR_DATA_URL}
              alt="pinterest"
              className="object-cover object-center"
              width={140}
              height={140}
              loading="lazy"
              placeholder="blur"
            />
            <Image
              src="/logo4.webp"
              blurDataURL={process.env.NEXT_PUBLIC_ENV_IMAGE_BLUR_DATA_URL}
              alt="amazaon"
              className="ml-[20px] object-cover object-center"
              width={170}
              height={170}
              loading="lazy"
              placeholder="blur"
            />
            <Image
              src="/logo3.webp"
              blurDataURL={process.env.NEXT_PUBLIC_ENV_IMAGE_BLUR_DATA_URL}
              alt="spotify"
              className="ml-[20px] object-cover object-center"
              width={150}
              height={150}
              loading="lazy"
              placeholder="blur"
            />
          </div>
        </div>
        <div className="relative w-[400px] h-full">
          <div className="rounded-[5px] overflow-hidden">
            <YouTube
              videoId="XqEv8GU5MkY"
              onReady={onPlayerReady}
              opts={{
                controls: 0,
                width: "400",
                height: "362",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function MobilePage(
  onPlayerReady: (event: YouTubeEvent) => void,
  width: number,
): JSX.Element {
  return (
    <section className="flex flex-col items-center justify-center gap-[50px] mx-auto py-[50px] xl:py-[100px] px-[20px] h-full">
      <div className="flex flex-col gap-[50px] w-full">
        <div className="flex flex-col gap-[10px]">
          <Typography
            variant="h1"
            color="blue-gray"
            className="text-4xl text-[#2e6ff6]"
          >
            닥터파킨슨
          </Typography>
          <Typography variant="lead" className="w-full">
            파킨슨 병에 대한 정보와 건강관리를 위한 다양한 기능 제공
          </Typography>
          <Typography variant="lead" className="text-gray-500 text-md w-full">
            전문의가 직접 알려주는 닥터파킨슨 앱은 파킨슨 병 환자들을 위한 건강
            관리와 더불어 미션 관리를 지원합니다.약물 검색과 자가진단 등 다양한
            건강 관리 기능이 제공되며, 운동 기록과 투약 관리를 위한 미션 관리
            기능도 함께 제공됩니다. 또한, 파킨슨 병 관련한 사회복지제도 정보도
            한눈에 볼 수 있습니다.
          </Typography>
        </div>
        <div className="relative w-full">
          <div className="rounded-[5px] overflow-hidden">
            <YouTube
              videoId="XqEv8GU5MkY"
              onReady={onPlayerReady}
              opts={{
                controls: 0,
                width: "100%",
                height: width,
              }}
            />
          </div>
        </div>
        <div className="flex justify-center gap-[20px]">
          <Link href="#" target="_blank" className="flex-1 w-full">
            <Button
              size="sm"
              variant="outlined"
              className="flex items-center justify-center gap-3 px-3 w-full"
            >
              <div className="flex items-center gap-[10px]">
                <Image
                  src="https://www.material-tailwind.com/logos/logo-google-play.svg"
                  blurDataURL={process.env.NEXT_PUBLIC_ENV_IMAGE_BLUR_DATA_URL}
                  alt="google-play"
                  className="object-cover object-center"
                  width={40}
                  height={40}
                  loading="lazy"
                  placeholder="blur"
                />
                <div className="grid place-items-start">
                  <Typography className="text-xs !font-normal">
                    get it on
                  </Typography>
                  <Typography className="font-medium capitalize !text-lg">
                    google play
                  </Typography>
                </div>
              </div>
            </Button>
          </Link>
          <Link
            href="https://apps.apple.com/kr/app/%EB%8B%A5%ED%84%B0%ED%8C%8C%ED%82%A8%EC%8A%A8/id6448748285"
            target="_blank"
            className="flex-1  w-full"
          >
            <Button
              size="sm"
              color="gray"
              className="flex items-center justify-center w-full"
            >
              <div className="flex items-center gap-[10px]">
                <Image
                  src="https://www.material-tailwind.com/logos/logo-ios.svg"
                  blurDataURL={process.env.NEXT_PUBLIC_ENV_IMAGE_BLUR_DATA_URL}
                  alt="apple-ios"
                  className="object-cover object-center"
                  width={40}
                  height={40}
                  loading="lazy"
                  placeholder="blur"
                />
                <div className="grid place-items-start mt-1">
                  <Typography
                    color="white"
                    className="!text-xs font-normal -mb-1 capitalize"
                  >
                    Download on the
                  </Typography>
                  <Typography
                    color="white"
                    className="font-medium capitalize !text-lg"
                  >
                    App Store
                  </Typography>
                </div>
              </div>
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-[20px]">
          <Image
            src="/logo2.webp"
            blurDataURL={process.env.NEXT_PUBLIC_ENV_IMAGE_BLUR_DATA_URL}
            alt="pinterest"
            className="object-cover object-center"
            width={140}
            height={140}
            loading="lazy"
            placeholder="blur"
          />
          <Image
            src="/logo4.webp"
            blurDataURL={process.env.NEXT_PUBLIC_ENV_IMAGE_BLUR_DATA_URL}
            alt="amazaon"
            className="object-cover object-center"
            width={170}
            height={170}
            loading="lazy"
            placeholder="blur"
          />
          <Image
            src="/logo3.webp"
            blurDataURL={process.env.NEXT_PUBLIC_ENV_IMAGE_BLUR_DATA_URL}
            alt="spotify"
            className="object-cover object-center"
            width={150}
            height={150}
            loading="lazy"
            placeholder="blur"
          />
        </div>
      </div>
    </section>
  )
}
