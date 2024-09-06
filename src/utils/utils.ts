import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * @fuinction cn
 * @description 여러 클래스 이름을 결합하여 Tailwind CSS 스타일 병합 규칙에 따라 최적화된 클래스를 반환합니다.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
