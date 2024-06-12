import { Route, Routes, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Services from "./Components/Services";
import Blog from "./Components/Blog";
import About from "./Components/About";
import Book from "./Components/Book";
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";
import Location from "./Components/Location";
import Footer from "./Components/Footer";
import Profile from "./Components/Profile";
import ErrorPAge from "./Components/ErrorPAge";
import Contact from "./Components/Contact";
import Faq from "./Components/Faq";
import axios from "axios";

function App() {
  const location = useLocation();
  const [cab, setCab] = useState(null);
  const [latitudes, setLatitudes] = useState("");
  const [longitudes, setLongitudes] = useState("");
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const handleclick = (buttonvalue) => {
    console.log(buttonvalue);
    setCab(buttonvalue);
    navigate("/Book");
  };

  function myLocation() {
    const success = (position) => {
      console.log(position);
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      setLatitudes(latitude);
      setLongitudes(longitude);
    };
    const error = () => {
      console.log("something went wrong");
    };

    const locat = navigator.geolocation.getCurrentPosition(success, error);
    console.log(locat);
  }

  useEffect(() => {
    console.log(cab);
    console.log(latitudes + "  " + longitudes);
    myLocation();
  }, [cab, latitudes, longitudes]);

  // bg-[#2E4053]
  return (
    <div className="App bg-white text-black ">
      <ToastContainer />

      <Navbar />

      <Routes>
        <Route
          path="/location"
          element={<Location latitude={latitudes} longitude={longitudes} />}
        />
        <Route path="/signin" element={<Signin />} />
        <Route
          path="/Home"
          element={<Home cab={cab} handleclick={handleclick} />}
        />
        <Route path="/" element={<Signup />} />
        <Route path="/About" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<ErrorPAge />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route
          path="/Book"
          element={<Book cab={cab} handleclick={handleclick} />}
        />
      </Routes>
      {location.pathname === "/" || location.pathname === "/signin" ? null : (
        <Footer />
      )}
    </div>
  );
}

export default App;
