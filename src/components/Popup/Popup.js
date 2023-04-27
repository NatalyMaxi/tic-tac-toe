import React from 'react';
import classes from './Popup.module.css';

const Popup = ({ isOpen, onClose, children }) => {
  const popupIsActive = isOpen ? `${classes.popup_active}` : '';

  return (
    <div
      className={`${classes.popup} ${popupIsActive}`}
      onClose={onClose}
    >
      <div className={classes.popup__content}>
        {children}
      </div>
    </div>
  )
}

export default Popup;
