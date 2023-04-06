import React from 'react';
import classes from './Navigation.module.css';

const Navigation = () => {
   return (
      <nav className={classes.nav}>
         <ul className={classes.nav__items}>
            <li className={`${classes.nav__item} ${classes.nav__item_active}`}>Игровое поле</li>
            <li className={classes.nav__item}>Рейтинг</li>
            <li className={classes.nav__item}>Активные игроки</li>
            <li className={classes.nav__item}>История игр</li>
            <li className={classes.nav__item}>Список игроков</li>
         </ul>
      </nav>
   )
}

export default Navigation;

//   <li className={classes.nav__item}><NavLink to='/' className={navData => navData.isActive ? classes.nav__link_active : classes.nav__link}>Игровое поле</NavLink></li>
//             <li className={classes.nav__item}><NavLink to='/' className={navData => navData.isActive ? classes.nav__link_active : classes.nav__link}>Рейтинг</NavLink></li>
//             <li className={classes.nav__item}><NavLink to='/' className={navData => navData.isActive ? classes.nav__link_active : classes.nav__link}>Активные игроки</NavLink></li>
//             <li className={classes.nav__item}><NavLink to='/' className={navData => navData.isActive ? classes.nav__link_active : classes.nav__link}>История игр</NavLink></li>
//             <li className={classes.nav__item}><NavLink to='/' className={navData => navData.isActive ? classes.nav__link_active : classes.nav__link}>Список игроков</NavLink></li>