import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { server } from "../../config";
import { useFilter } from "../../hooks/useFilter";

const SearchPage = () => {
  // const router = useRouter();
  // const params = router.query;
  // const { category, searchQuery, price } = params;
  // const [filters, setFilters] = useState({
  //   searchQuery: "",
  // });
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   (async () => {
  //     const arr = [];

  //     if (searchQuery) {
  //       arr.push(`searchQuery=${searchQuery}`);
  //     }

  //     if (category) {
  //       arr.push(`category=${category}`);
  //     }

  //     if (price) {
  //       arr.push(`price=${price}`);
  //     }

  //     const response = await fetch(`/api/search?${arr.join("&")}`);

  //     const content = await response.json();

  //     setProducts(content);
  //   })();
  // }, [searchQuery, category, price]);
  const { products } = useFilter();

  console.log(products);

  return (
    <div>
      <h1>This is the search page!</h1>
    </div>
  );
};

export default SearchPage;
