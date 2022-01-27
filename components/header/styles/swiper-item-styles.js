import styled from "styled-components";

export const SwiperItemContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 5rem;
  z-index: 1;

  @media (max-width: 1030px) {
    padding: 0;
  }

  @media (max-width: 960px) {
    padding: 0;
    flex-direction: column-reverse;
  }
`;

export const ItemContent = styled.div`
  width: 40%;

  @media (max-width: 1050px) {
    width: 100%;
  }

  @media (max-width: 960px) {
    text-align: center;

    h1 {
      font-size: 2rem;
    }
  }
`;

export const SwiperImage = styled.div`
  position: relative;
  height: 25rem;
  width: 35rem;
  object-fit: contain;
  margin-right: 5rem;

  @media (max-width: 1200px) {
    margin-right: 0;
    height: 20rem;
    width: 30rem;
  }

  @media (max-width: 1050px) {
    height: 15rem;
    width: 25rem;
    margin: 0 auto;
  }

  @media (max-width: 450px) {
    height: 10rem;
    width: 15rem;
  }
`;
