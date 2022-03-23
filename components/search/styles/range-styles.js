import styled from "styled-components";

export const Range = styled.div``;

export const SliderValue = styled.div`
  position: relative;
  width: 100%;

  span {
    position: absolute;
    height: 45px;
    width: 45px;
    color: #fff;
    font-weight: 700;
    top: -55px;
    transition: transform 0.2s ease-in-out;
    transform-origin: bottom;
    transform: translateX(-50%)
      scale(${({ displayValue }) => (displayValue ? 1 : 0)});
    line-height: 55px;
    z-index: 2;
    text-align: center;
  }

  span::after {
    position: absolute;
    content: "";
    height: 45px;
    width: 45px;
    background: ${({ theme }) => theme.green[200]};
    transform: translateX(-50%) rotate(45deg);
    z-index: -1;
    left: 50%;
    text-align: center;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    border-bottom-left-radius: 50%;
  }
`;

export const RangeInput = styled.input`
  -webkit-appearance: none;
  height: 3px;
  width: 100%;
  background: #ddd;
  border-radius: 5px;
  outline: none;
  border: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 20px;
    width: 20px;
    background: ${({ theme }) => theme.green[200]};
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.green[100]};
    cursor: pointer;
  }
`;
