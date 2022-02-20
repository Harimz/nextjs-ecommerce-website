import styled from "styled-components";
import { motion } from "framer-motion";

export const DisplayWrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(224px, 1fr));
  grid-gap: 1rem;
`;

export const ProductHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
  margin-bottom: 2rem;
  align-items: center;
`;

export const ExploreBox = styled.div`
  display: flex;
  grid-gap: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.green[100]};
  }
`;

export const Favorite = styled.div`
  position: absolute;
  right: 1rem;
  top: 1rem;

  .heart {
    color: ${({ theme }) => theme.gray[100]};
    font-size: 1.5rem;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 0.5rem;
`;
