import React from 'react';

function ProductList({ products }) {
  return (
    <section className="product-display-area">
      {products.map((product, index) => (
        <div key={index} className="product-card">
          <h2>{product.name}</h2>
          <p>Category: {product.category}</p>
          <p>Price: ${product.price.toFixed(2)}</p>
        </div>
      ))}
    </section>
  );
}

export default ProductList;
