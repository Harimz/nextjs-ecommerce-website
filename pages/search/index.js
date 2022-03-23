import React, { useEffect, useState } from "react";
import { useFilter } from "../../hooks/useFilter";
import { Container, GreenSpinner } from "../../elements";
import DisplayProducts from "../../components/display";
import SearchContent from "../../components/search";

const SearchPage = () => {
  const { products, isLoading } = useFilter();

  return (
    <Container>
      <h1></h1>
      {isLoading ? (
        <GreenSpinner />
      ) : (
        <SearchContent>
          <DisplayProducts products={products} amount={10} />
        </SearchContent>
      )}
    </Container>
  );
};

export default SearchPage;
