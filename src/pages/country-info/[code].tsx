import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import CountryInfoPage from "../../components/country-info/CountryInfoPage";
import Loading from "../../components/common/Loading";
import Error from "@/components/common/Error";
import { fetchCountryInfo } from "../../services/services";
import { TCountryInfo } from "../../types/types";
import { Routes } from "@/types/routes";

const CountryInfo: React.FC = () => {
  const [countryInfo, setCountryInfo] = useState<TCountryInfo | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();
  const { code } = router.query;

  useEffect(() => {
    if (!router.isReady || !code) return;

    const loadCountry = async () => {
      setLoading(true);
      try {
        const data = await fetchCountryInfo(code as string);
        setCountryInfo(data);
      } catch (error) {
        console.error("Error fetching country info:", error);
        setError("Error fetching country info");
      } finally {
        setLoading(false);
      }
    };

    loadCountry();
  }, [router.isReady, code]);

  if (loading || countryInfo === null) return <Loading />;
  if (error) return <Error message="Error fetching country info" />;

  if (
    countryInfo.borders === null &&
    countryInfo.flag === null &&
    countryInfo.population === null
  ) {
    router.push(Routes.NotFound);
    return null;
  }

  return <CountryInfoPage countryInfo={countryInfo} />;
};

export default CountryInfo;
