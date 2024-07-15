// src/components/LoadingSpinner.tsx
import React from "react";

const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-full">
    <div className="loader"></div>
    <style jsx>{`
      .loader {
        border: 4px solid rgba(0, 0, 0, 0.1);
        width: 36px;
        height: 36px;
        border-radius: 50%;
        border-left-color: #000;
        animation: spin 1s ease infinite;
      }

      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `}</style>
  </div>
);

export default LoadingSpinner;
