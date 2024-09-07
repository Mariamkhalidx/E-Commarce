export interface Root {
  status: string;
  data: Data;
}

export interface Data {
  _id: string;
  wishlistOwner: string;
  products: Product[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface Product {
  _id: string;
  product: ProductDetails;
  price: number;
}

export interface ProductDetails {
  _id: string;
  title: string;
  imageCover: string;
}
