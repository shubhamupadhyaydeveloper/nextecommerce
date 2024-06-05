"use client"
import React from 'react'
import { Separator } from '../ui/separator';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';
import globalState from '@/store/zustand';
import { Tproduct } from '@/types/types';

const Checkout = () => {
  const {cart} = globalState()
  let totalAmount = cart.reduce((accumulator:number , value:Tproduct):number  => {
     return accumulator +  value.price * value.quantity
  },0)
  return (
    <div className='flex border rounded-lg p-5 flex-col'>
        <h1 className='font-bold text-2xl'>Order Summary</h1>
        <div className='flex justify-between'>
            <h1 className='font-light text-lg'>Subtotal</h1>
            <h1 className='font-bold text-lg'>₹ {totalAmount}</h1>
        </div>
        <div className='flex justify-between mt-2'>
            <h1 className='font-light text-lg'>Delivery Fee</h1>
            <h1 className='font-bold text-lg'>₹ 15</h1>
        </div>
        <Separator className='w-full mt-2'/>
        <div className='flex justify-between mt-2'>
            <h1 className='font-medium text-lg'>Total</h1>
            <h1 className='font-bold text-lg'>₹ {totalAmount + 15}</h1>
        </div>
        <Button className='mt-2' >Go to Checkout <ArrowRight size={19}/></Button>
    </div>
  )
}

export default Checkout;