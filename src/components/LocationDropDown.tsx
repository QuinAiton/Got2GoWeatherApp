import { useState } from "react";

type PropTypes = {
  setSelectedLocation: (location: string) => void;
  selectLocation: string;
  city: string | null;
};
export default function LocationDropDown({
  setSelectedLocation,
  selectLocation,
  city,
}: PropTypes) {
  const [showOptions, setShowOptions] = useState(false);

  const handleSelectLocation = (location: string) => {
    setSelectedLocation(location);
    setShowOptions(false);
  };

  const shouldShowOption = (title: string) => {
    return title !== selectLocation;
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={() => setShowOptions(!showOptions)}
        >
          {selectLocation}
          <svg
            className="-mr-1 h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {showOptions && (
        <div
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1" role="none">
            {shouldShowOption("Miami") && (
              <button
                onClick={() => handleSelectLocation("Miami")}
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                id="menu-item-0"
              >
                Miami
              </button>
            )}
            {shouldShowOption("New York") && (
              <button
                onClick={() => handleSelectLocation("New York")}
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                id="menu-item-1"
              >
                New York
              </button>
            )}
            {shouldShowOption("Los Angeles") && (
              <button
                onClick={() => handleSelectLocation("Los Angeles")}
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                id="menu-item-2"
              >
                Los Angeles
              </button>
            )}
            {city && shouldShowOption(city) && (
              <button
                onClick={() => handleSelectLocation(city)}
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                id="menu-item-2"
              >
                {city}{" "}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
// Miami, New York, or Los Angeles
