import React from "react";
import Image from "next/image";

function Intro() {
  return (
    <div className=" flex flex-col justify-start">
      <div className="flex flex-col pr-8 mx-auto max-w-5xl">
        <h1 className="font-bold text-4xl">Hi there, I'm Eric Wang</h1>
        <p className="text-gray-600 dark:text-gray-400 my-8 text-lg">
          A passionate Software Engineer, specialised in blockchain development,
          who wants to explore Web3 world. As an advocate for blockchain and an
          evangelist for the Web3, I create amazing DApps to make the internet a
          better place. You can talk to me about Solidity.
        </p>
        <div className="flex flex-row justify-start gap-2">
          <Image src="/images/github.svg" width={36} height={36} />
          <Image src="/images/twitter.svg" width={36} height={36} />
        </div>
      </div>
    </div>
  );
}

export default Intro;
