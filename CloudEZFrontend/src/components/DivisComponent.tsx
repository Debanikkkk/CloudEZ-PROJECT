// import React, { useState, useEffect } from 'react';

// const DivisComponent = () => {
//   const [x, setX] = useState(50);
//   const [y, setY] = useState(50);
//   const [size, setSize] = useState(32);
//   const [clicks, setClicks] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);

//   // Auto-move every 0.5 seconds (unless paused)
//   useEffect(() => {
//     if (isPaused) return;
    
//     const interval = setInterval(() => {
//       setX(Math.random() * 85);
//       setY(Math.random() * 85);
//     }, 500);
//     return () => clearInterval(interval);
//   }, [isPaused]);

//   // Auto-resume after 5 seconds
//   useEffect(() => {
//     if (!isPaused) return;
    
//     const timeout = setTimeout(() => {
//       setIsPaused(false);
//     }, 5000);
//     return () => clearTimeout(timeout);
//   }, [isPaused]);

//   const handleClick = () => {
//     setClicks(clicks + 1);
//     // Shrink by 20% each click, minimum 4
//     setSize((s) => Math.max(4, s * 0.8));
//     // Pause movement for 5 seconds
//     setIsPaused(true);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-slate-900 to-sky-900 relative overflow-hidden">
//       {/* Instruction text */}
//       <div className="absolute top-8 left-0 right-0 text-center text-white text-lg pointer-events-none">
//         <p>Box auto-moves every 0.5s. Click to shrink and pause for 5 seconds!</p>
//       </div>

//       {/* Moving/shrinking box */}
//       <button
//         onClick={handleClick}
//         style={{
//           left: `${x}%`,
//           top: `${y}%`,
//           transform: 'translate(-50%, -50%)',
//           width: `${size}px`,
//           height: `${size}px`
//         }}
//         className={`absolute bg-gradient-to-r from-teal-500 to-sky-500 rounded-lg shadow-lg flex items-center justify-center text-white font-bold text-center p-2 transition-all duration-200 hover:scale-110 cursor-pointer whitespace-nowrap text-xs ${isPaused ? 'ring-2 ring-yellow-300' : ''}`}
//       >
//         {size > 20 ? 'Click!' : ''}
//       </button>

//       {/* Click counter and status */}
//       <div className="absolute bottom-8 left-0 right-0 text-center text-slate-300">
//         <p>Clicks: {clicks} | Size: {size.toFixed(0)}px</p>
//         <p className={`text-sm mt-2 ${isPaused ? 'text-yellow-300' : 'text-emerald-300'}`}>
//           {isPaused ? '⏸ PAUSED - Resuming in 5s' : '▶ Moving'}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default DivisComponent;