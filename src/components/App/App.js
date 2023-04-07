import React from 'react';
import './App.css';
import GameHistoryPage from '../GameHistoryPage/GameHistoryPage';
import ActivePlayersPage from '../ActivePlayersPage/ActivePlayersPage';
import RatingPage from '../RatingPage/RatingPage';
import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import Authorization from '../Authorization/Authorization';
import PlayerListPage from '../PlayerListPage/PlayerListPage';
import Popup from '../Popup/Popup';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/game' element={<Main />} />
        <Route path='/rating' element={<RatingPage />} />
        <Route path='/active' element={<ActivePlayersPage />} />
        <Route path='/history' element={<GameHistoryPage />} />
        <Route path='/users' element={<PlayerListPage />} />
        {/* Пока маршкрут надо самостоятельно ввести в браузерной строке */}
        <Route path='/authorization' element={<Authorization />} />
        <Route path='/popup' element={<Popup />} />
      </Routes>
    </div>
  )
}

export default App;
