import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { ItemListDiv } from './ItemList';

class BasketHeader extends Component {
  render () {
    return (
      <div>
        <h1> Your Basket: </h1>
      </div>
    )
  }
}

class CheckoutButton extends Component {
  render () {
    return (
      <div>
        <Link to="/checkout"><input type="submit" className="checkout" value="CHECKOUT  >>" /></Link>
      </div>
    )
  }
}

export class MyBasketPage extends Component {
  renderBasketHeader () {
    return <BasketHeader />
  }

  renderItemListDiv () {
    return <ItemListDiv
      itemsFromBasket={() => this.props.itemsFromBasket() }
      removeItem={ (item) => this.props.removeItem(item) }
    />
  }

  renderCheckoutButton () {
    return <CheckoutButton />
  }

  render () {
    return (
      <div id="my-basket">
        {this.renderBasketHeader()}
        {this.renderItemListDiv()}
        {this.renderCheckoutButton()}
      </div>
    );
  }
}
