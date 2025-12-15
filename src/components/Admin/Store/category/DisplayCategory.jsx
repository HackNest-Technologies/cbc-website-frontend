import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import CategoryList from "./CategoryList";
import Spinner from "../../../Loader/Spinner";
import { useGetCategoriesQuery } from "../../../../redux/apiSlice";

const DisplayCategory = ({ search = "" }) => {
  const location = useLocation();
  const { data = [], isLoading, refetch } = useGetCategoriesQuery();

  const filteredCategory = data.filter((category) => {
    const searchTerm = search.toLowerCase();
    return (
      category?.name?.toLowerCase().includes(searchTerm)
    );
  });


  console.log(data, "Catergory data")

  useEffect(() => {
    if (location.state?.refresh) {
      refetch(); // Force refetch
      // Clear the refresh state to prcategory infinite loops
    }
  }, [location.state, refetch]);
  return (
    <section>
      <div>
        {isLoading ? (
          <>
            <div className="block lg:hidden">
              <Spinner loading={isLoading} size={40} />
            </div>
            <div className="hidden lg:block">
              <Spinner loading={isLoading} size={50} />
            </div>
          </>
        ) : (
          <CategoryList data={filteredCategory} />
        )}
      </div>
    </section>
  );
};

export default DisplayCategory;
