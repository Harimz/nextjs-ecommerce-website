import styled from "styled-components";

export const PrimaryHeading = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  cursor: ${({ type }) => type};
`;

export const DefaultHeading = styled.h1`
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

// Headings

export const MainHeading = styled(DefaultHeading)`
  font-weight: 700;
  font-size: 1.5rem;
`;

export const ThinHeading = styled(DefaultHeading)`
  font-weight: 500;
  font-size: 1.25rem;
`;

export const SecondaryHeading = styled.h2`
  font-weight: 600;
`;

export const DangerHeading = styled(Heading)`
  color: ${({ theme }) => theme.red[100]};
`;

export const InfoHeading = styled(DefaultHeading)`
  color: ${({ theme }) => theme.blue[100]};
  font-weight: 500;
  font-size: 1.75rem;
`;

export const InputHeading = styled(PrimaryHeading)`
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;
