import "@/css/background.css";
import dynamic from 'next/dynamic';
import React, { useMemo } from 'react';

const Background = React.memo(() => {
  // Example of using useMemo if you have derived values
  const starLayers = useMemo(() => {
    return (
      <>
        <div className="layer"></div>
        <div className="layer"></div>
        {/* Add more layers if needed */}
      </>
    );
  }, []); // Empty dependency array ensures it only runs once

  return (
    <div className="bg fixed min-h-screen">
      <div className="star-field">
        {starLayers}
      </div>
    </div>
  );
});

export default Background;
