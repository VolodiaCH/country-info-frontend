import React, { useEffect, useState } from "react";
import CountryListPage from "../components/country-list/CountryListPage";
import Loading from "../components/common/Loading";
import Error from "../components/common/Error";
import { fetchCountries } from "../services/services";
import { TCountry } from "../types/types";

const CountryList: React.FC = () => {
  const [countries, setCountries] = useState<TCountry[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCountries = async () => {
      try {
        const data = await fetchCountries();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching countries:", error);
        setError("Error fetching countries!");
      } finally {
        setLoading(false);
      }
    };

    loadCountries();
  }, []);

  if (loading || countries === null) return <Loading />;
  if (error) return <Error message={error} />;

  return <CountryListPage countries={countries} />;
};

export default CountryList;
