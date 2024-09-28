import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css'; 
const products = [
  { name: "Laptop", category: "Electronics", price: 999 },
  { name: "T-Shirt", category: "Clothing", price: 20 },
  { name: "Vacuum Cleaner", category: "Home", price: 120 },
  { name: "Headphones", category: "Electronics", price: 150 },
  { name: "Jeans", category: "Clothing", price: 45 },
  { name: "Blender", category: "Home", price: 80 },
];

function App() {
  const [filter, setFilter] = useState("All");

  const filteredProducts = filter === "All" 
    ? products 
    : products.filter(product => product.category === filter);

  return (
    <div>
      <header>
        <h1>Product List</h1>
      </header>

      <section className="filter-section">
        <button onClick={() => setFilter("All")}>All</button>
        <button onClick={() => setFilter("Electronics")}>Electronics</button>
        <button onClick={() => setFilter("Clothing")}>Clothing</button>
        <button onClick={() => setFilter("Home")}>Home</button>
      </section>

      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App;
