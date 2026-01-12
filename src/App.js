import "./App.css";
import AddProductForm from "./components/AddProductForm";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="app-container">
      <div className="header">
        <h1> InvenSure</h1>
        <p>Smart Expiry & Inventory Control</p>
      </div>

      <AddProductForm />
      <ProductList />
    </div>
  );
}

export default App;