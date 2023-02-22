import  {ReactComponent as CartIcon} from '../../assets/shared/desktop/icon-cart.svg'
import  {ReactComponent as Logo} from '../../assets/shared/desktop/logo.svg'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/footer/footer.component'
import CompanyMission from '../../components/company-mission/company-mission.component'
import { NavigationContainer } from './navigation.styles'


const Navigation = ({}) => {
  
  return (
    <>
    <NavigationContainer>
       <Logo />
        <ul>
          <li>Home</li>
          <li>Headphones</li>
          <li>Speakers</li>
          <li>Earphones</li>
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