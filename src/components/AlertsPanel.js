import React, { useEffect, useState } from "react";
import api from "../api";

const AlertsPanel = () => {
  const [nearExpiry, setNearExpiry] = useState([]);

  const fetchProducts = async () => {
    const res = await api.get("/allProducts");
    const near = res.data.products.filter((p) => p.status === "Near Expiry");
    setNearExpiry(near);
  };

  useEffect(() => {
    fetchProducts();
    const interval = setInterval(fetchProducts, 60000); // refresh every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-4 p-4 border rounded shadow-md">
      <h2 className="text-xl font-bold mb-2">Near Expiry Alerts</h2>
      {nearExpiry.length === 0 && <p>No products near expiry!</p>}
      <ul>
        {nearExpiry.map((p) => (
          <li key={p.id}>
            {p.name} expires on {p.expiry}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlertsPanel;