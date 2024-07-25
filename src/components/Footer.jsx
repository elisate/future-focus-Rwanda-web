import React from "react";
import "../styles/footer.scss";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { RiTiktokFill } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";
import { FaPhone } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";

function Footer() {
  return (
    <div className="footerContainer">
      <div className="textBig">TOGETHER WE SHAPE YOUR FUTURE</div>
      <hr className="hrlines" />
      <div className="footersuperContainer">
        <div className="footera">
          <div className="fa1">Find Us</div>
          <div className="footerbold"></div>
          <div className="fa1">
            <IoLogoLinkedin className="fa1Icon" />
            LinkedIn
          </div>
          <div className="fa1">
            <FaInstagram className="fa1Icon" />
            Instagram
          </div>
          <div className="fa1">
            <RiTiktokFill className="fa1Icon" />
            TikTok
          </div>
          <div className="fa1">
            <BsTwitterX className="fa1Icon" />
            Twitter
          </div>
        </div>

        <div className="footerb">
          <div className="fa2">Quick Links</div>
          <div className="footerbold1"></div>
          <div className="fa2">Home</div>
          <div className="fa2">All Courses </div>
          <div className="fa2"> About us</div>
          <div className="fa2"> Training</div>
        </div>
        <div className="footerc">
          <div className="fa3">Contact Us</div>
          <div className="footerbold3"></div>
          <div className="fa3">
            <FaPhone className="fa1Icon" />
            +250 787239952
          </div>
          <div className="fa3">
            <MdOutlineEmail className="fa1Icon" />
            futurefocusrwanda@gmail.com
          </div>
          <div className="fa3">
            <ImLocation2 className="fa1Icon" /> Kigali-Gasabo KG33 AVE
          </div>
        </div>
      </div>
      <hr className="hrlines2"/>
      <div className="endFooter">
        &copy; 2024 Future Focus Rwanda Company. All rights reserved
      </div>
    </div>
  );
}

export default Footer;
