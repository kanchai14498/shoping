import React from 'react';
import './cart.css';

const products = [
  { id: 1, name: 'Product 1', price: 200, image: 'https://down-th.img.susercontent.com/file/sg-11134301-7rdyn-lyg1iqtzoar897.webp' },
  { id: 2, name: 'Product 2', price: 150, image: 'https://down-th.img.susercontent.com/file/th-11134207-7r991-lpeumafjr52h3b.webp' },
  { id: 3, name: 'Product 3', price: 100, image: 'https://down-th.img.susercontent.com/file/cb4c06a6da03d0d1a329b91175204de5.webp' },
  { id: 4, name: 'Product 4', price: 50, image:  'https://down-th.img.susercontent.com/file/sg-50009109-5bb43889c1e234dff9fdbb2d98ca63cc.webp' },
  { id: 5, name: 'Product 5', price: 300, image: 'https://down-th.img.susercontent.com/file/th-50009109-ffce267bd0556ba6dd31ad575c7bfd96.webp' },
  { id: 6, name: 'Product 6', price: 250, image: 'https://down-th.img.susercontent.com/file/th-11134004-7r992-lyoj6nak2xdt68.webp' },
  { id: 7, name: 'Product 7', price: 400, image: 'https://down-th.img.susercontent.com/file/a7751d55e1f2e2b8e8b37a943a411b14.webp' },
  { id: 8, name: 'Product 8', price: 350, image: 'https://down-th.img.susercontent.com/file/52d8413cf9f0350cd465941f83520c9c.webp' },
  { id: 9, name: 'Product 9', price: 450, image: 'https://down-th.img.susercontent.com/file/sg-11134252-7rd64-lvstbcc7k9fu14.webp' },
  { id: 10, name: 'Product 10', price: 500, image: 'https://down-th.img.susercontent.com/file/db0d38eecf23ea514fb5f4601bd55fda.webp' }
];

function ProductList({ addToCart }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map(product => (
        <div key={product.id} className="border p-4 rounded shadow-lg">
          <img src={product.image} alt={product.name} className="w-full h-100 object-cover mb-4 rounded" /> 
          <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
          <p className="text-gray-700 mb-2">Price: {product.price} THB</p>
          <button
            className="btt2"  
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
