import { useEffect, useState } from "react";

import Loader from "@/components/Layouts/Loader";
import React from "react";

export default function Resources() {
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
      <h1 className="text-xl font-bold ">Payroll</h1>
    </div>
  );
}
