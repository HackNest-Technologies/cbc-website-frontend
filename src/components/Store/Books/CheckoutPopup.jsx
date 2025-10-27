import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../../redux/bookSlice";
import PopupWrapper from "./PopupWrapper";

const CheckoutPopup = ({ isOpen, onClose, onOrderSuccess }) => {
  const { cart: cartItems } = useSelector((state) => state.books);
  const dispatch = useDispatch();
  
  // Form state
  const [checkoutForm, setCheckoutForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: ""
  });

  // Calculate total
  const total = cartItems.reduce((sum, item) => {
    const price = parseFloat(item.price?.replace(/[^0-9.]/g, '')) || 0;
    return sum + (price * item.quantity);
  }, 0);

  const handleCheckoutFormChange = (e) => {
    const { name, value } = e.target;
    setCheckoutForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckoutSubmit = (e) => {
    e.preventDefault();
    
    // Here you would typically send the order to your backend
    console.log("Checkout data:", {
      ...checkoutForm,
      cartItems,
      total
    });
    
    // Clear cart and close modals
    dispatch(clearCart());
    
    // Show success message
    alert("Order placed successfully! Thank you for your purchase.");
    
    // Reset form and close popup
    setCheckoutForm({
      fullName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zipCode: ""
    });
    
    onOrderSuccess();
  };

  if (!isOpen) return null;

  return (
    <PopupWrapper title="Checkout" onClose={onClose}>
      <div className="py-[36px] px-[16px] md:px-[36px]">
        <form onSubmit={handleCheckoutSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-satoshi font-bold mb-4">Personal Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={checkoutForm.fullName}
                  onChange={handleCheckoutFormChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FD9F2B] focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={checkoutForm.email}
                  onChange={handleCheckoutFormChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FD9F2B] focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={checkoutForm.phone}
                onChange={handleCheckoutFormChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FD9F2B] focus:border-transparent"
                placeholder="Enter your phone number"
              />
            </div>
          </div>

          {/* Delivery Address */}
          <div className="space-y-4">
            <h3 className="text-xl font-satoshi font-bold mb-4">Delivery Address</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Street Address *
              </label>
              <input
                type="text"
                name="address"
                value={checkoutForm.address}
                onChange={handleCheckoutFormChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FD9F2B] focus:border-transparent"
                placeholder="Enter your street address"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  City *
                </label>
                <input
                  type="text"
                  name="city"
                  value={checkoutForm.city}
                  onChange={handleCheckoutFormChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FD9F2B] focus:border-transparent"
                  placeholder="City"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  State *
                </label>
                <input
                  type="text"
                  name="state"
                  value={checkoutForm.state}
                  onChange={handleCheckoutFormChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FD9F2B] focus:border-transparent"
                  placeholder="State"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ZIP Code *
                </label>
                <input
                  type="text"
                  name="zipCode"
                  value={checkoutForm.zipCode}
                  onChange={handleCheckoutFormChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FD9F2B] focus:border-transparent"
                  placeholder="ZIP Code"
                />
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="border-t border-gray-300 pt-6">
            <h3 className="text-xl font-satoshi font-bold mb-4">Order Summary</h3>
            <div className="space-y-2 mb-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span>{item.title} (x{item.quantity})</span>
                  <span>{item.price}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center border-t border-gray-300 pt-2">
              <span className="text-lg font-bold">Total</span>
              <span className="text-lg font-bold">N{total.toFixed(3)}</span>
            </div>
          </div>

          {/* Submit Button */}
          <button 
            type="submit"
            className="w-full bg-[#FD9F2B] text-white py-4 rounded-[100px] font-inter text-lg hover:bg-orange-600 transition-colors font-bold mt-6"
          >
            Place Order
          </button>
        </form>
      </div>
    </PopupWrapper>
  );
};

export default CheckoutPopup;