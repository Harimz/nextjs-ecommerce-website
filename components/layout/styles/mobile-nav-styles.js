import styled from "styled-components";
import { motion } from "framer-motion";

export const Backdrop = styled(motion.div)`
  position: fixed;
  top: 4.5rem;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;

  @media (min-width: 946px) {
    display: none;
  }
`;

export const Menu = styled(motion.div)`
  position: absolute;
  top: 0;
  width: 100%;
  padding: 2rem;
  background: white;
  height: 100vh;

  @media (min-width: 946px) {
    display: none;
  }
`;

export const NavList = styled.ul`
  list-style-type: none;
  overflow-y: scroll;
  height: 15rem;
  margin-bottom: 1rem;

  @media (min-height: 650px) {
    height: 20rem;
  }
`;

export const MenuHeader = styled.div`
  display: flex;
  grid-gap: 1rem;
  margin-bottom: 1rem;
`;

export const SubMenu = styled.ul`
  margin-left: 1rem;
  margin-bottom: 1rem;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  grid-gap: 0.75rem;

  .square {
    margin-right: 0.5rem;
    height: 0.75rem;
    color: ${({ theme }) => theme.green[100]};
  }
`;

export const SubAuthLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.gray[500]};
  font-weight: 500;
`;

export const AuthContainer = styled.div`
  display: flex;
  margin-top: 2rem;
  grid-gap: 1rem;
  flex-direction: column-reverse;
`;
