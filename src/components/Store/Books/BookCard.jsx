import { useSelector, useDispatch } from "react-redux";
import { CiHeart } from "react-icons/ci";
import { addToCart, toggleLike } from "../../../redux/bookSlice";

const BookCard = ({ book, currentFilter }) => {
  const { cart, liked } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({
      id: book.id,
      title: book.title,
      price: book.price,
      cover_image: book.cover_image,
      quantity: 1
    }));
  };

  const handleToggleLike = () => {
    dispatch(toggleLike(book.id));
  };

  const isInCart = cart.some(item => item.id === book.id);
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