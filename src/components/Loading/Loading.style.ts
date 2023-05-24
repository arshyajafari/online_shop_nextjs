import { styled } from "styled-components";

export const StyledLoadingBox = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to right, #2566e0, #1f5bca, #1951b7);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  animation: loading 0.5s;
  z-index: 2000;

  @keyframes loading {
    0% {
      opacity: 0;
    }
    1% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const StyledImageContainer = styled.div`
  width: 100px;

  & img {
    width: auto;
    height: auto;
    animation: img-scale 1s;
  }

  @keyframes img-scale {
    0% {
      transform: scale(0.1, 0.1);
    }
    100% {
      transform: scale(1, 1);
    }
  }
`;

export const StyledCompanyTitle = styled.h2`
  color: #ffffff;
  font-size: 20px;
  animation: company-title 0.5s;
  margin-top: 8px;
  margin-bottom: 0px;

  @keyframes company-title {
    0% {
      transform: scale(10, 10);
      filter: blur(100px);
    }
    100% {
      transform: scale(1, 1);
      filter: blur(0px);
    }
  }
`;
