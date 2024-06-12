import React, { useEffect } from "react";
import ContactImage from "../images/Contact.jpg";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function Contact() {
  let navigate = useNavigate();
  const Authentication = async () => {
    try {
      const Token = localStorage.getItem("Jwtoken");
      if (!Token) {
        toast.error("please sign in first");
        navigate("/signin");
      } else {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/validateUser`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: Token,
            },
          }
        );
        console.log(`response`, response);
        if (response) {
          if (response.status === 200) {
            console.log("Authenticated");
          } else if (response.status === 404) {
            navigate("/signin");
          }
        } else {
          navigate("/signin");
        }
        console.log(`response`, response);
        console.log(`hii`);
      }
    } catch (error) {
      toast.error("UnAuthenticated");
      navigate("/signin");
    }
  };

  useEffect(() => {
    Authentication();
  }, []);

  return (
    <div className="md:h-screen">
      <h1 className="text-4xl text-black font-bold text-center py-4">
        Contact Us
      </h1>
      <div className=" md:flex">
        <div className=" md:w-[50%] md:order-2 order-1">
          <img src={ContactImage} alt="contact" />
        </div>
        <div className="md:w-[50%] md:order-1 order-2 py-10">
          <div className="grid gap-6  grid-cols-2 px-7">
            <div className="flex">
              <FaLocationDot />
              <span>
                <p>2nd floor,Radha Krishna Tower.</p>
                <p>near Malad Station.</p>
                <p>Malad(E),Mumbai 400097. India.</p>
              </span>
            </div>
            <div className="flex">
              <FaLocationDot />
              <span>
                <p>Ground floor,Spring Grow UNO..</p>
                <p> Near Railway Colony, NH 63, Hubli–580 020.</p>
                <p>Kolkata 560016. India.</p>
              </span>
            </div>
            <div className="flex">
              <FaLocationDot />
              <span>
                <p>1st Floor,Vinay Tower.</p>
                <p>Poonamallee High Road, across Chennai Central railway.</p>
                <p>Chennai 600003 India.</p>
              </span>
            </div>
            <div className="">
              <div className="flex items-center gap-2">
                <MdEmail /> Email :
              </div>
              <p>abhilashpal128@gmail.com</p>
            </div>
            <div>
              <p>Customer Care:</p>
              <p>Mumbai: 890-268-5321 </p>
              <p>Delhi: 672-345-3574</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
