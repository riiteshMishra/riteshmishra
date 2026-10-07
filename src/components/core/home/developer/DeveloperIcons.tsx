"use client";

import {
  Braces,
  Code2,
  FileCode2,
  GitBranchIcon,
  Terminal,
} from "lucide-react";

import DeveloperIcon from "./DeveloperIcon";

const DeveloperIcons = () => {
  return (
    <>
      <DeveloperIcon
        icon={Braces}
        label="JavaScript"
        href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        position="-left-8 top-8"
        color="green"
        animate={{
          y: [0, -8, 0],
          rotate: [-5, 3, -5],
        }}
        duration={4}
      />

      <DeveloperIcon
        icon={Code2}
        label="React"
        href="https://react.dev/"
        position="-right-8 top-16"
        color="purple"
        animate={{
          y: [0, 7, 0],
          rotate: [4, -4, 4],
        }}
        duration={4.5}
      />

      <DeveloperIcon
        icon={Terminal}
        label="Node.js"
        href="https://nodejs.org/docs/latest/api/"
        position="-bottom-4 -left-5"
        color="green"
        animate={{
          x: [0, -6, 0],
          y: [0, 5, 0],
        }}
        duration={5}
      />

      <DeveloperIcon
        icon={GitBranchIcon}
        label="Git"
        href="https://github.com/riiteshMishra"
        position="-bottom-3 -right-5"
        color="purple"
        animate={{
          x: [0, 6, 0],
          y: [0, -5, 0],
        }}
        duration={4.8}
      />

      <DeveloperIcon
        icon={FileCode2}
        label="TypeScript"
        href="https://www.typescriptlang.org/docs/"
        position="-top-6 left-1/2 -translate-x-1/2"
        color="green"
        animate={{
          y: [0, -6, 0],
        }}
        duration={4.2}
      />
    </>
  );
};

export default DeveloperIcons;
