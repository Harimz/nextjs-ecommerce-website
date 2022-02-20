import React from "react";
import { DetailsContainer } from "./styles/product-details-styles";
import ProductGallery from "./product-gallery";
import ProductCartDetails from "./product-cart-details";

const ProductDetails = ({ product }) => {
  return (
    <DetailsContainer>
      <ProductGallery
        productImages={product.images}
        prouctName={product.name}
      />
      <ProductCartDetails product={product} />
    </DetailsContainer>
  );
};

export default ProductDetails;
