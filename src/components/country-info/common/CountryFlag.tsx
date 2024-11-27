import React from "react";
import Image from "next/image";

const CountryFlag: React.FC<{ flag: string; countryName: string }> = ({
  flag,
  countryName,
}) => {
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
