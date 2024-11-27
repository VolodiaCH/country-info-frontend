import React from "react";
import Link from "next/link";
import { Routes } from "@/types/routes";

const BackLink: React.FC = () => (
  <div className="px-6 py-4">
    <Link
      href={Routes.CountryList}
      className="text-blue-500 hover:text-blue-700 underline text-lg"
    >
      &larr; Back to Index
    </Link>
  </div>
);

export default BackLink;
