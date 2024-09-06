import { Typography } from "@material-tailwind/react"
import GlobalModalComponent from "./global-modal"

/**
 * @interface Props
 * @property {boolean} isModalVisible - 모달 상태
 * @property {() => void} setIsModalVisible - 모달 상태 설정
 * @property {() => void} handleSubmit - 제출 함수
 */
interface Props {
  isModalVisible: boolean
  setIsModalVisible: () => void
  handleSubmit: () => void
}

/**
 * @function GlobalTermsModal
 * @description 전역 약관 모달
 * @returns {JSX.Element}
 */
export default function GlobalTermsModal(props: Props): JSX.Element {
  return (
    <>
      <GlobalModalComponent
        title="Terms and Conditions"
        description="Please read the terms and conditions carefully before using our service."
        submitIsValid={true}
        submitText="Agree"
        isModalVisible={props.isModalVisible}
        setIsModalVisible={props.setIsModalVisible}
        handleSubmit={props.handleSubmit}
      >
        <div className="flex flex-col gap-[10px] w-full">
          <Typography className="text-blue-gray-600 text-sm font-normal whitespace-pre-line">
            This privacy statement applies to the Europeana
            website https://www.europeana.eu, to https://pro.europeana.eu and to
            the content displayed on these URLs. Please note that only the
            English version of these terms should be considered legally valid.
            We take no legal responsibility for any differences or discrepancies
            created in the translations of these terms. Processing
            operationProcessing of personal data
            on https://www.europeana.eu/ and https://pro.europeana.eu, including
            IP addresses, by visitors of the publicly available websites. Data
            ControllerEuropean Commission, Directorate‑General for
            Communications Networks, Content and Technology (DG CNECT),
            Directorate G, Unit G2 Data ProcessorEuropeana Foundation, Prins
            Willem-Alexanderhof 5, 2595 BE The Hague, The
            Netherlands, info@europeana.eu Record referenceDPR-EC-09706.2
          </Typography>
        </div>
      </GlobalModalComponent>
    </>
  )
}
