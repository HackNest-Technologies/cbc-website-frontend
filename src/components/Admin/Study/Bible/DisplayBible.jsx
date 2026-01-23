import { useGetBibleInOneYearQuery } from "../../../../redux/apiSlice"
import BibleList from "./BibleList";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Spinner from "../../../Loader/Spinner";
const DisplayBible = () => {

   const location = useLocation();
      const { data = [], isLoading, refetch } = useGetBibleInOneYearQuery();
    
    
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
          <BibleList data={data} />
        )}
      </div>
    </section>  )
}

export default DisplayBible










