import styled from "styled-components";

export const ProductInfoContainer = styled.div``;

export const TabsContainer = styled.div`
  display: flex;
  grid-gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 480px) {
    flex-direction: column;
    grid-gap: 1rem;
  }
`;

export const Tab = styled.div`
  padding: 1rem;
  width: 15rem;
  text-align: center;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid
    ${({ active, theme }) => (active ? theme.green[100] : "gray")};
  color: ${({ active, theme }) => active && theme.green[100]};

  &:hover {
    border: 1px solid ${({ theme }) => theme.green[100]};
    color: ${({ theme }) => theme.green[100]};
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const List = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 1rem;

  h1 {
    width: 20rem;
  }

  @media (max-width: 780px) {
    flex-direction: column;
    align-items: flex-start;
    grid-gap: 1rem;

    h1 {
      width: 15rem;
    }
  }
`;
