import styled from "styled-components";

export const DetailsContainer = styled.div`
  display: flex;
  grid-gap: 3rem;
  margin-bottom: 5rem;

  @media (max-width: 885px) {
    flex-direction: column;
  }
`;
