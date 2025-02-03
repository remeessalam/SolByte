export const LoadingSpinner = () => {
  return (
    <div
      aria-label="Loading..."
      className="spinner-parent flex flex-col gap-10"
      role="status"
    >
      <span className="loader"></span>
      <h1 className="relative text-white text-center text-7xl font-medium leading-[1.3]">
        <span className="inline-block bg-gradient-to-r from-transparent via-white to-transparent bg-clip-text text-transparent animate-shimmer">
          SolByte <br /> Tech
        </span>
      </h1>
    </div>
  );
};
