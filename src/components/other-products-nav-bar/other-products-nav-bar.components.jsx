import { nanoid } from 'nanoid'
import OtherProductsCard from '../other-products-card/other-products-card.components'

const OtherProductsNavBar = ({otherProducts}) => {
  return (
    <div className='other-products-nav-bar'>
        {otherProducts.map(product => <OtherProductsCard key={nanoid()} otherProducts={product} />)}

    </div>
  )
}

export default OtherProductsNavBar