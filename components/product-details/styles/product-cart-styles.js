import styled from "styled-components";

export const CartDetailsContainer = styled.div`
  padding: 2rem;
  width: 60%;
  display: flex;
  flex-direction: column;
  grid-gap: 2rem;

  @media (max-width: 885px) {
    width: 100%;
  }

  @media (max-width: 450px) {
    padding: 0.5rem;
  }
`;

export const AddInputContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const AddInput = styled.div`
  display: flex;
  grid-gap: 2rem;
  margin-left: 2rem;
  align-items: center;
`;

export const Control = styled.div`
  cursor: pointer;
  user-select: none;

  .quantity-icon {
    font-size: 1.75rem;
  }
`;

export const AddContainer = styled.div`
  display: flex;
  grid-gap: 3rem;

  @media (max-width: 450px) {
    flex-direction: column;
  }
`;
