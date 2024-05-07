import { CiShop } from 'react-icons/ci'
import { SearchBar } from './SearchBar'
import { UserInfo } from './UserInfo'

export const NavBar = () => {
  return (
    <nav className="w-[70dvw] h-[60px] p-2 flex gap-6 justify-between items-center min-w-[1000px]">
      <ul className="w-[200px]">
        <li className="flex items-center justify-center">
          <CiShop className="w-12 h-12 fill-waikawa-gray-700"/>
          <a href="#" className="flex items-center justify-center">
            <h1 className="indent-2 text-waikawa-gray-700 text-3xl italic font-bold">ecommerce</h1>
          </a>
        </li>
      </ul>
      <ul className="flex-1">
        <SearchBar />
      </ul>
      <ul className="w-[200px]">
        <UserInfo />
      </ul>
    </nav>
  )
}
