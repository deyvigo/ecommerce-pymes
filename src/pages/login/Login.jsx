import { NavLink, useNavigate } from 'react-router-dom'
import { Input } from '../components/Input'
import { useForm } from '../hooks/useForm'
import logImage from './../../mocks/img/tienda-virtual.png'

export const Login = () => {
  const { formState, onInputChange, sendForm } = useForm({
    username: '',
    password: ''
  })

  const { username, password } = formState
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    sendForm()
    navigate('/shop')
  }

  return (
    <div className="w-full p-0 h-full flex items-center justify-center gap-2">
      <div className="w-[400px] h-[500px] rounded-lg bg-waikawa-gray-500 flex items-center justify-center shadow-xl shadow-waikawa-gray-900">
        <img src={logImage} alt="" />
      </div>
        <div className="w-[450px] p-4 h-[500px] border-2 border-waikawa-gray-900 rounded-lg border-black flex flex-col items-center justify-center gap-4">
          <h1 className="text-2xl text-waikawa-gray-800">Inicia Sesión</h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-8 w-[300px] items-center"
          >
            <Input
              name="username"
              type="text"
              value={username}
              label="Usuario"
              onInputChange={onInputChange}
            />
            <Input
              name="password"
              type="password"
              value={password}
              label="Contraseña"
              onInputChange={onInputChange}
            />
            <div className="flex flex-col gap-2">
              <div className="w-full flex gap-2 justify-between items-center">
                <p>¿Olvidaste tu contraseña?</p>
                <div className="flex items-center justify-center gap-[1px]">
                  <input type="checkbox" id="remenber-input" name="remenber-input"/>
                  <label htmlFor="remenber-input">
                    Recordarme
                  </label>
                </div>
              </div>
              <button
                className="bg-waikawa-gray-800 rounded-lg p-2 w-full font-bold text-lg text-waikawa-gray-300"
              >
                Ingresar
              </button>
            </div>
          </form>
          <p className="flex gap-[1px]">
            ¿No tienes una cuenta?
            <NavLink
              className="text-waikawa-gray-800 font-bold"
              to="/register"
            >
              Crear
            </NavLink>
          </p>
        </div>
    </div>
  )
}
