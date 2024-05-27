import React from 'react'

const CartBox = () => {
  return (
    <div className='border flex w-full '>
         <h1>image</h1>
         <div className='flex flex-col'>
              <div className='flex justify-between'>
                   <h1>title</h1>
                   <h1>delete</h1>
              </div>
              <h1>size:large</h1>
              <div className='flex justify-between'>
                <h1>price</h1>
                 <h1>button</h1>
              </div>
         </div>
    </div>
  )
}

export default CartBox;