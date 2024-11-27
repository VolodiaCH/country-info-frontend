import React from "react";
import Link from "next/link";
import { Routes } from "@/types/routes";

type TBorderCountry = {
  commonName: string;
  countryCode: string;
};

interface IBorderingCountries {
  borders: TBorderCountry[];
}

const BorderingCountries: React.FC<IBorderingCountries> = ({ borders }) => (
  <div className="px-6 py-4">
    <h2 className="text-2xl font-semibold mb-2">Bordering Countries</h2>
    {borders.length > 0 ? (
      <ul className="space-y-2">
        {borders.map((border, index) => (
          <li
            key={index}
            className="p-2 bg-gray-100 rounded-md border border-gray-300"
          >
            <Link
              href={`${Routes.CountryInfo}/${border.countryCode}`}
              className="text-blue-500 hover:text-blue-700 underline"
            >
              {border.commonName}
            </Link>
          </li>
        ))}
      </ul>
    ) : (
      <p className="text-gray-600">This country has no bordering countries.</p>
    )}
  </div>
);

export default BorderingCountries;
