import React from "react";
import Image from "next/image";

function Skills() {
  return (
    <div className="flex flex-col justify-center items-center mx-auto mt-4 max-w-5xl">
      <h1 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-700">
        Technologies I frequently used
      </h1>
      <div className="flex flex-row justify-center mx-auto gap-10 mt-8 max-w-5xl">
        <Image src="/images/solidity.svg" width={46} height={46} />
        <Image src="/images/hardhat.svg" width={46} height={46} />
        <Image src="/images/next-js.svg" width={46} height={46} />
        <Image src="/images/js.svg" width={46} height={46} />
        <Image src="/images/ts.svg" width={46} height={46} />
      </div>
    </div>
  );
}
export default Skills;
