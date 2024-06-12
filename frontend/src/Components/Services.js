import React from "react";
import { BsFillCarFrontFill, BsStopwatchFill } from "react-icons/bs";
import { MdOutlineTwoWheeler, MdSupport } from "react-icons/md";
import { FaCaravan, FaHandshake } from "react-icons/fa6";

function Services() {
  return (
    <div className="h-full text-black">
      <h1 className="text-5xl text-center text-black font-bold pt-5">
        Our Services
      </h1>
      <div className="h-[80%] grid place-items-center py-10">
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 grid-rows-2 gap-6 mx-8">
          {/* card1 */}
          <div className="text-center grid place-items-center  rounded-xl bg-[#4ed3d3] shadow-lg shadow-black ">
            <div>
              {" "}
              <BsFillCarFrontFill className=" text-3xl" />
            </div>
            <div>
              {" "}
              <h1 className="text-center text-4xl py-2"> Services For Cabs</h1>
            </div>
            <div className="py-4">
              <h1>
                Book rides within the city with Daily, or take a trip to your
                favourite destinations outside the city with Outstation.
              </h1>
            </div>
            <div className="p-4">
              <div className="border-2 border-[#E63946] w-28 h-10 grid place-items-center bg-[#E63946] rounded-2xl shadow-sm  shadow-black">
                <button>Read More</button>
              </div>
            </div>
          </div>

          {/* card2 */}
          <div className="text-center grid place-items-center rounded-xl bg-[#4ed3d3] shadow-lg shadow-black ">
            <div>
              {" "}
              <MdOutlineTwoWheeler className=" text-3xl" />
            </div>
            <div>
              {" "}
              <h1 className="text-center text-4xl py-2"> Services For Bikes</h1>
            </div>
            <div className="py-4">
              <h1>
                VAHAN Bike is for to Reach more faster, Bike is for only one
                passanger with one small size bag.
              </h1>
            </div>
            <div className="p-4">
              <div className="border-2 border-[#E63946] w-28 h-10 grid place-items-center bg-[#E63946] rounded-2xl shadow-sm  shadow-black">
                <button>Read More</button>
              </div>
            </div>
          </div>
          {/* card3 */}
          <div className="text-center grid place-items-center rounded-xl bg-[#4ed3d3] shadow-lg shadow-black ">
            <div>
              {" "}
              <FaCaravan className=" text-3xl" />
            </div>
            <div>
              {" "}
              <h1 className="text-center text-4xl py-2">
                {" "}
                Services For Rikshaw
              </h1>
            </div>
            <div className="py-4">
              <h1>
                Now A Days People Most Uses Auto Rikshaw For travelling . VAVHAN
                Rikshaw can seat upto 3 passengers and can contain 2-3 small
                size bags or 1 large size bag.
              </h1>
            </div>
            <div className="p-4">
              <div className="border-2 border-[#E63946] w-28 h-10 grid place-items-center bg-[#E63946] rounded-2xl shadow-sm  shadow-black">
                <button>Read More</button>
              </div>
            </div>
          </div>
          {/* card4 */}
          <div className="text-center grid place-items-center rounded-xl bg-[#4ed3d3] shadow-lg shadow-black ">
            <div>
              {" "}
              <BsStopwatchFill className=" text-3xl" />
            </div>
            <div>
              {" "}
              <h1 className="text-center text-4xl py-2"> Be On Time</h1>
            </div>
            <div className="py-4">
              <h1>
                VAHAN Provides a Service To be On Time.We Know The Value Of Time
                Now A Days. that's why VAHAN Provide A Facility to Be at the
                Pick Up Location 5 min Before Time.
              </h1>
            </div>
            <div className="p-4">
              <div className="border-2 border-[#E63946] w-28 h-10 grid place-items-center bg-[#E63946] rounded-2xl shadow-sm  shadow-black">
                <button>Read More</button>
              </div>
            </div>
          </div>
          {/* card5 */}
          <div className="text-center grid place-items-center rounded-xl bg-[#4ed3d3] shadow-lg shadow-black  ">
            <div>
              {" "}
              <FaHandshake className=" text-3xl" />
            </div>
            <div>
              {" "}
              <h1 className="text-center text-4xl py-2"> Affordable</h1>
            </div>
            <div className="py-4">
              <h1>
                VAHAN Cabs Takes Very Low Costs Then Others. No Extra Charges ,
                YOU Can Book Cabs At Very Low Price Then The regular . Our
                Drivers Are Well Exprienced.
              </h1>
            </div>
            <div className="p-4">
              <div className="border-2 border-[#E63946] w-28 h-10 grid place-items-center bg-[#E63946] rounded-2xl shadow-sm  shadow-black">
                <button>Read More</button>
              </div>
            </div>
          </div>
          {/* card6 */}
          <div className="text-center grid place-items-center rounded-xl bg-[#4ed3d3] shadow-lg shadow-black  ">
            <div>
              {" "}
              <MdSupport className=" text-3xl text-black" />
            </div>
            <div>
              {" "}
              <h1 className="text-center text-4xl py-2"> Support</h1>
            </div>
            <div className="py-4">
              <h1>
                In case of an emergency, press the Emergency button available on
                your application to raise an alert and our Safety Response Team
                will connect with you. Our Safety Response Team is available
                24*7 for assistance.
              </h1>
            </div>
            <div className="p-4">
              <div className="border-2 border-[#E63946] w-28 h-10 grid place-items-center bg-[#E63946] rounded-2xl shadow-sm  shadow-black">
                <button>Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
