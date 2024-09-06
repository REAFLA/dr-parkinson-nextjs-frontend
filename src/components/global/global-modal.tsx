import { XmarkSolidIcon } from "@/assets/svg-icon"
import {
  Button,
  Dialog,
  IconButton,
  Typography,
} from "@material-tailwind/react"
import { createRef, useLayoutEffect } from "react"

/**
 * @interface Props
 * @property {string} className - 클래스명
 * @property {number} cancelTabIndex - 취소 탭 인덱스
 * @property {number} submitTabIndex - 제출 탭 인덱스
 * @property {string} title - 제목
 * @property {string} description - 설명
 * @property {string} submitText - 제출 텍스트
 * @property {boolean} submitIsValid - 제출 유효성
 * @property {string} submitButtonColor - 제출 버튼 색상
 * @property {boolean} isModalPersistent - 모달 표시 유지 여부 상태
 * @property {boolean} isSubmitting - 제출 중 여부
 * @property {boolean} isOverflowVisible - 오버플로우 표시 여부
 * @property {boolean} isCancelButton - 취소 버튼
 * @property {boolean} isModalVisible - 모달 표시 여부
 * @property {() => void} setIsModalVisible - 모달 표시 여부 변경 함수
 * @property {() => void} handleSubmit - 제출 핸들러
 * @property {React.ReactNode} children - 자식
 */
interface Props {
  className?: string
  cancelTabIndex?: number
  submitTabIndex?: number
  title: string
  description?: string
  submitText?: string
  submitIsValid?: boolean
  submitButtonColor?: string
  isModalPersistent?: boolean
  isSubmitting?: boolean
  isOverflowVisible?: boolean
  isCancelButton?: boolean
  isModalVisible: boolean
  setIsModalVisible: () => void
  handleSubmit: () => void
  children: React.ReactNode
}

/**
 * @function GlobalModalComponent
 * @description 전역 모달 컴포넌트
 * @returns {JSX.Element}
 */
export default function GlobalModalComponent({
  className,
  cancelTabIndex = 1,
  submitTabIndex = 2,
  title,
  description,
  submitText = "Change",
  submitIsValid = false,
  submitButtonColor = "bg-[#212121]",
  isModalPersistent = false,
  isSubmitting = false,
  isOverflowVisible = false,
  isCancelButton = true,
  isModalVisible,
  setIsModalVisible,
  handleSubmit,
  children,
}: Props): JSX.Element {
  // 모달 레퍼런스
  const ref = createRef<HTMLDivElement>()

  useLayoutEffect(() => {
    // 모달 레퍼런스 스크롤 최상단 이동
    setTimeout(() => {
      ref.current?.scrollTo({ top: 0, behavior: "auto" })
      // 간혹 타이밍 이슈로 인해 스크롤이 최상단으로 이동하지 않는 경우가 있어 setTimeout으로 처리
      setTimeout(() => {
        ref.current?.scrollTo({ top: 0, behavior: "auto" })
      }, 100)
    }, 0)
  }, [])

  return (
    <>
      <Dialog
        key={title}
        id={`modal-${title}`}
        className={`${className} flex flex-col items-center justify-center bg-transparent shadow-none overflow-visible`}
        open={isModalVisible}
        handler={setIsModalVisible}
        onClick={setIsModalVisible}
      >
        <div
          ref={ref}
          className={`${isOverflowVisible && "!overflow-visible"} flex flex-col gap-[24px] p-[24px] !w-[576px] !max-w-[576px] max-h-[85vh] bg-white rounded-[5px] shadow overflow-y-auto`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col w-full p-0 m-0">
            <div className="flex items-center justify-between">
              <Typography className="text-primary font-semibold text-xl">
                {title}
              </Typography>
              <IconButton
                tabIndex={undefined}
                variant="text"
                onClick={setIsModalVisible}
              >
                <XmarkSolidIcon width={20} height={20} />
              </IconButton>
            </div>
            {/* 모달 설명이 있는 경우 */}
            {description && (
              <Typography className="font-normal text-blue-gray-600 text-sm">
                {description}
              </Typography>
            )}
          </div>
          {/* 자식 노드 */}
          {children}
          {/* 취소 버튼이 있는 경우 */}
          {isCancelButton && (
            <div className="flex items-center justify-end gap-[10px] m-0 p-0 w-full">
              <Button
                tabIndex={cancelTabIndex}
                variant="text"
                size="sm"
                className="text-sm font-bold text-[##757575] uppercase"
                onClick={() => setIsModalVisible()}
              >
                Cancel
              </Button>
              <Button
                tabIndex={submitTabIndex}
                size="sm"
                className={`text-sm font-bold text-white-primary uppercase ${submitButtonColor}`}
                onClick={() => {
                  handleSubmit()
                  if (!isModalPersistent) {
                    setIsModalVisible()
                  }
                }}
                disabled={!submitIsValid}
                loading={isSubmitting}
              >
                {submitText}
              </Button>
            </div>
          )}
          {/* 취소 버튼이 없는 경우 */}
          {!isCancelButton && (
            <div className="flex items-center justify-center gap-[10px] m-0 p-0 w-full">
              <Button
                tabIndex={cancelTabIndex}
                size="sm"
                className={`${submitButtonColor} text-sm font-bold text-white-primary`}
                onClick={() => {
                  handleSubmit()
                  if (!isModalPersistent) {
                    setIsModalVisible()
                  }
                }}
                disabled={!submitIsValid}
                loading={isSubmitting}
              >
                {submitText}
              </Button>
            </div>
          )}
        </div>
      </Dialog>
    </>
  )
}
