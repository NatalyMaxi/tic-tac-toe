import React from 'react';
import Input from '../Input/Input';
import classes from './ChatForm.module.css';
import arrowButton from '../../images/arrow-button.png'

const ChatForm = () => {
   return (
      <form className={classes.сhatForm}>
         <Input
            placeholder='Сообщение…'
         />
         <button className={classes.сhatForm__button}>
            <img src={arrowButton} alt='Кнопка' />
         </button>
      </form>
   )
}

export default ChatForm;