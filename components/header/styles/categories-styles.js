import styled from "styled-components";

export const BrowseContainer = styled.div`
  @media (max-width: 960px) {
    display: none;
  }
`;

export const BrowseMenu = styled.ul`
  position: relative;
  list-style-type: none;
  border-top: 3px solid ${({ theme }) => theme.green[200]};
  margin-top: 1rem;
`;

export const BrowseMenuItem = styled.li`
  display: flex;
  align-items: center;
  grid-gap: 1rem;
  margin-top: 2.5rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  .square {
    color: ${({ theme }) => theme.green[100]};
    font-size: 1.5rem;
  }

  &:hover {
    transform: translateX(1.5rem);
  }

  h2 {
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.green[100]};
    }
  }
`;

export const BrowseMenuItemBox = styled.ul`
  position: absolute;
  top: -2rem;
  right: -8rem;
  background: white;
  box-shadow: 1px 2px 5px ${({ theme }) => theme.green[200]};
  padding: 1rem;
  border-radius: 0.5rem;
  list-style-type: none;
  width: 13rem;
  display: flex;
  flex-direction: column;
  grid-gap: 1rem;
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};

  li {
    transition: all 0.3s ease;
    display: flex;
    grid-gap: 1rem;

    &:hover {
      color: ${({ theme }) => theme.green[200]};
    }
  }
`;
