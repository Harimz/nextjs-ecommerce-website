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
  position: relative;
  border-radius: 0.5rem;
  cursor: pointer;

  .imgContainer {
    position: relative;
    width: 100%;
    height: 20rem;
    filter: brightness(95%);
    border-radius: 1rem;
    overflow: hidden;
    margin-bottom: 1rem;
  }
`;
