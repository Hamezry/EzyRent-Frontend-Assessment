const LoadingState = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[1, 2, 3, 4, 5, 6].map((n) => (
        <div key={n} className="bg-white animate-pulse">
          <div className="aspect-[4/3] bg-stone-200" />
          <div className="p-6">
            <div className="h-6 bg-stone-200 mb-4 w-3/4" />
            <div className="h-4 bg-stone-200 mb-4 w-1/2" />
            <div className="h-4 bg-stone-200 w-full" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoadingState;

