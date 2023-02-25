import { useState } from 'react'
import { Route, Routes} from 'react-router-dom'
import Navigation from './routes/navigation/navigation.component'
import Home from './routes/home/home.component'
import Shop from './routes/shop/shop.component'
import Category from './routes/category/category.component'
import ProductPage from './routes/product-page/product-page.component'
const  App = () => {
 

  return (
    <div className="App">
      <Routes>
    <Route path='/' element={<Navigation/>}>
    <Route index element={<Home/>}  />
    <Route path="/:category" element={<Category/>}/>
    <Route path="/:category/:product" element={<ProductPage/>}/>
    
    </Route>
      </Routes>



    </div>
  )
}

export default App
