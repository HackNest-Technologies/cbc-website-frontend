import MoonLoader from "react-spinners/MoonLoader";
const override = {
  display: "block",
  margin: "100px auto",
};
const Spinner = ({ loading, size }) => {
  return (
    <>
      <MoonLoader
        // color="#F3A900"
        color="#FFB202"
        loading={loading}
        cssOverride={override}
        size={size}
        aria-label="Loading Spinner"
        data-testid="loader"
      />

    </>
  );
};

export default Spinner 