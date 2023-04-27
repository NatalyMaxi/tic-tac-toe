import React from 'react';
import classes from './CloseButton.module.css';

const CloseButton = ({ onClose }) => {

  return (
    <button
      className={classes.closeButton}
      type='button'
      onClick={onClose}
    />
  )
}

export default CloseButton;
