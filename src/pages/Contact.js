import { BiPhoneCall, BiInfoCircle, BiLogoLinkedin } from "react-icons/bi";
import { AiOutlineMail, AiOutlineHome } from "react-icons/ai";
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_vpf116g", "template_qbr56qp", form.current, {
        publicKey: "bmvn_iGiB1jhPbSJT",
      })
      .then(
        () => {
          alert("Your email has been sent successfully. I will contact you if it's necessary.")
        },
        (error) => {
          alert("Somthing went wrong")
        }
      );
  };

  return (
    <div className="container-fluid">
      <li className="fs-5 d-flex align-items-center mb-3 gap-10">
        <AiOutlineHome className="fs-5 mb-3" />
        <address>توسعه دهنده وبسایت</address>
      </li>

      <li className="fs-5 d-flex gap-10">
        <BiInfoCircle className="mb-0" />
        <p> مهدی کرامتی - برنامه نویس </p>
      </li>

      <li className="fs-5 d-flex gap-10">
        <BiPhoneCall className="mb-0" />
        <p>09210015021</p>
      </li>

      <li className="fs-5 d-flex align-items-center mb-3 gap-10">
        <AiOutlineMail className="" />
        <a href="mettihew@gmail.com"> mettihew@gmail.com</a>
      </li>

      <li className="fs-5 d-flex align-items-center mb-3 gap-10">
        <BiLogoLinkedin />
        <a href="https://www.linkedin.com/in/mahdi-keramati-52211a257">
          Mahdi Keramati{" "}
        </a>
      </li>

      <li className="fs-5 d-flex align-items-center mb-3 gap-10">
        <BiLogoLinkedin />
        <a
          id="no-a"
          href="https://www.linkedin.com/in/mahdi-keramati-52211a257"
        >
          Co-worker: vah*d7362@gmail.com 9304037169
        </a>
      </li>

      <li className="fs-5 d-flex align-items-center mb-3 gap-10">
        <BiLogoLinkedin />
        <a
          id="no-a"
          href="https://www.linkedin.com/in/mahdi-keramati-52211a257"
        >
          Co-worker: @vah*dk3 9999027877
        </a>
      </li>

      <li className="fs-5 d-flex gap-10">
        <BiInfoCircle className="mb-0" />
        <p>
          I'm a full-stack MERN developer, I've wroten this website using
          React.js, Node.js, Express.js, MongoDB, Bootstrap ...
        </p>
      </li>

      {/* -------------------------------- */}

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d3240.8881248802777!2d51.4179432!3d35.6797566!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1705086939686!5m2!1sen!2sus"
        width="100%"
        title="location"
        className="border-0"
        loading="lazy"
      ></iframe>

      <div id="between">
        <h4>Contact me <p>(developer)</p></h4>
        {/* <h4>با ما در ارتباط باشید</h4> */}
        <h4 style={{maxWidth:'50%'}}>پیام خودتون رو برای من بفرستید </h4>
      </div>

      <form ref={form} onSubmit={sendEmail} className="form-control" id="d-g">
        <label>Name</label>
        <input type="text" name="from_name" className="form-control" />
        <label>Email</label>
        <input type="email" name="reply_to" className="form-control" />
        <label>Message</label>
        <textarea name="message" className="form-control" placeholder="This message will send for the developer mettihew@gmail.com"/>
        <div>
          <input type="submit" value="Send" className="btn" />
        </div>
      </form>
    </div>
  );
}

export default Contact;
