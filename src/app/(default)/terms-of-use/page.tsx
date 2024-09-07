/**
 * @function TermsOfUsePage
 * @description 이용 약관 페이지
 * @returns {JSX.Element}
 */
export default function TermsOfUsePage(): JSX.Element {
  // 섹션 데이터
  const sectionData = [
    {
      title: "1. Introduction",
      content: (
        <>
          <p className="text-gray-500">
            The European Commission (hereafter &apos;the Commission&apos;) and
            the Europeana Foundation are committed to protecting your personal
            data and to respecting your privacy. The Commission collects and
            further processes personal data pursuant to Regulation (EU)
            2018/1725 of the European Parliament and of the Council of 23
            October 2018 on the protection of natural persons with regard to the
            processing of personal data by the Union institutions, bodies,
            offices and agencies and on the free movement of such data
            (Repealing Regulation (EC) 45/2001).
            <br /> <br />
            This privacy statement explains the reason for the processing of
            your personal data, the way we collect, handle and ensure protection
            of all personal data provided, how that information is used and what
            rights you have in relation to your personal data. It also specifies
            the contact details of the responsible Data Controller with whom you
            may exercise your rights, the Data Protection Officer and the
            European Data Protection Supervisor.
            <br /> <br />
            The information in relation to the processing operation &quot;Data
            processing on{" "}
            <a
              href="https://www.europeana.eu"
              target="_blank"
              className="mx-1 text-blue-800"
              rel="noopener noreferrer"
            >
              https://www.europeana.eu
            </a>{" "}
            and{" "}
            <a
              href="https://pro.europeana.eu"
              target="_blank"
              className="mx-1 text-blue-800"
              rel="noopener noreferrer"
            >
              https://pro.europeana.eu
            </a>
            &quot; undertaken by the Europeana Foundation, on behalf of the
            European Commission, is explained below.
            <br /> <br />
          </p>
        </>
      ),
    },
    {
      title: "2. Why and how do we process your personal data?",
      content: (
        <>
          <p className="text-gray-500">
            Purpose of the processing operation: The Commission’s
            Directorate-General for Communications Networks, Content and
            Technology offer a number of external websites. The technical setup
            collects and uses your personal information to be able to provide
            the websites which are physically located outside the Commission
            controlled hosting infrastructure.
            <br />
            <br />
            The Europeana Foundation, on behalf of the European Commission,
            makes it possible for you to authenticate on Europeana.eu. We will
            use the data provided upon registration to make it possible for you
            to create and share galleries.
            <br />
            <br />
            Feedback forms might be used as a contact channel for you to report
            bugs/technical issues, send spontaneous comments on the content, or
            submit ideas for blog posts. You can also opt-in to be contacted by
            the web administrator for a follow-up to your message.
            <br />
            <br />
            Small data files called cookies are placed on your device. These
            data files are in the vast majority set by the visited website, also
            known as “First-party cookies”, and their purpose is to enable the
            site to store your preferences, to make the website operational and
            to gather pseudonymized analytics data for a certain period of time.
            Depending on the nature of the cookie, consent may be needed to
            place them on your device. You can always accept or refuse the
            cookies and you can find the cookie policy on this website.
            <br />
            <br />
            Your personal data will not be used for automated decision-making
            including profiling.
          </p>
        </>
      ),
    },
    {
      title: "3. On what legal ground(s) do we process your personal data?",
      content: (
        <>
          <p className="text-gray-500">
            We process your personal data on several grounds:
          </p>
          <ul className="list-disc pl-5 text-blue-gray-600 text-base font-medium">
            <li>
              Article 5(1)(a) of Regulation (EU) 2018/1725: this processing is
              necessary for the performance of a task carried out in the public
              interest or in the exercise of official authority vested in the
              Union institution or body.
            </li>
          </ul>
          <p className="text-gray-500">
            Indeed, informing the broad public is a task resulting from the
            European Commission&apos;s own prerogatives at institutional level,
            as provided for in Article 58(2) of Council Regulation (EC, Euratom)
            No 2018/1046 of 18 July 2018 on the financial rules applicable to
            the general budget of the European Communities (OJ L 193, 30.7.2018,
            p. 1). We ensure that adequate and specific safeguards are
            implemented for the processing of personal data, in line with the
            applicable data protection legislation.
          </p>
          <ul className="list-disc pl-5 text-blue-gray-600 text-base font-medium">
            <li>
              Article 5(1)(d) of Regulation (EU) 2018/1725: for the processing
              activities consisting in feedback forms, cookies, subscriptions,
              registrations and authentication measures, your consent is
              necessary. In compliance with Article 3(15) and Article 7 of
              Regulation (EU) 2018/1725, the consent must be freely given,
              specific, informed and unambiguous. We have obtained your consent
              directly from you. You may have expressed it by an email,
              submitted via e-registration form, or in any other written form.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "4. Which personal data do we collect and further process?",
      content: (
        <>
          <p className="text-gray-500">
            In order to carry out this processing operation, the Europeana
            Foundation, on behalf of the Commission, collects the following
            categories of personal data:
          </p>
          <ul className="list-disc pl-5 text-blue-gray-600 text-base font-medium">
            <li>
              Internet Protocol address (IP address) or the device ID of the
              device used to access the website.
            </li>
          </ul>
          <p className="text-gray-500">
            Without this processing you will not be able to establish a
            technical connection between your devices and the server
            infrastructure and therefore will not be able to access our
            websites.
            <br />
            <br />
            In order for you to authenticate on
            <a
              href="https://www.europeana.eu/"
              target="_blank"
              className="mx-1 text-blue-800"
              rel="noopener noreferrer"
            >
              https://www.europeana.eu/
            </a>
            , the Europeana Foundation, on behalf of the Commission, collects
            the following categories of personal data:
          </p>
          <ul className="list-disc pl-5 text-blue-gray-600 text-base font-medium">
            <li>E-mail address and password;</li>
            <li>Username.</li>
          </ul>
          <p className="text-gray-500">
            In order for you to use our feedback form, the Europeana Foundation,
            on behalf of the Commission, collects the following categories of
            personal data:
          </p>
          <ul className="list-disc pl-5 text-blue-gray-600 text-base font-medium">
            <li>E-mail address;</li>
            <li>Comment.</li>
          </ul>
        </>
      ),
    },
    {
      title: "5. How long do we keep your personal data?",
      content: (
        <>
          <p className="text-gray-500">
            The Europeana Foundation, on behalf of the Commission, only keeps
            your personal data for the time necessary to fulfil the purpose of
            collection or further processing, namely for the duration of the
            browsing session. In addition, IP addresses might be saved for one
            year in the log files of the services for security reasons. As to
            the analytics tool, the IP address and the device ID (e.g. IMEI
            number and WIFI MAC address) are deleted immediately at
            disconnection.
            <br />
            <br />
            Personal data collected through Matomo is retained for 13 months. As
            to the feedback form, data is kept for 2 years from the moment the
            form is submitted.
          </p>
        </>
      ),
    },
    {
      title: "6. How do we protect and safeguard your personal data?",
      content: (
        <>
          <p className="text-gray-500">
            All personal data in electronic format (e-mails, documents,
            databases, uploaded batches of data, etc.) are stored on the servers
            of the Europeana Foundation All processing operations are carried
            out pursuant to the
            <a
              href="#"
              target="_blank"
              className="mx-1 text-blue-800"
              rel="noopener noreferrer"
            >
              Commission Decision (EU, Euratom) 2017/46 of 10 January 2017
            </a>{" "}
            on the security of communication and information systems in the
            European Commission.
            <br />
            <br />
            The Europeana Foundation is bound by a specific contractual clause
            for any processing operations of your data on behalf of the
            Commission, and by the confidentiality obligations deriving from the
            transposition of the General Data Protection Regulation in the EU
            Member States
            <br />
            (‘GDPR’{" "}
            <a
              href="#"
              target="_blank"
              className="mx-1 text-blue-800"
              rel="noopener noreferrer"
            >
              Regulation (EU) 2016/679
            </a>{" "}
            ).
            <br />
            <br />
            In order to protect your personal data, the Commission has put in
            place a number of technical and organisational measures. Technical
            measures include appropriate actions to address online security,
            risk of data loss, alteration of data or unauthorised access, taking
            into consideration the risk presented by the processing and the
            nature of the personal data being processed. Organisational measures
            include restricting access to the personal data solely to authorised
            persons with a legitimate need to know for the purposes of this
            processing operation.
          </p>
        </>
      ),
    },
  ]

  return (
    <section className="flex flex-col gap-[50px] mx-auto pt-[50px] pb-[100px] px-[20px]">
      <div className="flex flex-col gap-[30px]">
        <h1 className="text-3xl font-bold text-left">TERMS OF USE</h1>
        <p className="text-gray-500">
          This privacy statement applies to the Europeana website
          <a
            href="https://www.europeana.eu"
            target="_blank"
            className="mx-1 text-blue-800"
            rel="noopener noreferrer"
          >
            https://www.europeana.eu
          </a>
          , to{" "}
          <a
            href="https://pro.europeana.eu"
            target="_blank"
            className="mx-1 text-blue-800"
            rel="noopener noreferrer"
          >
            https://pro.europeana.eu
          </a>
          and to the content displayed on these URLs. Please note that only the
          English version of these terms should be considered legally valid. We
          take no legal responsibility for any differences or discrepancies
          created in the translations of these terms.
          <br />
          <br />
          Processing operation
          <br />
          Processing of personal data on
          <a
            href="https://www.europeana.eu"
            target="_blank"
            className="mx-1 text-blue-800"
            rel="noopener noreferrer"
          >
            https://www.europeana.eu
          </a>{" "}
          and{" "}
          <a
            href="https://pro.europeana.eu"
            target="_blank"
            className="mx-1 text-blue-800"
            rel="noopener noreferrer"
          >
            https://pro.europeana.eu
          </a>
          , including IP addresses, by visitors of the publicly available
          websites.
          <br />
          <br />
          Data Controller
          <br />
          European Commission, Directorate-General for Communications Networks,
          Content and Technology (DG CNECT), Directorate G, Unit G2
          <br />
          <br />
          Data Processor
          <br />
          Europeana Foundation, Prins Willem-Alexanderhof 5, 2595 BE The Hague,
          The Netherlands,{" "}
          <a href="mailto:info@europeana.eu">info@europeana.eu</a>
          <br />
          <br />
          Record reference
          <br />
          DPR-EC-09706.2
        </p>
      </div>
      <hr />
      <div className="flex flex-col gap-[50px]">
        {sectionData.map((value, index) => (
          <div key={index} className="flex flex-col gap-[30px]">
            <h3 className="text-xl font-bold">{value.title}</h3>
            {value.content}
            {index < sectionData.length - 1 && <hr />}
          </div>
        ))}
      </div>
    </section>
  )
}
