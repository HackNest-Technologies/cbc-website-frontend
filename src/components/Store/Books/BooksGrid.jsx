import { useSelector } from "react-redux";
import BookCard from "./BookCard";
import EmptyState from "./EmptyState";

const BooksGrid = ({ data }) => {
  const { filter, liked } = useSelector((state) => state.books);

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
          key={book.id} 
          book={book} 
          currentFilter={filter}
        />
      ))}
    </div>
  );
};

export default BooksGrid;