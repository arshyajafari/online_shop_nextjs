// react hooks
import { Fragment } from "react";

// next packages
import type { AppProps } from "next/app";
import Head from "next/head";

// import redux package
import { Provider } from "react-redux";

// import store file
import { shoppingCartStore } from "store";

// import react toastify package
import { ToastContainer } from "react-toastify";

// import globals.css file
import "styles/globals.css";

// import image
import logo from "assets/img/logo.svg";

export default function App({ Component, pageProps }: AppProps) {
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

      <Provider store={shoppingCartStore}>
        <Component {...pageProps} />
      </Provider>

      <ToastContainer />
    </Fragment>
  );
}
