import PropTypes from "prop-types";
import { formatPrice } from "../utils/propertyUtils";

const PropertyDetail = ({ property, onClose }) => {
  if (!property) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-slideUp"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-[16/9]">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-full object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-12 h-12 bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors"
            aria-label="Close modal"
          >
            <span className="text-2xl font-light">×</span>
          </button>
        </div>

        <div className="p-8 lg:p-12">
          <div className="mb-8">
            <h2 className="text-4xl font-light text-stone-900 mb-4 tracking-tight">
              {property.title}
            </h2>
            <p className="text-stone-500 text-sm tracking-wide uppercase mb-2">
              {property.location}
            </p>
            <p className="text-3xl font-light text-stone-900">
              {formatPrice(property.price)}
              <span className="text-lg text-stone-500 ml-2">per year</span>
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8 mb-8 pb-8 border-b border-stone-200">
            <div>
              <div className="text-3xl font-light text-stone-900 mb-1">
                {property.bedrooms}
              </div>
              <div className="text-sm text-stone-500 uppercase tracking-wide">
                Bedrooms
              </div>
            </div>
            <div>
              <div className="text-3xl font-light text-stone-900 mb-1">
                {property.bathrooms}
              </div>
              <div className="text-sm text-stone-500 uppercase tracking-wide">
                Bathrooms
              </div>
            </div>
            <div>
              <div className="text-3xl font-light text-stone-900 mb-1">
                {property.sqft.toLocaleString()}
              </div>
              <div className="text-sm text-stone-500 uppercase tracking-wide">
                Square Feet
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-sm font-medium text-stone-600 uppercase tracking-wider mb-4">
              Description
            </h3>
            <p className="text-stone-700 leading-relaxed font-light text-lg">
              {property.description}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-stone-600 uppercase tracking-wider mb-4">
              Amenities
            </h3>
            <div className="flex flex-wrap gap-2">
              {property.amenities.map((amenity, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-stone-100 text-stone-700 text-sm tracking-wide"
                >
                  {amenity}
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-full mt-8 bg-stone-900 text-white py-4 hover:bg-stone-800 transition-colors tracking-widest text-sm font-medium"
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};

PropertyDetail.propTypes = {
  property: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    bedrooms: PropTypes.number.isRequired,
    bathrooms: PropTypes.number.isRequired,
    sqft: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    amenities: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
  onClose: PropTypes.func.isRequired,
};

export default PropertyDetail;

