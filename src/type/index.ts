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

// user information type
export type UserInfoTypeProps = {
  name: { firstname: string; lastname: string };
  email: string;
  address: { city: string; street: string; number: number; zipcode: string };
};

// modal type
export type ModalTypeProps = {
  show: boolean;
  onClose: () => void;
};

// toast type
export type ReactToastTypeProps = {
  type: string;
  text: string;
};
