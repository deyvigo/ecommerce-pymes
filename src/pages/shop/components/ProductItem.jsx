import { Star } from './Star'
import PropTypes from 'prop-types'
import { CiCirclePlus } from 'react-icons/ci'
import { useState } from 'react'
import { useStoreCarShoping } from './../hooks/useStoreCarShoping'

const OnHover = ({ data }) => {
  const { inc, addProduct } = useStoreCarShoping()

  const handleAddProduct = () => {
    const product = {
      brand: data.brand,
      id: data.id,
      name: data.name,
      price: data.price,
      quantity: 1
    }
    addProduct(product)
    inc()
  }

  return (
    <div className="absolute top-0 flex items-center justify-center w-[200px] h-[250px] rounded-lg opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100">
      <div className="absolute top-0 left-0 w-full h-full bg-waikawa-gray-600 opacity-40 rounded-lg" />
      <div className="relative z-0 flex items-center justify-center w-full h-full">
        <button
          onClick={ handleAddProduct }
        >
          <CiCirclePlus className="w-[70px] h-[70px] z-10 fill-waikawa-gray-950 opacity-100" />
        </button>
      </div>
    </div>
  )
}

export const ProductItem = ({ brand, price, id, description, topSale, name }) => {
  const [isEnter, setIsEnter] = useState(false)
  return (
    <section
      onMouseEnter={() => setIsEnter(true)}
      onMouseLeave={() => setIsEnter(false)}
      className="relative w-[200px] rounded-lg h-full flex flex-col items-center gap-2 justify-center overflow-hidden"
    >
      { isEnter && <OnHover data={ { brand, price, id, description, topSale, name } } /> }
      { topSale && <Star /> }
      <img
        className="w-[200px] h-[250px] rounded-lg shadow-md shadow-black object-contain"
        src={`/${id}.jpg`}
        alt={`Imagen de ${name}`}
      />
      <div className="flex flex-row justify-between w-[180px] items-center">
        <div>
          <h1 className="text-sm font-medium">{ name }</h1>
          <h1 className="text-xs">{ brand }</h1>
        </div>
        <h1 className="text-lg font-bold w-[60px] text-end">{ `S/ ${price}` }</h1>
      </div>
    </section>
  )
}

OnHover.propTypes = {
  data: PropTypes.object
}

ProductItem.propTypes = {
  brand: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.number,
  description: PropTypes.string,
  topSale: PropTypes.bool,
  name: PropTypes.string
}
