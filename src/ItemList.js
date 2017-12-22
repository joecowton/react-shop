import React, { Component } from 'react';
import { ItemRow } from './ItemRow';

export class ItemListDiv extends Component {
  constructor(props) {
    super(props);
    this.state = { itemsInBasket: this.props.itemsFromBasket() }
  }

  removeItem (itemName) {
    let copyOfItems = this.state.itemsInBasket.slice()
    let item = copyOfItems.filter((item) => {
      return item.productName === itemName
    }).pop()
    copyOfItems.splice(copyOfItems.indexOf(item), 1)
    this.setState({ itemsInBasket: copyOfItems })
    this.props.removeItem(itemName)
  }

  listItems () {
    if (this.state.itemsInBasket.length <= 0) {
      return <h1> Your basket is empty </h1>
    } else {
      return this.state.itemsInBasket.map((p) => (
        <ItemRow
          key={this.state.itemsInBasket.indexOf(p)}
          productName={p.productName}
          price={p.price}
          image={p.image}
          removeItem={ (item) => this.removeItem(item) }
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
