import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";
import { Link } from "@material-ui/core";
function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
      <Link href="https://www.instagram.com/rahaman_32/"  target="_blank" >
            <InstagramIcon  />
      </Link>
      <Link href="https://www.facebook.com/rahaman.abdul.50309"  target="_blank" >
            <FacebookIcon />  
      </Link>
      <Link href="https://www.linkedin.com/in/abdul-rahaman-63b8081b9/"  target="_blank" >
            <LinkedInIcon />
      </Link>
        
      </div>
    </div>
  );
}

export default Footer;
