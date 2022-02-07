import React from "react";
import Image from "next/image";
import {
  Heading,
  PrimaryBtn,
  SubHeading,
  SwiperItemContainer,
  Text,
} from "../../elements";
import { ItemContent, SwiperImage } from "./styles/swiper-item-styles";

const SwiperItem = ({ title, text, img, price }) => {
  return (
    <SwiperItemContainer>
      <ItemContent>
        <Heading fw="700" size="2.75rem">
          {title}
        </Heading>
        <Text m="2rem 0" size="1.25rem">
          {text}
        </Text>
        <SubHeading>Starting from {price}</SubHeading>
        <PrimaryBtn m="2rem 0" w="10rem">
          Shop Now
        </PrimaryBtn>
      </ItemContent>

      <SwiperImage>
        <Image src={`/images/featured/${img}`} alt={title} layout="fill" />
      </SwiperImage>
    </SwiperItemContainer>
  );
};

export default SwiperItem;
