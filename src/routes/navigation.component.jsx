import  {ReactComponent as CartIcon} from '../assets/shared/desktop/icon-cart.svg'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/footer.component'

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
      <Footer/>
    </>
  )
}

export default Navigation