import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import { MyBasketPage } from './my-basket';
import './index.css';

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

class FilterDiv extends Component {
  render () {
    return (
      <div id="filter" className="panel">
        <img src='menu.png' alt="filter"/>
      </div>
    );
  }
}

class LogoDiv extends Component {
  render () {
    return (
      <div id="logo">
        <Link to="/"><h1>Holly</h1></Link>
      </div>
    );
  }
}

class BasketDiv extends Component {
  render () {
    return (
      <div id="basket" className="panel">
          <Link to="/my-basket"><img src='basket.png' alt="basket"/></Link>
      </div>
    );
  }
}

class Product extends Component {
  render () {
    return (
        <div className="product">
          <div>
            <img className="thumb" src={this.props.image} alt={this.props.name} />
          </div>
          <div>
            <div>{this.props.name}</div>
            <div>
              <div className="split">
                £{parseFloat(this.props.price).toFixed(2)}
              </div>
              <div className="split">
                <button className="add-to-basket" onClick={() => this.props.handleAddItem(this)}>
                  <img src="add-to-cart-x1.png" alt="cart-icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

class ProductList extends Component {
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

class HomePage extends Component {
  constructor(props){
    super(props);

    this.state = {
      products: {}
    }
  }

  addToBasket(product) {
    this.props.addToBasket(product)
  }

  componentDidMount() {
    fetch("http://localhost:8000/api/types/1")
      .then(function(response) {
        console.log(response.data);
        return response.json();
      })
      .then(function(data){
        console.log(data)
      })
      .catch(function() {
        console.log("Something went wrong!");
      });
  }

  renderLogoDiv(){
    return <LogoDiv/>;
  }

  renderFilterDiv() {
    return <FilterDiv />;
  }

  renderBasketDiv() {
    return <BasketDiv />;
  }

  render () {
    const productList = (props) => {
      return (
        <ProductList addToBasket={(product) => this.addToBasket(product)} />
      )
    }

    return (
      <Router>
        <div id="container">
          <div className="headerDiv">
            {this.renderFilterDiv()}
            {this.renderLogoDiv()}
            {this.renderBasketDiv()}
          </div>

          <div id="display">
            <Switch>
              <Route exact path="/" component={productList} />
              <Route path="/my-basket" component={MyBasketPage} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

class MyShop extends Component {
  constructor(props) {
    super(props);
    this.state = { itemsInBasket: [] }
  }

  addToBasket(product) {
    let updatedItems = this.state.itemsInBasket.slice();
    updatedItems.push(product);
    this.setState({ itemsInBasket: updatedItems })
  }

  render() {
    return <HomePage addToBasket={ (product) => this.addToBasket(product) } />
  }
}

ReactDOM.render(<MyShop />, document.getElementById('root'))
