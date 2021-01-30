import { ParsedUrlQuery } from 'querystring';
import { ProductCategory } from './home';

export interface ProductsConfig {
  category: ProductCategory;
}

export interface ProductsParams extends ParsedUrlQuery {
  categoryId: string;
}
