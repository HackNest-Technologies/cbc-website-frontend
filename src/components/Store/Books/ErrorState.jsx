const ErrorState = ({ error }) => {
  console.error("Fetch error:", error);
  
  return (
    <div className="container mx-auto px-6 py-6 md:px-0">
      <p className="text-red-500">Failed to load data. Please try again.</p>
    </div>
  );
};

export default ErrorState;