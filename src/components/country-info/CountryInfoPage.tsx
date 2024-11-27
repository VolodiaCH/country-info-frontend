import React from "react";
import { TCountryInfo } from "../../types/types";
import BackLink from "./common/BackLink";
import CountryFlag from "./common/CountryFlag";
import CountryDetails from "./common/CountryDetails";
import BorderingCountries from "./common/BorderingCountries";

interface ICountryInfoPage {
  countryInfo: TCountryInfo;
}

const CountryInfoPage: React.FC<ICountryInfoPage> = ({ countryInfo }) => {
  const { flag, borders, population } = countryInfo;
  const { commonName, region, countryCode, borders: borderCountries } = borders;

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <BackLink />
        {flag && <CountryFlag flag={flag} countryName={commonName} />}
        <CountryDetails
          name={commonName}
          region={region}
          code={countryCode}
          population={population}
        />
        <BorderingCountries borders={borderCountries} />
      </div>
    </div>
  );
};

export default CountryInfoPage;
