import { useGetBranchesQuery } from "../../../redux/apiSlice"
import BranchList from "./BranchList"
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Spinner from "../../Loader/Spinner";
const DisplayBranch = ({ search = "" }) => {
  const location = useLocation();
  const { data = [], isLoading, refetch } = useGetBranchesQuery();

  const filteredbranch = data.filter((branch) => {
    const searchTerm = search.toLowerCase();
    return (
      branch?.name?.toLowerCase().includes(searchTerm) ||
      branch?.address?.toLowerCase().includes(searchTerm)
    );
  });

  useEffect(() => {
    if (location.state?.refresh) {
      refetch(); // Force refetch
      // Clear the refresh state to prbranch infinite loops
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
          <BranchList data={filteredbranch} />
        )}
      </div>
    </section>  )
}

export default DisplayBranch


