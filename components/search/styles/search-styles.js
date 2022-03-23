import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  margin-top: 5rem;

  @media (max-width: 950px) {
    flex-direction: column;
  }
`;

export const FilterContent = styled.div`
  width: 75%;

  @media (max-width: 950px) {
    width: 100%;
  }
`;
