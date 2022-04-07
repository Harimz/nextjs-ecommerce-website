import styled, { ThemeConsumer } from "styled-components";

export const DefaultBtn = styled.button`
  padding: ${({ p }) => (p ? p : "1rem")};
  cursor: pointer;
  font-weight: 600;
  margin: ${({ m }) => m};
  font-size: 1rem;
  border: 0;
  width: ${({ w }) => w};

  transition: all 0.1s ease-in;
`;

export const TransparentBtn = styled(DefaultBtn)`
  background: none;
  color: ${({ theme }) => theme.green[200]};
  font-weight: 600;
  border: none;
`;

export const PrimaryBtn = styled(DefaultBtn)`
  background: ${({ theme }) => theme.green[200]};
  color: white;
  font-weight: 600;
  border: none;
  border-radius: 0.5rem;

  &:hover {
    transform: scale(0.99);
  }

  &:active {
    transform: scale(1);
  }
`;

export const AddButton = styled.button`
  padding: 1rem;
  display: flex;
  align-items: center;
  grid-gap: 1rem;
  background: ${({ theme }) => theme.green[200]};
  cursor: pointer;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  color: white;
  border: none;
  font-weight: 600;

  .cart-icon {
    font-size: 1.25rem;
  }

  &:hover {
    filter: brightness(90%);
  }
`;

export const ClearButton = styled(DefaultBtn)`
  display: flex;
  align-items: center;
  background: transparent;
  grid-gap: 1rem;
  border-radius: 0.5rem;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;

export const RemoveButton = styled(DefaultBtn)`
  background-color: ${({ theme }) => theme.red[100]};
  color: white;
  border-radius: 0.5rem;
  min-width: 12rem;
  width: 8rem;
  cursor: pointer;

  &:hover {
    transform: scale(0.99);
  }

  &:active {
    transform: scale(1);
  }
`;
