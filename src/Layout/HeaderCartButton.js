import React from "react";
import classes from './HeaderCartButton.module.css';
import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = (props) =>{
    return <button className={classes.button}>
     <span>
        <CartIcon className={classes.icon}/>
     </span>
     <span className={classes.badge}>Your Cart</span>
     <span>3</span>
    </button>
}
export default HeaderCartButton;