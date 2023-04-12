import React from 'react';
import classes from './GameHistoryPage.module.css';
import { gameHistory } from '../../utils/constants';
import GameHistory from '../GameHistory/GameHistory';
import Header from '../Header/Header';
import Title from '../Title/Title';
import Subtitle from '../Subtitle/Subtitle';

const GameHistoryPage = () => {
   return (
      <>
         <Header />
         <main className={classes.historyPage}>
            <div className={classes.historyPage__content}>
               <Title
                  title='История игр'
               />
               <div className={classes.historyPage__table}>
                  <Subtitle subtitle='Игроки' />
                  <Subtitle subtitle='Дата' />
                  <Subtitle subtitle='Время игры' />
                  {
                     gameHistory.map((game, index) => {
                        return <GameHistory
                           key={index}
                           userNameZero={game.zero}
                           userNameCross={game.cross}
                           gameDate={game.gameDate}
                           gameTime={game.gameTime}
                           isVictory={game.isVictory}
                        />
                     })
                  }
               </div>
            </div>
         </main>
      </>
   )
}

export default GameHistoryPage;