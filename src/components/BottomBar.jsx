import React from "react";

const BottomBar = ({ selectedSkip, onBack, onContinue }) => {
  if (!selectedSkip) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-zinc-900 border-t border-zinc-800 px-4 py-3 z-50">
      <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex sm:items-center gap-3 items-center text-white text-sm">
          <span className="text-grey-400 font-semibold text-base">
            {selectedSkip.size}
          </span>
          <span className="text-2xl font-bold text-custom-blue">
            £{selectedSkip.price_before_vat}
          </span>
          <span className="text-gray-400">
            {selectedSkip.hire_period_days} day hire
          </span>
        </div>

        <div className="flex flex-row gap-2 items-center sm:w-auto w-full sm:self-end sm:self-auto">
          <button
            onClick={onBack}
            className="w-1/2 sm:w-auto flex justify-center bg-zinc-700 hover:bg-zinc-600 text-white py-2 px-4 rounded-md"
          >
            Back
          </button>
          <button
            onClick={onContinue}
            className="w-1/2 sm:w-auto flex justify-center bg-custom-blue hover:bg-hover-blue text-white py-2 px-4 rounded-md"
          >
            Continue →
          </button>
        </div>
      </div>
    </div>
  );
};

export default BottomBar;
