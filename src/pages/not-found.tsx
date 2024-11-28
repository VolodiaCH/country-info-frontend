import React from "react";
import Link from "next/link";
import { Routes } from "@/types/routes";

const NotFound = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="mt-4 text-xl text-gray-600">Page Not Found</p>
        <Link
          href={Routes.CountryList}
          passHref
          className="mt-6 inline-block text-lg text-blue-500 hover:text-blue-700"
        >
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
