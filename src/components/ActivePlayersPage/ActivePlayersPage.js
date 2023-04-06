import React from 'react';
import classes from './ActivePlayersPage.module.css';
import Checkbox from '../Checkbox/Checkbox';
import { activeUsers } from '../../utils/constants';
import UserActivity from '../UserActivity/UserActivity';

const ActivePlayersPage = () => {
   return (
      <main className={classes.activePlayersPage}>
         <div className={classes.activePlayersPage__content}>
            <div className={classes.activePlayersPage__items}>
               <h2 className={classes.activePlayersPage__title}>
                  Активные игроки
               </h2>
               <Checkbox />
            </div>
            <div className={classes.activePlayersPage__table}>
               {
                  activeUsers.map((user, index) => {
                     return <UserActivity
                        key={index}
                        fullName={user.fullName}
                        active={user.free === true ? true : false}
                        disabled={user.free === false ? true : false}
                     />
                  })
               }
            </div>
         </div>
      </main>
   )
}

export default ActivePlayersPage;