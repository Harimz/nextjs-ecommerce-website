import React, { useEffect, useState } from "react";
import axios from "axios";
import { AddButton, Heading, Text } from "../../../elements";
import { WishlistContainer, WishlistHeader } from "../styles/wishlist-styles";

const Wishlist = () => {
  const [wishlist, setWishList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("/api/wishlist", {
          "Content-Type": "application/json",
        });

        setWishList(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <WishlistContainer>
      <Heading size="1.5rem">My Wishlist</Heading>

      {wishlist.length === 0 ? (
        <Text>Your wishlist is empty</Text>
      ) : (
        <WishlistHeader>
          <Heading size="1.5rem">Product</Heading>
          <Heading size="1.5rem">Price</Heading>
          <Heading size="1.5rem">Actions</Heading>
        </WishlistHeader>
      )}
    </WishlistContainer>
  );
};

export default Wishlist;
