import React from 'react';

import Button from '../../UI/Button/Button';
import Aux from '../../../hoc/Auxs';

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: 'capitalize' }}>{igKey}</span> : {props.ingredients[igKey]}{' '}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A Delicious burger with the following ingredients :</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total Price : {props.price.toFixed(2)}</strong>
      </p>
      <p>Continue to Checkout ?</p>
      <Button btnType='Danger' clicked={props.purchaseCanceled}>
        CANCEL
      </Button>
      <Button btnType='Success' clicked={props.purchaseContinued}>
        CONTINUE
      </Button>
    </Aux>
  );
};

export default orderSummary;
