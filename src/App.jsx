
import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Category from "./routes/category/category.component";
import ProductPage from "./routes/product-page/product-page.component";
import Checkout from "./routes/checkout/checkout.component";
import { Theme } from "./Theme.styles";
import { GlobalStyle } from "./global-style.style";
const App = () => {
  return (
    <div>
        <Theme>
          <GlobalStyle/>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="/:category" element={<Category />} />
            <Route path="/:category/:product" element={<ProductPage />} />
            <Route path="checkout" element={<Checkout />} />
          </Route>
        </Routes>
    </Theme>
      </div>
  );
};

export default App;
