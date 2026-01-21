import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Spinner from "../../../Loader/Spinner";
import DevotionList from "./DevotionList";
import { useGetDailyDevotionalQuery } from "../../../../redux/apiSlice";
const DisplayDevotional = ({ search = "" }) => {
     const location = useLocation();
      const { data = [], isLoading, refetch } = useGetDailyDevotionalQuery();
    
      const filteredDevo = data.filter((devotional) => {
        const searchTerm = search.toLowerCase();
        return (
          devotional?.body?.toLowerCase().includes(searchTerm) ||
          devotional?.title?.toLowerCase().includes(searchTerm)
        );
      });
    
      useEffect(() => {
        if (location.state?.refresh) {
          refetch(); // Force refetch
          // Clear the refresh state to prdevotional infinite loops
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
          <DevotionList data={filteredDevo} />
        )}
      </div>
    </section>
  )
}

export default DisplayDevotional