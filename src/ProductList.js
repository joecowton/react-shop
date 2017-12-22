import React, { Component } from 'react';

import { Product } from './Product';

const PRODUCTS = [
  { id: 1, name: 'Christmas Tree', price: 35, image: 'tree.jpg' },
  { id: 2, name: 'Tinsel', price: 3.5, image: 'tinsel.jpeg' },
  { id: 3, name: 'Christmas Pudding', price: 4, image: 'pudding.jpeg' },
  { id: 4, name: 'Lights', price: 7.5, image: 'multi-coloured-lights.jpeg' },
  { id: 5, name: 'Mince Pies', price: 2.4, image: 'mince-pies.jpeg' },
  { id: 6, name: 'White Lights', price: 6, image: 'lights.jpeg' },
  { id: 7, name: 'Light-up Deer', price: 9, image: 'light-up-deer.jpeg' },
  { id: 8, name: 'Bauble Set', price: 12, image: 'bauble-set.jpg' },
  { id: 9, name: 'Tree Top', price: 15, image: 'top.png' },
  { id: 10, name: 'Happy New Year', price: 10, image: 'newyear.png' },
  { id: 11, name: 'Candleholder', price: 20, image: 'candleholder.png' }
]

export class ProductList extends Component {
  handleAddItem (product) {
    this.props.addToBasket(product);
  }

  render () {
    let products = PRODUCTS;
    return (
        <div id="product-list">
          {
            products.map((p) => (
              <Product
                key={p.id}
                name={p.name}
                price={p.price}
                image={p.image}
                handleAddItem={(product) => this.handleAddItem(product)}
              />
            ))
          }
        </div>
    );
  }
}
