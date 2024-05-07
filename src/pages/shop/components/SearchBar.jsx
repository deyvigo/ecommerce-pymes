import { useNavigate } from 'react-router-dom'
import { useForm } from '../hooks/useForm'

export const SearchBar = () => {
  const { formState, onInputChange } = useForm('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formState.length <= 2) {
      navigate('/shop')
      return
    }
    const url = formState.replaceAll(' ', '+')
    navigate(`/shop/${url}`)
  }

  const handleOnFocus = (e) => {
    e.target.select()
  }

  return (
    <form
      onSubmit={ handleSubmit }
      className="flex-1 relative"
    >
      <input
        type="text"
        className="border-2 text-waikawa-gray-950 border-waikawa-gray-950 p-2 rounded-lg w-full outline-none"
        placeholder="Ingrese su búsqueda"
        onChange={ onInputChange }
        onFocus={ handleOnFocus }
        value={ formState }
      />
      <button
        className="text-waikawa-gray-700 absolute right-4 top-[10px]"
      >
        Buscar
      </button>
    </form>
  )
}
