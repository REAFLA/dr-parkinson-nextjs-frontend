"use client"

import { Button, Input, Typography } from "@material-tailwind/react"
import { useState } from "react"
import GlobalRequriedComponent from "./global-required"

/**
 * @interface Props
 * @property {string} className - 클래스명
 * @property {number} tabIndex - 탭 인덱스
 * @property {string} type - 타입
 * @property {string} label - 라벨
 * @property {string} id - 아이디
 * @property {string | number | null} value - 값
 * @property {(e: React.ChangeEvent<HTMLInputElement>) => void} onChange - 변경 함수
 * @property {(e: React.FocusEvent<HTMLInputElement>) => void} onBlur - 포커스 아웃 함수
 * @property {boolean} disabled - 비활성화 여부
 * @property {boolean} readonly - 읽기 전용 여부
 * @property {string} placeholder - 플레이스홀더
 * @property {string} ErrorText - 에러 텍스트
 * @property {boolean} isError - 에러 여부
 * @property {boolean} isRequired - 필수 여부
 */
interface Props {
  className?: string
  tabIndex?: number
  type?:
    | "button"
    | "checkbox"
    | "color"
    | "date"
    | "datetime-local"
    | "email"
    | "file"
    | "hidden"
    | "image"
    | "month"
    | "number"
    | "password"
    | "radio"
    | "range"
    | "reset"
    | "search"
    | "submit"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week"
  label: string
  id: string
  value: string | number | null
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void
  disabled: boolean
  readonly?: boolean
  placeholder: string
  ErrorText?: string
  isError: boolean
  isRequired?: boolean
}

/**
 * @function GlobalInputTextComponent
 * @description 전역 입력 텍스트 컴포넌트
 * @returns {JSX.Element}
 */
export default function GlobalInputTextComponent(props: Props): JSX.Element {
  const [isPasswordVisible, setPasswordVisible] = useState(false)

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

        {props.type === "password" ? (
          // 비밀번호 입력 필드일 때
          <div className="relative flex w-full">
            <Input
              type={isPasswordVisible ? "text" : "password"} // 비밀번호 보이기/숨기기
              tabIndex={props.tabIndex || undefined}
              id={props.id}
              value={props.value || ""}
              onChange={props.onChange}
              onBlur={props.onBlur}
              disabled={props.disabled}
              readOnly={props.readonly || false}
              placeholder={props.placeholder}
              containerProps={{ className: "min-w-[100px]" }}
              labelProps={{
                className: "hidden",
              }}
              crossOrigin={undefined}
            />
            <Button
              variant="text"
              className="!absolute right-1 top-1 bottom-1 !p-0 !px-[5px] !py-[7.5px]"
              onClick={() => setPasswordVisible(!isPasswordVisible)}
            >
              <Typography className="text-[#90A4AE] font-bold text-[10px]">
                {isPasswordVisible ? "Hide" : "Show"}
              </Typography>
            </Button>
          </div>
        ) : (
          // 일반 입력 필드일 때
          <Input
            type={props.type || "text"}
            tabIndex={props.tabIndex || undefined}
            id={props.id}
            value={
              typeof props.value === "string"
                ? props.value
                : typeof props.value === "number"
                  ? props.value
                  : ""
            }
            onChange={props.onChange}
            onBlur={props.onBlur}
            disabled={props.disabled}
            readOnly={props.readonly || false}
            placeholder={props.placeholder}
            containerProps={{ className: "min-w-[100px]" }}
            labelProps={{
              className: "hidden",
            }}
            crossOrigin={undefined}
          />
        )}

        {props.isError && (
          <div className="text-red-500 text-sm">{props.ErrorText}</div>
        )}
      </div>
    </>
  )
}
