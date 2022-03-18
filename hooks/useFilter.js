import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

export const useFilter = () => {
  const router = useRouter();
  const params = router.query;
  const { category, searchQuery, price } = params;

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      const arr = [];

      if (searchQuery) {
        arr.push(`searchQuery=${searchQuery}`);
      }

      if (category) {
        arr.push(`category=${category}`);
      }

      if (price) {
        arr.push(`price=${price}`);
      }

      setIsLoading(true);

      const response = await fetch(`/api/search?${arr.join("&")}`);

      const content = await response.json();

      if (content.length !== 0) {
        setIsLoading(false);

        setProducts(content);
      }
    })();
  }, [searchQuery, category, price]);

  return { products, isLoading };
};
