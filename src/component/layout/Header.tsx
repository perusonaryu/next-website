import Link from 'next/link'
import { FC } from 'react'
import { PcNav, SpNav } from 'src/component/nav'

export const Header: FC = () => {
  return (
    <>
      <header className="fixed flex items-center justify-between xs:justify-items-center h-[70px] w-full z-20 bg-black text-white px-5 xs:px-9">
        <h1 className="text-2xl">
          <Link href="/">KURABERU</Link>
        </h1>

        <PcNav />
        <SpNav />
      </header>
    </>
  )
}
