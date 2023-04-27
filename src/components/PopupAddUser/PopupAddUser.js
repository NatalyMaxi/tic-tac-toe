import React from 'react';
import ButtonSubmit from '../ButtonSubmit/ButtonSubmit';
import Popup from '../Popup/Popup';
import Input from '../Input/Input';
import Title from '../Title/Title';
import classes from './PopupAddUser.module.css';
import CloseButton from '../CloseButton/CloseButton';
import Label from '../Label/Label';
import RadioButton from '../RadioButton/RadioButton';

const PopupAddUser = ({isOpen, onClose}) => {
  return (
    <Popup
      isOpen={isOpen}
    >
      <CloseButton onClose={onClose} />
      <Title title='Добавьте игрока' />
      <form className={classes.popup__form}>
        <Label text='ФИО' name='name'>
          <Input
            name='fullName'
            placeholder='Иванов Иван Иванович'
            type="text"
            required
          />
        </Label>
        <div className={classes.popup__container}>
          <Label
            text='Возраст' name='age'>
            <Input
              name='age'
              placeholder='0'
              type="number"
              required
            />
          </Label>
          <Label text='Пол' name='gender'>
            <RadioButton />
          </Label>
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
