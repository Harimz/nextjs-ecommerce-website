import styled from "styled-components";

export const NavWrapper = styled.div`
  display: flex;
  padding: 2rem 0;
  justify-content: space-between;

  @media (max-width: 945px) {
    padding: 1rem;
  }
`;

export const AuthLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.gray[500]};
  transition: color 0.3s ease;
  font-weight: 600;
  font-size: 1.25rem;

  &:hover {
    color: ${({ theme }) => theme.green[100]};
  }
`;

export const AuthContainer = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 5rem;

  @media (max-width: 1050px) {
    display: none;
  }
`;

export const MenuButton = styled.div`
  position: relative;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 40px;
  cursor: pointer;
  display: none;
  transition: all 0.5s ease-in-out;

  @media (max-width: 1050px) {
    display: flex;
  }
`;

export const MenuButtonBurger = styled.div`
  width: 25px;
  height: 4px;
  background: black;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);
  transition: all 0.5s ease-in-out;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 25px;
    height: 4px;
    background: black;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);
    transition: all 0.5s ease-in-out;
  }

  &::before {
    transform: ${({ isOpen }) =>
      isOpen ? "rotate(45deg) translate(35px, -35px)" : "translateY(-8px)"};
  }

  &::after {
    transform: ${({ isOpen }) =>
      isOpen ? "rotate(-45deg) translate(35px, 35px)" : "translateY(8px)"};
  }

  transform: translateX(${({ isOpen }) => isOpen && "-50px"});
  background: ${({ isOpen }) => isOpen && "transparent"};
  box-shadow: ${({ isOpen }) => isOpen && "none"};
`;
