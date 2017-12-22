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

  removeFromBasket (product) {
    let copyOfItems = this.state.itemsInBasket.slice()
    let item = copyOfItems.filter((item) => {
      return item.productName === product
    }).pop()
    copyOfItems.splice(copyOfItems.indexOf(item), 1)
    this.setState({ itemsInBasket: copyOfItems })
  }

  getItemsFromBasket() {
    return this.state.itemsInBasket
  }

  render() {
    return <HomePage
      addToBasket={ (product) => this.addToBasket(product) }
      itemsFromBasket={ () => this.getItemsFromBasket() }
      removeItem={ (item) => this.removeFromBasket(item) }
    />
  }
}

ReactDOM.render(<MyShop />, document.getElementById('root'))
