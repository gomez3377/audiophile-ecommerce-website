import { useState } from 'react'
import { Route, Routes} from 'react-router-dom'
import Navigation from './routes/navigation.component'
import Home from './routes/home.component'
const  App = () => {
 

  return (
    <div className="App">
      <Routes>
    <Route path='/' element={<Navigation/>}>
    <Route index element={<Home/>}  />
    </Route>
      </Routes>



    </div>
  )
}

export default App
