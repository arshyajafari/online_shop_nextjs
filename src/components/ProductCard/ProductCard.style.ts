import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  height: 100%;
  border-radius: 8px;
  margin: auto;

  & div h5 {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  & div p {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;
