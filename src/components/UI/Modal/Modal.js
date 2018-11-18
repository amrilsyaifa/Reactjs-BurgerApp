import React from 'react';
import AUX from '../../../hoc/Auxs';
import Backdrop from '../Backdrop/Backdrop';

import classes from './Modal.css';

const modal = (props) => (
  <AUX>
    <Backdrop show={props.show} clicked={props.modalClose} />
    <div
      className={classes.Modal}
      style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0',
      }}
    >
      {props.children}
    </div>
  </AUX>
);

export default modal;
