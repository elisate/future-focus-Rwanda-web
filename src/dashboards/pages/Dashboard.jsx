import React from 'react'
import '../DesignStyles/dashbord.scss';
import { BiSolidUpArrowAlt } from "react-icons/bi";
import { GrFormView } from "react-icons/gr";
import { RiUserLine } from "react-icons/ri";
import { PiStudent } from "react-icons/pi";
import { SiBookstack } from "react-icons/si";
import { GrContactInfo } from "react-icons/gr";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import Chart from './Chart';
function Dashboard() {
  return (
    <div className="dashboardHolder">
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
      <div className="dashboardSectionb">
        <div>
        <div className='headertext'>Latest Student Progress</div>
        <div className='circledivision'>
          <div className="progressCircle">
            <CircularProgressbar
              value="75"
              text="75%"
              styles={buildStyles({
                textColor: "#636363",
                pathColor: "#93CAAB",
                trailColor: "#e0e0e0",
                textSize: "16px",
                pathTransitionDuration: 0.5,
              })}
            />
          </div>
          <div className='textCi'>Available Student</div>
          <div className='text'>70</div>
        </div>
        </div>
        < div className='chartdivision'>
        <div className='headerstory'>Registration History</div>
        <Chart/>
        </div>
      </div>
    </div>
  );
}

export default Dashboard