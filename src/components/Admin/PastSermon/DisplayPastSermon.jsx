import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import TableSermon from "./TableSermon";
import Spinner from "../../Loader/Spinner";
import { useGetPastSermonQuery } from "../../../redux/apiSlice";

const DisplayPastSermon = ({ search = "" }) => {
  const location = useLocation();
  const { data = [], isLoading, refetch } = useGetPastSermonQuery();

  const filteredEvents = data.filter((event) => {
    const searchTerm = search.toLowerCase();
    return (
      event?.series_title?.toLowerCase().includes(searchTerm) ||
      event?.minister?.toLowerCase().includes(searchTerm)
    );
  });

  useEffect(() => {
    if (location.state?.refresh) {
      refetch(); // Force refetch
      // Clear the refresh state to prevent infinite loops
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
          <TableSermon data={filteredEvents} />
        )}
      </div>
    </section>
  );
};

export default DisplayPastSermon;
