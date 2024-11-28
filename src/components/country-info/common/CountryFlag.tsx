import React from "react";
import Image from "next/image";

interface ICountryFlag {
  flag: string;
  countryName: string;
}

const CountryFlag: React.FC<ICountryFlag> = ({ flag, countryName }) => {
  return (
    <div className="flex justify-center py-4">
      <Image
        src={flag}
        alt={`Flag of ${countryName}`}
        className="h-32 w-auto object-contain"
        width={128}
        height={64}
      />
    </div>
  );
};

export default CountryFlag;
