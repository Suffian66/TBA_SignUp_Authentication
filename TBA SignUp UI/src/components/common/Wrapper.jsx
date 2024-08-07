import React from 'react'
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Wrapper = () => {
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default Wrapper;
