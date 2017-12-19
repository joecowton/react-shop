import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class FilterDiv extends React.Component {
  render () {
    return (
      <div id="filter" className="panel">
        filter
      </div>
    );
  }
}

class LogoDiv extends React.Component {
  render () {
    return (
      <div id="logo">
        <h1>Holly</h1>
      </div>
    );
  }
}

class BasketDiv extends React.Component {
  render () {
    return (
      <div id="basket" className="panel">
        basket
      </div>
    );
  }
}


export default class HeaderBlock extends React.Component {
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

class ProductList extends React.Component {
  render(){
    return <div id="product-list"></div>;
  }
}

class HomePage extends React.Component {
  renderHeaderBlock(){
    return <HeaderBlock />;
  }
  renderProductList() {
    return <ProductList />;
  }
  render() {
    return (
      <div>
      {this.renderHeaderBlock()}
      {this.renderProductList()}
      </div>
    );
  }
}



ReactDOM.render(<HomePage />, document.getElementById('container'))
