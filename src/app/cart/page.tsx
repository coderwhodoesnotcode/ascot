import React, { useState } from 'react';
import { ShoppingCart, Plus, Minus, Trash2, ArrowRight, Lock, Truck, Shield, X } from 'lucide-react';

export default function ShoppingCartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Paracetamol 500mg Tablets',
      price: 3.99,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=200',
      prescriptionRequired: false,
      stock: 'In Stock'
    },
    {
      id: 2,
      name: 'Vitamin D3 1000IU',
      price: 8.99,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1550572017-edd951aa8f72?w=200',
      prescriptionRequired: false,
      stock: 'In Stock'
    },
    {
      id: 3,
      name: 'Omeprazole 20mg',
      price: 12.99,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=200',
      prescriptionRequired: true,
      stock: 'In Stock'
    }
  ]);

  const updateQuantity = (id, change) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 20 ? 0 : 4.99;
  const total = subtotal + shipping;
  const hasPrescriptionItems = cartItems.some(item => item.prescriptionRequired);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <ShoppingCart className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">HealthPharm</span>
            </div>
            
            <button className="text-gray-700 hover:text-blue-600 font-medium">
              Continue Shopping
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-600 mb-6">
          <a href="/" className="hover:text-blue-600">Home</a>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">Shopping Cart</span>
        </div>

        {/* Page Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          // Empty Cart
          <div className="bg-white rounded-xl shadow-sm p-12 text-center">
            <ShoppingCart className="w-24 h-24 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">Add some products to get started</p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 font-medium">
              Browse Products
            </button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {/* Prescription Warning */}
              {hasPrescriptionItems && (
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-start gap-3">
                  <Shield className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-1">Prescription Required</h3>
                    <p className="text-sm text-blue-700">
                      Your cart contains prescription medicines. You'll need to upload a valid prescription during checkout.
                    </p>
                  </div>
                </div>
              )}

              {/* Cart Items List */}
              <div className="bg-white rounded-xl shadow-sm divide-y">
                {cartItems.map((item) => (
                  <div key={item.id} className="p-6 hover:bg-gray-50 transition-colors">
                    <div className="flex gap-4">
                      {/* Product Image */}
                      <div className="w-24 h-24 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between mb-2">
                          <div className="flex-1">
                            <h3 className="font-bold text-gray-900 mb-1">{item.name}</h3>
                            <div className="flex items-center gap-2">
                              <span className={`text-xs font-medium px-2 py-1 rounded ${
                                item.stock === 'In Stock' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                              }`}>
                                {item.stock}
                              </span>
                              {item.prescriptionRequired && (
                                <span className="text-xs font-medium px-2 py-1 rounded bg-blue-100 text-blue-700">
                                  Prescription Required
                                </span>
                              )}
                            </div>
                          </div>
                          <button 
                            onClick={() => removeItem(item.id)}
                            className="text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>

                        {/* Quantity and Price */}
                        <div className="flex items-center justify-between mt-4">
                          {/* Quantity Controls */}
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-600 mr-2">Quantity:</span>
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="w-12 text-center font-semibold">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>

                          {/* Price */}
                          <div className="text-right">
                            <p className="text-2xl font-bold text-gray-900">
                              £{(item.price * item.quantity).toFixed(2)}
                            </p>
                            <p className="text-sm text-gray-500">
                              £{item.price.toFixed(2)} each
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Delivery Info */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Truck className="w-6 h-6 text-blue-600" />
                  <h3 className="font-bold text-gray-900">Delivery Information</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Standard Delivery (3-5 days)</span>
                    <span className="font-medium text-gray-900">
                      {shipping === 0 ? 'FREE' : `£${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  {subtotal < 20 && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-green-700">
                      Add £{(20 - subtotal).toFixed(2)} more to get FREE delivery!
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal ({cartItems.length} items)</span>
                    <span className="font-medium">£{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Delivery</span>
                    <span className="font-medium">
                      {shipping === 0 ? 'FREE' : `£${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-gray-900">Total</span>
                      <span className="text-3xl font-bold text-gray-900">£{total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 font-semibold text-lg flex items-center justify-center gap-2 mb-4">
                  Proceed to Checkout
                  <ArrowRight className="w-5 h-5" />
                </button>

                <button className="w-full border-2 border-gray-300 text-gray-700 py-3 rounded-lg hover:border-blue-600 hover:text-blue-600 font-semibold">
                  Continue Shopping
                </button>

                {/* Security Badges */}
                <div className="mt-6 pt-6 border-t">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Lock className="w-4 h-4 text-green-600" />
                      <span>Secure Payment</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Shield className="w-4 h-4 text-green-600" />
                      <span>GPhC Registered Pharmacy</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Truck className="w-4 h-4 text-green-600" />
                      <span>Free Returns within 30 days</span>
                    </div>
                  </div>
                </div>

                {/* Accepted Payment Methods */}
                <div className="mt-6 pt-6 border-t">
                  <p className="text-sm text-gray-600 mb-3">We Accept:</p>
                  <div className="flex items-center gap-2">
                    <div className="bg-gray-100 px-3 py-2 rounded text-xs font-bold text-gray-700">VISA</div>
                    <div className="bg-gray-100 px-3 py-2 rounded text-xs font-bold text-gray-700">MASTERCARD</div>
                    <div className="bg-gray-100 px-3 py-2 rounded text-xs font-bold text-gray-700">AMEX</div>
                    <div className="bg-gray-100 px-3 py-2 rounded text-xs font-bold text-gray-700">PAYPAL</div>
                  </div>
                </div>
              </div>

              {/* Help Section */}
              <div className="bg-blue-50 rounded-xl p-6 mt-4">
                <h3 className="font-bold text-gray-900 mb-2">Need Help?</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Our pharmacy team is here to assist you
                </p>
                <button className="text-blue-600 font-semibold text-sm hover:text-blue-700">
                  Contact Support →
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}