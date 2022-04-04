import styled from "styled-components";

export const CartIcon = styled.div`
  position: relative;
`;

export const ItemCount = styled.div`
  position: absolute;
  background: ${({ theme }) => theme.green[200]};
  border-radius: 50%;
  height: 1.5rem;
  width: 1.5rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 1.1rem;
  bottom: 1.1rem;
  cursor: pointer;
`;
