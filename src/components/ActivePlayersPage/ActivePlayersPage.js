import React from 'react';
import classes from './ActivePlayersPage.module.css';
import Checkbox from '../Checkbox/Checkbox';
import { activeUsers } from '../../utils/constants';
import User from '../User/User';
import Title from '../Title/Title';

const ActivePlayersPage = () => {
  return (
    <main className={classes.activePlayersPage}>
      <div className={classes.activePlayersPage__content}>
        <div className={classes.activePlayersPage__items}>
          <Title title='Активные игроки' />
          <Checkbox />
        </div>
        <div className={classes.activePlayersPage__table}>
          {
            activeUsers.map((user, index) => {
              return <User
                key={index}
                fullName={user.fullName}
                active={user.free === true ? true : false}
                disabled={user.free === false ? true : false}
                isActivePlayersPage={true}
              />
            })
          }
        </div>
      </div>
    </main>
  )
}

export default ActivePlayersPage;
