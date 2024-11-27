import axiosInstance from "./axiosInstance";

export const fetchCountries = async () => {
  const response = await axiosInstance.get("/available-countries");
  return response.data;
};

export const fetchCountryInfo = async (countryCode: string) => {
  const response = await axiosInstance.get(`/country-info/${countryCode}`);
  return response.data;
};
