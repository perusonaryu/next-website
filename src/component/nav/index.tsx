import { Burger } from '@mantine/core'
import Link from 'next/link'
import { FC, useState } from 'react'

export const PcNav: FC = () => {
  return (
    <ul className="hidden xs:flex xs:m-auto">
      <li className="text-sm">
        <Link href="/company" className="flex w-full h-full p-[22px]">
          会社概要
        </Link>
      </li>
      <li className="text-sm">
        <Link href="/contact" className="flex w-full h-full p-[22px]">
          お問い合わせ
        </Link>
      </li>
    </ul>
  )
}

export const SpNav: FC = () => {
  const [opened, setOpened] = useState(false)
  const burgerHandleClick = () => {
    setOpened((o) => !o)
  }
  return (
    <>
      <Burger
        className="z-20 block xs:hidden"
        color="#fff"
        opened={opened}
        onClick={() => setOpened((o) => !o)}
      />
      <div
        className={`fixed top-0 left-0 z-10  h-full w-full overflow-auto bg-black p-6 duration-300 ease-in-out xs:hidden hover:translate-x-0 ${
          opened ? 'left-0' : 'left-full'
        }`}
      >
        <ul className="mt-[109px]">
          <li className="text-sm">
            <Link
              href="/company"
              className="flex w-full h-full p-[22px]"
              onClick={burgerHandleClick}
            >
              会社概要
            </Link>
          </li>
          <li className="text-sm">
            <Link
              href="/contact"
              className="flex w-full h-full p-[22px]"
              onClick={burgerHandleClick}
            >
              お問い合わせ
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}
