import PropTypes from "prop-types";
import { formatPrice } from "../utils/propertyUtils";

const PropertyCard = ({ property, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer bg-white overflow-hidden transition-all duration-500 hover:shadow-2xl"
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-4 right-4 bg-white px-4 py-2 text-sm font-medium tracking-wider">
          {formatPrice(property.price)}/yr
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-light text-stone-900 mb-2 tracking-tight">
          {property.title}
        </h3>
        <p className="text-stone-500 text-sm mb-4 tracking-wide uppercase">
          {property.location}
        </p>
        <div className="flex gap-6 text-sm text-stone-600">
          <span>{property.bedrooms} Beds</span>
          <span>·</span>
          <span>{property.bathrooms} Baths</span>
          <span>·</span>
          <span>{property.sqft.toLocaleString()} sqft</span>
        </div>
      </div>
    </div>
  );
};

PropertyCard.propTypes = {
  property: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    bedrooms: PropTypes.number.isRequired,
    bathrooms: PropTypes.number.isRequired,
    sqft: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PropertyCard;

