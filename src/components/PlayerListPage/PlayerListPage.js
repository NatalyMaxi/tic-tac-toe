import React from 'react';
import classes from './PlayerListPage.module.css';
import { users } from '../../utils/constants';
import Header from '../Header/Header';
import ButtonSubmit from '../ButtonSubmit/ButtonSubmit';
import User from '../User/User';

const PlayerListPage = () => {
   return (
      <>
         <Header />
         <main className={classes.listPlayers}>
            <div className={classes.listPlayers__content}>
               <div className={classes.listPlayers__container}>
                  <h2 className={classes.listPlayers__title}>Список игроков</h2>
                  <ButtonSubmit
                     text='Добавить игрока'
                     type='button'
                  />
               </div>
               <div className={classes.listPlayers__table}>
                  <p className={classes.listPlayers__subtitle}>ФИО</p>
                  <p className={classes.listPlayers__subtitle}>Возраст</p>
                  <p className={classes.listPlayers__subtitle}>Пол</p>
                  <p className={classes.listPlayers__subtitle}>Статус</p>
                  <p className={classes.listPlayers__subtitle}>Создан</p>
                  <p className={classes.listPlayers__subtitle}>Изменен</p>
                  <p className={classes.listPlayers__subtitle}></p>
                  {
                     users.map((user, index) => {
                        return <User
                           key={index}
                           fullName={user.fullName}
                           age={user.age}
                           gender={user.gender}
                           status={user.blocked}
                           dateCreation={user.dateCreation}
                           dateChange={user.dateChange}
                           isPlayerListPage={true}
                        />
                     })
                  }
               </div>
            </div>
         </main>
      </>
   )
}

export default PlayerListPage;