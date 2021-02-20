export interface ProductCategory {
  categoryId: string;
  name: string;
  abbreviation?: string;
  bg: string;
  imageWebp: string;
  imagePng: string;
  imageAlt: string;
  url: string;
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
  categories: ProductCategory[];
  values: CompanyValue[];
  principals: PrincipalLogo[];
}
