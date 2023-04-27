import React, { useState } from 'react';
import './App.css';
import GameHistoryPage from '../GameHistoryPage/GameHistoryPage';
import ActivePlayersPage from '../ActivePlayersPage/ActivePlayersPage';
import RatingPage from '../RatingPage/RatingPage';
import { Route, Routes, Navigate } from 'react-router-dom';
import Main from '../Main/Main';
import Authorization from '../Authorization/Authorization';
import PlayerListPage from '../PlayerListPage/PlayerListPage';
import PopupAddUser from '../PopupAddUser/PopupAddUser';
import PopupWithWinner from '../PopupWithWinner/PopupWithWinner';
import ProtectedRoute from '../ProtectedRoute';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [currentUser, setCurrentUser] = useState({});
  return (
    <CurrentUserContext.Provider>
      <Routes>
        <Route
          path='/game'
          element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Main />
            </ProtectedRoute>
          }
        />
        <Route
          path='/rating'
          element={
            <ProtectedRoute loggedIn={loggedIn}>
              <RatingPage />
            </ProtectedRoute>
          }
        />
        <Route
          path='/active'
          element={
            <ProtectedRoute loggedIn={loggedIn}>
              <ActivePlayersPage />
            </ProtectedRoute>
          }
        />
        <Route
          path='/history'
          element={
            <ProtectedRoute loggedIn={loggedIn}>
              <GameHistoryPage />
            </ProtectedRoute>
          }
        />
        <Route
          path='/users'
          element={
            <ProtectedRoute loggedIn={loggedIn}>
              <PlayerListPage />
            </ProtectedRoute>
          }
        />
        <Route
          path='/signin'
          element={<Authorization />
          }
        />
        <Route
          path='/'
          element={<Navigate to='/game' replace />}
        />
      </Routes>
      <PopupAddUser />
      <PopupWithWinner />
    </CurrentUserContext.Provider>
  )
}

export default App;
