import React from "react";
import "../styles/aboutus.scss";
import Writer2 from "./Writer2";
import "../styles/writter.scss";
import "../styles/button.scss";
import { FaPhone } from "react-icons/fa6";
import { AiTwotoneMail } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";

function AboutUs() {
  return (
    <div className="aboutContainer">
      <div className="abouta">
        <div className="writtercontent">
          <Writer2 />
        </div>
      </div>
      <div className="aboutcontent">
        <span className="borderDF">Future Focus</span>
      </div>

      <div className="img-content">
        <div>
          <img src="about2.jpg" className="about-image" />
        </div>
        <div className="aboutconti">
          <div className="cont1">
            Welcome to Future Focus Rwanda. Our passion at Future Focus Rwanda
            is to democratize access to STEAM education in Rwanda. We provide
            world-class STEAM (Science, Technology, Engineering, Arts and
            Mathematics) education to students in the 4 – 16 years age-group.
          </div>
          <div className="cont2">
            Our focus at FUTURE FOCUS RWANDA are students (in and out of school)
            in Rwanda. We expose students to cutting-edge technologies such as
            Robotics, 3D Printing, Coding in different languages to ensure a
            thorough grounding in STEM subjects. We also introduce technology
            concepts to learners while making their learning experience fun,
            engaging and hands-on with integrative projects. We strive to make
            sure the content we use is building upon and aligned to the Rwandan
            schools competences-based curriculum while expanding beyond to
            adjust to world class material in the subjects above.
          </div>
          <div className="cont3">
            Join us in our mission to inspire the next generation of innovators
            and leaders in Rwanda! Through hands-on learning and cutting-edge
            technology, we're empowering young minds to think critically, solve
            complex problems, and create a brighter future.
          </div>
        </div>
      </div>
      <div className="aboutContent">
        <div className="aboutcontent2">
          <div className="aboutTitle">
            Contact our team for assistance and support.
          </div>
          <div className="contentAb">
            <span className="borderdesign">Get</span> in touch with Future Focus
            Rwanda today:
          </div>
          <div className="contenticons">
            <div className="contenticonsa">
              <FaPhone className="iconDesign" />{" "}
              <div className="txtcont">+250 788 715 158</div>
            </div>
            <div className="contenticonsb">
              <AiTwotoneMail className="iconDesign" />
              <div className="txtcont">stem@futurefocus.rw</div>
            </div>
            <div className="contenticonsc">
              <IoLocationOutline className="iconDesign" />
              <div className="txtcont">
                KIGALI CITY - GASABO - KINYINYA | KG 9 AVE
              </div>
            </div>
            <div className="studyCenter">
              <span>Learning Centers: Rwanda Build Tech Lab - Kiyovu,</span>
              <br />
              <span>CCR-Gacuriro Vision 2020 Estates.</span>
            </div>
          </div>
        </div>
        <div className="contactInfo">
          <div className="messageDisplay">
            <input type="text" placeholder="Names" className="input" />
            <input type="email" placeholder="Email" className="input" />
            <input type="text" placeholder="Subject" className="input" />
            <textarea placeholder="Message" className="input" />
          </div>
          <div className="btset">
            <button type="submit" className="buttonFix">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
