import { useGetFellowshipQuery } from "../../../redux/apiSlice"
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Spinner from "../../Loader/Spinner";
import FellowshipList from "./FellowshipList";
const DisplayFellowship = ({ search = "" }) => {
    const location = useLocation();
  const { data = [], isLoading, refetch } = useGetFellowshipQuery();

  const filteredfellowship = data.filter((fellowship) => {
    const searchTerm = search.toLowerCase();
    return (
      fellowship?.name?.toLowerCase().includes(searchTerm)
    );
  });

  useEffect(() => {
    if (location.state?.refresh) {
      refetch(); // Force refetch
      // Clear the refresh state to prfellowship infinite loops
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
          <FellowshipList data={filteredfellowship} />
        )}
      </div>
    </section>  )
}

export default DisplayFellowship





