import PropTypes from 'prop-types'
import { RxCross2 } from 'react-icons/rx'
import { useStoreCarShoping } from './../hooks/useStoreCarShoping'

export const ShopingCarItem = ({ quantity, name, id, price }) => {
  const { dec, deleteProduct } = useStoreCarShoping()

  const handleDelete = () => {
    dec(quantity)
    deleteProduct(id)
  }
  return (
    <>
      <li className="w-full inline-flex justify-between items-center py-3 px-4 text-sm font-medium text-gray-800 gap-2">
        <h1 className="w-[20px]">{ quantity }</h1>
        <p className="w-[50px]">{ name }</p>
        <h1 className="w-[50px] font-bold">S/ { price }</h1>
        <div
          onClick={ handleDelete }
          className="w-[20px] h-full cursor-pointer flex items-center justify-center"
        >
          <RxCross2 className="w-[20px] h-[20px] font-bold" />
        </div>
      </li>
      <hr className="w-[90%]"/>
    </>
  )
}

ShopingCarItem.propTypes = {
  quantity: PropTypes.number,
  name: PropTypes.string,
  id: PropTypes.number,
  price: PropTypes.number
}
