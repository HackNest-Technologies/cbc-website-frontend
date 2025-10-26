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
    return <LoadingState isLoading={isLoading} />;
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

