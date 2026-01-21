import { useState } from "react";
import PopupWrapper from "./PopupWrapper";
import { useCreateOrderMutation } from "../../../redux/apiSlice";

/* ---------- Helper ---------- */
const parsePrice = (price) => {
  if (!price) return 0;
  return Number(price.replace(/[^\d.]/g, "")) || 0;
};

const CheckoutPopup = ({
  isOpen,
  onClose,
  cartItems = [],
  cartId,
  onOrderSuccess,
}) => {
  const [createOrder, { isLoading }] = useCreateOrderMutation();

  const [checkoutForm, setCheckoutForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    address_line1: "",
    address_line2: "",
    city: "",
    state: "",
    postal_code: "",
    country: "Nigeria",
  });

  const total = cartItems.reduce((sum, item) => {
    const price = parsePrice(item.store_item?.price);
    const quantity = Number(item.quantity || 0);
    return sum + price * quantity;
  }, 0);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCheckoutForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createOrder({
        ...checkoutForm,
        cart_id: cartId,
        status: "pending",
      }).unwrap();

      onOrderSuccess?.();
      onClose();
    } catch (error) {
      console.error("Checkout failed:", error);
      alert("Failed to place order. Please try again.");
    }
  };

  return (
    <PopupWrapper title="Complete Your Order" onClose={onClose}>
      <form
        onSubmit={handleSubmit}
        className="space-y-6 py-4 px-4 md:py-20 md:px-6"
      >
        {/* ================= PERSONAL INFORMATION ================= */}
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              required
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-500"
            />
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              required
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-500"
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-500"
          />

          <input
            type="text"
            name="phone_number"
            placeholder="Phone Number"
            required
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-500"
          />
        </div>

        {/* ================= DELIVERY ADDRESS ================= */}
        <div className="space-y-4">
          <input
            type="text"
            name="address_line1"
            placeholder="Street Address (required)"
            required
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-500"
          />

          <input
            type="text"
            name="address_line2"
            placeholder="Apartment, Suite, etc. (optional)"
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-500"
          />

          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="city"
              placeholder="City"
              required
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-500"
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              required
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="postal_code"
              placeholder="Postal Code"
              required
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-500"
            />
            <input
              type="text"
              name="country"
              value="Nigeria"
              readOnly
              className="w-full px-4 py-3 rounded-full border border-gray-300 bg-gray-50 text-gray-600"
            />
          </div>
        </div>

        {/* ================= ORDER SUMMARY ================= */}
        <div className="bg-white p-4 rounded-xl shadow-md mt-4 md:mt-16 space-y-2">
          <div className="flex justify-between text-gray-600">
            <span>Subtotal</span>
            <span>₦{total.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Delivery</span>
            <span>₦0</span>
          </div>
          <div className="flex justify-between font-bold text-gray-900 border-t border-gray-200 pt-2 mt-2 text-lg">
            <span>Total</span>
            <span>₦{total.toLocaleString()}</span>
          </div>
        </div>

        {/* ================= PAY NOW BUTTON ================= */}
        <button
          type="submit"
          disabled={isLoading || cartItems.length === 0}
          className="w-full bg-[#FD9F2B] text-white py-4 rounded-full font-bold hover:bg-orange-600 transition"
        >
          {isLoading ? "Processing..." : "Pay Now"}
        </button>
      </form>
    </PopupWrapper>
  );
};

export default CheckoutPopup;
