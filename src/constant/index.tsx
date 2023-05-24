// products type
export type ProductsTypeProps = {
  id: number;
  category: string;
  image: string;
  title: string;
  description: string;
  price: number;
  amount: number;
};

// product items type
export type ProductItemsTypeProps = {
  items: ProductsTypeProps;
};
