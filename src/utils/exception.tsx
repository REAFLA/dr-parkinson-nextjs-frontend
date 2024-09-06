"use client"

import { CircleExclamationSolidIcon } from "@/assets/svg-icon"
import toast from "react-hot-toast"

export default function ExceptionError(
  // _helpers: FormikHelpers<any>,
  error: any,
) {
  // _helpers.setSubmitting(false)
  // _helpers.setErrors({ submit: error.message })
  // _helpers.setStatus({ success: false })

  toast.error(error.message || "An error occurred.", {
    icon: (
      <CircleExclamationSolidIcon
        className="mt-[1px] text-red-400"
        width={16}
        height={16}
      />
    ),
  })
  console.error(error)
}
