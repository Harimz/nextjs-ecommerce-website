import styled from "styled-components";

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

export const InfoHeading = styled(Heading)`
  color: ${({ theme }) => theme.blue[100]};
  font-weight: 500;
  font-size: 1.75rem;
`;

export const InputHeading = styled(Heading)`
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;
