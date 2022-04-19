import styled from "styled-components";
import { motion } from "framer-motion";

export const CartIcon = styled.div`
  position: relative;
`;

export const ItemCount = styled.div`
  position: absolute;
  background: ${({ theme }) => theme.green[200]};
  border-radius: 50%;
  height: 1.75rem;
  width: 1.75rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 1.1rem;
  bottom: 1.1rem;
  cursor: pointer;
`;

export const CartBackdrop = styled(motion.div)`
  position: absolute;
  top: 4.5rem;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;
