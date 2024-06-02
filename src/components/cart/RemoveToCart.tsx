"use client"
import { Trash2 } from 'lucide-react'
import React from 'react'
import globalState from '@/store/zustand'

type prop = {
    id : string
}

const RemoveToCart = ({id}:prop) => {
  const {removeToCart} = globalState()
  const handleClick = () =>{
     removeToCart(id)
  }
  return (
    <Trash2 color="red" className="cursor-pointer" onClick={handleClick} />
  )
}

export default RemoveToCart