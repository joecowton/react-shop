import React, { Component } from 'react';

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
  render () {
    let itemsFromBasket = this.props.itemsFromBasket()
    return (
      <div className="item-list">
        {
          itemsFromBasket.map((p) => (
            <Item
              productName={p.name}
              price={p.price}
              image={p.image}
            />
          ))
        }
      </div>
    )
  }
}

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = { quantity: 1 };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({quantity: event.target.value});
  }

  render () {
    return (
      <div className="item-div">
        <div className="item-panel">
          <img class="thumb" src={this.props.image} alt={this.props.productName} />
        </div>
        <div className="item-description">
          {this.props.productName}
        </div>
        <div className="price">
          £{(this.props.price * this.state.quantity)}
        </div>
        <div className="item-panel">

          <div className="quantity-label">
            <label>Quantity</label>
          </div>
          <div className="quantity-icons">
            <div className="split">
              <input type="number" value={this.state.value} min="1" onChange={this.handleChange} />
            </div>
            <div className="split">
              <img src="remove.png" alt="remove-icon" />
            </div>
          </div>
        </div>
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
