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

/* Layout Containers */

export const InputContainer = styled.div`
  position: relative;
  width: ${({ w }) => (w ? w : "100%")};
  transition: all 0.1s ease-in;

  .input-icon {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 1rem;
    font-size: 1.25rem;
  }

  &.error {
    input {
      border: 1px solid ${({ theme }) => theme.red[100]};
    }

    .input-icon {
      color: ${({ theme }) => theme.red[100]};
    }
  }

  @media (max-width: 1050px) {
    display: ${({ mobile }) => (mobile ? "none" : "block")};
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
