import {EarphonesThumbnail, HeadphonesThumbnail, SpeakersThumbnail} from '../../assets/shared/desktop/images'
import { CategoryCardContainer, CategoryName } from './category-card.styles'

export const CATEGORY_TYPE_CLASSES = {
  earphones: EarphonesThumbnail ,
  headphones: HeadphonesThumbnail,
  speakers: SpeakersThumbnail,
} 


const CategoryCard = ({category}) => {

  const {category: categoryName} = category
 
  const checkCategoryName = (categoryName) => {
    let categoryImg
    switch(categoryName){
      case 'earphones':
        categoryImg = EarphonesThumbnail;
        break;
      case 'headphones':
        categoryImg = HeadphonesThumbnail;
        break;
      default:
        categoryImg = SpeakersThumbnail    
    }
    return categoryImg
  }
 
  return (
    <CategoryCardContainer>
      <img src={checkCategoryName(categoryName)} alt={categoryName} />
      <CategoryName>
        <h6>
    {categoryName}

        </h6>
    <span className='subtitle'>Shop</span>
        
        </CategoryName>
     </CategoryCardContainer>
  )
}

export default CategoryCard