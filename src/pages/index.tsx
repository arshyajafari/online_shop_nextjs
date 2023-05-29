// react hooks
import { Fragment } from "react";

// import next packages
import Head from "next/head";

// import main file
import ProductsPage from "./products";

// import image
import logo from "assets/img/logo.svg";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Web site created using next-js and typescript"
        />

        <link rel="icon" href={logo.src} />

        <title>Online Shop</title>
      </Head>

      <ProductsPage />
    </Fragment>
  );
}
