import React from "react";
import Image from "next/image";

function Skills() {
  return (
    <div className="flex flex-col justify-center items-center mx-auto mt-4 max-w-5xl">
      <h1 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-700">
        Skillset
      </h1>
      <div className="flex flex-row justify-center mx-auto gap-10 mt-8 max-w-5xl">
        <img src="https://skillicons.dev/icons?i=solidity,react,nextjs,ts,js" />
      </div>
    </div>
  );
}
export default Skills;
