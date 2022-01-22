import styled from "styled-components";

export const Container = styled.div`
  max-width: 90rem;
  width: 90%;
  margin: auto;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: ${({ dir }) => (dir ? dir : "row")};
  justify-content: ${({ justify }) => (justify ? justify : "flex-start")};
  align-items: ${({ align }) => (align ? align : "flex-start")};
  padding: ${({ p }) => (p ? p : 0)};
  margin-bottom: ${({ mb }) => (mb ? mb : 0)};
  margin-top: ${({ mt }) => (mt ? mt : 0)};
  margin-bottom: ${({ mr }) => (mr ? mr : 0)};
  margin-bottom: ${({ ml }) => (ml ? ml : 0)};
`;
