import React, { useState } from "react";
import {
  AddButton,
  ClearButton,
  Heading,
  InfoHeading,
  Text,
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
      <Heading fw="700">{product.name}</Heading>
      <InfoHeading>${product.price}</InfoHeading>
      <Text>{product.description}</Text>

      <AddInputContainer>
        <Heading size="1.5rem" fw="400">
          Quantity
        </Heading>

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
