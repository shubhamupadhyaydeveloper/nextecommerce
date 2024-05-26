import React from 'react'
import Card from './Card';
import { tShirtImg } from '@/helper/imgLocation';

const Products = () => {
  return (
    <div className='grid md:gap-14 lg:gap-5 mb-2 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 lg:grid-cols-2  p-5'>
        <Card rating={3} imageLink={tShirtImg} price={100} title='new black tshirt' />
        <Card rating={1} imageLink={tShirtImg} price={100} title='new black tshirt' />
        <Card rating={5} imageLink={tShirtImg} price={100} title='new black tshirt' />
        <Card rating={3} imageLink={tShirtImg} price={100} title='new black tshirt' />
        <Card rating={3} imageLink={tShirtImg} price={100} title='new black tshirt' />
    </div>
  )
}

export default Products;