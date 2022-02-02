import React from "react";
import { Heading, ProductCard, Text } from "../../elements";
import {
  DisplayWrapper,
  ExploreBox,
  ProductHeader,
} from "./styles/display-styles";
import { FaArrowRight } from "react-icons/fa";
import { displayChildVariants, displayVariants } from "../../utils";

const DisplayProducts = ({ products, amount, title }) => {
  return (
    <>
      {amount === 5 && (
        <ProductHeader>
          <Heading size="1.75rem">{title}</Heading>
          <ExploreBox>
            <Text>Explore More</Text>
            <FaArrowRight />
          </ExploreBox>
        </ProductHeader>
      )}
      <DisplayWrapper
        variants={displayVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {products.slice(0, amount).map((product) => (
          <ProductCard
            key={product._id}
            imgPath={product.images[0]}
            variants={displayChildVariants}
          ></ProductCard>
        ))}
      </DisplayWrapper>
    </>
  );
};

export default DisplayProducts;
