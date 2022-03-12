import styled from "styled-components";

export const Spinner = styled.div`
  display: flex;
  justify-content: center;

  &::after {
    content: "";
    width: 0.5rem;
    height: 0.5rem;
    border: 5px solid transparent;
    border-top-color: white;
    border-radius: 50%;
    animation: loading 1s linear infinite;
  }

  @keyframes loading {
    to {
      transform: rotate(1turn);
    }
  }
`;

export const GreenSpinner = styled.div`
  display: flex;
  justify-content: center;

  &::after {
    content: "";
    width: 1rem;
    height: 1rem;
    border: 5px solid transparent;
    border-top-color: ${({ theme }) => theme.green[200]};
    border-radius: 50%;
    animation: loading 1s linear infinite;
  }

  @keyframes loading {
    to {
      transform: rotate(1turn);
    }
  }
`;
