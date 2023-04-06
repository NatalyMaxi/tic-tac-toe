import React from 'react';
import Input from '../Input/Input';
import classes from './ChatForm.module.css';

const ChatForm = () => {
   return (
      <form className={classes.сhatForm}>
         <Input
            name='message'
            placeholder='Сообщение…'
            type="text"
         />
         <button className={classes.сhatForm__button}>
         </button>
      </form>
   )
}

export default ChatForm;