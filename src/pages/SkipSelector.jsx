import useFetchSkips from "../hooks/useFetchSkips";
import SkipCard from "../components/SkipCard";

const SkipSelector = ({ selectedSkip, setSelectedSkip }) => {
  const { skips, loading } = useFetchSkips();

  return (
    <div className="mxn-h-screen bg-main p-6 pb-40 text-white">
      {loading ? (
        <div className="bg-main text-center text-white">Loading skips...</div>
      ) : (
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-2 text-center">
            Choose Your Skip Size
          </h1>
          <p className="text-center text-gray-400 mb-8">
            Select the skip size that best suits your needs
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skips.map((skip) => (
              <SkipCard
                key={skip.id}
                size={skip.size}
                price={skip.price_before_vat}
                hirePeriod={skip.hire_period_days}
                isSelected={selectedSkip?.id === skip.id}
                allowsHeavyWaste={skip.allows_heavy_waste}
                allowedOnRoad={skip.allowed_on_road}
                onSelect={() => setSelectedSkip(skip)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SkipSelector;
