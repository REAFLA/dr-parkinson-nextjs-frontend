"use client"

import { Checkbox, Typography } from "@material-tailwind/react"

/**
 * @interface Props
 * @property {string} className - 클래스명
 * @property {number} tabIndex - 탭 인덱스
 * @property {string} id - 아이디
 * @property {boolean} value - 값
 * @property {(e: React.ChangeEvent<HTMLInputElement>) => void} onChange - 변경 함수
 * @property {(e: React.MouseEvent<HTMLInputElement>) => void} onClick - 클릭 함수
 * @property {(e: React.FocusEvent<HTMLInputElement>) => void} onBlur - 포커스 아웃 함수
 * @property {boolean} disabled - 비활성화 여부
 * @property {string} label - 라벨
 * @property {string} subLabel - 서브 라벨
 * @property {string} subLabelColor - 서브 라벨 색상
 * @property {() => void} labelOnClick - 라벨 클릭 함수
 */
interface Props {
  className?: string
  tabIndex?: number
  id: string
  checked: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void
  disabled: boolean
  label: string
  subLabel?: string
  subLabelColor?: string
  labelOnClick?: () => void
}

/**
 * @function GlobalInputCheckboxComponent
 * @description 전역 입력 체크박스 컴포넌트
 * @returns {JSX.Element}
 */
export default function GlobalInputCheckboxComponent(
  props: Props,
): JSX.Element {
  return (
    <>
      <div className={`${props.className || ""}`}>
        <Checkbox
          tabIndex={props.tabIndex || undefined}
          id={props.id}
          checked={props.checked}
          disabled={props.disabled}
          onChange={props.onChange}
          onBlur={props.onBlur}
          onClick={props.onClick}
          label={
            <Typography as="span" className="flex font-normal">
              {props.label}
              <Typography
                as="a"
                className={`${props.subLabelColor || "text-blue-800"} font-medium`}
                onClick={props.labelOnClick}
              >
                {props.subLabel}
              </Typography>
              .
            </Typography>
          }
          labelProps={{
            className: "text-xs font-bold text-blue-gray-600",
          }}
          crossOrigin={undefined}
        />
      </div>
    </>
  )
}
