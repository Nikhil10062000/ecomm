import React  from 'react'
import Product from './Product'
import { useDispatch  } from 'react-redux'


import {product , men ,women , electonics, jewelery} from '../redux/productaction'
import {Button } from 'react-bootstrap'
const Main = () => {
    const dispatch = useDispatch();
    
  return (
    <>
   <div className='mt-3'>
   <Button variant="warning" className='me-3' onClick={()=>dispatch(product())}>PRODUCT</Button>
      <Button variant="warning"  className='me-3' onClick={()=>dispatch(men())}>MEN</Button>
      <Button variant="warning"  className='me-3' onClick={()=>dispatch(women())}>WOMEN</Button>
      <Button variant="warning"  className='me-3' onClick={()=>dispatch(electonics())}>ELECTRONICS</Button>
      <Button variant="warning"  className='me-3' onClick={()=>dispatch(jewelery())}>JEWELERY</Button>
   </div>
      <h4>FESTIVE SEASON ARRIVES !!
CHECK OUT ALL STORE
Trending Stuff</h4>
      <Product/>
    </>
  )
}

export default Main
