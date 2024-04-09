import React, { useState, useEffect } from "react";

const ScrollProgressBar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollPercentage(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const progressBarStyle = {
    width: `${scrollPercentage}%`,
    transform: `scaleX(${scrollPercentage / 100}) translateZ(0px)`,
  };

  return (
    <div className="progress-bar transition-all" style={progressBarStyle}></div>
  );
};

export default ScrollProgressBar;
