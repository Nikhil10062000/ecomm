import React from 'react'
import { useSelector , useDispatch} from 'react-redux'
import {Button } from 'react-bootstrap'
import {clear} from '../redux/action'
import { removecart } from '../redux/action'
const Cart = () => {
    const cart = useSelector((state)=> state.cart)
    const dispatch = useDispatch()
    const amount = cart.length && cart.map((item)=> item.price).reduce((prev , next)=> prev+next)
  return (
    <div><hr/>
       <Button variant="warning" onClick={()=>dispatch(clear())}>CLEAR CART</Button>
      <h4>Check Out Cart!</h4>
      <h6>Amount:{amount} </h6>
      <h6>Discount:{amount/10} </h6>
      <hr/>
      <h6>Total Amount: {amount- (amount/10)}</h6>
      <hr/>
      {
        cart.map((cart , id)=>{
            return (
                <div key={id} ><h4 >
                    {cart.title}
                </h4>
                <img style={{width:'200px' , height:'200px'}} src={cart.image} alt='product.jpg'/>
                <p>Price :{cart.price}</p>
                <Button variant="danger" onClick={()=>dispatch(removecart(cart.id))}>REMOVE</Button><hr/>
                </div>
                
            )
        })
      }
    </div>
  )
}

export default Cart
