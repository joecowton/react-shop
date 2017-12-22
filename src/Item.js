import React, { Component } from 'react';

export class Item extends Component {
  constructor(props) {
    super(props);
    this.state = { quantity: 1 };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({quantity: event.target.value});
  }

  renderProductImage () {
    return (
      <div className="item-panel">
        <img className="thumb" src={this.props.image} alt={this.props.productName} />
      </div>
    )
  }

  renderProductName () {
    return (
      <div className="item-description">
        {this.props.productName}
      </div>
    )
  }

renderProductPrice () {
  return (
    <div className="price">
      £{parseFloat(this.props.price * this.state.quantity).toFixed(2)}
    </div>
  )
}

renderProductQuantityDiv () {
  return (
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
  )
}

  render () {
    return (
      <div className="item-div">
        {this.renderProductImage()}
        {this.renderProductName()}
        {this.renderProductPrice()}
        {this.renderProductQuantityDiv()}
      </div>
    )
  }
}
