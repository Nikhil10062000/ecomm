import React from 'react'
import './App.css'
import Header from './Component/Header'
import Main from './Component/Main'
import Cart from './Component/Cart'
import {
  
  Routes,
  Route,
} from "react-router-dom";
const App = () => {
  
  
  return (
    <>
    <Header/>
    <Routes>
      <Route index element={<Main />} />
    <Route path="/cart" element={<Cart />}/>
    
    </Routes>
     
    </>
  )
}

export default App
