import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Loading from "../components/common/Loading";

const IndexPage = () => {
  const router = useRouter();

  useEffect(() => {
    // As we currently don't need index page, then we just redirect to country-list page by default
    router.push("/country-list");
  }, [router]);

  return (
    <div className="w-full">
      <Loading />;
    </div>
  );
};

export default IndexPage;
