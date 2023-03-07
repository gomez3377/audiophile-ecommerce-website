import { nanoid } from 'nanoid'
import OtherProductsCard from '../other-products-card/other-products-card.components'
import { OtherProductsNav } from './other-products.styles'

const OtherProductsNavBar = ({otherProducts}) => {
  return (
    <OtherProductsNav>
        {otherProducts.map(product => <OtherProductsCard key={nanoid()} otherProducts={product} />)}

    </OtherProductsNav>
  )
}

export default OtherProductsNavBar