"use client"
import React from 'react'
import CartItem from './CartItem';
import { Separator } from '../ui/separator';

const CartBox = () => {


  return (
    <div className='border rounded-lg p-5 gap-3 flex flex-col w-full'>
    <CartItem />
    <Separator />
    <CartItem />
    <Separator />
    <CartItem />
    </div>
  )
}

export default CartBox;