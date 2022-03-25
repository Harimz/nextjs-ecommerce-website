import styled from "styled-components";

export const SidebarContainer = styled.div`
  width: 25%;
  padding: 1rem 0;
  margin-right: 2rem;

  @media (max-width: 950px) {
    width: 100%;
  }
`;

export const RangeWrapper = styled.div`
  display: flex;
  grid-gap: 1rem;
  margin-top: 2rem;
`;

export const CategoryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0;
`;

export const CategoryList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  grid-gap: 1.5rem;
  transition: all 0.3s ease-in-out;
  height: ${({ displayList }) => (displayList ? "20rem" : 0)};
  overflow: hidden;
`;

export const ListItem = styled.li`
  cursor: pointer;
  transition: all 0.2s ease-in;
  color: ${({ selected, theme }) => selected && theme.green[100]};

  &:hover {
    color: ${({ theme }) => theme.green[100]};
  }
`;

export const Icon = styled.div`
  cursor: pointer;
`;
