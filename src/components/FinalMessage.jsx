import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";

const FinalMessage = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    setShowConfetti(true);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      {showConfetti && <Confetti />}
      <h1 className="text-5xl font-bold text-indigo-600 mb-4">
        🎂 Happy Birthday Suhani! 🎉
      </h1>
      <p className="text-xl text-gray-700 text-center">
        <br /> Why I made this website? Ek gift samajh lo..plus thoda sa react revise bhi ho gya 😅 <br />I hope this little and simple website
        brought a smile to your face. <br />
        And all the best for CAT 2 <br />
      </p>
    </div>
  );
};

export default FinalMessage;
