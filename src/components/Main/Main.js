import React from 'react';
import ChatBlock from '../ChatBlock/ChatBlock';
import InfoBlock from '../InfoBlock/InfoBlock';
import PlayingField from '../PlayingField/PlayingField';
import classes from './Main.module.css';

const Main = () => {
   return (
      <main className={classes.content}>
         <InfoBlock />
         <PlayingField />
         <ChatBlock />
      </main>
   )
}

export default Main;