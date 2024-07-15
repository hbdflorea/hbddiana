import React from "react";
import LetterPullup from "../magicui/letter-pullup";

export function TextRevealDemo() {
  return (
    <div className="z-10 flex h-full min-h-[16rem] w-full items-center justify-center rounded-lg border bg-transparent dark:bg-transparent overflow-auto p-4">
      <div className="text-center">
        <LetterPullup words={"Happy Birthday, Diana!"} delay={0.01} />
        <LetterPullup
          words={"You are a kind and beautiful soul."}
          delay={0.02}
        />
        <LetterPullup
          words={"Hope the Universe grants all your wishes."}
          delay={0.03}
        />
        <LetterPullup
          words={"Hope to see your happy face again :)"}
          delay={0.04}
        />
        <LetterPullup
          words={"May your birthday be as wonderful as you are."}
          delay={0.08}
        />
        <LetterPullup
          words={"Wishing you a day filled with love and happiness."}
          delay={0.09}
        />
        <LetterPullup
          words={"Looking forward to the day we meet again."}
          delay={0.1}
        />
      </div>
    </div>
  );
}
