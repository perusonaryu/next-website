import { FC } from 'react'

export const Footer: FC = () => {
  return (
    <>
      <footer className="absolute bottom-0 w-full">
        <div className="flex items-center justify-center bg-black text-white h-[60px]">
          <small>Copyright &copy; 2022 Active Creation Inc.</small>
        </div>
      </footer>
    </>
  )
}
