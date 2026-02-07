import PropTypes from "prop-types";
import PropertyCard from "./PropertyCard";
import EmptyState from "./EmptyState";
import LoadingState from "./LoadingState";

const PropertyList = ({ properties, isLoading, onPropertyClick }) => {
  if (isLoading) {
    return <LoadingState />;
  }

  if (properties.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {properties.map((property) => (
        <PropertyCard
          key={property.id}
          property={property}
          onClick={() => onPropertyClick(property)}
        />
      ))}
    </div>
  );
};

PropertyList.propTypes = {
  properties: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
  isLoading: PropTypes.bool.isRequired,
  onPropertyClick: PropTypes.func.isRequired,
};

export default PropertyList;

