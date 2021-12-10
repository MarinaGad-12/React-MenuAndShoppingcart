import React, { Component } from "react";

class Product extends Component {
  state = {};
  componentWillUnmount() {
    console.log("Product =>> WillUNMOUNT");
  }
  render() {
    console.log("Product =>> Render");
    const { name, count } = this.props.product;
    return (
      <>
        <div>
          <span>{name}</span>
          <span
            className={
              count === 0
                ? "badge badge-warning m-2"
                : "badge badge-primary m-2"
            }
          >
            {count}
          </span>
          <button
            onClick={() => this.props.onIncrement(this.props.product)}
            className="btn btn-primary btn-sm m-2"
          >
            +
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.product)}
            className="btn btn-danger btn-sm m-2"
          >
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </>
    );
  }
}

export default Product;
