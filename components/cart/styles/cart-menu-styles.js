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
  border-top-left-radius: 1rem;
`;

export const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
`;

export const CartItems = styled.div`
  border: 2px solid red;
  overflow-y: auto;
`;

export const CartItem = styled.div`
  padding: 1rem;
  display: grid;
  align-items: center;
  grid-template-columns: 6rem 1fr 6rem;
`;

export const CartImage = styled.div`
  position: relative;
  height: 5rem;
  width: 5rem;
`;

export const CartContent = styled.div`
  margin-left: 0.5rem;
`;

export const QtyInput = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-top: 0.5rem;
`;

export const QtyButton = styled.div`
  background: rgba(0, 0, 0, 0.14);
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
