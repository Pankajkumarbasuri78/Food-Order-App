import React from 'react';
import classes from "./HeaderCartButton.module.css";
import { BsFillCartPlusFill } from 'react-icons/bs';


export const HeaderCartButton = (props) => {
  return (
    <button className={classes.button}>
        <span className={classes.icon}>
            <BsFillCartPlusFill />
            
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>3</span>
    </button>
  )
}
