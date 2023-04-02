import React from 'react';
import classes from './RatingPage.module.css';
import { users } from '../../utils/constants';
import UserRating from '../UserRating/UserRating';

const RatingPage = () => {
   return (
      <main className={classes.ratingPage}>
         <div className={classes.ratingPage__content}>
            <h2 className={classes.ratingPage__title}>
               Рейтинг игроков
            </h2>
            <div className={classes.ratingPage__table}>
               <p className={classes.ratingPage__subtitle}>ФИО</p>
               <p className={classes.ratingPage__subtitle}>Всего игр</p>
               <p className={classes.ratingPage__subtitle}>Победы</p>
               <p className={classes.ratingPage__subtitle}>Проигрыши</p>
               <p className={classes.ratingPage__subtitle}>Процент побед</p>
               {
                  users.map((user, index) => {
                     return <UserRating
                        key={index}
                        className={classes.ratingPage__subtitle}
                        fullName={user.fullName}
                        quantity={user.numberOfGames}
                        victory={user.victory}
                        defeat={user.defeat}
                        percent={user.percent}
                        classNameVictory={classes.ratingPage__subtitle_type_victory}
                        classNameDefeat={classes.ratingPage__subtitle_type_defeat}
                     />
                  })
               }
            </div>
         </div>
      </main>
   )
}

export default RatingPage;