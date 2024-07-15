import React, { useState, useEffect } from "react";
import Meteors from "./magicui/meteors";
import NumberTicker from "./magicui/number-ticker";
import LetterPullup from "./magicui/letter-pullup";
import BlurIn from "./magicui/blur-in";
import ShineBorder from "./magicui/shine-border";
import { OrbitingCirclesDemo } from "./ui/orbitingCircles";
import { ConfettiDemo } from "./ui/confettiParent";
import { DockDemo } from "./ui/dock";
import { TextRevealDemo } from "./message/textReveal";
import { BlurFadeDemo } from "./ui/imageFade";
import { SparklesTextDemo } from "./ui/sparkleText";
import TypingAnimation from "@/components/magicui/typing-animation";
import { Roboto_Slab } from "@next/font/google";
import { RippleComponent } from "./ui/ripple";

// Import the font
const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const DianasBirthdayGreeting = () => {
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);

  const handleRippleClick = () => {
    setSelectedIcon("greetingCard");
  };

  const renderContent = () => {
    switch (selectedIcon) {
      case "greetingCard":
        return (
          <div className="relative h-full w-full overflow-hidden">
            <ConfettiDemo>
              <div className="text-center p-8">
                <OrbitingCirclesDemo>
                  <BlurIn
                    word="Happy"
                    className="text-5xl font-bold text-black dark:text-white mb-2"
                  />
                  <NumberTicker
                    value={28}
                    className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 mb-2"
                  />
                  <BlurIn
                    word="Birthday"
                    className="text-5xl font-bold text-black dark:text-white mb-4"
                  />
                </OrbitingCirclesDemo>
                <LetterPullup
                  words={"Diana Florea"}
                  delay={0.05}
                  className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 mb-6"
                />
              </div>
            </ConfettiDemo>
          </div>
        );
      case "message":
        return <TextRevealDemo />;
      case "media":
        return <BlurFadeDemo />;
      case "questionMark":
        return <SparklesTextDemo />;
      default:
        return (
          <div className="h-full w-full flex flex-col justify-center items-center p-8">
            <div className="text-center mb-auto flex-grow flex items-center justify-center">
              <TypingAnimation
                className="text-2xl italic text-black dark:text-white bg-transparent"
                text="One last effort from an Old Man :) Hope you enjoy this greeting!"
              />
            </div>
            <RippleComponent onClick={handleRippleClick} />
            <div className="text-center mt-auto">
              <TypingAnimation
                className="text-2xl italic text-black dark:text-white bg-transparent"
                text="Click on your Photo!"
              />
            </div>
          </div>
        );
    }
  };

  return (
    <div
      className={`relative min-h-screen w-full overflow-hidden ${robotoSlab.className}`}
    >
      {/* Fullscreen meteor background */}
      <div className="fixed inset-0 bg-gradient-to-br overflow-hidden">
        <Meteors number={30} />
      </div>

      {/* Content container */}
      <div className="relative z-10 h-screen w-full flex flex-col items-center justify-center p-4">
        <ShineBorder
          className="sticky top-0 flex h-[99%] w-full flex-col items-center justify-center overflow-hidden rounded-lg border border-transparent bg-transparent md:shadow-xl"
          color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
        >
          {renderContent()}
        </ShineBorder>
        <DockDemo onIconClick={setSelectedIcon} />
      </div>

      {/* Fixed Dock at the bottom */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2">
        <DockDemo onIconClick={setSelectedIcon} />
      </div>
    </div>
  );
};
