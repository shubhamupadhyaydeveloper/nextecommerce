import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Filter from '@/components/filter/Filter';

import React from 'react'

const page = () => {
  return (
    <MaxWidthWrapper classname='mt-[10vh] mb-5'>
    <div className='flex flex-col md:flex-row'>
       <div className='flex-[1.5]'>
         <Filter />
       </div>
       <div className='flex-[3] md:px-[55px] pt-[20px]'>products</div>
    </div>
    </MaxWidthWrapper>
  )
}

export default page;