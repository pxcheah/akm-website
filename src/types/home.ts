export interface HomeConfig {
  intro: string;
  values: CompanyValue[];
}

export interface CompanyValue {
  image: string;
  title: string;
  description: string;
  shadowOffset?: number;
}
