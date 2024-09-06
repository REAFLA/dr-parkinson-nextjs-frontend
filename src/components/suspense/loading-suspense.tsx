"use client"

import { Button } from "@material-tailwind/react"

export default function LoadingSuspense(): JSX.Element {
  return (
    <>
      <section className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white overflow-hidden">
        <Button
          variant="text"
          loading={true}
          className="loading-button !text-3xl font-medium"
        >
          Loading
        </Button>
      </section>
    </>
  )
}
