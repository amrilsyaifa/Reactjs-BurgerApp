import React, { Component } from 'react';

import Aux from '../../hoc/Auxs';
import Burger from '../../components/Layout/Burger/Burger';

class BurgerBuilder extends Component {
  render() {
    return (
      <Aux>
        <Burger />
        <div>Build Control</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
