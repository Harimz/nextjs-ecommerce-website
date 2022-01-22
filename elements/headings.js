import styled from "styled-components";

export const Heading = styled.h1`
  font-size: ${({ size }) => (size ? size : "2rem")};
  font-weight: 600;
`;

export const SubHeading = styled.h2`
  font-size: ${({ size }) => (size ? size : "1.5rem")};
`;
