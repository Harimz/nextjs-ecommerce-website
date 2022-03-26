import React from "react";
import Sidebar from "./sidebar";
import { FilterContent, SearchContainer } from "./styles/search-styles";
import { useRouter } from "next/router";
import { Heading } from "../../elements";

const SearchContent = ({ children }) => {
  const {
    query: { searchQuery },
  } = useRouter();

  return (
    <SearchContainer>
      <Sidebar />
      <FilterContent>
        <Heading size="1.25rem" m="0 0 2rem 0">
          Seach results for {searchQuery}
        </Heading>

        {children}
      </FilterContent>
    </SearchContainer>
  );
};

export default SearchContent;
