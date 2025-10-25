// import { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { CiHeart } from "react-icons/ci";
// import { useParams } from "react-router-dom";
// import { useGetBooksByIdQuery } from "../../../redux/apiSlice";
// import { setFilter, addToCart, toggleLike } from "../../../redux/bookSlice";

// const DisplayBooks = () => {
//   const { id } = useParams();
//   const { data, error, isLoading, isFetching } = useGetBooksByIdQuery(id);
//   const dispatch = useDispatch();

//   // Global state from Redux
//   const { filter, cart, liked } = useSelector((state) => state.books);

//   // Handle add to cart locally
//   const handleAddToCart = (book) => {
//     dispatch(addToCart({
//       id: book.id,
//       title: book.title,
//       price: book.price,
//       cover_image: book.cover_image,
//       quantity: 1
//     }));
//   };

//   // Check if item is in cart
//   const isInCart = (bookId) => {
//     return cart.some(item => item.id === bookId);
//   };

//   if (isLoading || isFetching) {
//     return <p className="text-gray-500">Loading books...</p>;
//   }

//   if (error) {
//     console.error("Fetch error:", error);
//     return (
//       <p className="text-red-500">Failed to load data. Please try again.</p>
//     );
//   }

//   if (!data || !data.items) {
//     return <p className="text-gray-500">No data available.</p>;
//   }

//   // Filter logic
//   const filteredItems = data.items.filter((item) => {
//     if (filter === "All") return true;
//     if (filter === "Books") return item.item_type === "book";
//     if (filter === "Audios") return item.item_type === "audio";
//     if (filter === "Liked") return liked.includes(item.id);
//     return false;
//   });

//   return (
//     <div className="container mx-auto px-6 py-6 md:px-0">
//       {/* ---- MOBILE DROPDOWN ---- */}
//       <div className="flex justify-end mb-4 md:hidden">
//         <select
//           value={filter}
//           onChange={(e) => dispatch(setFilter(e.target.value))}
//           className="border border-gray-300 rounded-full px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
//         >
//           <option value="All">All</option>
//           <option value="Books">Books</option>
//           <option value="Audios">Audios</option>
//           <option value="Liked">Liked</option>
//         </select>
//       </div>

//       {/* ---- DESKTOP FILTER BUTTONS ---- */}
//       <div className="hidden md:flex gap-3 mb-6">
//         {["All", "Audios", "Books", "Liked"].map((type) => (
//           <button
//             key={type}
//             onClick={() => dispatch(setFilter(type))}
//             className={`rounded-[30px] py-[15px] px-[24px] border border-[#4E4E4E] text-[24px] font-inter leading-[100%] transition-all duration-300 ${
//               filter === type
//                 ? "bg-[#FD9F2B] text-white border-none"
//                 : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
//             }`}
//           >
//             {type}
//           </button>
//         ))}
//       </div>

//       {/* ---- BOOKS GRID ---- */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         {filteredItems.map((book) => {
//           const inCart = isInCart(book.id);
          
//           return (
//             <div key={book.id} className="">
//               <img
//                 src={book.cover_image}
//                 alt={book.title}
//                 className="w-full h-[337px] object-cover rounded-[8px]"
//                 loading="lazy"
//               />
//               {filter === "Audios" && (
//                 <span className="text-base text-[#7D7D7D] font-inter leading-[100%] py-2">
//                   Audio
//                 </span>
//               )}

//               <h3 className="mt-3 text-base text-[#000000] font-inter leading-[100%]">
//                 {book.title}
//               </h3>
//               <p className="text-base pt-3 text-[#000000] font-inter leading-[100%]">
//                 {book.price}
//               </p>
              
//               <div className="flex py-4 justify-between items-center">
//                 <button 
//                   onClick={() => handleAddToCart(book)}
//                   disabled={inCart}
//                   className={`text-base font-inter leading-[100%] border rounded-[100px] py-[12px] px-[69px] transition-colors ${
//                     inCart 
//                       ? "bg-green-500 text-white cursor-not-allowed" 
//                       : "hover:bg-gray-100"
//                   }`}
//                 >
//                   {inCart ? "Added to Cart" : "Add to Cart"}
//                 </button>
                
//                 <div 
//                   onClick={() => dispatch(toggleLike(book.id))}
//                   className={`rounded-full p-2 border cursor-pointer ${
//                     liked.includes(book.id) ? "border-red-500" : "border-[#929292]"
//                   }`}
//                 >
//                   <CiHeart 
//                     className={`text-[24px] ${
//                       liked.includes(book.id) ? "text-red-500 fill-red-500" : ""
//                     }`} 
//                   />
//                 </div>
//               </div>
              
//               <p className="pt-4 pb-7 text-base text-[#7D7D7D] leading-[100%] font-inter">
//                 {book.description}
//               </p>
//             </div>
//           );
//         })}
//       </div>

//       {/* ---- EMPTY STATE ---- */}
//       {filteredItems.length === 0 && (
//         <p className="text-center text-gray-500 mt-10">
//           No items found for this filter.
//         </p>
//       )}
//     </div>
//   );
// };

// export default DisplayBooks;




import { useParams } from "react-router-dom";
import { useGetBooksByIdQuery } from "../../../redux/apiSlice";
import FilterSection from "./FilterSection";
import BooksGrid from "./BooksGrid";
import LoadingState from "./LoadingState";
import ErrorState from "./ErrorState";
import EmptyState from "./EmptyState";

const DisplayBooks = () => {
  const { id } = useParams();
  const { data, error, isLoading, isFetching } = useGetBooksByIdQuery(id);

  if (isLoading || isFetching) {
    return <LoadingState />;
  }

  if (error) {
    return <ErrorState error={error} />;
  }

  if (!data || !data.items) {
    return <EmptyState message="No data available." />;
  }

  return (
    <div className="container mx-auto px-6 py-6 md:px-0">
      <FilterSection />
      <BooksGrid data={data} />
    </div>
  );
};

export default DisplayBooks;

