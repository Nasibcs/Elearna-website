import { useState, useEffect } from "react";

export default function AddToCart() {
  const [cartItems, setCartItems] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Wireless Headphones",
      price: 149.99,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=150&h=150&fit=crop&crop=center"
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 199.99,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=150&h=150&fit=crop&crop=center"
    }
  ]);

  // Calculate total items in cart
  useEffect(() => {
    const total = items.reduce((sum, item) => sum + item.quantity, 0);
    setCartItems(total);
  }, [items]);

  const addToCart = (id) => {
    setItems(items.map(item => 
      item.id === id ? {...item, quantity: item.quantity + 1} : item
    ));
  };

  const removeFromCart = (id) => {
    setItems(items.map(item => 
      item.id === id && item.quantity > 0 
        ? {...item, quantity: item.quantity - 1} 
        : item
    ));
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#06191F] to-[#0A2E36] flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Shopping Cart</h1>
          <p className="text-[#8FCBD9]">Manage your items and proceed to checkout</p>
        </div>

        {/* Cart Summary */}
        <div className="bg-[#1E3A3F]/90 backdrop-blur-md rounded-2xl shadow-xl border border-[#2D4A4F] p-6 mb-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#FFC107]" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
                {cartItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#FFC107] text-gray-900 text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
                    {cartItems}
                  </span>
                )}
              </div>
              <div className="ml-4">
                <h2 className="text-white font-semibold">Your Cart</h2>
                <p className="text-[#8FCBD9] text-sm">{cartItems} {cartItems === 1 ? 'item' : 'items'}</p>
              </div>
            </div>
            <button 
              onClick={() => setIsCartOpen(!isCartOpen)}
              className="bg-[#2D4A4F] text-white px-4 py-2 rounded-lg hover:bg-[#3A5D64] transition-colors flex items-center"
            >
              {isCartOpen ? 'Hide Cart' : 'View Cart'}
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ml-2 transition-transform ${isCartOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {[
            { id: 1, name: "Wireless Headphones", price: 149.99, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop&crop=center" },
            { id: 2, name: "Smart Watch", price: 199.99, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop&crop=center" },
            { id: 3, name: "Bluetooth Speaker", price: 89.99, image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=300&h=300&fit=crop&crop=center" },
            { id: 4, name: "Gaming Mouse", price: 59.99, image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop&crop=center" },
            { id: 5, name: "Mechanical Keyboard", price: 129.99, image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=300&h=300&fit=crop&crop=center" },
            { id: 6, name: "USB-C Hub", price: 49.99, image: "https://images.unsplash.com/photo-1580522154071-c6ca47a859ad?w=300&h=300&fit=crop&crop=center" }
          ].map(product => (
            <div key={product.id} className="bg-[#1E3A3F]/90 backdrop-blur-md rounded-2xl shadow-xl border border-[#2D4A4F] p-4 transition-transform hover:scale-105">
              <div className="h-40 overflow-hidden rounded-lg mb-4">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-white font-semibold mb-2">{product.name}</h3>
              <div className="flex justify-between items-center mb-4">
                <span className="text-[#FFC107] font-bold">${product.price.toFixed(2)}</span>
                <button 
                  onClick={() => addToCart(product.id)}
                  className="bg-[#FFC107] text-gray-900 px-3 py-1 rounded-lg text-sm font-semibold hover:bg-[#FFD54F] transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Details */}
        {isCartOpen && (
          <div className="bg-[#1E3A3F]/90 backdrop-blur-md rounded-2xl shadow-xl border border-[#2D4A4F] p-6 mb-6">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-[#FFC107]" viewBox="0 0 20 20" fill="currentColor">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
              Cart Items
            </h2>

            {items.filter(item => item.quantity > 0).length === 0 ? (
              <div className="text-center py-8">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-[#3A5D64]" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                </svg>
                <p className="text-[#8FCBD9] mt-4">Your cart is empty</p>
                <p className="text-[#7FB6C5] text-sm">Add some items to get started</p>
              </div>
            ) : (
              <>
                <div className="space-y-4 mb-6">
                  {items.filter(item => item.quantity > 0).map(item => (
                    <div key={item.id} className="flex items-center justify-between p-3 bg-[#2D4A4F]/50 rounded-lg">
                      <div className="flex items-center">
                        <img src={item.image} alt={item.name} className="w-12 h-12 rounded-md object-cover mr-4" />
                        <div>
                          <h3 className="text-white font-medium">{item.name}</h3>
                          <p className="text-[#FFC107]">${item.price.toFixed(2)}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="flex items-center mr-4">
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="w-8 h-8 flex items-center justify-center bg-[#3A5D64] rounded-l-md text-white hover:bg-[#4A6D74]"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
                            </svg>
                          </button>
                          <span className="w-10 h-8 flex items-center justify-center bg-[#2D4A4F] text-white">
                            {item.quantity}
                          </span>
                          <button 
                            onClick={() => addToCart(item.id)}
                            className="w-8 h-8 flex items-center justify-center bg-[#3A5D64] rounded-r-md text-white hover:bg-[#4A6D74]"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                            </svg>
                          </button>
                        </div>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="text-[#ff6b6b] hover:text-[#ff5252]"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-[#3A5D64] pt-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[#8FCBD9]">Subtotal:</span>
                    <span className="text-white font-bold">${calculateTotal()}</span>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[#8FCBD9]">Shipping:</span>
                    <span className="text-white font-bold">$9.99</span>
                  </div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[#8FCBD9]">Total:</span>
                    <span className="text-[#FFC107] font-bold text-xl">${(parseFloat(calculateTotal()) + 9.99).toFixed(2)}</span>
                  </div>
                  <button className="w-full py-3 bg-gradient-to-r from-[#FFC107] to-[#FFD54F] text-gray-900 font-semibold rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:from-[#FFD54F] hover:to-[#FFC107]">
                    Proceed to Checkout
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}