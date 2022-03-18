import React, { useEffect, useState } from "react";
import { useFilter } from "../../hooks/useFilter";
import { Container, GreenSpinner } from "../../elements";
import DisplayProducts from "../../components/display";

const SearchPage = () => {
  const { products, isLoading } = useFilter();

  console.log(isLoading);

  return (
    <Container>
      <h1></h1>
      {isLoading ? (
        <GreenSpinner />
      ) : (
        <DisplayProducts products={products} amount={10} />
      )}
    </Container>
  );
};

export default SearchPage;
