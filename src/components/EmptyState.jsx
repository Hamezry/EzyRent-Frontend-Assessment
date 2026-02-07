import { Camera } from "lucide-react";

const EmptyState = () => {
  return (
    <div className="text-center py-20">
      <div className="w-16 h-16 mx-auto mb-6 bg-stone-100 rounded-full flex items-center justify-center">
        <Camera className="w-8 h-8 text-stone-400" />
      </div>
      <h3 className="text-2xl font-light text-stone-900 mb-2">
        No properties found
      </h3>
      <p className="text-stone-500">
        Try adjusting your filters to see more results
      </p>
    </div>
  );
};

export default EmptyState;

