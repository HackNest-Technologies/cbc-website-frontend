const EmptyState = ({ message }) => {
  return (
    <div className="container mx-auto px-6 py-6 md:px-0">
      <p className="text-center text-gray-500 mt-10">
        {message}
      </p>
    </div>
  );
};

export default EmptyState;