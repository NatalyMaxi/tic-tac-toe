import React from 'react';
import ButtonSubmit from '../ButtonSubmit/ButtonSubmit';
import classes from './Form.module.css';

const Form = ({ children, text, name, onSubmit, title, disabled }) => {
   return (
      <form
         className={classes.form}
         name={name}
         onSubmit={onSubmit}
      >
         <h2
            className={classes.form__title}>
            {title}
         </h2>
         <div className={classes.form__container}>
            {children}
         </div>
         <ButtonSubmit
            type='submit'
            text={text}
            disabled={disabled}
         />
      </form>
   )
}

export default Form;