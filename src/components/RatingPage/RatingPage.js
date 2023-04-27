import React from 'react';
import classes from './RatingPage.module.css';
import { users } from '../../utils/constants';
import User from '../User/User';
import Header from '../Header/Header';
import Title from '../Title/Title';
import Subtitle from '../Subtitle/Subtitle';

const RatingPage = () => {
  return (
    <>
      <Header />
      <main className={classes.ratingPage}>
        <div className={classes.ratingPage__content}>
          <Title title='Рейтинг игроков' />
          <div className={classes.ratingPage__table}>
            <Subtitle subtitle='ФИО' />
            <Subtitle subtitle='Всего игр' />
            <Subtitle subtitle='Победы' />
            <Subtitle subtitle='Проигрыши' />
            <Subtitle subtitle='Процент побед' />
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
