import React from "react";
import ProductDetails from "../../components/product-details";
import { server } from "../../config";
import { Container } from "../../elements";

const ProductPage = ({ product }) => {
  return (
    <Container>
      <ProductDetails product={product} />
    </Container>
  );
};

export const getStaticProps = async (context) => {
  const { params } = context;

  const productId = params.pid;

  const productRes = await fetch(`${server}/api/products/${productId}`);
  const productData = await productRes.json();

  return {
    props: {
      product: productData,
    },
  };
};

export const getStaticPaths = async () => {
  const productsRes = await fetch(`${server}/api/products`);
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
