// react hooks
import { FC, Fragment, useState } from "react";

// import get all products in cart from reducer
import { getAllItemsInShoppingCart, getTotalPrice } from "reducer";

// components
import { Navigation } from "components/Navigation";
import { ShoppingCart } from "components/ShoppingCart";
import { FooterPages } from "components/FooterPages";
import { useSelector } from "react-redux";

const ShoppingCartPage: FC = () => {
  // get all products
  const products = useSelector(getAllItemsInShoppingCart);

  // get total price
  const totalPrice = useSelector(getTotalPrice);

  let checkedCode = "";
  const [discountValue, setDiscountValue] = useState("");

  const discountCodeHandler = () => {};

  return (
    <Fragment>
      <Navigation />

      <div className="h-screen my-12">
        {products.map((item: any) => (
          <div key={item.id}>
            <ShoppingCart items={item} />
          </div>
        ))}
      </div>

      {products.length > 0 ? (
        <Fragment>
          <div className="max-w-xl mt-10 mx-auto mb-0">
            <div className="rounded-lg p-6">
              <div className="flow-root">
                <dl className="text-sm leading-5 -my-4 mx-0">
                  <div className="flex items-center justify-between py-4">
                    <dt className="text-gray-900 text-lg font-medium leading-6">
                      Order total
                    </dt>
                    <dd className="text-gray-900 text-base font-medium m-0">
                      $ {totalPrice.toFixed(2)}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/3 sm:w-1/2 my-4 mx-auto px-6">
            <input
              type="text"
              id={checkedCode === "true" ? "success" : "error"}
              placeholder="Discount code"
              className={
                checkedCode === ""
                  ? "w-full text-gray-900 text-sm block border border-gray-500 rounded-lg p-2.5 outline-none placeholder-gray-700"
                  : checkedCode === "true"
                  ? "w-full text-green-900 text-sm block border border-green-500 rounded-lg p-2.5 outline-none placeholder-green-700 focus:border-green-500 focus:ring-green-500"
                  : "w-full text-red-900 text-sm block border border-red-500 rounded-lg p-2.5 outline-none placeholder-red-700 focus:border-red-500 focus:ring-red-500"
              }
              onChange={(e) => setDiscountValue(e.target.value)}
            />
            <p
              className={
                checkedCode === ""
                  ? "text-gray-600 text-sm mt-2"
                  : checkedCode === "true"
                  ? "text-green-600 text-sm mt-2"
                  : "text-red-600 text-sm mt-2"
              }
            >
              {checkedCode === "" ? (
                ""
              ) : checkedCode === "true" ? (
                <span className="font-medium">Well done!</span>
              ) : (
                <span className="font-medium">
                  Unfortunately, the discount code is wrong!
                </span>
              )}
            </p>
            <button
              className="w-full bg-sky-600 text-white lg:text-sm sm:text-xs font-medium uppercase leading-normal rounded-md my-5 px-6 md:px-2 py-2.5 hover:bg-sky-700"
              onClick={discountCodeHandler}
            >
              Check code
            </button>
          </div>
        </Fragment>
      ) : (
        ""
      )}

      <FooterPages />
    </Fragment>
  );
};

export default ShoppingCartPage;
