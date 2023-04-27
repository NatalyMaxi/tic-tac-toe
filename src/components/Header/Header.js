import React from 'react';
import classes from './Header.module.css';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import ExitButton from '../ExitButton/ExitButton';

const Header = () => {
  return (
    <section className={classes.header}>
      <Logo />
      <Navigation />
      <ExitButton />
    </section>
  )
}

export default Header;
