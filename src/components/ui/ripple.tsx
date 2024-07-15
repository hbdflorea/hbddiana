import React from "react";
import Ripple from "@/components/magicui/ripple";
import Image from "next/image";

interface RippleComponentProps {
  onClick: () => void;
}

export function RippleComponent({ onClick }: RippleComponentProps) {
  return (
    <div
      className="relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg cursor-pointer"
      onClick={onClick}
    >
      <Image
        src="/images/20.jpeg"
        alt="Centered Image"
        width={200}
        height={200}
        className="z-10 rounded-full"
      />
      <Ripple />
    </div>
  );
}
