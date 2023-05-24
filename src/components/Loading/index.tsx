// react hooks
import { FC, Fragment } from "react";

// styled components
import {
  StyledLoadingBox,
  StyledImageContainer,
  StyledCompanyTitle,
} from "./Loading.style";

// import image
import logo from "assets/img/logo.svg";
import Image from "next/image";

export const LoadingCM: FC = () => {
  return (
    <Fragment>
      <StyledLoadingBox>
        <StyledImageContainer>
          <Image src={logo} alt="web logo" />
        </StyledImageContainer>
        <StyledCompanyTitle>ONLINE SHOP</StyledCompanyTitle>
      </StyledLoadingBox>
    </Fragment>
  );
};
