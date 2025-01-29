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
            {/* <input className="form-control" placeholder="Stay in contact" />
            <Button variant="contained" size="small" color="info" onClick={(ev) => emailHandler(ev)}>
              Email <BsSend  />
            </Button> */}
        </div>
        </div>

        <div className="footer-links">
          <h4>Information</h4>
          <a href="/contact"> Returned Policy </a>
          <a href="/contact"> Privacy Policy </a>
          <a href="/contact"> Shipping Policy </a>
          <a href="/contact"> Terms & Conditions </a>
          {/* <a href="/contact"> Blogs </a> */}
        </div>

        <div className="footer-links">
          <h4>Account</h4>
          <a href="/contact">About Us</a>
          <a href="/contact">Contact</a>
          <a href="/contact">Call</a>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="/compare-product"> Compare Products </a>
          <a href="/favorite"> Favorite List </a>
          <a href="/login"> Sign In </a>
          <a href="/cart"> Cart </a>
        </div>

        {/* DON'T DELETE container!!! */}
        <p className="container text-center" style={{marginBottom:'0px'}}> &copy; 2019 - {new Date().getFullYear()}; Powered by Mettihew </p>

      </footer>

  );
}

export default Footer;
