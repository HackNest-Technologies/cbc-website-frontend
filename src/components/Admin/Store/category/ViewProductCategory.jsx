import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  useGetBooksByIdQuery,
  useDeleteBookItemMutation,
} from "../../../../redux/apiSlice";
import ConfirmModal from "../../ConfirmModal";
import Spinner from "../../../Loader/Spinner";
import AddBtn from "../../PastSermon/AddBtn";

const ViewProductCategory = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const categoryId = params.get("category");
  const navigate = useNavigate();

  // States for modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // Fetch data
  const { data, error, isLoading, isFetching, refetch } =
    useGetBooksByIdQuery(categoryId);

  // Delete mutation
  const [deleteBook] = useDeleteBookItemMutation();

 

  if (isLoading || isFetching) {
    return (
      <div className="flex justify-center items-center h-64 text-lg font-medium">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-600 font-medium mt-10">
        Failed to load category products.
      </div>
    );
  }

  const { name, items, cover_image } = data;

  // Modal handlers
  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  // Delete handler
  const handleDelete = async () => {
    if (!selectedItem) return;

    try {
      await deleteBook(selectedItem.id).unwrap();
      refetch();
      closeModal();
    } catch (err) {
      console.error("Failed to delete item:", err);
    }
  };

  return (
    <section className="px-6 py-10">
      {/* Header */}
      <section>
        <div className="flex items-center gap-4 mb-5">
          <img
            src={cover_image}
            alt={name}
            className="w-20 h-20 rounded-lg object-cover shadow-md"
          />
          <div>
            <h1 className="text-2xl font-bold">{name}</h1>
            <p className="text-gray-600">{items?.length} items available</p>
          </div>
        </div>
        <div className="pb-10">
          <AddBtn linkTo="/products/add-product" addMsg="Add Product" />
        </div>
      </section>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items?.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition p-4 flex flex-col"
          >
            {/* Image */}
            <img
              src={item.cover_image}
              alt={item.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            {/* Title */}
            <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
            {/* Item type */}
            <p className="text-gray-500 text-sm capitalize mb-3">
              Type: {item.item_type}
            </p>
            {/* Price */}
            <p className="text-[#FC8E33] font-bold text-xl mb-4">
              {item.price}
            </p>
            {/* Button with brand color */}
            <div className="flex gap-2 w-full">
              <button
                // onClick={() => navigate(`/edit-product/${item.id}`)}
                onClick={() => navigate("/edit-product", { state: { product: item } })}

                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
                Edit
              </button>

              <button
                onClick={() => openModal(item)}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-red-700 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <ConfirmModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={handleDelete}
        warningMsg="This action cannot be undone. The product will be permanently removed."
        msg="Delete Product?"
        subMsg={`Are you sure you want to delete "${selectedItem?.title}"?`}
      />
    </section>
  );
};

export default ViewProductCategory;
