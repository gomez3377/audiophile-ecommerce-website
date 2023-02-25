import  {ReactComponent as CartIcon} from '../../assets/shared/desktop/icon-cart.svg'
import  {ReactComponent as Logo} from '../../assets/shared/desktop/logo.svg'
import { Outlet, Link } from 'react-router-dom'
import Footer from '../../components/footer/footer.component'
import CompanyMission from '../../components/company-mission/company-mission.component'
import { NavigationContainer } from './navigation.styles'


const Navigation = ({}) => {
  
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
      <CartIcon/>
      </NavigationContainer>
      <Outlet/>
     
      <CompanyMission/>
      <Footer/>
    </>
  )
}

export default Navigation