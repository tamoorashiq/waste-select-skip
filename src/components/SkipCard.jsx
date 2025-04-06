export default function SkipCard({
  size,
  price,
  isSelected,
  onSelect,
  allowsHeavyWaste,
  allowedOnRoad,
  hirePeriod,
}) {
  const isDisabled = !allowsHeavyWaste;

  return (
    <div
      onClick={isDisabled ? undefined : onSelect}
      className={`rounded-xl border p-4 transition-all relative group
        ${
          isSelected
            ? "border-custom-blue shadow-lg"
            : "border-gray-700 hover:border-custom-blue"
        }
        ${isDisabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        bg-cell text-white hover:shadow-md`}
    >
      {/* Warning Labels */}
      <div className="absolute top-2 left-2 space-y-2 z-10">
        {!allowedOnRoad && (
          <div className="flex items-center gap-1 bg-black/70 text-yellow-400 px-2 py-1 text-xs rounded-md shadow">
            ⚠️ Private Property Only
          </div>
        )}
        {!allowsHeavyWaste && (
          <div className="flex items-center gap-1 bg-black/70 text-red-400 px-2 py-1 text-xs rounded-md shadow">
            ⚠️ Not Suitable for Heavy Waste
          </div>
        )}
      </div>

      {/* Image */}
      <div className="relative">
        <img
          src="/skip-placeholder.jpg"
          alt={`${size} Yard Skip`}
          className="rounded-md mb-4 h-40 w-full object-cover"
        />
        <span className="absolute top-2 right-2 bg-custom-blue text-white px-3 py-1 rounded-full text-sm">
          {size} Yards
        </span>
      </div>

      {/* Text Content */}
      <h2 className="text-xl font-bold">{size} Yard Skip</h2>
      <p className="py-2 text-gray-400">{hirePeriod} day hire period</p>
      <p className="pt-3 text-2xl font-bold text-custom-blue">
        £{price} <span className="text-sm text-gray-400">per week</span>
      </p>

      {/* Button */}
      <button
        disabled={isDisabled}
        title={isDisabled ? "Not suitable for heavy waste" : ""}
        className={`w-full mt-3 py-3 rounded-lg font-medium transition
          ${
            isDisabled
              ? "bg-gray-700 text-gray-400 cursor-not-allowed opacity-50"
              : isSelected
              ? "bg-custom-blue text-white hover:bg-hover-blue"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700"
          }`}
      >
        {isSelected ? "Selected" : "Select This Skip →"}
      </button>
    </div>
  );
}
