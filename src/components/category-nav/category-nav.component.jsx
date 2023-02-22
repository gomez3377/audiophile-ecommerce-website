import CategoryCard from "../category-card/category-card.component"
import { nanoid } from "nanoid"
import { useContext } from "react"
import { ProductContext } from "../../context/product.context"
import { CategoryNavContainer } from "./category-nav.styles"

const CategoryNav = () => {

  const {categories} = useContext(ProductContext)



  
  
  return (
    <CategoryNavContainer>
        {categories.map(category => <CategoryCard key={nanoid()} category={category}/>)}
      </CategoryNavContainer>
  )
}

export default CategoryNav