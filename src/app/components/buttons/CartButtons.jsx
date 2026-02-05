"use client";
import React, { useState } from "react";

const CartButtons = () => {
  const [inCart, setInCart] = useState(false);
  const handleadd2cart = () => {
    setInCart(true);
  };
  return (
    <button
      onClick={handleadd2cart}
      disabled={inCart}
      className="flex-1 rounded-xl bg-emerald-500 px-3 py-2 text-sm font-medium text-white hover:bg-emerald-600 transition disabled:bg-gray-100  disabled:text-gray-500"
    >
      {inCart ? "Added" : "Add to Cart"}
    </button>
  );
};

export default CartButtons;
