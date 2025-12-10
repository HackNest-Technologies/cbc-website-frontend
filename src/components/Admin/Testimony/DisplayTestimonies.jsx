import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import TestimonyList from "./TestimonyList"
import Spinner from "../../Loader/Spinner";
import { useGetTestimoniesQuery } from "../../../redux/apiSlice";

const DisplayTestimonies = ({ search = "" }) => {
    const location = useLocation();
      const { data = [], isLoading, refetch } = useGetTestimoniesQuery();
    
     const filteredEvents = data.filter((event) => {
  const searchTerm = search.toLowerCase();
  return (
    event?.testifier_first_name?.toLowerCase().includes(searchTerm) ||
    event?.testifier_last_name?.toLowerCase().includes(searchTerm) ||
    event?.body?.toLowerCase().includes(searchTerm)
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
          <TestimonyList data={filteredEvents} />
        )}
      </div>
    </section>  )
}

export default DisplayTestimonies