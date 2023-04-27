import React from 'react';
import classes from './PlayerListPage.module.css';
import { users } from '../../utils/constants';
import ButtonSubmit from '../ButtonSubmit/ButtonSubmit';
import User from '../User/User';
import Title from '../Title/Title';
import Subtitle from '../Subtitle/Subtitle';

const PlayerListPage = ({ onAddUser }) => {

  return (
    <main className={classes.listPlayers}>
      <div className={classes.listPlayers__content}>
        <div className={classes.listPlayers__container}>
          <Title
            title='Список игроков'
          />
          <ButtonSubmit
            text='Добавить игрока'
            type='button'
            onClick={onAddUser}
          />
        </div>
        <div className={classes.listPlayers__table}>
          <Subtitle subtitle='ФИО' />
          <Subtitle subtitle='Возраст' />
          <Subtitle subtitle='Пол' />
          <Subtitle subtitle='Статус' />
          <Subtitle subtitle='Создан' />
          <Subtitle subtitle='Создан' />
          <Subtitle subtitle='' />
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
  )
}

export default PlayerListPage;
