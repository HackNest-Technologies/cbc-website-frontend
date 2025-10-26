import Spinner from "../../Loader/Spinner"
const LoadingState = ({isLoading}) => {
  return (
    <div className="container mx-auto px-6 py-6 md:px-0">
          <Spinner loading={isLoading} size={30} />
    </div>
  );
};

export default LoadingState;