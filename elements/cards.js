import styled from "styled-components";

export const InfoCard = styled.div`
  box-shadow: 1px 3px 7px ${({ theme }) => theme.green[100]};
  border-radius: 0.5rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  .icon {
    color: ${({ theme }) => theme.green[200]};
    font-size: 2.5rem;
  }
`;
