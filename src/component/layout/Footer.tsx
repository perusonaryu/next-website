import Image from 'next/legacy/image'
import Link from 'next/link'
import { FC } from 'react'

export const Footer: FC = () => {
  return (
    <>
      <footer>
        <div className="relative flex items-center justify-items-center h-[600px] w-full z-20 text-white px-9">
          <Image
            src="/top_image10.jpg"
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"
            className="absolute"
          />
          <ul className="flex m-auto z-10">
            <li className="text-sm p-[22px]">
              <Link href="/blog">ブログ</Link>
            </li>
            <li className="text-sm p-[22px]">
              <Link href="/news">お知らせ</Link>
            </li>
            <li className="text-sm p-[22px]">
              <Link href="/company">会社概要</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center bg-black text-white h-[60px]">
          <small>
            Copyright &copy; 2022 アクティブクリエイション株式会社 Inc.
          </small>
        </div>
      </footer>
    </>
  )
}
