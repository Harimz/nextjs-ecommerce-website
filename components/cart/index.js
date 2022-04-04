import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CartIcon, ItemCount } from "./styles/cart-styles";

const Cart = () => {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <CartIcon>
        <ItemCount>0</ItemCount>
        <FaShoppingCart fontSize="1.5rem" cursor="pointer" />
      </CartIcon>

      {cartOpen && <AnimatePresence></AnimatePresence>}
    </>
  );
};

export default Cart;
