import React, { useState } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import { FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Heading, Text } from "../../elements";
import { backdropVariants, cartMenuVariants, menuVariants } from "../../utils";
import {
  BackdropOverlay,
  CartContent,
  CartHeader,
  CartImage,
  CartItem,
  CartItems,
  CartMenu,
  QtyButton,
  QtyInput,
} from "./styles/cart-menu-styles";

let portalElement;

if (typeof window !== "undefined") {
  portalElement = document.getElementById("portal");
}

const CartMenuModal = ({ onClose }) => {
  const { cartItems } = useSelector((state) => state.cart);

  const calcPrice = (price, qty) => {
    return price * qty;
  };

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
            <CartItems>
              {cartItems.map((item) => (
                <CartItem key={item.product}>
                  <CartImage>
                    <Image src={item.image} layout="fill" alt={item.name} />
                  </CartImage>

                  <CartContent>
                    <Heading size="1.35rem">{item.name}</Heading>

                    <QtyInput>
                      <QtyButton>-</QtyButton>
                      <Text>{item.qty}</Text>
                      <QtyButton>+</QtyButton>
                    </QtyInput>

                    <Heading size="1rem" m="1rem 0 0 0">
                      Remove
                    </Heading>
                  </CartContent>

                  <Heading size="1.25rem" color="theme.green[100]">
                    {`$${calcPrice(item.qty, item.price).toFixed(2)}`}
                  </Heading>
                </CartItem>
              ))}
            </CartItems>
          </CartMenu>
        </BackdropOverlay>,
        portalElement
      )}
    </>
  );
};

export default CartMenuModal;
