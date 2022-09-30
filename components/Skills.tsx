import React from 'react';
import Image from 'next/image';

function Skills() {
  return (
    <div className="flex flex-col justify-start mx-auto pr-8 max-w-5xl">
      <h1 className="text-xl font-semibold">Tech Stack</h1>
      <Image src="/images/nextjs.svg" width={100} height={100} />
    </div>
  );
}
export default Skills;
