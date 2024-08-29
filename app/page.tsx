import Image from "next/image"

import AdminPanelPagination from "@/components/custom-pagintaion"
import { ThemeColorToggle } from "@/components/theme-color-toggle"
import { ThemeModeToggle } from "@/components/theme-mode-toggle"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home({
  searchParams,
}: {
  searchParams: {
    page: string
  }
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p
          className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300
            bg-gradient-to-b from-zinc-200 pb-6 pt-8 text-primary
            backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit
            lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"
        >
          Get started by editing&nbsp;
          <code className="font-mono font-bold">app/page.tsx</code>
        </p>
        <div
          className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center gap-x-1
            bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static
            lg:size-auto lg:bg-none"
        >
          <ThemeColorToggle />
          <ThemeModeToggle />
        </div>
      </div>

      <div
        className="before:bg-gradient-radial after:bg-gradient-conic relative z-[-1] flex place-items-center
          before:absolute before:h-[300px] before:w-full
          before:-translate-x-1/2 before:rounded-full before:from-white
          before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20
          after:h-[180px] after:w-full after:translate-x-1/3 after:from-sky-200
          after:via-blue-200 after:blur-2xl after:content-['']
          before:dark:bg-gradient-to-br before:dark:from-transparent
          before:dark:to-primary before:dark:opacity-10 after:dark:from-sky-900
          after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px]
          sm:after:w-[240px] before:lg:h-[360px]"
      >
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32">
        <Card>
          <CardHeader>
            <CardTitle className="text-primary">Next.js Admin Panel</CardTitle>
            <CardDescription className="text-foreground">
              A Next.js Admin Panel Template with Tailwind CSS, TypeScript, and Shade-cn ui
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-between gap-5 flex-col">
            <div>
              <h3 className="text-lg font-semibold">Get Started</h3>
              <p>Get started by editing app/page.tsx</p>
            </div>
          </CardContent>
        </Card>
      </div>
      <AdminPanelPagination currentPage={searchParams.page} totalPages={19} />
    </main>
  )
}
