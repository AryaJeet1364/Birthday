import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const Popper = ({ onPull }) => {
  const [isPulled, setIsPulled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Animate the popper when it's opened
  const popperStyles = useSpring({
    transform: isOpen ? "scale(1.2)" : "scale(1)",
    opacity: isOpen ? 0 : 1,
    config: { tension: 300, friction: 20 },
  });

  // Animate the string when pulled
  const stringStyles = useSpring({
    transform: isPulled ? "translateY(100px)" : "translateY(0)",
    config: { tension: 300, friction: 20 },
  });

  // Handle pulling the string
  const handlePull = () => {
    setIsPulled(true);
    setTimeout(() => {
      setIsOpen(true);
      onPull(); // Trigger the redirect or any other action
    }, 1000); // Wait for the pull animation
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500 text-white text-center">
      <h1 className="text-5xl font-bold mb-6">🎈 Click on the String! 🎈</h1>
      <div className="relative">
        {/* Box representing the popper */}
        <animated.div
          style={popperStyles}
          className="w-64 h-32 bg-yellow-300 rounded-lg shadow-lg flex items-center justify-center text-black font-bold text-xl transition-transform duration-300 ease-in-out"
        >
          {isOpen ? "🎉 Surprise! 🎉" : "Open Me!"}
        </animated.div>
        {/* Black string */}
        <animated.div
          style={stringStyles}
          className="absolute w-2 h-20 bg-black bottom-0 top-[8.3vw] left-1/2 transform -translate-x-1/2 transition-transform duration-500 ease-in-out"
          onClick={handlePull}
        ></animated.div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <p className="text-xl">Click on the string to reveal the surprise!</p>
      </div>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-50" />
          <div className="flex flex-col items-center z-10">
            <h2 className="text-4xl text-white font-bold mb-4">
              🎊 Here Comes the Confetti! 🎊
            </h2>
            <div className="w-40 h-40 rounded-full bg-yellow-300 flex items-center justify-center">
              <h3 className="text-2xl font-bold">🎈 Surprise! 🎈</h3>
            </div>
            <div className="w-40 h-40 overflow-hidden mt-4">
              {/* Confetti Animation */}
              <div className="animate-confetti absolute top-0 left-0 w-full h-full"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popper;
