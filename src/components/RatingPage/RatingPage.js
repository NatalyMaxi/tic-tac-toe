import React from 'react';
import classes from './RatingPage.module.css';
import { users } from '../../utils/constants';
import UserRating from '../UserRating/UserRating';

const RatingPage = () => {
   return (
      <main className={classes.ratingPageContent}>
         <div className={classes.ratingPageContent__container}>
            <h2 className={classes.ratingPageContent__title}>
               Рейтинг игроков
            </h2>
            <div className={classes.ratingPageContent__table}>
               <p className={classes.ratingPageContent__subtitle}>ФИО</p>
               <p className={classes.ratingPageContent__subtitle}>Всего игр</p>
               <p className={classes.ratingPageContent__subtitle}>Победы</p>
               <p className={classes.ratingPageContent__subtitle}>Проигрыши</p>
               <p className={classes.ratingPageContent__subtitle}>Процент побед</p>
               {
                  users.map((user, index) => {
                     return <UserRating
                        key={index}
                        className={classes.ratingPageContent__subtitle}
                        fullName={user.fullName}
                        quantity={user.numberOfGames}
                        victory={user.victory}
                        defeat={user.defeat}
                        percent={user.percent}
                        classNameVictory={classes.ratingPageContent__subtitle_type_victory}
                        classNameDefeat={classes.ratingPageContent__subtitle_type_defeat}
                     />
                  })
               }
            </div>
         </div>
      </main>
   )
}

export default RatingPage;