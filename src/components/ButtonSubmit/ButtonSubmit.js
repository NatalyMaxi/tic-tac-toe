import React from 'react';
import classes from './ButtonSubmit.module.css';

const ButtonSubmit = ({ text, disabled, view, ...rest }) => {
   return (
      <>
         {
            view === 'short' ?
               (
                  <button
                     className={disabled ?
                        `${classes.button} ${classes.button_type_light}`
                        :
                        `${classes.button}`}
                     {...rest}>
                     {text}
                  </button>
               )
               :
               view === 'light' ?
                  (
                     <button
                        className={`${classes.button} ${classes.button_type_light}`}
                        {...rest}>
                        {text}
                     </button>
                  )
                  :
                  (
                     <button
                        className={disabled ?
                           `${classes.button} ${classes.button_type_lightBig}`
                           :
                           `${classes.button}`}
                        {...rest}>
                        {text}
                     </button>
                  )
         }
      </>
   )
}

export default ButtonSubmit;