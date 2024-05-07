import { ProductItem } from './ProductItem'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import { products } from './../../../mocks/data/products'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

export const GridItems = () => {
  const { searchTerm } = useParams()
  const [term, setTerm] = useState('')
  const [listProducts, setListProducts] = useState(products)

  useEffect(() => {
    let termNormalized = '' // Término normalizado sin '+' y en minúsculas
    let filteredProducts = products // Lista para los productos filtrados

    if (searchTerm) {
      termNormalized = searchTerm.replaceAll('+', ' ').toLowerCase() // Normaliza el término
      filteredProducts = products.filter(
        (p) => p.name.toLowerCase().includes(termNormalized) // Filtra por coincidencia parcial
      )
    }

    setTerm(termNormalized) // Actualiza el término
    setListProducts(filteredProducts) // Actualiza la lista de productos
  }, [searchTerm]) // Actualiza cuando cambie el término de búsqueda

  return (
    <>
      <h1 className="text-2xl self-start font-semibold italic indent-4">{ term ? `Resultados para: "${term}"` : 'Todos los productos' }</h1>
      <div className="grid grid-cols-5 place-items-center gap-2 min-w-[1050px]">
        {
          listProducts.map(({ brand, price, id, description, topSale, name }) => (
            <ProductItem
              key={ id }
              id={ id }
              brand={ brand }
              price={ price }
              description={ description }
              topSale={ topSale }
              name={ name }
            />
          ))
        }
      </div>
      <div className="flex items-center justify-center gap-[1px] pt-4">
        <div className="cursor-pointer w-12 h-12 border-2 flex items-center border-waikawa-gray-600 text-waikawa-gray-950 justify-center">
          <IoIosArrowBack className="w-6 h-6" />
        </div>
        <div className="font-bold text-2xl cursor-pointer w-12 h-12 border-2 flex items-center border-waikawa-gray-600 text-waikawa-gray-950 justify-center">
          1
        </div>
        <div className="font-bold text-2xl cursor-pointer w-12 h-12 border-2 flex items-center border-waikawa-gray-600 text-waikawa-gray-950 justify-center">
          2
        </div>
        <div className="font-bold text-2xl cursor-pointer w-12 h-12 border-2 flex items-center border-waikawa-gray-600 text-waikawa-gray-950 justify-center">
          3
        </div>
        <div className="cursor-pointer w-12 h-12 border-2 flex items-center border-waikawa-gray-600 text-waikawa-gray-950 justify-center">
          <IoIosArrowForward className="w-6 h-10" />
        </div>
      </div>
    </>
  )
}
