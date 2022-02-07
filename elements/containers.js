import styled from "styled-components";

/* Standard Container */

export const Container = styled.div`
  max-width: 125rem;
  width: 90%;
  margin: 0 auto;
  margin-top: ${({ mt }) => mt};
  margin-bottom: ${({ mb }) => mb};
`;

/* Display Containers */

export const BrowseContainer = styled.div`
  width: 20%;

  @media (max-width: 1030px) {
    display: none;
  }
`;

/* Header Containers */

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

export const SwiperItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5rem;

  @media (max-width: 1030px) {
    padding: 0;
  }

  @media (max-width: 960px) {
    padding: 0;
    flex-direction: column-reverse;
  }
`;

/* Layout Containers */

export const FooterContainer = styled.footer`
  margin-top: 15rem;
  background: ${({ theme }) => theme.gray[500]};
`;

export const InputContainer = styled.div`
  position: relative;
  width: ${({ w }) => (w ? w : "60%")};

  .input-icon {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 1rem;
    font-size: 1.25rem;
  }

  @media (max-width: 1050px) {
    display: ${({ mobile }) => (mobile ? "block" : "none")};
  }
`;

export const InfoContainer = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(216px, 1fr));
  margin-top: 5rem;
`;

/* Form Containers */

export const FormContainer = styled.div`
  max-width: 35rem;
  width: 90%;
  margin: 5rem auto;
  text-align: center;
  margin-bottom: 30rem;

  .icon {
    color: ${({ theme }) => theme.green[200]};
    font-size: 3rem;
    margin-bottom: 2rem;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.green[200]};
    font-weight: 600;
    transition: all 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.green[100]};
    }
  }
`;

export const InputFieldContainer = styled.div`
  text-align: start;
  margin-bottom: 2rem;

  &:first-child {
    margin-top: 3rem;
  }
`;
