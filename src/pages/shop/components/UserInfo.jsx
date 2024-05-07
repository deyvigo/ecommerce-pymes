import { ShopingCar } from './ShopingCar'
import userIcon from './../../../mocks/img/user-icon.jpeg'

export const UserInfo = () => {
  return (
    <div className="flex w-[200px] items-center justify-center gap-2">
      <img
        src={userIcon}
        alt="user-icon"
        className="rounded-full w-12 h-12"
      />
      <h1 className="text-xl text-waikawa-gray-950">Chopper</h1>
      <ShopingCar />
    </div>
  )
}
