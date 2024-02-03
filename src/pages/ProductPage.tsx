import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProductPage: React.FC = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('/api/products')
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => console.error('Fetching products failed:', error));
  }, []);

  const handleProductClick = (productId: number) => {
    navigate(`/singledetail/${productId}`);
  };

  return (
    <section>
      {products.map((product) => (
        <div
          key={product.id}
          onClick={() => handleProductClick(product.id)}
          style={{ cursor: 'pointer' }}
        >
          {/* <img src={product.image} alt={product.name} /> */}
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <p>판매 수: {product.sales}</p>
        </div>
      ))}
    </section>
  );
};

export default ProductPage;
