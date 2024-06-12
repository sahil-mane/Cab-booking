import React from "react";
import { NavLink } from "react-router-dom";

function ErrorPAge() {
  const handleNavLinkClick = () => {
    // Scroll to the top of the page
    // window.scrollTo(0, 0);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="">
      <div className=" h-full flex flex-col py-[15%] items-center gap-2">
        <h1 className="text-6xl font-bold">404</h1>
        <h1 className="text-4xl text-green-500 font-bold">Opps!</h1>
        <p>
          this Page you're looking for might have been removed or temporary
          unavailable{" "}
        </p>
        <NavLink to="/Home">
          <button
            className="bg-green-500 w-[150px] h-[40px] border-2 border-black"
            onClick={handleNavLinkClick}
          >
            Go TO Home
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default ErrorPAge;
