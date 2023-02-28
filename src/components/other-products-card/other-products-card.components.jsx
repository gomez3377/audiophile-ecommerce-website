import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../button/button.component'
import DesktopImage from '../desktop-image/desktop-image.component'

const OtherProductsCard = ({otherProducts}) => {



    const {name, slug, image} = otherProducts
  
  const navigate = useNavigate()

  const navigationHandler = () => navigate(slug)
  
    return (
    <div className='other-products-container'>
       <DesktopImage name={name} image={image.desktop} />
       <h5>{name}</h5>
       <Button onClick={navigationHandler}>See Product</Button>
        </div>
  )
}

export default OtherProductsCard