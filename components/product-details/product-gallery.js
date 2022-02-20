import React, { useState } from "react";
import Image from "next/image";
import {
  ImageViews,
  MainImage,
  SubImage,
  GalleryContainer,
} from "./styles/product-gallery-styles";

const ProductGallery = ({ productImages, productName }) => {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <GalleryContainer>
      <MainImage className="main-image">
        <Image
          src={productImages[activeImage]}
          alt={productName}
          layout="fill"
        />
      </MainImage>
      <ImageViews>
        <SubImage onClick={() => setActiveImage(0)} active={activeImage === 0}>
          <Image src={productImages[0]} alt={productName} layout="fill" />
        </SubImage>
        <SubImage onClick={() => setActiveImage(1)} active={activeImage === 1}>
          <Image src={productImages[1]} alt={productName} layout="fill" />
        </SubImage>
      </ImageViews>
    </GalleryContainer>
  );
};

export default ProductGallery;
