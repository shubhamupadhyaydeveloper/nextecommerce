"use client"
import React from 'react'
import { Button } from './ui/button';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';

type prop = {
   className?: string
}

const RedirectButton = ({className}:prop) => {
  const router = useRouter()

  return ( 
    <Button onClick={ () => router.back()} variant={"outline"} className={cn("rounded-xl mb-5 pl-3 w-24",className)}>
    <ArrowLeft size={15} /> &nbsp; back
  </Button>
  )
}

export default RedirectButton;