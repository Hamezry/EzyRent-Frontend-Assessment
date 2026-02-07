import { useState, useMemo, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FilterControls from "./components/FilterControls";
import PropertyList from "./components/PropertyList";
import PropertyDetail from "./components/PropertyDetail";
import { PROPERTIES_DATA } from "./data/properties";
import {
  getUniqueLocations,
  filterProperties,
  sortProperties,
} from "./utils/propertyUtils";

function App() {
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [sortBy, setSortBy] = useState("default");
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading on mount
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  // Memoized computed values - Dependency Inversion: Depends on abstractions
  const locations = useMemo(() => getUniqueLocations(PROPERTIES_DATA), []);

  const displayedProperties = useMemo(() => {
    const filtered = filterProperties(PROPERTIES_DATA, selectedLocation);
    return sortProperties(filtered, sortBy);
  }, [selectedLocation, sortBy]);

  return (
    <div className="min-h-screen bg-stone-50">
      <Header />

      <main className="max-w-7xl mx-auto px-6 py-12">
        {!isLoading && (
          <>
            <FilterControls
              locations={locations}
              selectedLocation={selectedLocation}
              sortBy={sortBy}
              onLocationChange={setSelectedLocation}
              onSortChange={setSortBy}
            />

            <div className="mb-6 text-sm text-stone-500 tracking-wide">
              Showing {displayedProperties.length}{" "}
              {displayedProperties.length === 1 ? "property" : "properties"}
            </div>
          </>
        )}

        <PropertyList
          properties={displayedProperties}
          isLoading={isLoading}
          onPropertyClick={setSelectedProperty}
        />
      </main>

      <Footer />

      <PropertyDetail
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
      />
    </div>
  );
}

export default App;

