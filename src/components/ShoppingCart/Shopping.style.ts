import { styled } from "styled-components";

export const StyledItemsList = styled.ul`
  max-width: 50rem;
  border-color: rgb(229 231 235 / var(--tw-border-opacity));
  border-top-width: 1px;
  border-bottom-width: 1px;
  list-style: none;
  margin: 3rem auto;
  padding: 2rem 0px;
  --tw-border-opacity: 1;

  @media (max-width: 370px) {
    padding: 0px;
  }
`;

export const StyledItemList = styled.li`
  display: flex;
  padding: 1.5rem 1rem;

  @media (max-width: 370px) {
    flex-direction: column;
  }
`;

export const StyledItemImage = styled.div`
  @media (max-width: 370px) {
    margin: auto;
  }

  & img {
    background-color: rgb(229 231 235 / var(--tw-text-opacity));
    border-radius: 0.375rem;
    --tw-text-opacity: 1;
  }
`;

export const StyledShoppingDistricts = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-left: 1.5rem;
  padding: 15px 0px;

  @media (max-width: 370px) {
    margin-left: 0;
  }

  & div {
    display: flex;
    justify-content: space-between;

    & h4 {
      font-size: 1.125rem;
      font-weight: 500;
      line-height: 1.25rem;
      margin: 0;
    }

    & p {
      color: rgb(17 24 39 / var(--tw-text-opacity));
      font-size: 0.875rem;
      font-weight: 500;
      line-height: 1.25rem;
      margin-left: 1rem;
      --tw-text-opacity: 1;
    }
  }
`;

export const StyledNumberItems = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 370px) {
    margin-top: 1rem;
  }
`;
