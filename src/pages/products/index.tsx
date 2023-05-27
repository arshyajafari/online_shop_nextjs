// react hooks
import { Fragment, useCallback, useEffect, useState } from "react";

// import components
import { LoadingCM } from "components/Loading";
import { Navigation } from "components/Navigation";
import { ProductCard } from "components/ProductCard";
import { FooterPages } from "components/FooterPages";

// import axios
import axios from "axios";

// import types
import { ProductsTypeProps } from "type";

const ProductsPage = () => {
  // products state
  const [products, setProducts] = useState<any>([]);

  // categories state
  const [categoriesData, setCategoriesData] = useState([]);

  // filter state
  const [selectedCategory, setSelectedCategory] = useState({ name: "" });
  const [searchValue, setSearchValue] = useState("");

  // loading state
  const [isLoading, setIsLoading] = useState(false);

  // get products data request method
  const getProductsData = useCallback(async () => {
    try {
      setIsLoading(true);

      const { data, statusText } = await axios.get<ProductsTypeProps>(
        "https://fakestoreapi.com/products"
      );

      if (statusText === "OK") {
        setTimeout(() => setIsLoading(false), 3000);

        setProducts(data);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.message;
      } else {
        return "An unexpected error occurred";
      }
    }
  }, []);

  // get products category data request method
  const getProductsCategoryData = useCallback(async () => {
    try {
      const { data } = await axios.get(
        "https://fakestoreapi.com/products/categories"
      );

      setCategoriesData(data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.message;
      } else {
        return "An unexpected error occurred";
      }
    }
  }, []);

  useEffect(() => {
    getProductsData();
    getProductsCategoryData();
  }, [getProductsCategoryData, getProductsData]);

  return (
    <Fragment>
      <Navigation />

      {isLoading ? (
        <LoadingCM />
      ) : (
        <Fragment>
          <div className="max-w-full md:max-w-7xl mt-6 mx-auto px-4 sm:px-6 lg:px-8">
            <form className="mx-0 md:mx-3">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-2/5 relative mr-3 mb-2 md:mb-0">
                  <input
                    type="search"
                    className="w-full bg-gray-300 text-gray-700 text-base block border-l-gray-50 border border-gray-300 rounded-lg p-2.5 placeholder-gray-500"
                    placeholder="Search..."
                    onChange={(e) => setSearchValue(e.target.value)}
                  />
                </div>
                <select
                  className="w-full md:w-1/5 bg-gray-300 text-gray-700 text-base border border-gray-300 rounded-lg block p-2.5 cursor-pointer"
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
          <div className="max-w-3xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 xl:gap-x-8">
              {products
                ?.filter((item: any) => {
                  if (searchValue === "") return item;
                  else if (
                    item.title
                      .toLowerCase()
                      .includes(searchValue.toLowerCase().trim())
                  )
                    return item;

                  return null;
                })
                ?.filter((item: any) =>
                  selectedCategory.name !== ""
                    ? item.category === selectedCategory.name
                    : item
                )
                .map((item: any) => (
                  <div key={item.id} className="lg:mx-4 md:mx-3 sm:mx-2">
                    <ProductCard items={item} />
                  </div>
                ))}
            </div>
          </div>
        </Fragment>
      )}
      <FooterPages />
    </Fragment>
  );
};

export default ProductsPage;
