import React, { Component } from "react";
import Product from "./product";

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    // Map props ==> state
    // this.state = {};
    console.log("Cart ==> Constructor()");
  }

  componentDidMount() {
    console.log("Cart ==> ComponentDidMount()");
    // Call Backend
  }

  componentDidUpdate(prevState, prevProps) {
    //compare
    console.log("Cart ==> ComponentDidUpdate()");
  }

  render() {
    console.log("Cart ==> Render()");
    return (
      <div>
        <h3>Shopping Cart</h3>
        {this.props.products.map((prdct) => (
          <Product
            key={prdct.id}
            product={prdct}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
          />
        ))}
        <button onClick={this.props.onReset} className="btn btn-secondary m-2">
          Reset
        </button>
      </div>
    );
  }
}

export default ShoppingCart;
