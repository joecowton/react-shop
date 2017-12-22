import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import { MyBasketPage } from './my-basket';
import { ProductList } from './ProductList';

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
        <h1><Link to="/">Holly</Link></h1>
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

export class HomePage extends Component {
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

    let myBasketPage = (props) => {
      return (
        <MyBasketPage
          itemsFromBasket={() => this.props.itemsFromBasket() }
          removeItem={ (item) => this.props.removeItem(item) }
        />
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
              <Route path="/my-basket" component={myBasketPage} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
