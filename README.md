# Lagos Premier Properties - Component-Based Architecture

A modern, elegant property listing application for luxury rentals in Lagos, Nigeria. Built with React, Vite, and Tailwind CSS following SOLID principles with a clean component architecture.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The app will be available at `http://localhost:5173`

## 📁 Project Structure

```
lagos-properties/
├── src/
│   ├── components/          # UI Components (Single Responsibility)
│   │   ├── Header.jsx       # Site header
│   │   ├── Footer.jsx       # Site footer
│   │   ├── FilterControls.jsx    # Location & sort filters
│   │   ├── PropertyCard.jsx      # Individual property card
│   │   ├── PropertyList.jsx      # Property grid manager
│   │   ├── PropertyDetail.jsx    # Property detail modal
│   │   ├── EmptyState.jsx        # Empty state UI
│   │   └── LoadingState.jsx      # Loading skeleton
│   ├── data/               # Data Layer (Single Responsibility)
│   │   └── properties.js   # Property data
│   ├── utils/              # Utility Layer (Single Responsibility)
│   │   └── propertyUtils.js     # Helper functions
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles + Tailwind
├── public/                 # Static assets
├── index.html              # HTML template
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
├── .eslintrc.cjs           # ESLint configuration
├── package.json            # Dependencies
└── README.md               # This file
```

## 🏗️ Architecture & SOLID Principles

### Component Breakdown

#### **Data Layer** (`src/data/`)

- **properties.js** - Property data management
- Single source of truth for all property data
- Easily replaceable with API calls

#### **Utility Layer** (`src/utils/`)

- **propertyUtils.js** - Pure functions for:
  - `getUniqueLocations()` - Extract unique locations
  - `filterProperties()` - Filter by location
  - `sortProperties()` - Sort by various criteria
  - `formatPrice()` - Format currency in Naira

#### **Component Layer** (`src/components/`)

**Presentational Components** (Pure, reusable):

- `Header` - Site branding and title
- `Footer` - Copyright and footer content
- `FilterControls` - Filter and sort UI
- `PropertyCard` - Individual property display
- `EmptyState` - No results message
- `LoadingState` - Skeleton loading UI

**Container Components** (Logic):

- `PropertyList` - Manages property grid, decides what to show
- `PropertyDetail` - Modal with full property details

**Main Component**:

- `App` - Orchestrates all components, manages state

### SOLID Principles Implementation

#### 1. **Single Responsibility Principle (SRP)**

Each component/module has ONE job:

```javascript
// ✅ Header only renders header
const Header = () => { ... };

// ✅ PropertyCard only renders one card
const PropertyCard = ({ property, onClick }) => { ... };

// ✅ propertyUtils only provides helper functions
export const formatPrice = (price) => { ... };
```

#### 2. **Open/Closed Principle (OCP)**

Easy to extend without modification:

```javascript
// Add new sort option without changing PropertyList
export const sortProperties = (properties, sortBy) => {
  switch (sortBy) {
    case 'price-low': ...
    case 'price-high': ...
    // Easy to add: case 'newest': ...
  }
};
```

#### 3. **Liskov Substitution Principle (LSP)**

All properties follow same interface:

```javascript
// Every property has these fields
{
  (id,
    title,
    location,
    price,
    bedrooms,
    bathrooms,
    sqft,
    image,
    description,
    amenities);
}
```

#### 4. **Interface Segregation Principle (ISP)**

Components only receive props they need:

```javascript
// PropertyCard doesn't need ALL app state
<PropertyCard
  property={property} // Only what it needs
  onClick={handler} // Only what it needs
/>
```

#### 5. **Dependency Inversion Principle (DIP)**

Depend on abstractions, not implementations:

```javascript
// App doesn't know HOW filtering works
const filtered = filterProperties(data, location);

// PropertyCard doesn't know WHAT onClick does
<PropertyCard onClick={() => setSelected(property)} />;
```

## 🎨 Design Features

### Aesthetic Direction

**Luxury Editorial** - Inspired by high-end real estate magazines

- **Typography**:
  - Cormorant (serif) for headings - elegant, refined
  - Montserrat (sans-serif) for body - clean, modern

- **Color Palette**:
  - Stone neutrals (50-900)
  - White cards with subtle shadows
  - Minimal accents

- **Interactions**:
  - Smooth hover animations (scale, shadow)
  - Modal transitions with backdrop blur
  - Loading skeleton states

### Lagos-Specific Features

- **Nigerian Naira (₦)** pricing
- **Local amenities**: BQ, Generator, 24/7 Power
- **Lagos locations**: Victoria Island, Ikoyi, Lekki, etc.
- **Realistic pricing**: ₦4.5M - ₦35M annually

## 📦 Component Props Documentation

### FilterControls

```typescript
{
  locations: string[],
  selectedLocation: string,
  sortBy: string,
  onLocationChange: (location: string) => void,
  onSortChange: (sortBy: string) => void
}
```

### PropertyCard

```typescript
{
  property: {
    id: number,
    title: string,
    location: string,
    price: number,
    bedrooms: number,
    bathrooms: number,
    sqft: number,
    image: string
  },
  onClick: () => void
}
```

### PropertyList

```typescript
{
  properties: Property[],
  isLoading: boolean,
  onPropertyClick: (property: Property) => void
}
```

### PropertyDetail

```typescript
{
  property: Property | null,
  onClose: () => void
}
```

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start dev server with HMR

# Production
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
```

## 🌐 Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### Netlify

```bash
npm i -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

### GitHub Pages

```bash
npm run build
# Push dist folder to gh-pages branch
```

## 🔄 Extending the Application

### Add New Property Field

1. Update `src/data/properties.js`
2. Update PropTypes in components
3. Update UI in `PropertyCard` or `PropertyDetail`

### Add New Filter

1. Add state in `App.jsx`
2. Add UI in `FilterControls.jsx`
3. Add logic in `src/utils/propertyUtils.js`

### Connect to API

Replace `PROPERTIES_DATA` import in `App.jsx`:

```javascript
// Before
import { PROPERTIES_DATA } from "./data/properties";

// After
const [properties, setProperties] = useState([]);

useEffect(() => {
  fetch("https://api.example.com/properties")
    .then((res) => res.json())
    .then((data) => setProperties(data));
}, []);
```

### Add New Component

1. Create component file in `src/components/`
2. Follow naming convention: `ComponentName.jsx`
3. Add PropTypes validation
4. Import and use in parent component

## 📝 Code Quality Standards

- ✅ PropTypes validation on all components
- ✅ ESLint for code consistency
- ✅ Consistent naming conventions
- ✅ Comprehensive comments
- ✅ Separation of concerns
- ✅ No prop drilling (shallow hierarchy)

## 🧪 Testing (Future Enhancement)

```bash
# Setup testing (not included yet)
npm install --save-dev vitest @testing-library/react
```

Example test structure:

```javascript
// src/components/__tests__/PropertyCard.test.jsx
import { render, screen } from "@testing-library/react";
import PropertyCard from "../PropertyCard";

test("renders property title", () => {
  // Test implementation
});
```

## 🙏 Acknowledgments

- Property images from [Unsplash](https://unsplash.com)
- Icons from [Lucide](https://lucide.dev)
- Fonts from [Google Fonts](https://fonts.google.com)

## 📄 License

MIT License - Free to use for learning and commercial projects.

---

**Built with ❤️ using React, Vite, and Tailwind CSS**

