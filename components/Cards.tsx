import classNames from "classnames";
import React from "react";
// import Image from "next/image";

// import { useRouter } from "next/router";

type Props = {
  title: string;
  description: string;
  img: string;
  tech: string[];
  demo: string;
  source: string;
};

function Card(props: Props) {
  return (
    <div className="hover:-translate-y-4 transition-all duration-150 rounded-xl w-full mb-2">
      <div className="p-1 rounded-lg bg-gradient-to-r from-[#afcafc] to-[#1fdcf5] max-w-4xl">
        <div className=" bg-white dark:bg-gray-900 rounded-lg p-3">
          <img src={props.img} className=" rounded-xl"></img>
          <h1 className="font-bold text-xl my-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700 ">
            {props.title}
          </h1>
          <p className="max-w-xs  dark:text-gray-400">{props.description}</p>
          <h1 className="font-bold text-xl text-transparent bg-clip-text my-3 bg-gradient-to-r  from-blue-500 to-blue-700 ">
            Tech Stacks
          </h1>
          <div className="my-4">
            {/* {props.tech} */}
            {props.tech.map((skill) => {
              return (
                <div
                  key={skill}
                  className=" border-solid border-2 border-sky-300 m-1 p-2 max-w-fit inline-flex gap-2 rounded"
                >
                  <img
                    src={"/icons/" + skill + ".svg"}
                    className="h-6 w-6"
                  ></img>
                  <span className=" dark:text-gray-400">{skill}</span>
                </div>
              );
            })}
          </div>
          <div className="flex flex-row justify-between my-3">
            <a href={props.demo} target="_blank">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Demo
              </button>
            </a>
            <a href={props.source} target="_blank">
              <button className="inline-flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <span className="mr-2">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    viewBox="0 0 1024 1024"
                    aria-hidden="true"
                    focusable="false"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
                  </svg>
                </span>
                Source
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cards() {
  return (
    <div>
      <h1 className="flex justify-center font-bold text-3xl my-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-700">
        DApps
      </h1>
      <div className="pr-8 gap-5 mx-auto mt-4 max-w-5xl">
        <div className=" md:grid grid-cols-3 gap-3">
          <Card
            title="Animal Zodia Island"
            description="A mini lottery game on blockchain. Use Chainlink Keepers to track
          onchain data, and VRF to generate winners. Pick animals you like and
          hava a chance to win every game loop."
            img="/images/zodia-animal.png"
            tech={["Solidity", "NextJs", "TypeScript"]}
            demo="https://zodia-animal-dapp.vercel.app/"
            source="https://github.com/ercwangwh/Zodia-Animal-Island"
          />
          <Card
            title="Greedy Island"
            description="An NFT staking game on blockchain. Using Thirdweb, Solidity and NextJs."
            img="/images/greedy-island.png"
            tech={["Solidity", "NextJs", "TypeScript", "Thirdweb"]}
            demo="https://greedy-island-dapp.vercel.app/"
            source="https://github.com/ercwangwh/greedy-island-dapp"
          />
        </div>
      </div>
    </div>
  );
}

export default Cards;
