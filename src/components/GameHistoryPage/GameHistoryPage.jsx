import React from 'react';
import classes from './GameHistoryPage.module.css';
import { gameHistory } from '../../utils/constants';
import GameHistory from '../GameHistory/GameHistory';

const GameHistoryPage = () => {
   return (
      <main className={classes.historyPage}>
         <div className={classes.historyPage__content}>
            <h2 className={classes.historyPage__title}>История игр</h2>
            <div className={classes.historyPage__table}>
               <p className={classes.historyPage__subtitle}>Игроки</p>
               <p className={classes.historyPage__subtitle}>Дата</p>
               <p className={classes.historyPage__subtitle}>Время игры</p>
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
   )
}

export default GameHistoryPage;