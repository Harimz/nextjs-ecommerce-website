import React, { useState } from "react";
import {
  AddButton,
  ClearButton,
  InfoHeading,
  MainHeading,
  Text,
  ThinHeading,
  TransparentBtn,
} from "../../elements";
import {
  AddContainer,
  AddInput,
  AddInputContainer,
  CartDetailsContainer,
  Control,
} from "./styles/product-cart-styles";
import { RiAddFill } from "react-icons/ri";
import { HiOutlineMinusSm } from "react-icons/hi";
import { BsBagPlus } from "react-icons/bs";
import { useAuth } from "../../hooks";
import { useRouter } from "next/router";
import { FaHeart } from "react-icons/fa";

const ProductCartDetails = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { session } = useAuth();
  const router = useRouter();

  return (
    <CartDetailsContainer>
      <MainHeading>{product.name}</MainHeading>
      <InfoHeading>${product.price}</InfoHeading>
      <Text>{product.description}</Text>

      <AddInputContainer>
        <ThinHeading>Quantity</ThinHeading>

        <AddInput>
          <Control
            onClick={() => {
              if (quantity > 1) {
                setQuantity((state) => state - 1);
              }
            }}
          >
            <HiOutlineMinusSm className="quantity-icon" />
          </Control>
          <p>{quantity}</p>
          <Control
            onClick={() => {
              if (quantity < 5) {
                setQuantity((state) => state + 1);
              }
            }}
          >
            <RiAddFill className="quantity-icon" />
          </Control>
        </AddInput>
      </AddInputContainer>

      <AddContainer>
        <AddButton
          onClick={() =>
            session ? router.replace("/cart") : router.replace("/login")
          }
        >
          <BsBagPlus className="cart-icon" />
          Add To Cart
        </AddButton>
        <ClearButton>
          <FaHeart />
          Add To Wishlist
        </ClearButton>
      </AddContainer>
    </CartDetailsContainer>
  );
};

export default ProductCartDetails;
