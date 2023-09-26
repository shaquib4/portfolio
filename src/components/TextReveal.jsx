
import React, { useState, useEffect } from "react";

const TextReveal = ({text}) => {
      const [revealedText, setRevealedText] = useState("");
      const [currentIndex, setCurrentIndex] = useState(0);

      useEffect(() => {
        if (currentIndex < text.length) {
          const timer = setTimeout(() => {
            setRevealedText((prevText) => prevText + text[currentIndex]);
            setCurrentIndex((prevIndex) => prevIndex + 1);
          }, 200); // Adjust the delay as needed

          return () => clearTimeout(timer);
        }
      }, [currentIndex, text]);
  return (
    <div className="text">
      <h1 className="text-3xl md:text-5xl lg:text-6xl  font-semibold tracking-wide text-white">{revealedText}</h1>
    </div>
  );
}

export default TextReveal