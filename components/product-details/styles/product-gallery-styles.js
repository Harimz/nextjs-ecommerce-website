import styled from "styled-components";

export const GalleryContainer = styled.div`
  width: 40%;
`;

export const MainImage = styled.div`
  position: relative;
  height: 35rem;
  width: 100%;
  margin-bottom: 1rem;
  border-radius: 1rem;
  overflow: hidden;
  filter: brightness(95%);
`;

export const SubImage = styled.div`
  position: relative;
  height: 15rem;
  width: 100%;
  cursor: pointer;
  border-radius: 1rem;
  overflow: hidden;
  filter: brightness(${({ active }) => (active ? "80%" : "90%")});
`;

export const ImageViews = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
`;
