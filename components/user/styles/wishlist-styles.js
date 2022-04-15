import styled from "styled-components";

export const WishlistContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
`;

export const WishlistHeader = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  margin-top: 4rem;

  h1:nth-child(1) {
    grid-column: 1 / 3;
  }

  h1:nth-child(2) {
    grid-column: 3 / 4;
  }

  h1:nth-child(3) {
    grid-column: 4 / 5;
  }

  @media (max-width: 560px) {
    display: none;
  }
`;

export const WishlistWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  grid-gap: 2rem;
  margin-top: 2rem;
`;

export const WishListCard = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
`;

export const ItemView = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 1rem;
  grid-column: 1 / 3;
  cursor: pointer;

  @media (max-width: 560px) {
    flex-direction: column;
  }
`;

export const ItemImage = styled.div`
  position: relative;
  height: 7rem;
  width: 9rem;
  border-radius: 1rem;
  overflow: hidden;
  filter: brightness(95%);

  @media (max-width: 560px) {
    height: 5rem;
    width: 6rem;
  }
`;

export const ItemActions = styled.div``;
