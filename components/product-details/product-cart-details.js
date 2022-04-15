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
import { useRouter } from "next/router";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../actions/cartActions";
import { toast } from "react-toastify";
import { errorMessage } from "../../helpers";
import "react-toastify/dist/ReactToastify.css";
import { useUser } from "../../hooks/useUser";
import {
  addToWishlist,
  clearAddToWishList,
} from "../../actions/wishlistActions";

const ProductCartDetails = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();
  const dispatch = useDispatch();
  const { user } = useUser();
  const { loading, error, successMessage } = useSelector(
    (state) => state.wishlist
  );

  useEffect(() => {
    if (error?.length > 0) {
      toast.error(error, {
        position: "top-center",
      });

      dispatch(clearAddToWishList());
    }
    if (successMessage?.message.length > 0) {
      console.log("we in here");

      toast.success(successMessage.message, {
        position: "top-center",
      });

      dispatch(clearAddToWishList());
    }
  }, [error, successMessage?.message, dispatch, successMessage]);

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, quantity));
  };

  const addToWishlistHandler = async () => {
    const productDetails = {
      product: product._id,
      price: product.price,
      image: product.images[0],
      name: product.name,
    };

    dispatch(addToWishlist(productDetails));
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
          onClick={() => (user ? addToCartHandler() : router.replace("/login"))}
        >
          <BsBagPlus className="cart-icon" />
          Add To Cart
        </AddButton>
        <ClearButton
          onClick={() =>
            user?.isLoggedIn ? addToWishlistHandler() : router.replace("/login")
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
