
import { useState } from "react";
// import { useGetProductsQuery } from "./storeApi";

const StoreBtn = () => {
  // const [filter, setFilter] = useState("All");
  // const [isLoading] = useState(false);
  //   const [error] = useState(false);
  //   const items=[]


  // RTK Query hook, auto-refetches when `filter` changes
  // const { data: items = [], isLoading, error } = useGetProductsQuery(filter);

  // return (
  //   <div className="container mx-auto px-6 py-6 space-y-4">
  //      {/* Dropdowns  */}
  //     <div className="flex justify-between items-center">
  //       <select
  //         value={filter}
  //         onChange={(e) => setFilter(e.target.value)}
  //         className="px-2 py-1 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
  //       >
  //         <option value="All">All</option>
  //         <option value="Audios">Audios</option>
  //         <option value="Books">Books</option>
  //         <option value="Liked">Liked</option>
  //       </select>

  //       <select
  //         className="px-2 py-1 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
  //       >
  //         <option>Sort By</option>
  //         <option value="priceLowHigh">Price: Low to High</option>
  //         <option value="priceHighLow">Price: High to Low</option>
  //       </select>
  //     </div>

  //     {/* Display items */}
  //     {isLoading ? (
  //       <p>Loading...</p>
  //     ) : error ? (
  //       <p className="text-red-500">Error loading items</p>
  //     ) : (
  //       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  //         {items.length > 0 ? (
  //           items.map((item) => (
  //             <div
  //               key={item.id}
  //               className="border rounded-lg p-4 shadow-sm space-y-2"
  //             >
  //               <img
  //                 src={item.image}
  //                 alt={item.title}
  //                 className="w-full h-40 object-cover rounded-md"
  //               />
  //               <h3 className="font-semibold text-sm">{item.title}</h3>
  //               <p className="text-gray-600">{item.type}</p>
  //               <p className="font-bold">₦{item.price}</p>
  //               <button className="w-full px-4 py-2 bg-black text-white rounded-full text-sm hover:bg-gray-800 transition">
  //                 Add To Cart
  //               </button>
  //             </div>
  //           ))
  //         ) : (
  //           <p>No items found</p>
  //         )}
  //       </div>
  //     )}
  //   </div>
  // );
};

export default StoreBtn;
