import React from "react";
import { Dock, DockIcon } from "@/components/magicui/dock";
import {
  FaRegFileAlt,
  FaRegCommentDots,
  FaRegImages,
  FaRegQuestionCircle,
} from "react-icons/fa";

interface DockDemoProps {
  onIconClick: (iconName: string) => void;
}

export function DockDemo({ onIconClick }: DockDemoProps) {
  return (
    <div className="relative">
      <Dock direction="middle">
        <DockIcon onClick={() => onIconClick("greetingCard")}>
          <FaRegFileAlt className="size-6" />
        </DockIcon>
        <DockIcon onClick={() => onIconClick("message")}>
          <FaRegCommentDots className="size-6" />
        </DockIcon>
        <DockIcon onClick={() => onIconClick("media")}>
          <FaRegImages className="size-6" />
        </DockIcon>
        <DockIcon onClick={() => onIconClick("questionMark")}>
          <FaRegQuestionCircle className="size-6" />
        </DockIcon>
      </Dock>
    </div>
  );
}
