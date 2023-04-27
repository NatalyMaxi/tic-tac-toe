import React, { useState } from 'react';
import './App.css';
import GameHistoryPage from '../GameHistoryPage/GameHistoryPage';
import ActivePlayersPage from '../ActivePlayersPage/ActivePlayersPage';
import RatingPage from '../RatingPage/RatingPage';
import { Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import Main from '../Main/Main';
import Authorization from '../Authorization/Authorization';
import PlayerListPage from '../PlayerListPage/PlayerListPage';
import PopupAddUser from '../PopupAddUser/PopupAddUser';
import Header from '../Header/Header';
import PopupWithWinner from '../PopupWithWinner/PopupWithWinner';
import ProtectedRoute from '../ProtectedRoute';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function App() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(true);
  const [currentUser, setCurrentUser] = useState({});
  const [isAddUserPopupOpen, setIsAddUserPopupOpen] = useState(false);
  const [isWithWinnerPopupOpen, setIsWithWinnerPopupOpen] = useState(false);

  const handleAddUserClick = () => {
    setIsAddUserPopupOpen(true)
  }

  const handleWithWinnerPopupOpen = () => {
    setIsWithWinnerPopupOpen(true)
  }

  const closeAllPopups = () => {
    setIsAddUserPopupOpen(false)
    setIsWithWinnerPopupOpen(false)
  };

  const onSignOut = () => {
    localStorage.clear();
    navigate('/signin');
    setLoggedIn(false);
    setCurrentUser({});
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header
        onSignOut={onSignOut}
        loggedIn={loggedIn}
      />
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
              <PlayerListPage
                onAddUser={handleAddUserClick}
              />
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
      <PopupAddUser
        isOpen={isAddUserPopupOpen}
        onClose={closeAllPopups}
      />
      <PopupWithWinner
        isOpen={isWithWinnerPopupOpen}
        onClose={closeAllPopups}
      />
    </CurrentUserContext.Provider>
  )
}

export default App;
