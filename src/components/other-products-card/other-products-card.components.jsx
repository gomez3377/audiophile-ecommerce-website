import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../button/button.component'
import DesktopImage from '../desktop-image/desktop-image.component'
import { OtherProductsContainer, OtherProductsImage } from './other-products-card.styles'

const OtherProductsCard = ({otherProducts}) => {



    const {name, slug, image} = otherProducts
  
  const navigate = useNavigate()

  const navigationHandler = () => navigate(slug)
  
    return (
    <OtherProductsContainer>
       <OtherProductsImage name={name} image={image.desktop} />
       <h5>{name}</h5>
       <Button onClick={navigationHandler}>See Product</Button>
        </OtherProductsContainer>
  )
}

export default OtherProductsCard