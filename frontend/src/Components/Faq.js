import React from "react";
import FaqImage from "../images/faqimg.webp";

function Faq() {
  return (
    <div className="bg-white">
      <div>
        <div className=" text-center text-black ">
          <h1 className="text-3xl py-2 font-bold">FAQ</h1>
        </div>
        <div className="w-[80%] mx-auto ">
          <div className="w-full flex flex-col items-center ">
            <div className="pt-3">
              <img src={FaqImage} alt="FAQ" className="h-[400px] " />
            </div>
            <div>
              <h1 className="text-4xl text-black font-bold">
                Frequently Asked Questions
              </h1>
            </div>
            <div className="flex flex-col gap-10 text-xl py-10">
              <h2 className="font-bold text-2xl text-black">
                1. How to book a cab on a website?
              </h2>
              <p>
                For booking a cab, he/she has to enter pickup and drop-off
                points. When it comes to projects such as VAHAN, it is mandatory
                thing that a website should include a driver panel. As it helps
                the user to track booking and manage it all.
              </p>

              <h1 className="font-bold text-2xl text-black">
                {" "}
                2. A route-based booking system that facilitates the issue of
                journey-cumbooking cab,
              </h1>
              <p>
                which can be issued from any station to any station. Passenger
                journey to multiple laps of booking can be handled from a single
                terminal window.
              </p>
              <p>
                The booking facility is offered round-the-clock (24 hours
                uninterrupted).
              </p>
              <p>
                Are you tired of waiting in long lines or struggling to find a
                taxi on the go? A VAHAN is the solution to your transportation
                woes. By building a VAHAN in Java, you can streamline the
                process of booking a cab and simplify the entire transportation
                experience.
              </p>

              <p>
                {" "}
                To create a graphic user interface with the jsp(0java server
                pages). that makes it easier for the user to interact with the
                cab booking system.
              </p>
              <p>
                To use SQL database and provide a way to save information about
                available taxis, book a taxi for the selected taxi, and get the
                driver and vehicle number details.
              </p>

              <p>
                {" "}
                I have successfully built a VAHAN (Cab booking management
                system) in Java that helps you book a cab . This java project
                utilizes Jsp(java server pages) for the GUI and is a very
                efficient and easy way to book a taxi, with all driver and taxi
                details attached to the JtextArea.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
