// next packages
import type { AppProps } from "next/app";

// import redux package
import { Provider } from "react-redux";

// import store file
import { shoppingCartStore } from "store";

// import globals.css file
import "styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={shoppingCartStore}>
      <Component {...pageProps} />
    </Provider>
  );
}
