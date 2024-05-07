import { Routes, Route } from 'react-router-dom'
import { ShopLayout } from './pages/shop/ShopLayout'
import { Login } from './pages/login/Login'
import { Register } from './pages/register/Register'

export const App = () => {
  return (
    <Routes>
      <Route path="/shop/*" element={ <ShopLayout /> }/>
      <Route path="/login" element={ <Login /> } />
      <Route path="/register" element={ <Register /> } />
    </Routes>
  )
}
