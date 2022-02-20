import styled, { ThemeConsumer } from "styled-components";

export const DefaultBtn = styled.button`
  padding: ${({ p }) => (p ? p : "1rem")};
  cursor: pointer;
  font-weight: 600;
  margin: ${({ m }) => m};
  font-size: 1rem;
  width: ${({ w }) => (w ? w : "100%")};

  transition: all 0.3s ease-in;

  &:hover {
    transform: scale(0.95);
    box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.5);
  }

  &:active {
    transform: scale(1);
  }
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
`;

export const AddButton = styled.button`
  padding: 1rem;
  display: flex;
  align-items: center;
  grid-gap: 1rem;
  background: ${({ theme }) => theme.green[200]};
  cursor: pointer;
  border-radius: 0.75rem;
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
