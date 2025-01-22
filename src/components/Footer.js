import React from "react";
import {
  BsLinkedin,
  BsYoutube,
  BsInstagram,
  BsGithub,
  BsSend,
} from "react-icons/bs";
import { Button } from "@mui/material";

function Footer() {

const emailHandler = (ev) => {
  console.log('oh shit', ev.target);
}

  return (
// Contact + information + Account + Quick 
    <footer className="footer pt-5">

        <div className="footer-links">
          <h4>Contact Us</h4>
          <p> mettihew@gmail.com</p>
          <div id="around" style={{width: '70%'}}>
            <BsGithub className="fs-4" />
            <BsLinkedin className="fs-4" />
            <BsInstagram className="fs-4" />
            <BsYoutube className="fs-4" />
          </div>
           {/* Stay in contac + EMAIL  */}
           <div id="d-f" className="py-3">
            <input className="form-control" placeholder="Stay in contact" />
            <Button variant="contained" size="small" color="info" onClick={(ev) => emailHandler(ev)}>
              Email <BsSend  />
            </Button>
        </div>
        </div>

        <div className="footer-links">
          <h4>Information</h4>
          <p> Returned Policy </p>
          <p> Privacy Policy </p>
          <p> Shipping Policy </p>
          <p> Terms & Conditions </p>
          <p> Blogs </p>
        </div>

        <div className="footer-links">
          <h4>Account</h4>
          <p>About Us</p>
          <p>Faq</p>
          <p>Contact</p>
          <p>Call</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <p> Laptops </p>
          <p> Headphones </p>
          <p> Tablets </p>
          <p> Watch </p>
        </div>

{/* container TAKES IT TO THE BOTTOM LINE */}
        <p className="container text-center"> &copy; {new Date().getFullYear()}; Powered by Mettihew </p>

      </footer>

  );
}

export default Footer;
