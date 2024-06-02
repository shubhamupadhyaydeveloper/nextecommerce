import React from 'react'
import Card from './Card';
import productModel from '@/models/product.model';
import { connectToMongoose } from '@/helper/connect';

async function getProducts() {
  await connectToMongoose()
  return await productModel.find({}).sort({"createdAt" : -1})
}

const Products = async () => {
  const products = await getProducts()

  return (
    <>
    <h1 className="anton text-center mt-14 mb-4 md:text-5xl text-3xl">NEW ARRIVALS</h1>
    <div className='grid md:gap-14 lg:gap-5 mb-2 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 lg:grid-cols-2  p-5'>
        {
          products.map((item) => (
              item.sizes && (
                <Card imageLink={item.img[0]} price={item.price} rating={item.rating} title={item.title} id={item._id} sizes={item?.sizes}  />
              )
          ))
        }
    </div>
    </>
  )
}

export default Products;