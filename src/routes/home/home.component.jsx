
import Hero from "../../components/hero/hero.component"
import CategoryNav from '../../components/category-nav/category-nav.component'
import PreviewCard from "../../components/preview-card/preview-card"
import { useContext } from "react"
import { ProductContext } from "../../context/product.context"
import NewProductHighlight from "../../components/new-product-highlight/new-product-highlight"



const Home = () => {
const {categories} = useContext(ProductContext)



  return (
    <div className="home-container">
        <Hero/>
      <NewProductHighlight/>
       <CategoryNav/>
    </div>
  )
}

export default Home