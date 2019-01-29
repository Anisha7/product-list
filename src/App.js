import React, { Component } from 'react';
import inventory, { categories } from './inventory'
import './App.css';

import CategoryButton from './category-button'
import Product from './product'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currCategory : null
    }
  }
  // calls map on category array (of strings)
  // map returns an array, takes a function as parameter
  // the parameter function transforms each item
  getCategories() {
    return categories.map((cat) => {
      return (<li key={cat}>
        <CategoryButton label={cat} onClick={() => this.setState({ currCategory:cat })} />
      </li>)
    })
  }

  // map function gives access to index and array as well if needed
  // function (item, i, arr)
  // item = {id, name, price}, properties of item
  getInventory() {
    return inventory.filter((item) => {
        console.log(item)
        // console.log(this.state.currCategory)
        return item.category === this.state.currCategory || this.state.currCategory === null
      }).map(({id, name, price, category, description}) => {
          return (
            <Product id = {id} name = {name} price = {price} category = {category} description = {description} />
          )
      })
  }

  getPrice() {
    return inventory.filter((item) => {
      console.log(item)
      // console.log(this.state.currCategory)
      return item.category === this.state.currCategory || this.state.currCategory === null
    }).map(({price}) => {
      console.log(price)
      return parseFloat(price)
    }).reduce((acc, val) => (acc + val))
  }

  render() {
    return (
      <div className="App">
        <h1 className = "title">PRODULIST</h1>
        <p> Total: ${this.getPrice().toFixed(2)}</p>
        <ul className = "categoryList">
          {this.getCategories()}
          <button onClick = {() => this.setState({ currCategory:null })}>Display All</button>
        </ul>

        <div className = "inventory">
          {this.getInventory()}
        </div>

      </div>
    );
  }
}

export default App;
