import { motion } from "framer-motion";
import styled from "styled-components";

export const BackdropOverlay = styled(motion.div)`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const CartMenu = styled(motion.div)`
  position: fixed;
  right: 0;
  background: white;
  height: 100%;
  max-width: 40rem;
  width: 100%;
  border-top-left-radius: 5rem;
`;

export const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
`;
