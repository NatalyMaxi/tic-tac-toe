import React from 'react';
import classes from './Header.module.css';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import ExitButton from '../ExitButton/ExitButton';

const Header = ({ onSignOut }) => {

  return (
    <section className={classes.header}>
      <Logo />
      <Navigation />
      <ExitButton
        onClick={onSignOut}
      />
    </section>
  )
}

export default Header;
