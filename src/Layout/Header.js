import { Fragment } from "react";
import mealsImage from '../assets/meals.jpg';
// import HeaderCartButton from "./HeaderCartButton";
import classes from './Header.module.css';
const Header = props =>{
    return (<Fragment>
        <header className={classes.header}>
            <h1> ReactMeals</h1>
            {/* <HeaderCartButton /> */}
            <button style={{zIndex:1000 , position:'relative' ,color:'blue' , width:'10rem' ,height:'10rem'}} > add button </button>
        </header>
              <div className={classes['main-image']}>
              <img  src={mealsImage} alt=" A table full of delicious food!"/>
               </div>
    </Fragment>
    )
}
export default Header;