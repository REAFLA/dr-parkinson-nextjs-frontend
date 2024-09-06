"use client"

import { Button, Typography } from "@material-tailwind/react"
import Link from "next/link"

export default function NotFoundPage() {
  return (
    <section className="flex flex-col items-center justify-center gap-[50px] mx-auto w-full h-screen">
      <Typography variant="h1" className="text-3xl xl:!text-5xl text-center">
        Error 404 <br /> It looks like something went wrong.
      </Typography>
      <Typography className="mx-auto xl:max-w-sm text-lg font-normal text-blue-gray-500 text-center">
        Don&apos;t worry, our team is already on it.Please try refreshing the
        page or come back later.
      </Typography>
      <Link href="/">
        <Button className="w-full xl:w-[400px]">Go back page</Button>
      </Link>
    </section>
  )
}
