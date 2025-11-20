import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import TableEvent from "./TableEvent";
import Spinner from "../../Loader/Spinner"
import { useGetEventQuery } from "../../../redux/apiSlice";
const DisplayEvents = ({ search = '' }) => {
    const location = useLocation();
    const { data = [], isLoading, refetch } = useGetEventQuery();
  
  const filteredEvents = data.filter(event => {
    const searchTerm = search.toLowerCase();
    return (
      event?.title?.toLowerCase().includes(searchTerm) ||
      event?.desc?.toLowerCase().includes(searchTerm)
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
          <TableEvent events={filteredEvents} />
        )}
      </div>
    </section>
  );
};



export default DisplayEvents;