// import redux package
import { Provider } from "react-redux";

// import store file
import { shoppingCartStore } from "store";

// import main file
import ProductsPage from "./products";

export default function Home() {
  return (
    <Provider store={shoppingCartStore}>
      <ProductsPage />
    </Provider>
  );
}
