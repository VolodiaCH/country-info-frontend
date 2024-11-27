export type TCountry = {
  countryCode: string;
  name: string;
};

type TBorderCountry = {
  borders: TBorderCountry | null;
  commonName: string;
  countryCode: string;
  region: string;
};

type TPopulation = {
  year: number;
  value: number;
};

export type TCountryInfo = {
  borders: TBorderCountry;
  flag: string;
  population: TPopulation;
};
