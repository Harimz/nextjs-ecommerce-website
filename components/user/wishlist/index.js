import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { AddButton, Heading, Spinner, Text } from "../../../elements";
import {
  WishlistContainer,
  WishlistHeader,
  WishlistWrapper,
} from "../styles/wishlist-styles";
import ListCard from "./list-card";
import { useDispatch, useSelector } from "react-redux";
import { loadWishList } from "../../../actions/wishlistActions";

const Wishlist = () => {
  const [wishlist, setWishList] = useState([]);
  const dispatch = useDispatch();
  const { wishlistItems, error, loading } = useSelector(
    (state) => state.wishlist
  );

  useEffect(() => {
    dispatch(loadWishList());
  }, [dispatch]);

  return (
    <WishlistContainer>
      <Heading size="1.5rem">My Wishlist</Heading>

      {wishlistItems?.length === 0 ? (
        <Text>Your wishlist is empty</Text>
      ) : (
        <>
          <WishlistHeader>
            <Heading size="1.25rem">Product</Heading>
            <Heading size="1.25rem">Price</Heading>
            <Heading size="1.25rem">Actions</Heading>
          </WishlistHeader>

          {loading ? (
            <Spinner />
          ) : (
            <WishlistWrapper>
              {wishlistItems?.map((listItem) => (
                <ListCard key={listItem._id} itemDetails={listItem} />
              ))}
            </WishlistWrapper>
          )}
        </>
      )}
    </WishlistContainer>
  );
};

export default Wishlist;
