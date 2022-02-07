import styled from "styled-components";

export const PrimaryHeading = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  cursor: ${({ type }) => type};
`;

export const Heading = styled.h1`
  font-size: ${({ size }) => (size ? size : "2rem")};
  font-weight: ${({ fw }) => (fw ? fw : "600")};
  cursor: ${({ type }) => type};
  margin: ${({ m }) => m};
  color: ${({ color }) => color};
`;

export const SubHeading = styled.h2`
  font-size: ${({ size }) => (size ? size : "1.25rem")};
`;

export const DangerHeading = styled(Heading)`
  color: ${({ theme }) => theme.red[100]};
`;

export const InputHeading = styled(PrimaryHeading)`
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;
