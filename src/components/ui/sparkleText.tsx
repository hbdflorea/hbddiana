import React, { useState, useRef, useEffect } from "react";
import SparklesText from "@/components/magicui/sparkles-text";
import ShinyButton from "@/components/magicui/shiny-button";
import confetti from "canvas-confetti";

export function SparklesTextDemo() {
  const [noButtonPosition, setNoButtonPosition] = useState({ top: 0, left: 0 });
  const [showButtons, setShowButtons] = useState(true);
  const [sparkleText, setSparkleText] = useState("Shall we be friends again?");
  const noButtonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const boundaryMargin = 20; // Adjust this value to increase/decrease the boundary

  const moveNoButton = (mouseX: number, mouseY: number) => {
    if (noButtonRef.current && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const buttonRect = noButtonRef.current.getBoundingClientRect();

      const maxTop = containerRect.height - buttonRect.height - boundaryMargin;
      const maxLeft = containerRect.width - buttonRect.width - boundaryMargin;

      // Calculate the center of the button
      const buttonCenterX = buttonRect.left + buttonRect.width / 2;
      const buttonCenterY = buttonRect.top + buttonRect.height / 2;

      // Calculate the distance between mouse and button center
      const distance = Math.sqrt(
        Math.pow(mouseX - buttonCenterX, 2) +
          Math.pow(mouseY - buttonCenterY, 2)
      );

      // If mouse is within 100px of the button, move it
      if (distance < 100) {
        let newTop = buttonRect.top;
        let newLeft = buttonRect.left;

        // Move in the opposite direction of the mouse
        if (mouseY < buttonCenterY) {
          newTop = Math.min(newTop + 100, maxTop);
        } else {
          newTop = Math.max(newTop - 100, boundaryMargin);
        }

        if (mouseX < buttonCenterX) {
          newLeft = Math.min(newLeft + 100, maxLeft);
        } else {
          newLeft = Math.max(newLeft - 100, boundaryMargin);
        }

        setNoButtonPosition({
          top: newTop - containerRect.top,
          left: newLeft - containerRect.left,
        });
      }
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      moveNoButton(e.clientX, e.clientY);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    // Initial random position within the container
    if (noButtonRef.current && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const buttonRect = noButtonRef.current.getBoundingClientRect();

      const maxTop = containerRect.height - buttonRect.height - boundaryMargin;
      const maxLeft = containerRect.width - buttonRect.width - boundaryMargin;

      const initialTop =
        Math.random() * (maxTop - boundaryMargin) + boundaryMargin;
      const initialLeft =
        Math.random() * (maxLeft - boundaryMargin) + boundaryMargin;

      setNoButtonPosition({
        top: initialTop,
        left: initialLeft,
      });
    }
  }, []);

  const handleYesClick = () => {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) =>
      Math.random() * (max - min) + min;

    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);

    setShowButtons(false);
    setSparkleText("I'm so happy! Let's catch up soon!");
  };

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden"
    >
      <SparklesText text={sparkleText} className="text-2xl" />
      {showButtons && (
        <div className="mt-4 flex space-x-4">
          <button onClick={handleYesClick}>
            <ShinyButton text="Yes" />
          </button>
          <button
            ref={noButtonRef}
            className="absolute bg-red-500 text-white px-4 py-2 rounded transition-all duration-200 ease-out"
            style={{
              top: noButtonPosition.top,
              left: noButtonPosition.left,
            }}
          >
            No
          </button>
        </div>
      )}
    </div>
  );
}
