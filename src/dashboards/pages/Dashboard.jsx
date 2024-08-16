import React from 'react'
import '../DesignStyles/dashbord.scss';
import { BiSolidUpArrowAlt } from "react-icons/bi";
import { GrFormView } from "react-icons/gr";
import { RiUserLine } from "react-icons/ri";
import { PiStudent } from "react-icons/pi";
import { SiBookstack } from "react-icons/si";
import { GrContactInfo } from "react-icons/gr";
function Dashboard() {
  return (
    <div className='dashboardHolder'>
      <div className="dashboardContainer">
        <div className="bigCard">
          <div className="c1">
            <div className="text1">Users</div>
            <div className="sec">
              <BiSolidUpArrowAlt />
              <span className="colorsmall">
                <RiUserLine />
              </span>
            </div>
          </div>
          <div className="lengthNumber">20</div>
          <div className="c2">
            <div className="text2">see all users</div>
            <div className="endicon">
              <GrFormView className="sizedicon" />
            </div>
          </div>
        </div>

        <div className="bigCard1">
          <div className="c1">
            <div className="text1">Students</div>
            <div className="sec">
              <BiSolidUpArrowAlt />
              <span className="colorsmall">
                <PiStudent />
              </span>
            </div>
          </div>
          <div className="lengthNumber">10</div>
          <div className="c2">
            <div className="text2">registerd student</div>
            <div className="endicon">
              <GrFormView className="sizedicon" />
            </div>
          </div>
        </div>
        <div className="bigCard2">
          <div className="c1">
            <div className="text1">Programs</div>
            <div className="sec">
              <BiSolidUpArrowAlt />
              <span className="colorsmall">
                <SiBookstack />
              </span>
            </div>
          </div>
          <div className="lengthNumber">5</div>
          <div className="c2">
            <div className="text2">see all programs</div>
            <div className="endicon">
              <GrFormView className="sizedicon" />
            </div>
          </div>
        </div>

        <div className="bigCard3">
          <div className="c1">
            <div className="text1">Contacts</div>
            <div className="sec">
              <BiSolidUpArrowAlt />
              <span className="colorsmall">
                <GrContactInfo />
              </span>
            </div>
          </div>
          <div className="lengthNumber">30</div>
          <div className="c2">
            <div className="text2">see all contacts</div>
            <div className="endicon">
              <GrFormView className="sizedicon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard