import styled from "styled-components";

export const GalleryContainer = styled.div`
  width: 40%;

  @media (max-width: 885px) {
    width: 100%;
  }
`;

export const MainImage = styled.div`
  position: relative;
  height: 35rem;
  width: 100%;
  margin-bottom: 1rem;
  border-radius: 1rem;
  overflow: hidden;
  filter: brightness(95%);

  @media (max-width: 450px) {
    height: 25rem;
  }
`;

export const SubImage = styled.div`
  position: relative;
  height: 15rem;
  width: 100%;
  cursor: pointer;
  border-radius: 1rem;
  overflow: hidden;
  filter: brightness(${({ active }) => (active ? "80%" : "90%")});

  @media (max-width: 450px) {
    height: 10rem;
  }
`;

export const ImageViews = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;

  @media (max-width: 450px) {
    grid-gap: 1rem;
  }
`;
