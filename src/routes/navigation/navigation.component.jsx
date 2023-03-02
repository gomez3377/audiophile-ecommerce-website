
import  {ReactComponent as Logo} from '../../assets/shared/desktop/logo.svg'
import { Outlet, Link } from 'react-router-dom'
import Footer from '../../components/footer/footer.component'
import CompanyMission from '../../components/company-mission/company-mission.component'
import { NavigationContainer } from './navigation.styles'
import { useContext } from 'react'
import { ShopContext } from '../../context/shop.context'
import Cart from '../../components/cart/cart.component'
import CartIconContainer from '../../components/cart-icon-container/cart-icon-container.component'


const Navigation = ({}) => {
  const {cartSelected} = useContext(ShopContext)
  return (
    <>
    <NavigationContainer>
        
       <Logo />
        <ul>
        <li><Link to="/">Home</Link></li>
          <li><Link to="/headphones">Headphones</Link></li>
          <li><Link to="/speakers">Speakers</Link></li>
          <li><Link to="/earphones">Earphones</Link></li>
        </ul>
      <CartIconContainer />
      </NavigationContainer>
      {cartSelected && <Cart/> }
      <Outlet/>
     
      <CompanyMission/>
      <Footer/>
    </>
  )
}

export default Navigation