import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { AddButton, Heading, Text } from "../../../elements";
import {
  WishlistContainer,
  WishlistHeader,
  WishlistWrapper,
} from "../styles/wishlist-styles";
import ListCard from "./list-card";

const Wishlist = () => {
  const [wishlist, setWishList] = useState([]);

  const deleteWishHandler = useCallback(async () => {
    try {
      const { data } = axios.delete(`/api/wishlist/${itemDetails.product}`);

      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("/api/wishlist", {
          "Content-Type": "application/json",
        });

        setWishList(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [deleteWishHandler]);

  return (
    <WishlistContainer>
      <Heading size="1.5rem">My Wishlist</Heading>

      {wishlist.length === 0 ? (
        <Text>Your wishlist is empty</Text>
      ) : (
        <>
          <WishlistHeader>
            <Heading size="1.25rem">Product</Heading>
            <Heading size="1.25rem">Price</Heading>
            <Heading size="1.25rem">Actions</Heading>
          </WishlistHeader>

          <WishlistWrapper>
            {wishlist.map((listItem) => (
              <ListCard
                key={listItem._id}
                itemDetails={listItem}
                onDelete={deleteWishHandler}
              />
            ))}
          </WishlistWrapper>
        </>
      )}
    </WishlistContainer>
  );
};

export default Wishlist;
