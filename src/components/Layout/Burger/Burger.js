import React from 'react';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.css';

const burger = (props) => {
  let transformIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      return [ ...Array(props.ingredients[igKey]) ].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((prev, next) => {
      // reduce berfungsi untuk menjumlahkan nilai array
      return prev.concat(next); //concat() adalah method yang digunakan untuk menggabungkan dua atau lebih array menjadi sebuah array.
    }, []);
  if (transformIngredients.length === 0) {
    transformIngredients = <p>Please Start Adding ingredients</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type='bread-top' />
      {transformIngredients}
      <BurgerIngredient type='bread-bottom' />
    </div>
  );
};

export default burger;
