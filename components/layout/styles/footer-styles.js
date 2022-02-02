import styled from "styled-components";

export const FooterContainer = styled.footer`
  margin-top: 15rem;
  background: ${({ theme }) => theme.gray[500]};
`;

export const FooterWrapper = styled.div`
  max-width: 125rem;
  width: 90%;
  display: flex;
  grid-gap: 5rem;
  margin: 0 auto;
  padding: 5rem;

  @media (max-width: 950px) {
    padding: 3rem 1rem;
    flex-direction: column;
    grid-gap: 3rem;
  }
`;

export const List = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  grid-gap: 1rem;
`;

export const ListItem = styled.li`
  color: white;
`;

export const ListLink = styled.p`
  cursor: pointer;
  color: ${({ theme }) => theme.gray[100]};
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.green[100]};
  }
`;
