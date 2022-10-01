import React from "react";
import Image from "next/image";

// import { useRouter } from "next/router";

function Card({ title }: { title: string }) {
  return (
    <div className="transform hover:scale-[1.01] transition-all rounded-xl w-full bg-gradient-to-r p-1 from-[#afcafc] to-[#1fdcf5]  max-w-4xl">
      <div className="flex flex-col bg-white dark:bg-gray-900 rounded-lg p-3">
        <Image
          src={title}
          width={200}
          height={100}
          className="rounded-lg"
        ></Image>
        <h1 className="font-bold text-xl my-3 text-center">
          Animal Zodia Island
        </h1>
        <p className="max-w-xs text-center">
          A mini lottery game on blockchain. Use Chainlink Keepers to track
          onchain data, and VRF to generate winners. Pick animals you like and
          hava a chance to win every game loop.
        </p>
        <h1 className="font-bold text-xl my-3 text-center">Tech Stacks</h1>
        <p className="max-w-xs text-center">
          Solidity Hardhat NextJs JavaScript
        </p>
        <div className="flex flex-row justify-between my-3">
          <button>Live preview</button>
          <button>Source Code</button>
        </div>
      </div>
    </div>
  );
}

function Cards() {
  return (
    <div className="flex flex-col justify-center items-center pr-8 gap-5 mx-auto mt-4 max-w-5xl">
      <h1 className="font-bold text-3xl my-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-700">
        DApps
      </h1>
      <div className="flex flex-row justify-center gap-3">
        <Card title="/images/card1.png" />
        {/* <Card title="/images/card2.jpg" />
        <Card title="/images/card3.jpg" /> */}
      </div>
    </div>
  );
}

export default Cards;
