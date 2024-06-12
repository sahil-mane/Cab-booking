import React, { useEffect } from "react";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

import slideone from "../images/Sideimg1.webp";
import slidetwo from "../images/sideimg4.jpg";
import slidethree from "../images/sideimg3.jpg";
import slidefour from "../images/sideimg2.webp";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

function Book({ cab, handleclick }) {
  const [km, setKm] = useState(0);
  const [total, setTotal] = useState(0);
  const [charges, setCharges] = useState(0);
  const [firstdist, setFirstdist] = useState(0);
  const [perkm, setPerkm] = useState(0);
  const navigate = useNavigate();

  // Calculation Part

  // const fetchlocation = () => {
  //   navigate("/location");
  // };
  const Submit = async (e) => {
    e.preventDefault();

    if (cab === "mini") {
      setCharges(20);
      setFirstdist(28);
      setPerkm(25);
      console.log(cab);
    } else if (cab === "sedan") {
      setCharges(25);
      setFirstdist(35);
      setPerkm(30);
      console.log(cab);
    } else if (cab === "suv") {
      setCharges(30);
      setFirstdist(40);
      setPerkm(35);
      console.log(cab);
    } else if (cab === "scooty") {
      setCharges(10);
      setFirstdist(15);
      setPerkm(12);
      console.log(cab);
    } else if (cab === "bike") {
      setCharges(12);
      setFirstdist(18);
      setPerkm(15);
      console.log(cab);
    } else if (cab === "rikshaw") {
      setCharges(10);
      setFirstdist(24);
      setPerkm(21);
      console.log(cab);
    }
    console.log(charges);
    console.log(firstdist);

    if (
      (pick === "borivali" && drop === "kandivali") ||
      (pick === "kandivali" && drop === "borivali")
    ) {
      setKm(3.4);
    } else if (
      (pick === "borivali" && drop === "malad") ||
      (pick === "malad" && drop === "borivali")
    ) {
      setKm(5.7);
    } else if (
      (pick === "borivali" && drop === "goregoan") ||
      (pick === "goregoan" && drop === "borivali")
    ) {
      setKm(9.3);
    } else if (
      (pick === "borivali" && drop === "rammandir") ||
      (pick === "rammandir" && drop === "borivali")
    ) {
      setKm(10.4);
    } else if (
      (pick === "borivali" && drop === "jogeshwari") ||
      (pick === "jogeshwari" && drop === "borivali")
    ) {
      setKm(10.4 + 1.4);
    } else if (
      (pick === "borivali" && drop === "andheri") ||
      (pick === "andheri" && drop === "borivali")
    ) {
      setKm(11.8 + 6.7);
    } else if (
      (pick === "kandivali" && drop === "malad") ||
      (pick === "malad" && drop === "kandivali")
    ) {
      setKm(2.3);
    } else if (
      (pick === "kandivali" && drop === "goregoan") ||
      (pick === "goregoan" && drop === "kandivali")
    ) {
      setKm(3.6 + 2.3);
    } else if (
      (pick === "kandivali" && drop === "rammandir") ||
      (pick === "rammandir" && drop === "kandivali")
    ) {
      setKm(5.9 + 1.1);
    } else if (
      (pick === "kandivali" && drop === "jogeshwari") ||
      (pick === "jogeshwari" && drop === "kandivali")
    ) {
      setKm(7 + 1.4);
    } else if (
      (pick === "kandivali" && drop === "andheri") ||
      (pick === "andheri" && drop === "kandivali")
    ) {
      setKm(15.1);
    } else if (
      (pick === "malad" && drop === "goregoan") ||
      (pick === "goregoan" && drop === "malad")
    ) {
      setKm(3.6);
    } else if (
      (pick === "malad" && drop === "rammandir") ||
      (pick === "rammandir" && drop === "malad")
    ) {
      setKm(3.6 + 1.1);
    } else if (
      (pick === "malad" && drop === "jogeshwari") ||
      (pick === "jogeshwari" && drop === "malad")
    ) {
      setKm(4.7 + 1.4);
    } else if (
      (pick === "malad" && drop === "andheri") ||
      (pick === "andheri" && drop === "malad")
    ) {
      setKm(6.1 + 6.7);
    } else if (
      (pick === "goregoan" && drop === "rammandir") ||
      (pick === "rammandir" && drop === "goregoan")
    ) {
      setKm(1.1);
    } else if (
      (pick === "goregoan" && drop === "jogeshwari") ||
      (pick === "jogeshwari" && drop === "goregoan")
    ) {
      setKm(1.1 + 1.4);
    } else if (
      (pick === "goregoan" && drop === "andheri") ||
      (pick === "andheri" && drop === "goregoan")
    ) {
      setKm(2.5 + 6.7);
    } else if (
      (pick === "rammandir" && drop === "jogeshwari") ||
      (pick === "jogeshwari" && drop === "rammandir")
    ) {
      setKm(1.4);
    } else if (
      (pick === "rammandir" && drop === "andheri") ||
      (pick === "andheri" && drop === "rammandir")
    ) {
      setKm(1.4 + 6.7);
    } else if (
      (pick === "jogeshwari" && drop === "andheri") ||
      (pick === "andheri" && drop === "jogeshwari")
    ) {
      setKm(6.7);
    }
  };

  const Totalcalc = (e) => {
    e.preventDefault();

    const totalall = charges + firstdist + (km - 1.5) * perkm;
    let totalrs = parseFloat(totalall);
    setTotal(totalrs);
  };
  const locations = [
    { title: "Borivali", value: "borivali" },
    { title: "Kandivali", value: "kandivali" },
    { title: "Malad", value: "malad" },
    { title: "Goregoan", value: "goregoan" },
    { title: "Ram Mandir", value: "rammandir" },
    { title: "Jogeshwari", value: "jogeshwari" },
    { title: "Andheri", value: "andheri" },
  ];
  const [pick, setPick] = useState("kandivali");
  const [drop, setDrop] = useState("kandivali");

  const handlepickup = (e) => {
    setPick(e.target.value);
  };
  const handledestini = (e) => {
    setDrop(e.target.value);
  };

  // Carousel Image silder

  const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

  const images = [
    {
      label: "Find Right And Actual Price",
      imgPath: slideone,
    },
    {
      label: "First Priority For A Safe Ride choosing Best Way",
      imgPath: slidetwo,
    },
    {
      label: "select vehical According To Your Need",
      imgPath: slidethree,
    },
    {
      label: " Well Experienced and Trusted Drivers",
      imgPath: slidefour,
    },
  ];

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const Authentication = async () => {
    try {
      const Token = localStorage.getItem("Jwtoken");
      if (!Token) {
        toast.error("please sign in first");
        navigate("/signin");
      } else {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/validateUser`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: Token,
          },
        });
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
      }
    } catch (error) {
      toast.error("something went wrong");
      navigate("/signin");
    }
  };

  useEffect(() => {
    Authentication();
  }, []);

  return (
    <div>
      <div className=" md:h-screen bg-gray-700 h-full flex md:flex-row flex-col gap-9 md:gap-0 pt-9  ">
        <div className="md:w-[40%] grid place-items-center gap-4  order-2  ">
          <div className="w-[80%]">
            <div>
              <select
                value={pick}
                onChange={handlepickup}
                className="w-[100%] h-10"
              >
                {locations.map((data) => (
                  <option value={data.value}>{data.title}</option>
                ))}
              </select>
            </div>
            <div className="pt-3 ">
              <select
                value={drop}
                onChange={handledestini}
                className="w-[100%] h-10 "
              >
                {locations.map((data) => (
                  <option value={data.value}>{data.title}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="text-white border-2 border-[#E63946] w-24 grid place-items-center h-10 rounded-md shadow-md shadow-[#E63946]">
            <button onClick={Submit}>Submit</button>
          </div>
          <div className="w-[80%] text-white">
            <div className="grid grid-cols-2 grid-rows-5 border-2 border-[#E63946]  place-items-center">
              <div className="border-2 border-[#E63946] w-[100%] h-12">
                <h1>Pick up Location</h1>
              </div>
              <div className="border-2 border-[#E63946] w-[100%] h-12">
                <h1>{pick}</h1>
              </div>
              <div className="border-2 border-[#E63946] w-[100%] h-12">
                <h1>Destination</h1>
              </div>
              <div className="border-2 border-[#E63946] w-[100%] h-12">
                <h1>{drop}</h1>
              </div>
              <div className="border-2 border-[#E63946] w-[100%] h-12">
                <h1>Distance</h1>
              </div>
              <div className="border-2 border-[#E63946] w-[100%] h-12">
                <h1>{km}</h1>
              </div>
              <div className="border-2 border-[#E63946] w-[100%] h-12">
                <h1>Rate</h1>
              </div>
              <div className="border-2 border-[#E63946] w-[100%] h-12">
                <h1>{firstdist}Rs/km</h1>
              </div>
              <div className="border-2 border-[#E63946] w-[100%] h-12">
                <h1>Charges</h1>
              </div>
              <div className="border-2 border-[#E63946] w-[100%] h-12">
                <h1>{charges}</h1>
              </div>
            </div>
          </div>
          <div className="text-white border-2 border-[#E63946] w-24 grid place-items-center h-10 rounded-md shadow-md shadow-[#E63946]">
            <button onClick={Totalcalc}>Total</button>
            {/* onClick={Totalcalc} */}
          </div>
          <div className="grid grid-cols-2 grid-rows-1 border-2 border-[#E63946] w-[80%] place-items-center text-white">
            <div className="border-2 border-[#E63946] w-[100%] h-12">
              <h1>Total</h1>
            </div>
            <div className="border-2 border-[#E63946] w-[100%] h-12">
              <h1>{total}</h1>
            </div>
          </div>
        </div>

        <div className="md:w-[60%]  order-1 ">
          <Box sx={{ maxWidth: 800, flexGrow: 1 }} className="float-none">
            <Paper
              square
              elevation={0}
              sx={{
                display: "flex",
                alignItems: "center",
                height: 50,
                pl: 4,
                bgcolor: "background.default",
              }}
            >
              <Typography>{images[activeStep].label}</Typography>
            </Paper>
            <AutoPlaySwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
              {images.map((step, index) => (
                <div key={step.label}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <Box
                      component="img"
                      sx={{
                        height: 430,
                        display: "block",
                        maxWidth: 800,
                        overflow: "hidden",
                        width: "100%",
                      }}
                      src={step.imgPath}
                      alt={step.label}
                    />
                  ) : null}
                </div>
              ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              nextButton={
                <Button
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === maxSteps - 1}
                >
                  Next
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                >
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                  Back
                </Button>
              }
            />
            {/* <Button onClick={fetchlocation}> Fetch Drivers Location </Button> */}
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Book;
