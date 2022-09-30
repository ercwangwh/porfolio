import React from 'react';
import Image from 'next/image';
function Cards() {
  return (
    <div className="flex flex-col">
      <Image src="/images/avatar.png" width={100} height={100}></Image>
      <h1>dapp Name</h1>
      <p>description .................................................</p>
    </div>
  );
}

export default Cards;
