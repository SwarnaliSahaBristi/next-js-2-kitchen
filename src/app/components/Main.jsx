"use client"
import React from "react";
import CartProvider from "../context/CartProvider";

const Main = ({ children }) => {
  return <CartProvider>{children}</CartProvider>;
};

export default Main;
