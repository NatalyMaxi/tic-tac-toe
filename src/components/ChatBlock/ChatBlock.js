import React from 'react';
import ChatForm from '../ChatForm/ChatForm';
import classes from './ChatBlock.module.css';

const ChatBlock = () => {
   return (
      <div className={classes.сhatBlock}>
         <ul className={classes.сhatBlock__items}>
            <li className={`${classes.сhatBlock__item} ${classes.сhatBlock__item_player_cross}`}>
               <div className={classes.сhatBlock__container}>
                  <p className={`${classes.сhatBlock__name} ${classes.сhatBlock__name_player_cross}`}>Плюшкина Екатерина</p>
                  <p className={classes.сhatBlock__time}>13:40</p>
               </div>
               <p className={classes.сhatBlock__message}>Ну что, готовься к поражению!!1</p>
            </li>
            <li className={`${classes.сhatBlock__item} ${classes.сhatBlock__item_player_zero}`}>
               <div className={classes.сhatBlock__container}>
                  <p className={`${classes.сhatBlock__name} ${classes.сhatBlock__name_player_zero}`}>Пупкин Владлен</p>
                  <p className={classes.сhatBlock__time}>13:41</p>
               </div>
               <p className={classes.сhatBlock__message}>Надо было играть за крестики. Розовый — мой не самый счастливый цвет</p>
            </li>
            <li className={`${classes.сhatBlock__item} ${classes.сhatBlock__item_player_zero}`}>
               <div className={classes.сhatBlock__container}>
                  <p className={`${classes.сhatBlock__name} ${classes.сhatBlock__name_player_zero}`}>Пупкин Владлен</p>
                  <p className={classes.сhatBlock__time}>13:45</p>
               </div>
               <p className={classes.сhatBlock__message}>Я туплю…</p>
            </li>
            <li className={`${classes.сhatBlock__item} ${classes.сhatBlock__item_player_cross}`}>
               <div className={classes.сhatBlock__container}>
                  <p className={`${classes.сhatBlock__name} ${classes.сhatBlock__name_player_cross}`}>Плюшкина Екатерина</p>
                  <p className={classes.сhatBlock__time}>13:47</p>
               </div>
               <p className={classes.сhatBlock__message}>Отойду пока кофе попить, напиши в тг как сходишь</p>
            </li>
         </ul>
         <ChatForm />
      </div>
   )
}

export default ChatBlock;