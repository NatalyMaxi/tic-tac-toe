import React from 'react';
import classes from './IconCrossOrToe.module.css';
import cross from '../../images/cross.png';
import zero from '../../images/zero.png';
import smallCross from '../../images/cross-small.png';
import smallZero from '../../images/zero-small.png';

const IconCrossOrToe = (props) => {
  return (
    <>
      {
        props.cross && <img
          className={props.smallIcon ? `${classes.icon} ${classes.icon_type_small}` : props.littleIcon ? `${classes.icon} ${classes.icon_type_little}` : `${classes.icon}`}
          src={props.smallIcon || props.littleIcon ? `${smallCross}` : `${cross}`}
          alt='Крестик' />
      }
      {
        props.zero &&
        <img
          className={props.smallIcon ? `${classes.icon} ${classes.icon_type_small}` : props.littleIcon ? `${classes.icon} ${classes.icon_type_little}` : `${classes.icon}`}
          src={props.smallIcon || props.littleIcon ? `${smallZero}` : `${zero}`}
          alt='Нолик' />

      }
    </>
  )
}

export default IconCrossOrToe;

// import React from 'react';
// import classes from './IconCrossOrToe.module.css';
// import cross from '../../images/cross.png';
// import zero from '../../images/zero.png';
// import smallCross from '../../images/cross-small.png';
// import smallZero from '../../images/zero-small.png';

// const IconCrossOrToe = (props) => {
//    return (
//       <>
//          {
//             props.cross ?
//                (<img
//                   className={props.smallIcon ? `${classes.icon} ${classes.icon_type_small}` : props.littleIcon ? `${classes.icon} ${classes.icon_type_little}` : `${classes.icon}`}
//                   src={props.smallIcon || props.littleIcon ? `${smallCross}` : `${cross}`}
//                   alt='Крестик' />)
//                :
//                props.zero ?
//                   (<img
//                      className={props.smallIcon ? `${classes.icon} ${classes.icon_type_small}` : props.littleIcon ? `${classes.icon} ${classes.icon_type_little}` : `${classes.icon}`}
//                      src={props.smallIcon || props.littleIcon ? `${smallZero}` : `${zero}`}
//                      alt='Нолик' />)
//                   :
//                   (null)
//          }
//       </>
//    )
// }

// export default IconCrossOrToe;
