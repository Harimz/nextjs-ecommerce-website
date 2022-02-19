import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: relative;
  display: flex;
  z-index: 1;

  .swiper {
    width: 80%;
    margin-left: 3rem;
  }

  @media (max-width: 1050px) {
    .swiper {
      width: 100%;
      margin: 0;
    }
  }
`;
