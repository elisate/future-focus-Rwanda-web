import React from 'react'
import { MdDashboard } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";
import { PiStudent } from "react-icons/pi";
import { SiBookstack } from "react-icons/si";
import { PiNotePencil } from "react-icons/pi";
import { MdOutlinePayments } from "react-icons/md";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { GrContactInfo } from "react-icons/gr";
import '../DesignStyles/Sidebar.scss';
function Sidebar() {
  return (
    <div className="sidebarContainer">
      <div className='rolle'>
        <div className='textrole'>Elisa du...</div>
        <div className='role'>Admin</div>
      </div>
      <div className="menusContainer">
        <div className='desc'>MAIN</div>
        <div className="parta">
          <MdDashboard className="iconm" />
          <div>Dashboard</div>
        </div>
        <div className="partb">
          <FaUsers className="iconm" />
          <div>Users</div>
        </div>
        <div className='desc'>LIST</div>
        <div className="partc">
          <PiStudent className="iconm" />
          <div>Student</div>
        </div>
        <div className="partd">
          <MdOutlinePayments className="iconm" />
          <div>Payment Data</div>
        </div>
        <div className="partg">
          <GrContactInfo className="iconm" />
          <div>Contacts</div>
        </div>
        <div className='desc'>SERVICES</div>
        <div className="parte">
          <SiBookstack className="iconm" />
          <div>Programs</div>
        </div>
        <div className="partf">
          <PiNotePencil className="iconm" />
          <div>Courses</div>
        </div>
        <div className='desc'>AUTHENTICATION</div>
        <div className="parth">
          <RiLogoutCircleRLine className="iconm" />
          <div>Logout</div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar