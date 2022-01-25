import styled from "styled-components";

export const TransparentBtn = styled.button`
  background: none;
  padding: ${({ p }) => (p ? p : "1rem")};
  color: ${({ theme }) => theme.green[200]};
  font-weight: 600;
  cursor: pointer;
  border: none;
  font-size: 1rem;
`;

export const PrimaryBtn = styled.button`
  background: ${({ theme }) => theme.green[200]};
  padding: ${({ p }) => (p ? p : "1rem")};
  color: white;
  transition: scale 0.3s ease-in;
  font-weight: 600;
  cursor: pointer;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;

  &:hover {
    transform: scale(0.95);
  }
`;
