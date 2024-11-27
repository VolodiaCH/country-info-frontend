import React from "react";

const CountryDetails: React.FC<{
  name: string;
  region: string;
  code: string;
  population: { value: number; year: number } | null;
}> = ({ name, region, code, population }) => {
  const populationString = `Population: ${population?.value.toLocaleString()} (Year: ${
    population?.year
  })`;

  return (
    <div className="px-6 py-4">
      <h1 className="text-3xl font-bold text-center mb-2">{name}</h1>
      <p className="text-lg text-gray-600 text-center mb-4">Region: {region}</p>
      <p className="text-lg text-gray-600 text-center mb-4">
        Country Code: {code}
      </p>
      {population && (
        <p className="text-lg text-gray-600 text-center mb-4">
          {populationString}
        </p>
      )}
    </div>
  );
};

export default CountryDetails;
