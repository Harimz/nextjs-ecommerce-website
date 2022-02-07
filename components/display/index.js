import React from "react";
import { DangerHeading, Heading, ProductCard, Text } from "../../elements";
import {
  DisplayWrapper,
  ExploreBox,
  Favorite,
  ProductHeader,
  ProductInfoContainer,
} from "./styles/display-styles";
import { FaArrowRight, FaRegHeart } from "react-icons/fa";
import { displayChildVariants, displayVariants } from "../../utils";
import Image from "next/image";
import Link from "next/link";

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
        {products.slice(0, amount).map((product, i) => (
          <Link href={`/products/${product._id}`} passHref key={product._id}>
            <ProductCard variants={displayChildVariants}>
              <div className="imgContainer">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  layout="fill"
                />
              </div>
              <div>
                <Text>{product.subCategory.toUpperCase()}</Text>
                <Heading size="1.25rem" m="0.5rem 0">
                  {product.name}
                </Heading>
                <DangerHeading size="1.25rem">${product.price}</DangerHeading>
              </div>
            </ProductCard>
          </Link>
        ))}
      </DisplayWrapper>
    </>
  );
};

export default DisplayProducts;
