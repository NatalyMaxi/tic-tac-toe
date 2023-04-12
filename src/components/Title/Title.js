import React from 'react';
import classes from './Title.module.css';

const Title = (props) => {
   return (
      <p className={props.position ? `${classes.title} ${classes.title_type_center}` : `${classes.title}`}>
         {props.title}
      </p>
   )
}

export default Title;