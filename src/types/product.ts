import { ParsedUrlQuery } from 'querystring';
import { ProductCategory } from './home';

export interface ProductDetails {
  productId: string;
  categoryId: string;
  name: string;
  fullName?: string;
  description: string;
  image: string;
  brand?: string;
  principalIds: string[];
}

export interface ListingCategory extends ProductCategory {
  products: ProductDetails[];
}

export interface ProductsConfig {
  listingCategories: ListingCategory[];
}

export interface ProductsParams extends ParsedUrlQuery {
  categoryId: string;
}
