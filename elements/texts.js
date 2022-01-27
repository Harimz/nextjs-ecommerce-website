import styled from "styled-components";

export const Text = styled.p`
  color: ${({ theme }) => theme.gray[200]};
  font-size: ${({ size }) => size};
  margin: ${({ m }) => m};
`;
