import React from 'react'
import SalesCard from './_components/SalesCard';

const OrderPage = () => {
  return (
    <div className="grid mt-10 md:ml-10 md:mr-10 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
     <SalesCard cardTitle={'sales'} cardContent={'1,200'} cardDescription={'this is our total sales'} />
    </div>
  )
}

export default OrderPage;
