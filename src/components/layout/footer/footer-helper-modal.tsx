"use client"

import GlobalInputCheckboxComponent from "@/components/global/global-input-checkbox"
import GlobalInputTextComponent from "@/components/global/global-input-text"
import GlobalInputTextareaComponent from "@/components/global/global-input-textarea"
import GlobalModalComponent from "@/components/global/global-modal"
import GlobalTermsModal from "@/components/global/global-terms-modal"
import ExceptionError from "@/utils/exception"
import { useFormik } from "formik"
import { useState } from "react"
import toast from "react-hot-toast"
import * as Yup from "yup"

/**
 * @interface Props
 * @property {boolean} isModalVisible - 모달 상태
 * @property {() => void} setIsModalVisible - 모달 상태 설정
 */
interface Props {
  isModalVisible: boolean
  setIsModalVisible: () => void
}

/**
 * @function FooterHelperModal
 * @description 푸터 헬퍼 모달
 * @returns {JSX.Element}
 */
export default function FooterHelperModal(props: Props): JSX.Element {
  // 약관 동의 모달 상태
  const [isTermsModalVisible, setIsTermsModalVisible] = useState(false)
  // 폼
  const formik = useFormik({
    validateOnBlur: true,
    validateOnChange: true,
    validateOnMount: true,
    initialValues: {
      receiver_name: "",
      receiver_email: "",
      receiver_message: "",
      submit: null,
      // 임시 동의 여부
      temp_is_agree: false,
    },
    validationSchema: Yup.object({
      receiver_name: Yup.string().required("Name is required."),
      receiver_email: Yup.string()
        .email("Invalid email address.")
        .required("Email is required."),
      receiver_message: Yup.string().required("Message is required."),
      temp_is_agree: Yup.boolean()
        .oneOf([true], "You must agree to the terms and conditions.")
        .required("You must agree to the terms and conditions."),
    }),
    validate: (_values) => {
      // console.log(_values)
    },
    onSubmit: async (_values, _helpers) => {
      try {
        const { submit, ...newValues } = _values

        // 3초 딜레이
        await new Promise((resolve) => setTimeout(resolve, 3000))

        props.setIsModalVisible()
        toast.success("Your inquiry has been successfully sent.")
      } catch (error: any) {
        ExceptionError(error)
      }
    },
  })

  return (
    <>
      {!isTermsModalVisible && props.isModalVisible && (
        <GlobalModalComponent
          cancelTabIndex={5}
          submitTabIndex={6}
          title="Submit Your Inquiry"
          description="Please fill out the form below to send us your inquiry. Our support team will respond to you as soon as possible."
          submitIsValid={formik.isValid && !formik.isSubmitting}
          submitText="Send"
          isModalPersistent={true}
          isSubmitting={formik.isSubmitting}
          isModalVisible={props.isModalVisible}
          setIsModalVisible={props.setIsModalVisible}
          handleSubmit={formik.handleSubmit}
        >
          <div className="flex flex-col gap-[25px] w-full">
            {/* 이름 */}
            <GlobalInputTextComponent
              tabIndex={1}
              label="Your Name"
              id="receiver_name"
              value={formik.values.receiver_name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              disabled={formik.isSubmitting}
              placeholder="Please enter your name."
              ErrorText={formik.errors.receiver_name}
              isError={Boolean(
                formik.touched.receiver_name && formik.errors.receiver_name,
              )}
              isRequired
            />

            {/* 이메일 */}
            <GlobalInputTextComponent
              tabIndex={2}
              type="email"
              label="Your Email"
              id="receiver_email"
              value={formik.values.receiver_email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              disabled={formik.isSubmitting}
              placeholder="email@domain.com"
              ErrorText={formik.errors.receiver_email}
              isError={Boolean(
                formik.touched.receiver_email && formik.errors.receiver_email,
              )}
              isRequired
            />

            {/* 전달 메세지 */}
            <GlobalInputTextareaComponent
              tabIndex={3}
              label="Your Message"
              id="receiver_message"
              value={formik.values.receiver_message!}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              disabled={formik.isSubmitting}
              placeholder="Write your message here..."
              ErrorText={formik.errors.receiver_message}
              isError={Boolean(
                formik.touched.receiver_message &&
                  formik.errors.receiver_message,
              )}
              isRequired
            />

            {/* 약관 동의 */}
            <GlobalInputCheckboxComponent
              tabIndex={4}
              id="temp_is_agree"
              checked={formik.values.temp_is_agree}
              onChange={() => {}}
              onClick={() => setIsTermsModalVisible(true)}
              onBlur={formik.handleBlur}
              disabled={formik.isSubmitting}
              label="I agree with the&nbsp;"
              subLabel="Terms and Conditions"
              labelOnClick={() => setIsTermsModalVisible(true)}
            />
          </div>
        </GlobalModalComponent>
      )}

      {/* 약관 동의 모달 */}
      {isTermsModalVisible && (
        <GlobalTermsModal
          isModalVisible={isTermsModalVisible}
          setIsModalVisible={() => setIsTermsModalVisible(false)}
          handleSubmit={() => {
            formik.setFieldValue("temp_is_agree", true)
            setIsTermsModalVisible(false)
          }}
        />
      )}
    </>
  )
}
