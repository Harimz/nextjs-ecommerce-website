import styled from "styled-components";
import { motion } from "framer-motion";

export const InfoCard = styled.div`
  box-shadow: 1px 2px 8px ${({ theme }) => theme.green[100]};
  border-radius: 0.5rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  .icon {
    color: ${({ theme }) => theme.green[200]};
    font-size: 2.5rem;
  }
`;

export const ProductCard = styled(motion.div)`
  background: linear-gradient(rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05)),
    url(${({ imgPath }) => `${imgPath}`});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 0.5rem;
  height: 20rem;
  cursor: pointer;
`;
