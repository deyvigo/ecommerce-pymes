import { Routes, Route } from 'react-router-dom'
import { GridItems } from './components/GridItems'
import { NavBar } from './components/NavBar'

export const ShopLayout = () => {
  return (
    <>
      <div className="flex flex-col gap-8 pt-2 items-center">
        <NavBar />
        <Routes>
          <Route path="/" element={ <GridItems /> }/>
          <Route path="/:searchTerm" element={ <GridItems /> }/>
        </Routes>
      </div>
    </>
  )
}
