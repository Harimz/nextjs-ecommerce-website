import React from "react";
import {
  DetailsContainer,
  ProductContent,
  ProductGallery,
} from "./styles/product-details-styles";

const ProductDetails = ({ product }) => {
  return (
    <DetailsContainer>
      <ProductGallery></ProductGallery>
      <ProductContent></ProductContent>
    </DetailsContainer>
  );
};

export default ProductDetails;
