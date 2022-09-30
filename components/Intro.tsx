import React from 'react';
import Image from 'next/image';

function Intro() {
  return (
    <div className="flex flex-col-reverse sm:flex-row items-start">
      <div className="flex flex-col pr-8">
        <h1 className="font-bold text-3xl">Hi there, I'm @ercwang</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-16 w-96">
          A passionate Software Engineer, specialised in blockchain development,
          who wants to explore Web3 world. As an advocate for blockchain and an
          evangelist for the Web3, I create amazing dDapps to make the internet
          a better place. You can talk to me about Solidity.
        </p>
        <Image src="/images/github.svg" height={36} width={36}></Image>
      </div>
      <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
        <Image
          src="/images/avatar.png"
          height={200}
          width={200}
          className="rounded-full filter"
        ></Image>
      </div>
    </div>
  );
}

export default Intro;
