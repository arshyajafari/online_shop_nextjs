import styled from "styled-components";

export const StyledShadow = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  border-radius: 0.375rem;
  position: absolute;
  top: 0px;
  right: 0px;
  left: 0px;
  padding: 1rem;
  overflow: hidden;

  & div {
    height: 9rem;
    background-image: linear-gradient(to top, var(--tw-gradient-stops));
    --tw-gradient-from: #000 var(--tw-gradient-from-position);
    --tw-gradient-from-position: ;
    --tw-gradient-to: rgb(0 0 0 / 0) var(--tw-gradient-from-position);
    --tw-gradient-to-position: ;
    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
    position: absolute;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.5;
  }

  & span {
    color: rgb(255 255 255 / var(--tw-text-opacity));
    font-size: 1.315rem;
    font-weight: 600;
    line-height: 1.75rem;
    position: relative;
    --tw-text-opacity: 1;
  }
`;

export const StyledProductInfo = styled.div`
  position: relative;
  margin-top: 1rem;

  & h3 {
    color: rgb(17 24 39 / var(--tw-text-opacity));
    font-size: 1.125rem;
    font-weight: 500;
    line-height: 1.25rem;
    --tw-text-opacity: 1;
  }

  & p {
    color: rgb(107 114 128 / var(--tw-text-opacity));
    font-size: 0.95rem;
    line-height: 1.25rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-top: 0.5rem;
    overflow: hidden;
    --tw-text-opacity: 1;
  }
`;

export const StyledAction = styled.div`
  width: 100%;
  margin-top: 1.5rem;

  & button {
    width: 100%;
    background-color: rgb(243 244 246 / var(--tw-bg-opacity));
    color: rgb(17 24 39 / var(--tw-text-opacity));
    font-size: 0.975rem;
    font-weight: 500;
    line-height: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-width: 1px;
    border-color: transparent;
    border-radius: 0.375rem;
    position: relative;
    padding: 0.5rem 2rem;
    --tw-bg-opacity: 1;
    --tw-text-opacity: 1;

    &:hover {
      background-color: rgb(229 231 235 / var(--tw-bg-opacity));
    }
  }
`;
