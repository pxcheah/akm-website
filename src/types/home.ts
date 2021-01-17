interface SectionConfig {
  bg: string;
  heading: string;
}

export interface CompanyValueItem {
  image: string;
  title: string;
  description: string;
  shadowOffset?: number;
}

export interface CompanyValueConfig extends SectionConfig {
  items: CompanyValueItem[];
}

export interface PrincipalLogo {
  name: string;
  logo: string;
  hideInTablet?: boolean;
}

export interface PrincipalsConfig extends SectionConfig {
  logos: PrincipalLogo[];
}

export interface HomeConfig {
  intro: string;
  values: CompanyValueConfig;
  principals: PrincipalsConfig;
}
