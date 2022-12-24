import Link from 'next/link'
import { FC } from 'react'

export const Header: FC = () => {
  return (
    <>
      <header className="fixed flex items-center justify-items-center h-[70px] w-full z-20 bg-black text-white px-9">
        <h1 className="text-2xl">
          <Link href="/">HAKU</Link>
        </h1>
        <ul className="flex m-auto">
          {/* <li className="text-sm p-[22px]">
            <Link href="/blog">ブログ</Link>
          </li> */}
          <li className="text-sm p-[22px]">
            <Link href="/company">会社概要</Link>
          </li>
          <li className="text-sm p-[22px]">
            <Link href="/contact">お問い合わせ</Link>
          </li>
        </ul>
        <div className="flex font-bold">
          <p className="mr-2.5">JP</p>
          <p className="mr-2.5">EN</p>
        </div>
      </header>
    </>
  )
}
