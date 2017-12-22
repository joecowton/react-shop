import React, { Component } from 'react';

export class Checkout extends Component {
  render () {
    return (
      <div id="my-basket">
        <div>
          <h1>Checkout</h1>
        </div>
        <div className="item-list">
          <h3>Success! Your items are on there way!</h3>
        </div>
      </div>
    );
  }
}
