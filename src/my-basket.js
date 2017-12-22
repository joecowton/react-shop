import React, { Component } from 'react';

import { Item } from './Item';

class BasketHeader extends Component {
  render () {
    return (
      <div>
        <h1> Your Basket: </h1>
      </div>
    )
  }
}

class ItemListDiv extends Component {
  listItems () {
    let itemsFromBasket = this.props.itemsFromBasket()
    let listItems;
    if (itemsFromBasket.length <= 0) {
      return <h1> Your basket is empty </h1>
    } else {
      return itemsFromBasket.map((p) => (
        <Item
          productName={p.productName}
          price={p.price}
          image={p.image}
        />
      ))
    }
  }

  render () {
    return (
      <div className="item-list">
        {this.listItems()}
      </div>
    )
  }
}

class CheckoutButton extends Component {
  render () {
    return (
      <div>
        <input type="submit" className="checkout" value="CHECKOUT  >>" />
      </div>
    )
  }
}

export class MyBasketPage extends Component {
  renderBasketHeader () {
    return <BasketHeader />
  }

  renderItemListDiv () {
    return <ItemListDiv itemsFromBasket={() => this.props.itemsFromBasket() } />
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
