import React from 'react';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.css';

const burger = (props) => {
  const tes = Object.keys(props.ingredients);
  console.log(tes);
  const transformIngredients = Object.keys(props.ingredients).map((igKey) => {
    return [ ...Array(props.ingredients[igKey]) ].map((_, i) => {
      return <BurgerIngredient key={igKey + i} type={igKey} />;
    });
  });
  console.log(transformIngredients);
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type='bread-top' />
      {transformIngredients}
      <BurgerIngredient type='bread-bottom' />
    </div>
  );
};

export default burger;
