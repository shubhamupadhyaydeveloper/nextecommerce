"use client"
import React from 'react'
import { Button } from './ui/button';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

const RedirectButton = () => {
  const router = useRouter()

  return ( 
    <Button onClick={ () => router.back()} variant={"outline"} className="rounded-xl mb-5 pl-3 w-24">
    <ArrowLeft size={15} /> &nbsp; back
  </Button>
  )
}

export default RedirectButton;