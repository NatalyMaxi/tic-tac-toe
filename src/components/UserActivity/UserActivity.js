import React from 'react';
import classes from './UserActivity.module.css';
import ButtonSubmit from '../ButtonSubmit/ButtonSubmit';

const UserActivity = (props) => {
   return (
      <div className={classes.userActivity}>
         <p className={classes.userActivity__fullName}>{props.fullName}</p>
         <div className={classes.userActivity__container}>
            {
               props.active ?
                  (<div className={classes.userActivity__item}>Свободен</div>) :
                  (<div className={`${classes.userActivity__item} ${classes.userActivity__item_type_free}`}>В игре</div>)
            }
            <ButtonSubmit
               text='Позвать играть'
               type='button'
               disabled={props.disabled}
               view={true}
            />
         </div>
      </div>
   )
}

export default UserActivity;