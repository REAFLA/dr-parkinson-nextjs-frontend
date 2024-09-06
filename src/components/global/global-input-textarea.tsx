"use client"

import { Textarea } from "@material-tailwind/react"
import GlobalRequriedComponent from "./global-required"

/**
 * @interface Props
 * @property {string} className - 클래스명
 * @property {number} tabIndex - 탭 인덱스
 * @property {string} label - 라벨
 * @property {string} id - 아이디
 * @property {string} value - 값
 * @property {(e: React.ChangeEvent<HTMLTextAreaElement>) => void} onChange - 변경 함수
 * @property {(e: React.FocusEvent<HTMLTextAreaElement>) => void} onBlur - 포커스 아웃 함수
 * @property {boolean} disabled - 비활성화 여부
 * @property {string} placeholder - 플레이스홀더
 * @property {string} ErrorText - 에러 텍스트
 * @property {boolean} isError - 에러 여부
 * @property {number} rows - 행
 * @property {boolean} resize - 리사이즈 여부
 * @property {boolean} isRequired - 필수 여부
 */
interface Props {
  className?: string
  tabIndex?: number
  label: string
  id: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  onBlur: (e: React.FocusEvent<HTMLTextAreaElement>) => void
  disabled: boolean
  placeholder: string
  ErrorText?: string
  isError: boolean
  rows?: number
  resize?: boolean
  isRequired?: boolean
}

/**
 * @function GlobalInputTextareaComponent
 * @description 전역 입력 텍스트 에어리어 컴포넌트
 * @returns {JSX.Element}
 */
export default function GlobalInputTextareaComponent(
  props: Props,
): JSX.Element {
  return (
    <>
      <div
        className={`${props.className || ""} flex flex-col gap-[10px] w-full`}
      >
        <label
          htmlFor={props.id}
          className="text-sm font-medium text-blue-gray-600"
        >
          {props.label} {props.isRequired && <GlobalRequriedComponent />}
        </label>
        <Textarea
          tabIndex={props.tabIndex || undefined}
          rows={props.rows || 3}
          resize={props.resize || true}
          id={props.id}
          value={props.value}
          onChange={props.onChange}
          onBlur={props.onBlur}
          disabled={props.disabled}
          placeholder={props.placeholder}
          containerProps={{ className: "min-w-[100px]" }}
          labelProps={{
            className: "hidden",
          }}
        />
        {props.isError && (
          <div className="text-red-500 text-sm">{props.ErrorText}</div>
        )}
      </div>
    </>
  )
}
