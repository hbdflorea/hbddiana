"use client";
import React, { useRef } from "react";
import type { ConfettiRef } from "@/components/magicui/confetti";
import Confetti from "@/components/magicui/confetti";

interface ConfettiDemoProps {
  children: React.ReactNode;
}

export function ConfettiDemo({ children }: ConfettiDemoProps) {
  const confettiRef = useRef<ConfettiRef>(null);

  return (
    <div className="relative flex w-full flex-col items-center justify-center">
      <div className="pointer-events-none z-10">{children}</div>
      <Confetti
        ref={confettiRef}
        className="absolute left-0 top-0 z-0 size-full"
        onMouseEnter={() => {
          confettiRef.current?.fire({});
        }}
      />
    </div>
  );
}
