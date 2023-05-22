// react hooks
import { Fragment, useCallback, useEffect, useState } from "react";

// import components
import { Navigation } from "components/Navigation";
import { ProductCard } from "components/ProductCard";
import { FooterPages } from "components/FooterPages";

// product type
export type ProductItemType = {
  id: number;
  category: string;
  image: string;
  title: string;
  description: string;
  price: number;
  amount: number;
};

export const ProductsPage = () => {
  // products state
  const [products, setProducts] = useState([]);

  // categories state
  const [categoriesData, setCategoriesData] = useState([]);

  // filter state
  const [selectedCategory, setSelectedCategory] = useState({ name: "" });
  const [searchValue, setSearchValue] = useState("");

  // get products category data request method
  const getProductsCategoryData = useCallback(
    async () =>
      await fetch("https://fakestoreapi.com/products/categories")
        .then((res) => res.json())
        .then((res) => setCategoriesData(res)),
    []
  );

  // get products data request method
  const getProductsData = useCallback(
    async () =>
      await fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((res) => setProducts(res)),
    []
  );

  useEffect(() => {
    getProductsData();
    getProductsCategoryData();
  }, [getProductsCategoryData, getProductsData]);

  return (
    <Fragment>
      <Navigation />

      <div className="mt-6">
        <form className="mx-4">
          <div className="flex">
            <div className="w-2/5 relative mr-3">
              <input
                type="search"
                className="w-full bg-gray-300 text-gray-700 text-base block border-l-gray-50 border border-gray-300 rounded-lg p-2.5 placeholder-gray-500"
                placeholder="Search..."
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </div>
            <select
              className="w-1/5 bg-gray-300 text-gray-700 text-base border border-gray-300 rounded-lg block p-2.5 cursor-pointer"
              defaultValue={selectedCategory.name}
              onChange={(e) =>
                setSelectedCategory({
                  name: e.target.value,
                })
              }
            >
              <option value="">Choose a category</option>
              {categoriesData?.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </form>
      </div>
      <div className="max-w-3xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 xl:gap-x-8">
          {products
            ?.filter((item) => {
              if (searchValue === "") return item;
              else if (
                item.title
                  .toLowerCase()
                  .includes(searchValue.toLowerCase().trim())
              )
                return item;

              return null;
            })
            ?.filter((item) =>
              selectedCategory.name !== ""
                ? item.category === selectedCategory.name
                : item
            )
            .map((item) => (
              <div key={item.id} className="lg:mx-4 md:mx-3 sm:mx-2">
                <ProductCard items={item} />
              </div>
            ))}
        </div>
      </div>

      <FooterPages />
    </Fragment>
  );
};
