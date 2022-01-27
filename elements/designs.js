import styled from "styled-components";

export const Container = styled.div`
  max-width: 125rem;
  width: 90%;
  margin: 0 auto;
  margin-top: ${({ mt }) => mt};
  margin-bottom: ${({ mb }) => mb};
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
  border: 2px solid red;
`;

export const Box = styled.div`
  display: block;
  position: ${({ pos }) => pos && pos};
  border: 2px solid red;
  width: ${({ w }) => w && w};
`;
