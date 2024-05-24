import { browseText } from '@/helper/constant';
import { browseImg1, browseImg2, browseImg3, browseImg4 } from '@/helper/imgLocation';
import Image from 'next/image';
import React from 'react';

const Browse = () => {
  return (
    <div className='w-full md:p-14 p-4 md:mt-10 mb-5 relative rounded-3xl bg-[#F0F0F0] h-fit'>
      <h1 className='anton md:text-4xl text-2xl text-center '>{browseText}</h1>
      <div className='flex flex-col gap-5 mt-5'>
        <div className='flex flex-col md:flex-row gap-5'>
          <div className='flex-1 min-h-[21vh] flex justify-between max-h-[22vh] bg-white text-black px-5 rounded-lg overflow-hidden'>
             <h1 className='mt-10 pl-5 font-bold font-xl'>Casual</h1>
              <Image src={browseImg1} width={300} height={100} className='md:w-[25vw] w-[45vw] md:h-[40vh]' alt='img' />
          </div>
          <div className='flex-[2] min-h-[21vh] flex justify-between max-h-[22vh] bg-white text-black rounded-lg overflow-hidden'>
          <h1 className='mt-10 pl-5 lg:pl-20  font-bold font-xl'>Formal</h1>
          <Image src={browseImg2} width={300} height={100} className='md:w-[25vw] w-[45vw] md:h-[40vh]' alt='img' />
          </div>
        </div>
        <div className='flex flex-col md:flex-row gap-5'>
          <div className='flex-[2] min-h-[21vh] flex justify-between max-h-[22vh] bg-white text-black rounded-lg overflow-hidden'>
          <h1 className='mt-10 pl-5 lg:pl-20  font-bold font-xl'>Party</h1>
          <Image src={browseImg3} width={300} height={100} className='md:w-[25vw] w-[45vw] md:h-[40vh]' alt='img' />
          </div>
          <div className='flex-1 flex justify-between max-h-[22vh] min-h-[21vh] bg-white text-black rounded-lg overflow-hidden'>
          <h1 className='mt-10 pl-5 font-bold font-xl' >Gym</h1>
          <Image src={browseImg4} width={300} height={100} className='md:w-[25vw] w-[45vw] md:h-[40vh]' alt='img' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Browse;
