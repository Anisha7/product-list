import React, { Component } from 'react';
import './product.css';

class Product extends Component {
  render() {
    return (
        <div key={this.props.id} className = "item">
            <h1>{this.props.name}</h1>
            <h2>${this.props.price}</h2>
            <p>Category: {this.props.category}</p>
            <p className = "description">{this.props.description}</p>
        </div>
    )
  }
}

export default Product