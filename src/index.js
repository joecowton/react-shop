import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import './index.css';
const products = [
  {
    id: 1,
    image: 'https://cdn.shopify.com/s/files/1/0197/8160/products/santa-reindeer-christmas-crackers-meri_800x.jpg',
    name: 'crackers',
  },
  {
    id: 2,
    image: 'https://cdn.shopify.com/s/files/1/0197/8160/products/gold-honeycomb-ball-decorations-christmas_800x.jpg?v=1478798343',
    name: 'decorations',
  },
]

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
const ProductListRow = (props) => {
  return <li classname="media" style={ { cursor: 'pointer' } }>
    <div className="media-left">
      <a href="#">
        <img className="media-object"  src={props.product.image} />
      </a>
    </div>
    <div className="media-body">
      <h4 className="media-heading">{props.product.name}</h4>
    </div>
  </li>;
    }

class ProductList extends React.Component {
  render () {
    return (
        <ul className="media-list">
          {products.map((p) => (<ProductListRow key={p.id} product={p} />))}
        </ul>
    );
  }
}

class MyBasket extends React.Component {
  render () {
    return (
      <div id="my-basket">
        This is my basket!
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
