import { useEffect, useState } from "react";

import Loader from "@/components/Layouts/Loader";
import React from "react";

export default function Benefits() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <div>
      <Loader />
    </div>
  ) : (
    <div>
      <div>
        <h1 className="text-xl font-bold ">Reports</h1>
      </div>
    </div>
  );
}
