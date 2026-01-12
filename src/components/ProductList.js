import { useEffect, useState } from "react";
import api from "../api";
import DashboardStats from "./DashboardStats";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("All");

  const loadProducts = async () => {
    const res = await api.get("/allProducts");
    setProducts(res.data.products);
  };

  const recycleProduct = async (id) => {
    await api.post(`/recycleProduct/${id}`);
    loadProducts();
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const filteredProducts =
    filter === "All"
      ? products
      : products.filter((p) => p.status === filter);

  return (
    <div>
      <h3> Products</h3>

      <DashboardStats products={products} />

      {/* FILTER */}
      <div className="filter-bar">
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Fresh">Fresh</option>
          <option value="Near Expiry">Near Expiry</option>
          <option value="Expired">Expired</option>
        </select>
      </div>

      {filteredProducts.length === 0 && <p>No products found</p>}

      <div className="product-grid">
        {filteredProducts.map((p) => (
          <div className="card" key={p.id}>
            <h4>{p.name}</h4>

            <p>Expiry: {p.expiry}</p>

            <span
              className={`status-pill status-${
                p.status === "Near Expiry" ? "Near" : p.status
              }`}
            >
              {p.status}
            </span>

            <br /><br />

            <button
              className="recycle"
              onClick={() => recycleProduct(p.id)}
            >
               Recycle
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;