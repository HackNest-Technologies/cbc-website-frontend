import { useState } from "react";
import PopupWrapper from "./PopupWrapper";
import {
  useUpdateCartMutation,
  useDeleteCartItemMutation,
} from "../../../redux/apiSlice";

/* ---------- Small Spinner ---------- */
const Spinner = () => (
  <div className="w-4 h-4 border-2 border-gray-300 border-t-gray-700 rounded-full animate-spin" />
);

/* ---------- Helper to parse price string like "NGN 4299" ---------- */
const parsePrice = (price) => {
  if (!price) return 0;
  const numeric = price.replace(/[^\d.]/g, "");
  return Number(numeric) || 0;
};

const CartPopup = ({
  isOpen,
  onClose,
  onProceedToCheckout,
  cartItems = [],
}) => {
  const [updateCartItem] = useUpdateCartMutation();
  const [deleteCartItem] = useDeleteCartItemMutation();

  const [updatingItemId, setUpdatingItemId] = useState(null);
  const [deletingItemId, setDeletingItemId] = useState(null);

  /* ---------- TOTAL ---------- */
  // const total = cartItems.reduce((sum, item) => {
  //   const price = Number(item.store_item?.price || 0);
  //   return sum + price * item.quantity;
  // }, 0);

  const total = cartItems.reduce((sum, item) => {
    const price = parsePrice(item.store_item?.price);
    const quantity = Number(item.quantity || 0);
    return sum + price * quantity;
  }, 0);

  if (!isOpen) return null;

  console.log(cartItems, "cart items");
  /* ---------- HANDLERS ---------- */

  const handleIncrease = async (item) => {
    setUpdatingItemId(item.id);
    try {
      await updateCartItem({
        id: item.id,
        quantity: item.quantity + 1,
      }).unwrap();
    } catch (err) {
      console.error("Increase failed:", err);
    } finally {
      setUpdatingItemId(null);
    }
  };

  const handleDecrease = async (item) => {
    if (item.quantity <= 1) return;

    setUpdatingItemId(item.id);
    try {
      await updateCartItem({
        id: item.id,
        quantity: item.quantity - 1,
      }).unwrap();
    } catch (err) {
      console.error("Decrease failed:", err);
    } finally {
      setUpdatingItemId(null);
    }
  };

  const handleRemove = async (itemId) => {
    setDeletingItemId(itemId);
    try {
      await deleteCartItem(itemId).unwrap();
    } catch (err) {
      console.error("Delete failed:", err);
    } finally {
      setDeletingItemId(null);
    }
  };

  /* ---------- UI ---------- */

  return (
    <PopupWrapper title="CART" onClose={onClose}>
      <div className="py-[36px] px-[16px] md:px-[36px]">
        {cartItems.length === 0 ? (
          <p className="text-gray-500 text-center py-8 text-lg">
            Your cart is empty
          </p>
        ) : (
          <div className="space-y-6">
            {/* CART ITEMS */}
            {cartItems.map((item) => {
              const isUpdating = updatingItemId === item.id;
              const isDeleting = deletingItemId === item.id;

              return (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b border-gray-300 pb-6"
                >
                  {/* IMAGE + INFO */}
                  <div className="flex items-center gap-4 flex-1">
                    <img
                      src={item.store_item?.cover_image}
                      alt={item.store_item?.title}
                      className="w-16 h-16 object-cover rounded"
                    />

                    <div>
                      <h3 className="font-inter text-lg font-medium">
                        {item.store_item?.title}
                      </h3>
                      <p className="text-gray-600">{item.store_item?.price}</p>
                    </div>
                  </div>

                  {/* ACTIONS */}
                  <div className="flex items-center gap-4">
                    {/* QUANTITY */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => handleDecrease(item)}
                        disabled={item.quantity <= 1 || isUpdating}
                        className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100 disabled:opacity-50"
                      >
                        -
                      </button>

                      <div className="min-w-[30px] text-center text-lg font-medium">
                        {isUpdating ? <Spinner size={20} /> : item.quantity}
                      </div>

                      <button
                        onClick={() => handleIncrease(item)}
                        disabled={isUpdating}
                        className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100 disabled:opacity-50"
                      >
                        +
                      </button>
                    </div>

                    {/* REMOVE */}
                    <button
                      onClick={() => handleRemove(item.id)}
                      disabled={isDeleting}
                      className="ml-2 text-red-500 hover:text-red-700 text-sm bg-red-50 px-3 py-1 rounded font-medium disabled:opacity-50"
                    >
                      {isDeleting ? "Removing..." : "Remove"}
                    </button>
                  </div>
                </div>
              );
            })}

            {/* TOTAL */}
            <div className="border-t border-gray-300 pt-6">
              <div className="flex justify-between mb-6">
                <span className="text-xl font-bold">Total</span>
                <span className="text-xl font-bold">
                  ₦{total.toLocaleString()}
                </span>
              </div>

              <button
                onClick={() => onProceedToCheckout(cartItems)}
                className="w-full bg-[#FD9F2B] text-white py-4 rounded-full font-bold hover:bg-orange-600 transition"
              >
                Proceed To Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </PopupWrapper>
  );
};

export default CartPopup;
