export type TCountry = {
  countryCode: string;
  name: string;
};

interface IBorders {
  commonName: string;
  countryCode: string;
  region: string;
}

interface IChildBorders extends IBorders {
  borders: null;
}

interface IParantBorders extends IBorders {
  borders: IChildBorders[];
}

export type TPopulation = {
  year: number;
  value: number;
};

export type TCountryInfo = {
  borders: IParantBorders;
  flag: string;
  population: TPopulation[];
};
