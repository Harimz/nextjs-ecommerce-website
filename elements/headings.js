import styled from "styled-components";

export const Heading = styled.h1`
  font-size: ${({ size }) => (size ? size : "2rem")};
  font-weight: ${({ fw }) => (fw ? fw : "600")};
  cursor: ${({ type }) => type};
  margin: ${({ m }) => m};
`;

export const SubHeading = styled.h2`
  font-size: ${({ size }) => (size ? size : "1.25rem")};
`;

export const DangerHeading = styled(Heading)`
  color: ${({ theme }) => theme.red[100]};
`;
