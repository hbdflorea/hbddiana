import React from "react";
import OrbitingCircles from "@/components/magicui/orbiting-circles";
import Image from "next/image";

interface OrbitingCirclesDemoProps {
  children?: React.ReactNode;
}

export function OrbitingCirclesDemo({ children }: OrbitingCirclesDemoProps) {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center rounded-lg bg-transparent">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
        {children}
      </span>

      {/* Inner Circles */}
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent flex items-center justify-center"
        duration={20}
        delay={20}
        radius={80}
      >
        <div className="relative w-8 h-8 rounded-full overflow-hidden">
          <Image
            src="/images/2.jpeg"
            alt="Custom Image 1"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent flex items-center justify-center"
        duration={20}
        delay={10}
        radius={80}
      >
        <div className="relative w-8 h-8 rounded-full overflow-hidden">
          <Image
            src="/images/9.jpeg"
            alt="Custom Image 2"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent flex items-center justify-center"
        radius={190}
        duration={20}
        reverse
      >
        <div className="relative w-12 h-12 rounded-full overflow-hidden">
          <Image
            src="/images/12.jpeg"
            alt="Custom Image 3"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent flex items-center justify-center"
        radius={190}
        duration={20}
        delay={20}
        reverse
      >
        <div className="relative w-12 h-12 rounded-full overflow-hidden">
          <Image
            src="/images/8.jpeg"
            alt="Custom Image 4"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </OrbitingCircles>
    </div>
  );
}
