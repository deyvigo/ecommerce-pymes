import { FiShoppingBag } from 'react-icons/fi'
import { useStoreCarShoping } from '../hooks/useStoreCarShoping'
import { useState } from 'react'
import { ShopingCarItem } from './ShopingCarItem'

const OnHoverCar = () => {
  const { carProducts } = useStoreCarShoping()

  return (
    <div className="absolute z-20 top-[40px] right-[45px] w-[250px] h-auto bg-waikawa-gray-300 rounded-lg flex flex-col items-center p-2">
      <ul className="flex items-center justify-center w-full flex-col">
        {
          carProducts.map(({ quantity = 1, name, id, price }) => (
            <ShopingCarItem
              key={ id }
              id={ id }
              quantity={ quantity }
              name={ name }
              price={ price }
            />
          ))
        }
      </ul>
      <h1 className="p-2">Total: <span className="font-bold">S/ { carProducts.reduce((acc, curr) => acc + curr.quantity * curr.price, 0) }</span></h1>
      <div
        className="cursor-pointer mb-2 p-2 bg-waikawa-gray-900 text-center rounded-lg w-[90%] font-bold"
      >
        Comprar
      </div>
    </div>
  )
}

export const ShopingCar = () => {
  const { count } = useStoreCarShoping()
  const [isHover, setIsHover] = useState(false)

  const handlerOnShopIconClick = () => {
    count >= 1 ? setIsHover(!isHover) : setIsHover(false)
  }

  return (
    <div className="relative">
      <button
        onClick={ handlerOnShopIconClick }
        className="flex items-center justify-center"
      >
        <FiShoppingBag className="w-10 h-10 text-waikawa-gray-950"/>
        <div className="absolute bg-waikawa-gray-500 w-6 h-6 top-[0px] right-[0px] rounded-full text-black flex items-center justify-center">
          <h1>{ count }</h1>
        </div>
      </button>
      { isHover && <OnHoverCar /> }
    </div>
  )
}
