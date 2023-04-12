import React from 'react';
import Input from '../Input/Input';
import ButtonSubmit from '../ButtonSubmit/ButtonSubmit';
import classes from './Popup.module.css';
import man from '../../images/man.png';
import lady from '../../images/lady.png';
import Title from '../Title/Title';

const Popup = () => {
   return (
      <div className={classes.popup}>
         <div className={classes.popup__content}>
            <button
               className={classes.popup__button}
               type='button'
            ></button>
            <Title title='Добавьте игрока' position='true' />
            <form className={classes.popup__form}>
               <label className={classes.popup__label}>ФИО
                  <Input
                     name='fullName'
                     placeholder='Иванов Иван Иванович'
                     type="text"
                     required
                  /></label>
               <div className={classes.popup__container}>
                  <label
                     className={`${classes.popup__label} ${classes.popup__label_type_age}`}>
                     Возраст
                     <Input
                        name='age'
                        placeholder='0'
                        type="number"
                        required
                     />
                  </label>
                  <label
                     className={`${classes.popup__label} ${classes.popup__label_type_gender}`}>
                     Пол
                     <div className={classes.popup__radioButtonContainer}>
                        <input
                           className={classes.popup__input}
                           type='radio'
                           name='radio-group'
                           id='lady' />
                        <label className={classes.popup__item} htmlFor="lady">
                           <img
                              src={lady}
                              alt='Смайлик лицо девушки'
                           />
                        </label>
                        <input
                           className={classes.popup__input}
                           type='radio'
                           id='man'
                           name='radio-group'
                        />
                        <label className={classes.popup__item} htmlFor='man'>
                           <img
                              src={man}
                              alt='Смайлик лицо мужчины'
                           />
                        </label>
                     </div>
                  </label>
               </div>
               <ButtonSubmit
                  type='submit'
                  text='Добавить'
               />
            </form>
         </div>
      </div>
   )
}

export default Popup;


// input: checked + label > img { }