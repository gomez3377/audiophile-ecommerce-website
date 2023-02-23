import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Category from '../category/category.component'

const Shop = () => {

    
  return (
    <Routes>

        <Route path=":category" element={<Category/>}/>
        </Routes>
  )
}

export default Shop