import React from 'react'
import { Separator } from '../ui/separator';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

const Checkout = () => {
  return (
    <div className='flex border rounded-lg p-5 flex-col'>
        <h1 className='font-bold text-2xl'>Order Summary</h1>
        <div className='flex justify-between'>
            <h1 className='font-light text-lg'>Subtotal</h1>
            <h1 className='font-bold text-lg'>₹ 565</h1>
        </div>
        <div className='flex justify-between mt-2'>
            <h1 className='font-light text-lg'>Delivery Fee</h1>
            <h1 className='font-bold text-lg'>₹ 15</h1>
        </div>
        <Separator className='w-full mt-2'/>
        <div className='flex justify-between mt-2'>
            <h1 className='font-medium text-lg'>Total</h1>
            <h1 className='font-bold text-lg'>₹ 15</h1>
        </div>
        <Button className='mt-2' >Go to Checkout <ArrowRight size={19}/></Button>
    </div>
  )
}

export default Checkout;