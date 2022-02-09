import styled from "styled-components";

export const Text = styled.p`
  color: ${({ theme }) => theme.gray[200]};
  font-size: ${({ size }) => size};
  margin: ${({ m }) => m};
  cursor: ${({ type }) => type};
`;

export const ErrorText = styled.p`
  position: absolute;
  color: ${({ theme }) => theme.red[100]};
  transition: opacity 0.1s ease-in;
  opacity: ${({ error }) => (error ? 1 : 0)};
  font-weight: 600;
  margin-top: 0.25rem;
`;
