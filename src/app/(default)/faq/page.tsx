/**
 * @function FaqPage
 * @description FAQ 페이지
 * @returns {JSX.Element}
 */
export default function FaqPage(): JSX.Element {
  const faqs = [
    {
      title: "How do I order?",
      desc: "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game of life you need to appreciate every moment. A lot of people don't appreciate the moment until it's passed.",
    },
    {
      title: "How can i make the payment?",
      desc: "It really matters and then like it really doesn't matter. What matters is the people who are sparked by it. And the people who are like offended by it, it doesn't matter. Because it's about motivating the doers. Because I'm here to follow my dreams and inspire other people to follow their dreams, too. We're not always in the position that we want to be at.",
    },
  ]

  return (
    <section className="flex flex-col gap-[50px] mx-auto pt-[50px] pb-[100px] px-[20px]">
      <div className="flex flex-col gap-[30px]">
        <h1 className="text-3xl font-bold text-left">PRIVACY POLICY</h1>
        <p className="text-gray-500">
          A lot of people don&apos;t appreciate the moment until it&apos;s
          passed. I&apos;m not trying my hardest, and I&apos;m not trying to do.
        </p>
      </div>
      <div className="grid gap-10">
        {faqs.map(({ title, desc }) => (
          <div key={title}>
            <h3 className="text-xl font-bold">{title}</h3>
            <hr className="my-[20px]" />
            <p className="text-gray-500">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
