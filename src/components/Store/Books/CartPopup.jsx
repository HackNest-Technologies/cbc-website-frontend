import { useSelector, useDispatch } from "react-redux";
import { updateCartQuantity, removeFromCart } from "../../../redux/bookSlice";
import PopupWrapper from "./PopupWrapper";

const CartPopup = ({ isOpen, onClose, onProceedToCheckout }) => {
  const { cart: cartItems } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  // Calculate total
  const total = cartItems.reduce((sum, item) => {
    const price = parseFloat(item.price?.replace(/[^0-9.]/g, '')) || 0;
    return sum + (price * item.quantity);
  }, 0);

  const handleIncreaseQuantity = (bookId) => {
    const cartItem = cartItems.find(item => item.id === bookId);
    if (cartItem) {
      dispatch(updateCartQuantity({
        id: bookId,
        quantity: cartItem.quantity + 1
      }));
    }
  };

  const handleDecreaseQuantity = (bookId) => {
    const cartItem = cartItems.find(item => item.id === bookId);
    if (cartItem) {
      if (cartItem.quantity === 1) {
        dispatch(removeFromCart(bookId));
      } else {
        dispatch(updateCartQuantity({
          id: bookId,
          quantity: cartItem.quantity - 1
        }));
      }
    }
  };

  const handleRemoveItem = (bookId) => {
    dispatch(removeFromCart(bookId));
  };

  if (!isOpen) return null;

  return (
    <PopupWrapper title="CART" onClose={onClose}>
      <div className="py-[36px] px-[16px] md:px-[36px]">
        {cartItems.length === 0 ? (
          <p className="text-gray-500 text-center py-8 text-lg">Your cart is empty</p>
        ) : (
          <div className="space-y-6">
            {/* Cart Items */}
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between border-b border-gray-300 pb-6">
                {/* Book Image and Info */}
                <div className="flex items-center gap-4 flex-1">
                  <img 
                    src={item.cover_image} 
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-inter text-lg font-medium">
                      {item.title}
                    </h3>
                    <p className="font-inter text-base text-gray-600">
                      {item.price}
                    </p>
                  </div>
                </div>
                
                {/* Quantity Controls and Remove */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={() => handleDecreaseQuantity(item.id)}
                      className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100 text-lg font-bold"
                    >
                      -
                    </button>
                    <span className="min-w-[30px] text-center text-lg font-medium">
                      {item.quantity}
                    </span>
                    <button 
                      onClick={() => handleIncreaseQuantity(item.id)}
                      className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100 text-lg font-bold"
                    >
                      +
                    </button>
                  </div>
                  
                  <button 
                    onClick={() => handleRemoveItem(item.id)}
                    className="ml-4 text-red-500 hover:text-red-700 text-sm bg-red-50 px-3 py-1 rounded font-medium"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            
            {/* Total and Checkout */}
            <div className="border-t border-gray-300 pt-6">
              <div className="flex justify-between items-center mb-6">
                <span className="text-xl font-bold font-satoshi">Total</span>
                <span className="text-xl font-bold font-satoshi">N{total.toFixed(3)}</span>
              </div>
              
              <button 
                onClick={onProceedToCheckout}
                className="w-full bg-[#FD9F2B] text-white py-4 rounded-[100px] font-inter text-lg hover:bg-orange-600 transition-colors font-bold"
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