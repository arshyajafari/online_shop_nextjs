import { styled, css } from "styled-components";

const containerCss = (isShown: any) => {
  if (isShown) {
    return css`
      opacity: 1;
      pointer-events: visible;
    `;
  }
};

export const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  pointer-events: none;
  transition: all 0.3s ease-in-out;
  transition: 0.3s;
  opacity: 0;
  z-index: 1;
  ${containerCss}
`;
