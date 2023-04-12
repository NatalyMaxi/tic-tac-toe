import React from 'react';
import classes from './User.module.css';
import ButtonSubmit from '../ButtonSubmit/ButtonSubmit';
import blocked from '../../images/blocked.png';
import SmileyIcon from '../SmileyIcon/SmileyIcon';

const User = (props) => {
   return (
      <>
         {props.isRatingPage &&
            <>
               <p className={classes.user}>{props.fullName}</p>
               <p className={classes.user}>{props.quantity}</p>
               <p className={`${classes.user} ${classes.user_type_victory}`}>{props.victory}</p>
               <p className={`${classes.user} ${classes.user_type_defeat}`}>{props.defeat}</p>
               <p className={classes.user}>{props.percent}</p>
            </>
         }

         {props.isActivePlayersPage &&
            <>
               <div className={classes.user__info}>
                  <p className={`${classes.user} ${classes.user_place_ActivePlayersPage}`}>{props.fullName}</p>
                  <div className={classes.user__container}>
                     {
                        props.active ?
                           (<div className={classes.user__item}>Свободен</div>)
                           :
                           (<div className={`${classes.user__item} ${classes.user__item_type_free}`}>В игре</div>)
                     }
                     <ButtonSubmit
                        text='Позвать играть'
                        type='button'
                        disabled={props.disabled}
                        view='short'
                     />
                  </div>
               </div>
            </>
         }

         {props.isPlayerListPage &&
            <>
               <p className={classes.user}>{props.fullName}</p>
               <p className={classes.user}>{props.age}</p>
               {
                  props.gender === 'man' &&
                  <SmileyIcon gender='man' size='small' />
               }
               {
                  props.gender === 'lady' &&
                  <SmileyIcon gender='lady' size='small' />
               }
               <p className={props.status ? `${classes.user__item} ${classes.user__item_type_blocked}` : `${classes.user__item} ${classes.user__item_type_unblocked}`}>
                  {props.status ? 'Заблокирован' : 'Активен'}
               </p>
               <p className={classes.user}>{props.dateCreation}</p>
               <p className={classes.user}>{props.dateChange}</p>
               {
                  props.status ?
                     (
                        <button
                           className={classes.user__button}
                           type='button'>
                           <span>Разблокировать</span>
                        </button>
                     )
                     :
                     (<button
                        className={classes.user__button}
                        type='button'>
                        <img
                           className={classes.user__icon}
                           src={blocked}
                           alt='Иконка блокировки'
                        />
                        <span>Заблокировать</span>
                     </button>)
               }
            </>
         }
      </>
   )
}

export default User;