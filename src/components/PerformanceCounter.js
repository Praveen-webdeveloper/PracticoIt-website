import React, { useState, useEffect } from "react";

function PerformanceCounter() {
  // Define fixed destinations for each counter
  const destinations = [120, 300, 100, 50];
  const animationDuration = 2000; // Animation duration in milliseconds

  const [counts, setCounts] = useState(Array(destinations.length).fill(0));

  useEffect(() => {
    let animationStartTime = null;
    let requestId = null;

    const animateCounters = (timestamp) => {
      if (!animationStartTime) {
        animationStartTime = timestamp;
      }

      const progress = timestamp - animationStartTime;

      const updatedCounts = destinations.map((destination, index) => {
        const startCount = 0;
        const endCount = destination;
        const animationProgress = Math.min(progress / animationDuration, 1);
        const animatedValue = Math.floor(
          startCount + (endCount - startCount) * animationProgress
        );
        return animatedValue;
      });

      setCounts(updatedCounts);

      if (progress < animationDuration) {
        requestId = requestAnimationFrame(animateCounters);
      }
    };

    requestId = requestAnimationFrame(animateCounters);

    return () => {
      cancelAnimationFrame(requestId);
    };
  });

  return (
    <section id="counter" className="sec-padding">
      <div className="container">
        <div className="row">
          {destinations.map((destination, index) => (
            <div key={index} className="col-md-3">
              <div className="count">
                <p className="number">{counts[index]}</p>
                <h4>{getCardTitle(index)}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Helper function to get card titles based on index
function getCardTitle(index) {
  switch (index) {
    case 0:
      return "Happy Clients";
    case 1:
      return "Total Interships provided";
    case 2:
      return "Total Interns Working";
    case 3:
      return "Projects Complete";
    default:
      return "";
  }
}

export default PerformanceCounter;
