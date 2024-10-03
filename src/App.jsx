import React, { useState } from "react";
import LandingPage from "./components/LandingPage";
import Popper from "./components/Popper";
import FinalMessage from "./components/FinalMessage";


function App() {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePull = () => {
    setCurrentStep(2); // Redirect to final message after pulling
  };

  return (
    <div className="App">
      {currentStep === 0 && <LandingPage nextStep={nextStep} />}
      {currentStep === 1 && <Popper onPull={handlePull} />}
      {currentStep === 2 && <FinalMessage />}
    </div>
  );
}

export default App;
