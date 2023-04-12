import React from 'react';
import classes from './Label.module.css';

const Label = ({ children, name, text, ...rest }) => {
   return (
      <label
         className={name === 'age' ?
            `${classes.label} ${classes.label_type_age}`
            :
            name === 'gender' ?
               `${classes.label} ${classes.label_type_gender}`
               :
               `${classes.label}`}
         text={text}
         name={name}
         {...rest}
      >{text}
         {children}
      </label>
   )
}

export default Label;