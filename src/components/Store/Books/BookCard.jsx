
import { useSelector, useDispatch } from "react-redux";
import { CiHeart } from "react-icons/ci";
import { toggleLike } from "../../../redux/bookSlice";
import { useAddToCartMutation, useCreateCartMutation, useGetCartQuery } from "../../../redux/apiSlice";
import { useEffect, useState } from "react";

const BookCard = ({ book, currentFilter, user, cart, cartID, setCartID }) => {
  const [isInCart, setIsInCart] = useState(false);

  const { liked } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const [addCartItem] = useAddToCartMutation();
  const [createCart] = useCreateCartMutation();

  const handleAddToCart = async () => {
    let localCartId = cartID;
    console.log('Local cart ID', localCartId)

    if (!user && !localCartId) {
      localCartId = localStorage.getItem("cart_id");

      if (!localCartId) {
        const res = await createCart({ user_id: null });

        if (!res.error) {
          localCartId = res.data.id
          localStorage.setItem("cart_id", res.data.id);
          setCartID(res.data.id);
        }
      }
    }

    try {
      if (localCartId) {
        //  Call the ONLY cart API
        const response = await addCartItem({
          store_item_id: book.id,
          cart_id: localCartId,
          quantity: 1,
        }).unwrap();
      } else {
        console.error("Add to cart failed");
      }
    } catch (error) {
      console.error("Add to cart failed:", error);
    }
  };

  const handleToggleLike = () => {
    dispatch(toggleLike(book.id));
  };

  useEffect(() => {
    if (cart?.items.find((item) => item.store_item.id == book.id)) {
      setIsInCart(true)
    }
  }, [cart])

  const isLiked = liked.includes(book.id);

  return (
     <div className="">
      <img
        src={book.cover_image}
        alt={book.title}
        className="w-full h-[337px] object-cover rounded-[8px]"
        loading="lazy"
      />

      {/* Audio Badge */}
      {currentFilter === "Audios" && (
        <span className="text-base text-[#7D7D7D] font-inter leading-[100%] py-2">
          Audio
        </span>
      )}

      <h3 className="mt-3 text-base text-[#000000] font-inter leading-[100%]">
        {book.title}
      </h3>

      <p className="text-base pt-3 text-[#000000] font-inter leading-[100%]">
        {book.price}
      </p>

      {/* Action Buttons */}
      <div className="flex py-4 justify-between items-center">
        <button
          onClick={handleAddToCart}
          disabled={isInCart}
          className={`text-base font-inter leading-[100%] border rounded-[100px] py-[12px] px-[69px] transition-colors ${
            isInCart
              ? "bg-orange-400 text-white cursor-not-allowed"
              : "hover:bg-gray-100"
          }`}
        >
          {isInCart ? "Added to Cart" : "Add to Cart"}
        </button>

        {/* Like Button */}
        <div
          onClick={handleToggleLike}
          className={`rounded-full p-2 border cursor-pointer ${
            isLiked ? "border-red-500" : "border-[#929292]"
          }`}
        >
          <CiHeart
            className={`text-[24px] ${
              isLiked ? "text-red-500 fill-red-500" : ""
            }`}
          />
        </div>
      </div>

      <p className="pt-4 pb-7 text-base text-[#7D7D7D] leading-[100%] font-inter">
        {book.description}
      </p>
    </div>
  );
};

export default BookCard;



// import { useSelector, useDispatch } from "react-redux";
// import { CiHeart } from "react-icons/ci";
// import { toggleLike } from "../../../redux/bookSlice";
// import { 
//   useAddToCartMutation, 
//   useCreateCartMutation, 
//   useGetCartQuery 
// } from "../../../redux/apiSlice";
// import { useEffect, useState } from "react";

// const BookCard = ({ book, currentFilter, user, cart, cartID, setCartID, refetchCart }) => {
//   const [isInCart, setIsInCart] = useState(false);
//   const [isAdding, setIsAdding] = useState(false);

//   const { liked } = useSelector((state) => state.books);
//   const dispatch = useDispatch();

//   const [addCartItem] = useAddToCartMutation();
//   const [createCart] = useCreateCartMutation();

//   // Check if item is in cart
//   useEffect(() => {
//     if (cart?.items) {
//       const inCart = cart.items.some(item => item.store_item?.id === book.id);
//       setIsInCart(inCart);
//     }
//   }, [cart, book.id]);

//   const handleAddToCart = async () => {
//     if (isInCart || isAdding) return;
    
//     setIsAdding(true);
//     let localCartId = cartID;

//     try {
//       // Create cart if doesn't exist
//       if (!user && !localCartId) {
//         const cartIdFromStorage = localStorage.getItem("cart_id");
        
//         if (!cartIdFromStorage) {
//           const res = await createCart({ user_id: null });
          
//           if (!res.error) {
//             localCartId = res.data.id;
//             localStorage.setItem("cart_id", res.data.id);
//             setCartID(res.data.id);
//           }
//         } else {
//           localCartId = cartIdFromStorage;
//         }
//       }

//       // Add item to cart
//       if (localCartId) {
//         await addCartItem({
//           store_item_id: book.id,
//           cart_id: localCartId,
//           quantity: 1,
//         }).unwrap();
        
//         // Immediately update local state
//         setIsInCart(true);
        
//         // Dispatch custom event to notify other components
//         window.dispatchEvent(new Event('cartItemAdded'));
        
//         // Manually refetch cart if refetch function is provided
//         if (refetchCart) {
//           refetchCart();
//         }
        
//         // Optional: Show success notification
//         console.log("Item added to cart successfully!");
//       }
//     } catch (error) {
//       console.error("Add to cart failed:", error);
//       setIsInCart(false);
//     } finally {
//       setIsAdding(false);
//     }
//   };

//   const handleToggleLike = () => {
//     dispatch(toggleLike(book.id));
//   };

//   const isLiked = liked.includes(book.id);

//   return (
//     <div className="">
//       <img
//         src={book.cover_image}
//         alt={book.title}
//         className="w-full h-[337px] object-cover rounded-[8px]"
//         loading="lazy"
//       />

//       {/* Audio Badge */}
//       {currentFilter === "Audios" && (
//         <span className="text-base text-[#7D7D7D] font-inter leading-[100%] py-2">
//           Audio
//         </span>
//       )}

//       <h3 className="mt-3 text-base text-[#000000] font-inter leading-[100%]">
//         {book.title}
//       </h3>

//       <p className="text-base pt-3 text-[#000000] font-inter leading-[100%]">
//         {book.price}
//       </p>

//       {/* Action Buttons */}
//       <div className="flex py-4 justify-between items-center">
//         <button
//           onClick={handleAddToCart}
//           disabled={isInCart || isAdding}
//           className={`text-base font-inter leading-[100%] border rounded-[100px] py-[12px] px-[69px] transition-colors ${
//             isInCart
//               ? "bg-orange-400 text-white cursor-not-allowed"
//               : isAdding
//               ? "bg-gray-200 cursor-not-allowed"
//               : "hover:bg-gray-100"
//           }`}
//         >
//           {isAdding ? "Adding..." : isInCart ? "Added to Cart" : "Add to Cart"}
//         </button>

//         {/* Like Button */}
//         <div
//           onClick={handleToggleLike}
//           className={`rounded-full p-2 border cursor-pointer ${
//             isLiked ? "border-red-500" : "border-[#929292]"
//           }`}
//         >
//           <CiHeart
//             className={`text-[24px] ${
//               isLiked ? "text-red-500 fill-red-500" : ""
//             }`}
//           />
//         </div>
//       </div>

//       <p className="pt-4 pb-7 text-base text-[#7D7D7D] leading-[100%] font-inter">
//         {book.description}
//       </p>
//     </div>
//   );
// };

// export default BookCard;



