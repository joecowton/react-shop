import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { HomePage } from './HomePage';
import './index.css';



class MyShop extends Component {
  constructor(props) {
    super(props);
    this.state = { itemsInBasket: [] }
  }

  addToBasket(product) {
    let updatedItems = this.state.itemsInBasket.slice();
    let productToAdd = {
      productName: product.name,
      price: product.price,
      image: product.image
    }

    if (updatedItems.filter((item) => {
      return item.productName === productToAdd.productName
    }).length <= 0) {
      updatedItems.push(productToAdd);
      this.setState({ itemsInBasket: updatedItems })
    }

  }

  getItemsFromBasket() {
    return this.state.itemsInBasket
  }

  render() {
    return <HomePage
      addToBasket={ (product) => this.addToBasket(product) }
      itemsFromBasket={() => this.getItemsFromBasket() }
    />
  }
}

ReactDOM.render(<MyShop />, document.getElementById('root'))
