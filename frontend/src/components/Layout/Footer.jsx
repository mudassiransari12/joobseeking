import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By Mudassir.</div>
      <div>
        <Link to={"https://www.facebook.com/mudassir.ansari.5891/"} target="_blank">
          <FaFacebookF />
        </Link>
         <Link to={"/"} target="_blank">
          <FaYoutube /> 
        </Link> 
        <Link to={"https://www.linkedin.com/in/md-mudassir-ansari-078168204/"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"https://www.instagram.com/mudassir9017/"} target="_blank">
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
