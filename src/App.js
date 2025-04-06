import { useState } from "react";
import SkipSelector from "./pages/SkipSelector";
import BottomBar from "./components/BottomBar"; // make sure this component exists

function App() {
  const [selectedSkip, setSelectedSkip] = useState(null);

  const handleBack = () => {
    setSelectedSkip(null);
  };

  const handleContinue = () => {
    console.log("Continue with skip:", selectedSkip);
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <SkipSelector
        selectedSkip={selectedSkip}
        setSelectedSkip={setSelectedSkip}
      />

      {selectedSkip && (
        <BottomBar
          selectedSkip={selectedSkip}
          onBack={handleBack}
          onContinue={handleContinue}
        />
      )}
    </div>
  );
}

export default App;
