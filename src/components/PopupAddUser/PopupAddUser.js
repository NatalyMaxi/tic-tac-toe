import React from 'react';
import ButtonSubmit from '../ButtonSubmit/ButtonSubmit';
import Popup from '../Popup/Popup';
import Input from '../Input/Input';
import Title from '../Title/Title';
import classes from './PopupAddUser.module.css';
import CloseButton from '../CloseButton/CloseButton';
import man from '../../images/man.png';
import lady from '../../images/lady.png';

const PopupAddUser = (props) => {
   return (
      <Popup
         popup="add"
         name="add-user"
      >
         <CloseButton />
         <Title title='Добавьте игрока' />
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
      </Popup>
   )
}

export default PopupAddUser;