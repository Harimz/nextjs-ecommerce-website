import React, { useEffect, useState } from "react";
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
import { useDispatch } from "react-redux";
import { addToCart } from "../../actions/cartActions";
import axios from "axios";
import { toast } from "react-toastify";
import { errorMessage } from "../../helpers";
import "react-toastify/dist/ReactToastify.css";

const ProductCartDetails = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { session } = useAuth();
  const router = useRouter();
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, quantity));
  };

  const addToWishlistHandler = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/wishlist",
        {
          product: product._id,
          price: product.price,
          image: product.images[0],
        },
        config
      );

      toast.success(data.message, {
        position: "top-center",
      });
    } catch (error) {
      toast.error(errorMessage(error), {
        position: "top-center",
      });
    }
  };

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
            session ? addToCartHandler() : router.replace("/login")
          }
        >
          <BsBagPlus className="cart-icon" />
          Add To Cart
        </AddButton>
        <ClearButton
          onClick={() =>
            session ? addToWishlistHandler() : router.replace("/login")
          }
        >
          <FaHeart />
          Add To Wishlist
        </ClearButton>
      </AddContainer>
    </CartDetailsContainer>
  );
};

export default ProductCartDetails;
