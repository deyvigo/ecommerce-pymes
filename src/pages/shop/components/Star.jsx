import { FaStar } from 'react-icons/fa'

export const Star = () => {
  return (
    <div className="absolute w-[85px] h-[25px] rounded-tr-lg bg-waikawa-gray-400 top-0 -right-[60px] flex items-center hover:translate-x-[-60px] transition-all ease-in-out duration-300">
      <div className="w-[25px] h-[25px] flex items-center justify-center">
        <FaStar className="w-[15px] h-[15px] fill-[white]"/>
      </div>
      <h1 className="text-xs font-semibold">TOP SALE</h1>
    </div>
  )
}
