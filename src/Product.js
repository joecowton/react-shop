import React, { Component } from 'react';

export class Product extends Component {
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
                <button className="add-to-basket" onClick={() => this.props.handleAddItem(this.props)}>
                  <img src="add-to-cart-x1.png" alt="cart-icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
