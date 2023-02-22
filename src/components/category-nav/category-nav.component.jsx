import CategoryCard from "../category-card/category-card.component"
import { nanoid } from "nanoid"
import { useContext } from "react"
import { ProductContext } from "../../context/product.context"

const CategoryNav = () => {

  const {categories} = useContext(ProductContext)
  
  return (
    <div className='category-nav-container'>
        {categories.map(category => <CategoryCard key={nanoid()} category={category}/>)}
      </div>
  )
}

export default CategoryNav