import React from "react";
import ProductDetails from "../../components/product-details";
import ProductInfo from "../../components/product-info";
import { server } from "../../config";
import { Container } from "../../elements";

const ProductPage = ({ product }) => {
  return (
    <Container mt="3rem">
      <ProductDetails product={product} />
      <ProductInfo product={product} />
    </Container>
  );
};

export const getStaticProps = async (context) => {
  const { params } = context;

  const productId = params.pid;

  const productRes = await fetch(
    `http://shigeo-ecommerce.vercel.app/api/products/${productId}`
  );
  const productData = await productRes.json();

  return {
    props: {
      product: productData,
    },
  };
};

export const getStaticPaths = async () => {
  const productsRes = await fetch(
    `http://shigeo-ecommerce.vercel.app/api/products`
  );
  const productsData = await productsRes.json();

  const productPaths = productsData.map((product) => ({
    params: { pid: product._id },
  }));

  return {
    paths: productPaths,
    fallback: false,
  };
};

export default ProductPage;
