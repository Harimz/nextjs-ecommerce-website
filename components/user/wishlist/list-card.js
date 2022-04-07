import axios from "axios";
import Image from "next/image";
import React from "react";
import { Heading, RemoveButton, Text } from "../../../elements";
import {
  ItemActions,
  ItemImage,
  ItemView,
  WishListCard,
} from "../styles/wishlist-styles";

const ListCard = ({ itemDetails, deleteWishHandler }) => {
  console.log(itemDetails);

  return (
    <WishListCard>
      <ItemView>
        <ItemImage>
          <Image src={itemDetails.image} alt={itemDetails.name} layout="fill" />
        </ItemImage>
        <Heading size="1rem">{itemDetails.productName}</Heading>
      </ItemView>
      <Text>${itemDetails.price}</Text>
      <RemoveButton onClick={deleteWishHandler}>delete</RemoveButton>
    </WishListCard>
  );
};

export default ListCard;
