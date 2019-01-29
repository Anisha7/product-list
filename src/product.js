import React, { Component } from 'react';

class Product extends Component {
  render() {
    return (
        <div key={this.props.id}>
            <h1>{this.props.name}</h1>
            <h2>${this.props.price}</h2>
            <p>{this.props.category}</p>
        </div>
    )
  }
}

export default Product