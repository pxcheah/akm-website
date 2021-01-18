export interface ProductCategory {
  bg: string;
  name: string;
  image: string;
  imageAlt?: string;
}

export interface CompanyValue {
  image: string;
  title: string;
  description: string;
  shadowOffset?: number;
}

export interface PrincipalLogo {
  name: string;
  logo: string;
  hideInTablet?: boolean;
}

export interface HomeConfig {
  productCategories: ProductCategory[];
  values: CompanyValue[];
  principals: PrincipalLogo[];
}
