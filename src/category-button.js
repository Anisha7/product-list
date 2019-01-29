import React, { Component } from 'react';
import './categoryButton.css';

class CategoryButton extends Component {
  render() {
    return <button onClick = {this.props.onClick}>{this.props.label}</button>
  }
}

export default CategoryButton