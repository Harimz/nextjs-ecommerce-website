import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { server } from "../../config";

const SearchPage = () => {
  const router = useRouter();
  const params = router.query;

  const { category, searchQuery, price } = params;

  useEffect(() => {}, [category, searchQuery, price]);

  return (
    <div>
      <h1>This is the search page!</h1>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const params = context.query;

  const { category, searchQuery, price } = params;

  return {
    props: {},
  };
};

export default SearchPage;
