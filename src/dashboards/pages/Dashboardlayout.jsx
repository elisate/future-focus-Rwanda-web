import React from 'react'
import { Outlet } from 'react-router-dom'
import NavPart from './NavPart'
import Sidebar from './Sidebar'

function Dashboardlayout() {
  return (
    <div>
        <NavPart/>
        <Sidebar/>
        <Outlet/>
    </div>
  )
}

export default Dashboardlayout