import PropTypes from "prop-types";

const FilterControls = ({
  locations,
  selectedLocation,
  sortBy,
  onLocationChange,
  onSortChange,
}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-12">
      <div className="flex-1">
        <label className="block text-sm font-medium text-stone-600 mb-2 tracking-wide">
          LOCATION
        </label>
        <select
          value={selectedLocation}
          onChange={(e) => onLocationChange(e.target.value)}
          className="w-full px-4 py-3 bg-white border border-stone-200 rounded-none focus:outline-none focus:border-stone-900 transition-colors text-stone-900 font-light"
        >
          {locations.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
      </div>
      <div className="flex-1">
        <label className="block text-sm font-medium text-stone-600 mb-2 tracking-wide">
          SORT BY
        </label>
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="w-full px-4 py-3 bg-white border border-stone-200 rounded-none focus:outline-none focus:border-stone-900 transition-colors text-stone-900 font-light"
        >
          <option value="default">Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="bedrooms">Most Bedrooms</option>
        </select>
      </div>
    </div>
  );
};

FilterControls.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedLocation: PropTypes.string.isRequired,
  sortBy: PropTypes.string.isRequired,
  onLocationChange: PropTypes.func.isRequired,
  onSortChange: PropTypes.func.isRequired,
};

export default FilterControls;

