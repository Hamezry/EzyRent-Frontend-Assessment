/**
 * Extract unique locations from properties array
 * @param {Array} properties - Array of property objects
 * @returns {Array} Array of unique locations with "All Locations" prepended
 */
export const getUniqueLocations = (properties) => {
  const locations = properties.map((p) => p.location);
  return ["All Locations", ...new Set(locations)];
};

/**
 * Filter properties by location
 * @param {Array} properties - Array of property objects
 * @param {string} location - Location to filter by
 * @returns {Array} Filtered properties
 */
export const filterProperties = (properties, location) => {
  if (location === "All Locations") return properties;
  return properties.filter((p) => p.location === location);
};

/**
 * Sort properties by specified criteria
 * @param {Array} properties - Array of property objects
 * @param {string} sortBy - Sort criteria (price-low, price-high, bedrooms)
 * @returns {Array} Sorted properties
 */
export const sortProperties = (properties, sortBy) => {
  const sorted = [...properties];
  switch (sortBy) {
    case "price-low":
      return sorted.sort((a, b) => a.price - b.price);
    case "price-high":
      return sorted.sort((a, b) => b.price - a.price);
    case "bedrooms":
      return sorted.sort((a, b) => b.bedrooms - a.bedrooms);
    default:
      return sorted;
  }
};

/**
 * Format price in Nigerian Naira
 * @param {number} price - Price value
 * @returns {string} Formatted price string
 */
export const formatPrice = (price) => {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
  }).format(price);
};

