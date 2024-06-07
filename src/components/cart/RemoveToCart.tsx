"use client"
import { Trash2 } from 'lucide-react'
import React from 'react'
import globalState from '@/store/zustand'

type prop = {
    id : string,
    size : string
}

const RemoveToCart = ({id,size}:prop) => {
  const {removeToCart} = globalState()
  const handleClick = () =>{
     removeToCart(id,size)
  }
  return (
    <Trash2 color="red" className="cursor-pointer" onClick={handleClick} />
  )
}

export default RemoveToCart