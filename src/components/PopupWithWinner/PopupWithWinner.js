import React from 'react';
import ButtonSubmit from '../ButtonSubmit/ButtonSubmit';
import Popup from '../Popup/Popup';
import Title from '../Title/Title';
import classes from './PopupWithWinner.module.css';
import winnerCup from '../../images/winner-cup.png';

const PopupWithWinner = (props) => {

  return (
    <Popup>
      <img className={classes.popup__cup} src={winnerCup} alt='Кубок победителя' />
      <Title title={props.nameWinner} />
      <div className={classes.popup__buttonContainer}>
        <ButtonSubmit
          type='button'
          text='Новая игра'
        />
        <ButtonSubmit
          type='button'
          text='Выйти в меню'
          view='light'
        />
      </div>
    </Popup>
  )
}

export default PopupWithWinner;
