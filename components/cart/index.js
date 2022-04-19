import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CartBackdrop, CartIcon, ItemCount } from "./styles/cart-styles";
import { useSelector } from "react-redux";
import CartMenuModal from "./cart-menu";

const Cart = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const { cartItems } = useSelector((state) => state.cart);

  let totalQty = 0;

  if (cartItems) {
    totalQty = cartItems.reduce((acc, item) => acc + item.qty, 0);
  }

  return (
    <>
      <CartIcon onClick={() => setCartOpen(true)}>
        <ItemCount>{totalQty}</ItemCount>
        <FaShoppingCart fontSize="1.5rem" cursor="pointer" />
      </CartIcon>

      {cartOpen && (
        <AnimatePresence>
          <CartMenuModal onClose={setCartOpen} />
        </AnimatePresence>
      )}
    </>
  );
};

export default Cart;
