import React from "react";
import PopulationChart from "./PopulationChart";
import { TPopulation } from "@/types/types";

interface ICountryDetails {
  name: string;
  region: string;
  code: string;
  population: TPopulation[] | null;
}

const CountryDetails: React.FC<ICountryDetails> = ({
  name,
  region,
  code,
  population,
}) => {
  return (
    <div className="px-6 py-4">
      <h1 className="text-3xl font-bold text-center mb-2">{name}</h1>
      <p className="text-lg text-gray-600 text-center mb-4">Region: {region}</p>
      <p className="text-lg text-gray-600 text-center mb-4">
        Country Code: {code}
      </p>
      {population && (
        <div className="w-full h-[400px] sm:h-[300px] md:h-[400px] lg:h-[500px]">
          {<PopulationChart data={population} />}
        </div>
      )}
    </div>
  );
};

export default CountryDetails;
