import React from "react";
import {
  BsLinkedin,
  BsYoutube,
  BsInstagram,
  BsGithub,
} from "react-icons/bs";

function Footer() {
  return (
    // Contact + information + Account + Quick
    <footer className="footer pt-">

      <div className="footer-links">
        <h6>Contact Us</h6>
        <div id="around" style={{ width: "70%" }}>
         <a> <BsGithub /> </a>
         <a> <BsLinkedin /> </a>
         <a> <BsInstagram /> </a>
         <a> <BsYoutube /> </a>
        </div>
        <a> Mettihew@gmail.com</a>
        <a> Powered by Mettihew </a>
        <a>&copy;{new Date().getFullYear()}</a>
      </div>

      <div className="footer-links">
        <h6>Information</h6>
        <a href="/contact"> Returned Policy </a>
        <a href="/contact"> Privacy Policy </a>
        <a href="/contact"> Shipping Policy </a>
        <a href="/contact"> Terms & Conditions </a>
      </div>

      <div className="footer-links">
        <h6>Account</h6>
        <a href="/contact">About Us</a>
        <a href="/contact">Contact</a>
        <a href="/contact">Call & information</a>
      </div>

      <div className="footer-links">
        <h6>Quick Links</h6>
        <a href="/favorite"> Favorite List </a>
        <a href="/cart"> Cart </a>
        <a href="/login"> Sign In </a>
        <a href="/compare-product"> Compare Products </a>
      </div>

    </footer>
  );
}

export default Footer;
