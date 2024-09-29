import React, { useState } from 'react';
import './cart.css';

 

function Cart({ cart, removeFromCart, updateQuantity, applyDiscount, calculateTotal }) {
  const [coupon, setCoupon] = useState('');

  const handleCoupon = () => {
    applyDiscount(coupon);
    setCoupon('');
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty</p>
      ) : (
        <div>
          {cart.map(item => (
            <div key={item.id} className="flex items-center justify-between mb-4 border-b pb-4">
              <div className="flex items-center">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded mr-4" />
                <div>
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p>Price: {item.price} THB</p>
                  <div className="flex items-center mt-2">
                    <button
                      className="bg-gray-300 px-2 hover:bg-gray-400"  
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <p className="mx-2">{item.quantity}</p>
                    <button
                      className="bg-gray-300 px-2 hover:bg-gray-400"  
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <button
                className="btt3"  
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}

          <div className="flex justify-between items-center mt-4">
            <input
              type="text"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              placeholder="ใช้ DISCOUNT10 เพื่อลดราคา"
              className="border p-2 w-1/2 mr-4"
            />
            
            
            <button class="btn-class-name" onClick={handleCoupon}>
              <span>Apply Coupon</span>
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
                <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z">
              </path>
              </svg>
            </button>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-bold">Total: {calculateTotal()} THB</h3>
            <p className="text-sm text-gray-500">*Total includes 100 THB shipping</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
