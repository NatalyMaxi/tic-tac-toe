import React from 'react';
import './App.css';
import Header from '../Header/Header';
import ActivePlayersPage from '../ActivePlayersPage/ActivePlayersPage';
//import RatingPage from '../RatingPage/RatingPage';
// import Main from '../Main/Main';
//import Authorization from '../Authorization/Authorization';

function App() {
  return (
    <div className="App">
      <Header />
      <ActivePlayersPage/>
      {/* <RatingPage/> */}
      {/* <Main /> */}
      {/* <Authorization/> */}
    </div>
  )
}

export default App;
