import React from 'react';

const UserRating = (props) => {
   return (
      <>
         <p className={props.className}>{props.fullName}</p>
         <p className={props.className}>{props.quantity}</p>
         <p className={`${props.className} ${props.classNameVictory}`}>{props.victory}</p>
         <p className={`${props.className} ${props.classNameDefeat}`}>{props.defeat}</p>
         <p className={props.className}>{props.percent}</p>
      </>
   )
}

export default UserRating;