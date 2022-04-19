import React from "react";
import { createPortal } from "react-dom";
import { FaTimes } from "react-icons/fa";
import { Heading } from "../../elements";
import { backdropVariants, cartMenuVariants, menuVariants } from "../../utils";
import {
  BackdropOverlay,
  CartHeader,
  CartMenu,
} from "./styles/cart-menu-styles";

let portalElement;

if (typeof window !== "undefined") {
  portalElement = document.getElementById("portal");
}

const CartMenuModal = ({ onClose }) => {
  return (
    <>
      {createPortal(
        <BackdropOverlay
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <CartMenu
            variants={cartMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <CartHeader>
              <Heading>Cart</Heading>
              <FaTimes
                cursor="pointer"
                size={25}
                onClick={() => {
                  onClose(false);
                }}
              />
            </CartHeader>
          </CartMenu>
        </BackdropOverlay>,
        portalElement
      )}
    </>
  );
};

export default CartMenuModal;
