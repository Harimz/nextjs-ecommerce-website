import styled from "styled-components";
import { motion } from "framer-motion";

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 3rem;

  @media (max-width: 1050px) {
    display: none;
  }
`;

export const UserMenu = styled.div`
  position: relative;

  @media (max-width: 1050px) {
    display: none;
  }
`;

export const UserImage = styled.div`
  position: relative;
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.05);
`;

export const UserOptions = styled(motion.div)`
  position: absolute;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.5);
  border-radius: 0.25rem;
  top: 3rem;
  right: -1rem;
  width: 12rem;
  overflow: hidden;
`;

export const OptionsItem = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  .options-icon {
    margin-right: 1rem;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;
