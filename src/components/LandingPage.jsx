// import React from "react";

// const LandingPage = ({ nextStep }) => {
//   return (
//     <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 text-white text-center">
//       <h1 className="text-5xl font-bold mb-4">
//         🎉 Welcome to Your Special Journey! 🎉
//       </h1>
//       <p className="text-xl mb-6">Click the button below to begin!</p>
//       <button
//         onClick={nextStep}
//         className="px-6 py-3 bg-yellow-400 text-blue-600 font-semibold rounded-lg hover:bg-yellow-500 transition duration-300 ease-in-out"
//       >
//         Start
//       </button>
//     </div>
//   );
// };

// export default LandingPage;


import React from "react";

const LandingPage = ({ nextStep }) => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-teal-400 to-blue-500 text-white">
      <h1 className="text-5xl font-bold mb-6">
        Welcome to Your 20th Celebration!
      </h1>
      <p className="text-xl mb-6">
        Get ready for a fun interaction!
      </p>

      {/* Button to move to the next step (Timeline) */}
      <button
        onClick={nextStep}
        className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg text-xl hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out"
      >
        Let's Go!
      </button>
    </div>
  );
};

export default LandingPage;
