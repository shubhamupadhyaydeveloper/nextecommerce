import { NavLink, Navbar } from '@/components/Navbar';
import React from 'react'

const AdminLayout = ({children}:{children : React.ReactNode}) => {
  return (
    <div>
      <Navbar>
         <NavLink href='/admin' >Dashboard</NavLink>
         <NavLink href='/admin/users' >Customers</NavLink>
         <NavLink href='/admin/products' >Products</NavLink>
         <NavLink href='/admin/orders' >Sales</NavLink>
      </Navbar>
      {children}
    </div>
  )
}

export default AdminLayout;
  
