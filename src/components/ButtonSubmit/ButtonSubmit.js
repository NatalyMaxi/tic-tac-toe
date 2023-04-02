import React from 'react';
import classes from './ButtonSubmit.module.css';

const ButtonSubmit = ({ text, disabled, view, ...rest }) => {
   return (
      <>
         {view ? (
            <button
               className={disabled ?
                  `${classes.button} ${classes.button_type_small} ${classes.button_type_small_disabled}` :
                  `${classes.button} ${classes.button_type_small}`}
               {...rest}>
               {text}
            </button>
         ) : (
            <button
               className={disabled ?
                  `${classes.button} ${classes.button_disabled}` :
                  `${classes.button}`}
               {...rest}>
               {text}
            </button>
         )}
      </>
   )
}

export default ButtonSubmit;