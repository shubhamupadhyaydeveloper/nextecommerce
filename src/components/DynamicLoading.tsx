import React from 'react'
import dynamic from 'next/dynamic';
import TopLoader from './Loader';

const DynamicLoading = (importPath:() => Promise<{ default: React.ComponentType<any> }>) => {
  return dynamic( importPath , {
     loading : () => <TopLoader />
  })
}

export default DynamicLoading;