import React from 'react'
import classes from './Header.module.css';
import { HeaderCartButton } from './HeaderCartButton';



export const Header = (props) => {
  return (
    <React.Fragment>
        <header className={classes.header}>
            <h1>ReactBakery</h1>
            <HeaderCartButton />
        </header>
        <div className={classes["main-image"]}>
            <img src="meals.jpg" alt="A table full of delicious food" />
        </div>
    </React.Fragment>
  )
}
