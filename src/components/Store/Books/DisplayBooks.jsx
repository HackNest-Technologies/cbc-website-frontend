import { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetBooksByIdQuery, useGetItemsByCategoryQuery } from "../../../redux/apiSlice";
import FilterSection from "./FilterSection";
import BooksGrid from "./BooksGrid";
import LoadingState from "./LoadingState";
import ErrorState from "./ErrorState";
import EmptyState from "./EmptyState";
import Pagination from "../../shared/Pagination";

const DisplayBooks = ({
  cartID,
  setCartID,
}) => {
  const { id } = useParams();
  
  // 1. Fetch category details (name, cover_image, etc.)
  const { 
    data: categoryData, 
    error: categoryError, 
    isLoading: isCategoryLoading, 
    isFetching: isCategoryFetching 
  } = useGetBooksByIdQuery(id);
  
  // 2. Fetch items for this category SEPARATELY
  const { 
  data: itemsData, 
  error: itemsError, 
  isLoading: isItemsLoading, 
  isFetching: isItemsFetching 
} = useGetItemsByCategoryQuery({ 
  categoryId: id,
  
});


  const isLoading = isCategoryLoading || isItemsLoading || isCategoryFetching || isItemsFetching;
  const error = categoryError || itemsError;

  if (isLoading) {
    return <LoadingState isLoading={isLoading} />;
  }

  if (error) {
    return <ErrorState error={error} />;
  }

  if (!categoryData) {
    return <EmptyState message="Category not found." />;
  }

  // Check if items were fetched successfully
  const items = itemsData?.items || [];
  console.log(items)

  // Combine category data with items
  const combinedData = {
    ...categoryData,
    items: items
  };

  return (
    <div className="container mx-auto px-6 py-6 md:px-0">
      <FilterSection />
      {items.length === 0 ? (
        <EmptyState message="No items found in this category." />
      ) : (
        <BooksGrid data={combinedData} cartID={cartID} setCartID={setCartID} />
      )}
    </div>
  );
};

export default DisplayBooks;

