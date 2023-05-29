// react hooks
import { FC, Fragment, useState, useRef, FormEvent } from "react";

// import next package
import Head from "next/head";

// import get all products in cart from reducer
import { getAllItemsInShoppingCart, getTotalPrice } from "reducer";

// components
import { Navigation } from "components/Navigation";
import { ShoppingCart } from "components/ShoppingCart";
import { FooterPages } from "components/FooterPages";
import { useSelector } from "react-redux";
import { NotFound } from "components/NotFound";

// get static data
const staticData = {
  discount_amount: 0.01,
  discount_char: "abc",
};

const ShoppingCartPage: FC = () => {
  // get all products
  const products = useSelector(getAllItemsInShoppingCart);

  // get total price
  const totalPrice = useSelector(getTotalPrice);

  const discountData = useRef<any>(null);

  const [checkedCode, setCheckedCode] = useState("");

  // discount code handler
  const discountCodeHandler = (e: FormEvent) => {
    e.preventDefault();

    const staticDiscountCode = staticData.discount_char;

    const value = discountData.current.value;

    if (
      value.replace(/\s/g, "").trim().length >= 3 &&
      value === staticDiscountCode
    ) {
      setCheckedCode("true");
    } else if (
      value.replace(/\s/g, "").trim().length < 3 ||
      value !== staticDiscountCode
    ) {
      setCheckedCode("false");
    } else {
      setCheckedCode("");
    }
  };

  // total price with discount code
  const totalPriceWithDiscountCode = () =>
    totalPrice - totalPrice * staticData.discount_amount;

  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>Cart</title>
      </Head>

      <Navigation />

      <div className="w-full">
        {products.map((item: any) => (
          <div key={item.id}>
            <ShoppingCart items={item} />
          </div>
        ))}

        {products.length > 0 ? (
          <Fragment>
            <div className="max-w-xl my-10 mx-auto">
              <div className="rounded-lg p-6">
                <div className="flow-root">
                  <dl className="text-sm leading-5 -my-4 mx-0">
                    <div className="flex items-center justify-between py-4">
                      <dt className="text-gray-900 text-lg font-medium leading-6">
                        Order total
                      </dt>
                      <dd className="text-gray-900 text-base font-medium m-0">
                        ${" "}
                        {checkedCode === "true"
                          ? totalPriceWithDiscountCode().toFixed(2)
                          : totalPrice.toFixed(2)}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/3 sm:w-1/2 my-4 mx-auto px-6">
              <form method="post" onSubmit={(e) => discountCodeHandler(e)}>
                <input
                  type="text"
                  id={checkedCode === "true" ? "success" : "error"}
                  placeholder="Discount code"
                  ref={discountData}
                  className={
                    checkedCode === ""
                      ? "w-full text-gray-900 text-sm block border border-gray-500 rounded-lg p-2.5 outline-none placeholder-gray-700"
                      : checkedCode === "true"
                      ? "w-full text-green-900 text-sm block border border-green-500 rounded-lg p-2.5 outline-none placeholder-green-700 focus:border-green-500 focus:ring-green-500"
                      : "w-full text-red-900 text-sm block border border-red-500 rounded-lg p-2.5 outline-none placeholder-red-700 focus:border-red-500 focus:ring-red-500"
                  }
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
                <button className="w-full bg-sky-600 text-white lg:text-sm sm:text-xs font-medium uppercase leading-normal rounded-md my-5 px-6 md:px-2 py-2.5 hover:bg-sky-700">
                  Check code
                </button>
              </form>
            </div>
          </Fragment>
        ) : (
          <NotFound />
        )}
      </div>

      <FooterPages />
    </Fragment>
  );
};

export default ShoppingCartPage;
