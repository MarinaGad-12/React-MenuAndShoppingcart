import React from "react";

// Interface
// ==> input
// ==> product
// <++ output
// <++ toggle

const Cart = (props) => {
  return (
    <i
      onClick={() => props.onToggleInCart(props.product)}
      style={props.product.inCart ? null : { color: "#80808080" }}
      class="fas fa-cart-plus"
    ></i>
  );
};

export default Cart;
