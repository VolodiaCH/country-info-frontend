import React, { useState } from "react";
import Link from "next/link";
import { TCountry } from "../../types/types";
import { Routes } from "../../types/routes";

interface ICountryList {
  countries: TCountry[];
}

const CountryListPage: React.FC<ICountryList> = ({ countries }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <header className="px-6 py-4 border-b border-gray-300">
          <h1 className="text-2xl font-bold text-center">Country List</h1>
          <div className="mt-4">
            <input
              type="text"
              placeholder="Search for a country..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </header>
        <ul className="divide-y divide-gray-200">
          {filteredCountries.length > 0 ? (
            filteredCountries.map((country) => {
              const redirectLink = `${Routes.CountryInfo}/${country.countryCode}`;
              return (
                <li
                  key={country.countryCode}
                  className="px-6 py-4 hover:bg-gray-100"
                >
                  <Link
                    href={redirectLink}
                    className="text-blue-500 hover:text-blue-700 underline"
                  >
                    {country.name}
                  </Link>
                </li>
              );
            })
          ) : (
            <li className="px-6 py-4 text-gray-600">No countries found.</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default CountryListPage;
