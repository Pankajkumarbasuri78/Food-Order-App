import React from 'react'
import { Modal } from '../UI/Modal';
import classes from './Cart.module.css'


export const Cart = (props) => {
    const cartItems = (
    <ul className={classes['cart-items']}> 
        {[{id:'c1',name:'kajubarfi',amount:2,price: 14}].map((item) => (
            <li>{item.name}</li>
        ))}
        </ul>
        );


  return (
    <Modal onClose={props.onClose}>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>35.45</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
            <button className={classes.button}>Order</button>
        </div>

    </Modal>
  )
}
