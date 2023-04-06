import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navigation.module.css';

const Navigation = () => {
   return (
      <nav className={classes.nav}>
         <ul className={classes.nav__items}>
            <li className={classes.nav__item}>
               <NavLink
                  to='/game'
                  className={navData => navData.isActive ? `${classes.nav__link} ${classes.nav__link_active}` : classes.nav__link}>
                  Игровое поле
               </NavLink>
            </li>
            <li className={classes.nav__item}>
               <NavLink
                  to='/rating'
                  className={navData => navData.isActive ? `${classes.nav__link} ${classes.nav__link_active}` : classes.nav__link}>
                  Рейтинг
               </NavLink>
            </li>
            <li className={classes.nav__item}>
               <NavLink
                  to='/active'
                  className={navData => navData.isActive ? `${classes.nav__link} ${classes.nav__link_active}` : classes.nav__link}>
                  Активные игроки
               </NavLink>
            </li>
            <li className={classes.nav__item}>
               <NavLink
                  to='/history'
                  className={navData => navData.isActive ? `${classes.nav__link} ${classes.nav__link_active}` : classes.nav__link}>
                  История игр
               </NavLink>
            </li>
            <li className={classes.nav__item}>
               <NavLink
                  to='/users'
                  className={navData => navData.isActive ? `${classes.nav__link} ${classes.nav__link_active}` : classes.nav__link}>
                  Список игроков
               </NavLink>
            </li>
         </ul>
      </nav>
   )
}

export default Navigation;

