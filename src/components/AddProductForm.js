import { useState } from "react";
import api from "../api";

function AddProductForm() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await api.post("/addProduct", {
      id: Number(id),
      name,
      expiry,
    });

    alert("Product added ");

    setId("");
    setName("");
    setExpiry("");

    window.location.reload(); // simple & effective
  };

  return (
  <div className="card">
    <h3> Add Product</h3>

    <form onSubmit={handleSubmit}>
      <input
        placeholder="ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
        required
      />

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="date"
        value={expiry}
        onChange={(e) => setExpiry(e.target.value)}
        required
      />

      <button className="add">Add</button>
    </form>
  </div>
);
}

export default AddProductForm;