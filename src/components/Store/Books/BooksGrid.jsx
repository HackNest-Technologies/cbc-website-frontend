import { useSelector } from "react-redux";
import BookCard from "./BookCard";
import EmptyState from "./EmptyState";
import { useGetCartQuery } from "../../../redux/apiSlice";

const BooksGrid = ({ data, cartID, setCartID }) => {
  const { data: cart } = useGetCartQuery(cartID)
  const { filter, liked } = useSelector((state) => state.books);
  const { user } = useSelector((state) => state.auth);

  // Filter logic
  const filteredItems = data.items.filter((item) => {
    if (filter === "All") return true;
    if (filter === "Books") return item.item_type === "book";
    if (filter === "Audios") return item.item_type === "audio";
    if (filter === "Liked") return liked.includes(item.id);
    return false;
  });

  if (filteredItems.length === 0) {
    return <EmptyState message="No items found for this filter." />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {filteredItems.map((book) => (
        <BookCard 
          cartID={cartID}
          key={book.id} 
          book={book} 
          cart={cart}
          currentFilter={filter}
          setCartID={setCartID}
          user={user}
        />
      ))}
    </div>
  );
};

export default BooksGrid;


// import { useSelector } from "react-redux";
// import BookCard from "./BookCard";
// import EmptyState from "./EmptyState";
// import { useEffect, useState } from "react";
// import { useGetCartQuery } from "../../../redux/apiSlice";

// const BooksGrid = ({ data, refetchCart }) => {
//   const [cartID, setCartID] = useState(null);
//   const { data: cart } = useGetCartQuery(cartID, { skip: !cartID });
//   const { filter, liked } = useSelector((state) => state.books);
//   const { user } = useSelector((state) => state.auth);

//   useEffect(() => {
//     if (user) {
//       setCartID(user.cart.id)
//     } else {
//       const cartId = localStorage.getItem("cart_id");
//       setCartID(cartId);
//     }
//   }, [user])

//   // Filter logic
//   const filteredItems = data.items.filter((item) => {
//     if (filter === "All") return true;
//     if (filter === "Books") return item.item_type === "book";
//     if (filter === "Audios") return item.item_type === "audio";
//     if (filter === "Liked") return liked.includes(item.id);
//     return false;
//   });

//   if (filteredItems.length === 0) {
//     return <EmptyState message="No items found for this filter." />;
//   }

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//       {filteredItems.map((book) => (
//         <BookCard 
//           cartID={cartID}
//           key={book.id} 
//           book={book} 
//           cart={cart}
//           currentFilter={filter}
//           setCartID={setCartID}
//           user={user}
//           refetchCart={refetchCart} // Pass refetch function
//         />
//       ))}
//     </div>
//   );
// };

// export default BooksGrid;