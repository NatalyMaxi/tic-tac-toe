import React from 'react';
import classes from './Input.module.css';

const Input = (props) => {
   return (
      <input
         className={classes.input}
         name={props.name}
         placeholder={props.placeholder}
         type={props.type}
      />

   )
}

export default Input;