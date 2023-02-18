import  {ReactComponent as CartIcon} from '../assets/shared/desktop/icon-cart.svg'
import { Outlet } from 'react-router-dom'

const Navigation = () => {
  return (
    <>
    <div className='navigation'>
        <img src="" alt="logo" />
        <ul>
          <li>Home</li>
          <li>Headphones</li>
          <li>Speakers</li>
          <li>Earphones</li>
        </ul>
      <CartIcon/>
      </div>
      <Outlet/>
    </>
  )
}

export default Navigation