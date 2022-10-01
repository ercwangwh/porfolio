import React from "react";
import Image from "next/image";
import Typed from "react-typed";

const talkAbout = ["Solidity", "JavaScript", "TypeScript"];

function Intro() {
  return (
    <div className=" flex flex-col justify-start">
      <div className="flex flex-col items-center mx-auto max-w-5xl">
        <h1 className="font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-700">
          Hi there, I'm Eric Wang
        </h1>
        <p className="text-gray-600 dark:text-gray-400 my-8 text-lg">
          A passionate Software Engineer, specialised in blockchain development,
          who wants to explore Web3 world. As an advocate for blockchain and an
          evangelist for the Web3, I create amazing DApps to make the internet a
          better place. You can talk to me about{" "}
          <Typed
            loop
            typeSpeed={80}
            backSpeed={20}
            strings={talkAbout}
            smartBackspace
            backDelay={1000}
            loopCount={0}
            showCursor
            cursorChar="|"
          />
          .
        </p>
        {/* <div className="flex flex-row justify-start gap-2">
          <Image src="/images/github.svg" width={36} height={36} />
          <Image src="/images/twitter.svg" width={36} height={36} />
        </div> */}
      </div>
    </div>
  );
}

export default Intro;
