// react hooks
import { Fragment } from "react";

export const ProductsPage = () => {
  return (
    <Fragment>
      <div>
        <form className="mx-4 mb-5">
          <div className="flex">
            <div className="w-2/5 relative mr-3">
              <input
                type="search"
                className="w-full bg-gray-300 text-gray-700 text-base block border-l-gray-50 border border-gray-300 rounded-lg p-2.5 placeholder-gray-500"
                placeholder="Search..."
                // onChange={(e) => setSearchValue(e.target.value)}
              />
            </div>
            <select
              className="w-1/5 bg-gray-300 text-gray-700 text-base border border-gray-300 rounded-lg block p-2.5 cursor-pointer"
              // defaultValue={selectedCategory.name}
              // onChange={(e) =>
              //   setSelectedCategory({
              //     name: e.target.value,
              //   })
              // }
            >
              <option value="">Choose a category</option>
              {/* {categoriesData?.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))} */}
            </select>
          </div>
        </form>
      </div>
      {/* <div className="grid md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 mb-4">
            {data
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
                <div key={item.id} className="lg:mx-4 md:mx-3 sm:mx-2 my-2">
                  <ProductCard items={item} />
                </div>
              ))}
          </div> */}
    </Fragment>
  );
};
