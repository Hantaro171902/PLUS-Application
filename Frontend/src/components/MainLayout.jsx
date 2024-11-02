import LeftSidebar from './LeftSidebar'
import { Outlet } from 'react-router-dom';
import React from 'react'

const MainLayout = () => {
  return (
    <div>
      <LeftSidebar/>
      <div>
        <Outlet/>
      </div>
    </div>
  )
}

export default MainLayout

