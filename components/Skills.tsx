import React from "react";
import Image from "next/image";

function Skills() {
  return (
    <div className="flex flex-col justify-center items-center mx-auto mt-4 max-w-5xl">
      <h1 className="text-2xl font-semibold">Skills</h1>
      <div className="flex flex-row justify-center mx-auto gap-4 mt-4 max-w-5xl">
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
