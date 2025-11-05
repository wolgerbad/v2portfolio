import { FaGithub } from 'react-icons/fa';
import Card from './Card';
import { useState } from 'react';
import { MdLiveTv } from 'react-icons/md';

export default function Project({ project }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const {
    name,
    overview,
    stack,
    github,
    orderImage,
    image,
    technicalDetails,
    projectColor,
    demoLink,
  } = project;
  return (
    <div
      className={`relative w-full h-[30rem] w-full md:h-[35rem] [perspective:1000px] mb-16 rounded-lg`}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
          isFlipped ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        <div className="absolute inset-0 [backface-visibility:hidden] shadow-lg grid md:grid-cols-2 rounded-md h-full text-gray-800">
          <div
            className={`relative text-center flex flex-col justify-center gap-8 px-10 order-2 bg-gray-300`}
          >
            <span
              className={`text-sm md:text-lg font-medium px-2 py-1 rounded-full text-gray-200 ${projectColor} opacity-80 absolute top-2 cursor-pointer ${
                orderImage === 2 ? 'left-2' : 'right-2'
              } `}
              onClick={() => setIsFlipped((prev) => !prev)}
            >
              Click to flip back ↺
            </span>
            <div className="text-gray-700">
              <h1 className="text-xl font-bold mb-2 ">{name}</h1>
              <p className="text-center text-lg font-semibold">{overview}</p>
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center">
              {stack.map((stackName) => (
                <Card projectColor={projectColor}>{stackName}</Card>
              ))}
            </div>
            <div className="flex justify-center items-center gap-2 text-3xl">
              <a href={github} target="_blank">
                Code
              </a>
              <FaGithub className="mr-4" />
              <a href={demoLink} target="_blank">
                Demo
              </a>
              <MdLiveTv />
            </div>
          </div>
          <div className={`order-${orderImage} h-full hidden md:block`}>
            <img src={image} className="mb-1 h-full object-center rounded-lg" />
          </div>
        </div>
        <div
          className={`pt-10 md:pt-4 absolute inset-0 ${projectColor} [transform:rotateY(180deg)] [backface-visibility:hidden] text-gray-200 shadow-lg p-6 overflow-y-scroll md:overflow-hidden 
          [&::-webkit-scrollbar]:w-2
        [&::-webkit-scrollbar-track]:bg-neutral-200
         [&::-webkit-scrollbar-thumb]:bg-neutral-400`}
        >
          <h3 className="text-lg font-semibold mb-2">Technical Overview</h3>
          <ul className="space-y-1 flex flex-col gap-4">
            {technicalDetails.map((detail) => (
              <li className="font-semibold text-gray-200">• {detail}</li>
            ))}
          </ul>
          <p
            className="text-sm  md:text-lg font-medium cursor-pointer opacity-70 absolute top-2 right-2  bg-white text-gray-800 px-2 py-1 rounded-full"
            onClick={() => setIsFlipped((prev) => !prev)}
          >
            Click to flip back ↺
          </p>
        </div>
      </div>
    </div>
  );
}
