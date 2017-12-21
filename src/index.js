import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import { MyBasket } from './my-basket';
import './index.css';
// import { PRODUCTS } from './data';

const PRODUCTS = [
  { id: 1, name: 'Christmas Tree', price: 35, image: 'tree.jpg' },
  { id: 2, name: 'Tinsel', price: 3.5, image: 'tinsel.jpeg' },
  { id: 3, name: 'Christmas Pudding', price: 4, image: 'pudding.jpeg' },
  { id: 4, name: 'Lights', price: 7.5, image: 'multi-coloured-lights.jpeg' },
  { id: 5, name: 'Mince Pies', price: 2.4, image: 'mince-pies.jpeg' },
  { id: 6, name: 'White Lights', price: 6, image: 'lights.jpeg' },
  { id: 7, name: 'Light-up Deer', price: 9, image: 'light-up-deer.jpeg' },
  { id: 8, name: 'Bauble Set', price: 12, image: 'bauble-set.jpg' }
]

console.log(PRODUCTS)

// const products = [
//   {
//     id: 1,
//     image: 'https://cdn.shopify.com/s/files/1/0197/8160/products/santa-reindeer-christmas-crackers-meri_800x.jpg',
//     name: 'crackers',
//   },
//   {
//     id: 2,
//     image: 'https://cdn.shopify.com/s/files/1/0197/8160/products/gold-honeycomb-ball-decorations-christmas_800x.jpg?v=1478798343',
//     name: 'decorations',
//   },
// ]

class FilterDiv extends React.Component {
  render () {
    return (
      <div id="filter" className="panel">
        <img src='menu.png' alt="filter"/>
      </div>
    );
  }
}

class LogoDiv extends React.Component {
  render () {
    return (
      <Router>
        <div id="logo">
          <Link to="/"><h1>Holly</h1></Link>
        </div>
      </Router>
    );
  }
}

class BasketDiv extends React.Component {
  render () {
    return (
      <Router>
        <div id="basket" className="panel">
          <Switch>
          <Link to="/my-basket">
            <img src='basket.png' alt="basket"/>
          </Link>
        </Switch>
        </div>
      </Router>
    );
  }
}


class HeaderBlock extends React.Component {
  renderLogoDiv(){
    return <LogoDiv/>;
  }

  renderFilterDiv(){
    return <FilterDiv />;
  }

  renderBasketDiv() {
    return <BasketDiv />;
  }

  render() {
    return (
      <div className="headerDiv">
        {this.renderFilterDiv()}
        {this.renderLogoDiv()}
        {this.renderBasketDiv()}
      </div>
    );
  }
}

class Product extends React.Component {
  render () {
    return (
      <div className="product">
        <div>
          <img src={this.props.image} alt={this.props.name} />
        </div>
        <div>
          <p>{this.props.name}</p>
          <p>£{parseFloat(this.props.price).toFixed(2)}</p>
        </div>
      </div>
    );
  }
}

class ProductList extends React.Component {
  render () {
    let products = PRODUCTS;
    return (
        <div id="product-list">
          { products.map((p) => (<Product key={p.id} name={p.name} price={p.price} image={p.image} />)) }
        </div>
    );
  }
}

class HomePage extends React.Component {
  renderHeaderBlock () {
    return <HeaderBlock />;
  }
  //
  // renderProductList () {
  //   return <ProductList />;
  // }

  render () {
    return (
        <div id="container">
          {this.renderHeaderBlock()}
        <Router>
          <div id="display">
            <Switch>
              <Route exact path="/" component={ProductList} />
              <Route path="/my-basket" component={MyBasket} />
            </Switch>
          </div>
        </Router>
    </div>
    );
  }
}

ReactDOM.render(<HomePage />, document.getElementById('body'))
