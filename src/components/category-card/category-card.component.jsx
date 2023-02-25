import { Link } from "react-router-dom";
import {
  EarphonesThumbnail,
  HeadphonesThumbnail,
  SpeakersThumbnail,
} from "../../assets/shared/desktop/images";
import { CategoryCardContainer, CategoryName } from "./category-card.styles";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { ReactComponent as ArrowRight } from "../../assets/shared/desktop/icon-arrow-right.svg";

export const CATEGORY_TYPE_CLASSES = {
  earphones: EarphonesThumbnail,
  headphones: HeadphonesThumbnail,
  speakers: SpeakersThumbnail,
};

const CategoryCard = ({ category }) => {
  const { category: categoryName } = category;
  const route = `shop/${categoryName}`;
  const checkCategoryName = (categoryName) => {
    let categoryImg;
    switch (categoryName) {
      case "earphones":
        categoryImg = EarphonesThumbnail;
        break;
      case "headphones":
        categoryImg = HeadphonesThumbnail;
        break;
      default:
        categoryImg = SpeakersThumbnail;
    }
    return categoryImg;
  };

  return (
    <Link to={`/${route}`}>
      <CategoryCardContainer>
        <img src={checkCategoryName(categoryName)} alt={categoryName} />
        <CategoryName>
          <h6>{categoryName}</h6>
          <Button buttonType={BUTTON_TYPE_CLASSES.buttonThree}>
            Shop
            <ArrowRight />
          </Button>
        </CategoryName>
      </CategoryCardContainer>
    </Link>
  );
};

export default CategoryCard;
