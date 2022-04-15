import React from "react";
import Image from "next/image";
import { Heading, RemoveButton, Text } from "../../../elements";
import { ItemImage, ItemView, WishListCard } from "../styles/wishlist-styles";
import { useDispatch } from "react-redux";
import { removeFromWishList } from "../../../actions/wishlistActions";
import { useRouter } from "next/router";

const ListCard = ({ itemDetails, deleteWishHandler }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const deleteFromListHandler = () => {
    dispatch(removeFromWishList(itemDetails.product));
  };

  return (
    <WishListCard>
      <ItemView onClick={() => router.push(`/products/${itemDetails.product}`)}>
        <ItemImage>
          <Image src={itemDetails.image} alt={itemDetails.name} layout="fill" />
        </ItemImage>
        <Heading size="1rem">{itemDetails.productName}</Heading>
      </ItemView>
      <Text>${itemDetails.price}</Text>
      <RemoveButton onClick={deleteFromListHandler}>delete</RemoveButton>
    </WishListCard>
  );
};

export default ListCard;
