import React from "react";
import Image from "next/image";
// import { useRouter } from "next/router";

function Card({ title }: { title: string }) {
  return (
    <div className="transform hover:scale-[1.01] transition-all rounded-xl w-full md:w-1/3 bg-gradient-to-r p-1 from-[#afcafc] to-[#1fdcf5]  max-w-4xl">
      <div className="flex flex-col bg-white dark:bg-gray-900 rounded-lg p-1">
        <Image
          src={title}
          width={200}
          height={100}
          className="rounded-lg"
        ></Image>
        <h1 className="font-bold text-xl">Animal Zodia Island</h1>
        <p className="max-w-xs">
          An animal lottery game which is availabe on Polygon testnet. Win the
          4x reward after you win the lottery.An animal lottery game which is
          availabe on Polygon testnet. Win the 4x reward after you win the
          lottery.An animal lottery game which is availabe on Polygon testnet.
          Win the 4x reward after you win the lottery.
        </p>
        <div className="flex items-center text-gray-800 dark:text-gray-200 capsize"></div>
      </div>
    </div>
  );
}

function Cards() {
  return (
    <div className="flex flex-col pr-8 mx-auto gap-5 max-w-5xl">
      <h1 className="font-bold text-3xl my-4">DApps</h1>
      <div className="flex flex-row gap-5">
        <Card title="/images/card1.png" />
        <Card title="/images/card2.jpg" />
        <Card title="/images/card3.jpg" />
      </div>
    </div>
  );
}

export default Cards;
