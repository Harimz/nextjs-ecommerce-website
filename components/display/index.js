import React from "react";
import { DangerHeading, Heading, ProductCard, Text } from "../../elements";
import {
  CardContent,
  DisplayWrapper,
  ExploreBox,
  ProductHeader,
} from "./styles/display-styles";
import { FaArrowRight } from "react-icons/fa";
import { displayChildVariants, displayVariants } from "../../utils";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const DisplayProducts = ({ products, amount, title }) => {
  const router = useRouter();
  const category = products[0]?.category;

  return (
    <>
      {amount === 5 && (
        <ProductHeader>
          <Heading size="1.75rem" fw="400">
            {title}
          </Heading>
          <ExploreBox>
            <Text
              onClick={() => {
                router.push({
                  pathname: "/search",
                  query: { category },
                });
              }}
            >
              Explore More
            </Text>
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
                  priority
                />
              </div>
              <CardContent>
                <Text>{product.subCategory.toUpperCase()}</Text>
                <Heading size="1.25rem" fw="700" m="0.5rem 0">
                  {product.name}
                </Heading>
                <DangerHeading size="1.25rem">${product.price}</DangerHeading>
              </CardContent>
            </ProductCard>
          </Link>
        ))}
      </DisplayWrapper>
    </>
  );
};

export default DisplayProducts;
