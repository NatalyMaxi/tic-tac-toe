import React from 'react';
import ChatBlock from '../ChatBlock/ChatBlock';
import Header from '../Header/Header';
import InfoBlock from '../InfoBlock/InfoBlock';
import PlayingField from '../PlayingField/PlayingField';
import classes from './Main.module.css';

const Main = () => {
  return (
    <>
      <Header />
      <main className={classes.content}>
        <InfoBlock />
        <PlayingField />
        <ChatBlock />
      </main>
    </>
  )
}

export default Main;
