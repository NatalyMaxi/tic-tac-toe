import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

{/* <ul className={classes.nav__items}>
  <li className={classes.nav__item}><NavLink to='/game' className={navData => navData.isActive ? classes.nav__link_active : classes.nav__link}>Игровое поле</NavLink></li>
  <li className={classes.nav__item}><NavLink to='/rating' className={navData => navData.isActive ? classes.nav__link_active : classes.nav__link}>Рейтинг</NavLink></li>
  <li className={classes.nav__item}><NavLink to='/active' className={navData => navData.isActive ? classes.nav__link_active : classes.nav__link}>Активные игроки</NavLink></li>
  <li className={classes.nav__item}><NavLink to='/history' className={navData => navData.isActive ? classes.nav__link_active : classes.nav__link}>История игр</NavLink></li>
  <li className={classes.nav__item}><NavLink to='/users' className={navData => navData.isActive ? classes.nav__link_active : classes.nav__link}>Список игроков</NavLink></li> */}
