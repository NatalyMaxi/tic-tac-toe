import React from 'react';
import classes from './RatingPage.module.css';
import { users } from '../../utils/constants';
import User from '../User/User';
import Header from '../Header/Header';

const RatingPage = () => {
   return (
      <>
         <Header />
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
                        return <User
                           key={index}
                           fullName={user.fullName}
                           quantity={user.numberOfGames}
                           victory={user.victory}
                           defeat={user.defeat}
                           percent={user.percent}
                           isRatingPage={true}
                        />
                     })
                  }
               </div>
            </div>
         </main>
      </>
   )
}

export default RatingPage;