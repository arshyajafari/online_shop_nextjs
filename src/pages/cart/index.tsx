// react hooks
import { Fragment } from "react";

// components
import { Navigation } from "components/Navigation";
import { ShoppingCart } from "components/ShoppingCart";
import { FooterPages } from "components/FooterPages";

const ShoppingCartPage = () => {
  return (
    <Fragment>
      <Navigation />

      <ShoppingCart />

      <FooterPages />
    </Fragment>
  );
};

export default ShoppingCartPage;
