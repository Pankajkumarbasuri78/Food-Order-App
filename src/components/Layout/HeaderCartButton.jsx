import React, { useContext } from 'react';

import classes from "./HeaderCartButton.module.css";
import { BsFillCartPlusFill } from 'react-icons/bs';
import { CartContext } from '../../store/cartContext';

export const HeaderCartButton = (props) => {
    // const [btnBump, setBtnBump] = useState(false);

    const cartCtx = useContext(CartContext); //This component will be re-evaluated whenever the context changes

    const numberOfCartitems = cartCtx.items.reduce(
        (sum, item) => sum + item.amount,
        0
    );

    // const btnClasses = `${classes.button} ${
    //     btnBump === true ? classes.bump : ""
    // }`;

    // useEffect(() => {
    //     if (numberOfCartitems === 0) return;
    //     setBtnBump(true);
    //     const timer = setTimeout(() => {
    //         setBtnBump(false);
    //     }, 300);

    //     return () => {
    //         clearTimeout(timer);
    //     };
    // }, [numberOfCartitems]);


  return (
    <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
            <BsFillCartPlusFill />
            
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartitems}</span>
    </button>
  )
}
