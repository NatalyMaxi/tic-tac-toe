import React from 'react';
import classes from './Popup.module.css';

const Popup = (props) => {
   return (
      <div
         className={classes.popup}
         popup={props.popup}
         name={props.name}
      >
         <div className={classes.popup__content}>
            {props.children}
         </div>
      </div>
   )
}

export default Popup;