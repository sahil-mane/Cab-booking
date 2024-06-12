import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

function Navbar() {
  const Location = useLocation();
  const navigate = useNavigate();
  const [nav, setNav] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [user, setUser] = useState();

  const links = [
    { title: "Home", path: "/Home" },
    { title: "About", path: "/About" },
    { title: "Services", path: "/services" },
    { title: "Blog", path: "/blog" },
    { title: "Contact Us", path: "/contact" },
  ];
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    const userDataArray = JSON.parse(userData);
    setUser(userDataArray);
    console.log(`hii`, process.env.REACT_APP_API_URL);
    console.log("process");
    console.log();
  }, [Location.pathname]);

  const handleLogout = () => {
    navigate("/signin");

    localStorage.removeItem("user");
    localStorage.removeItem("Jwtoken");
    handleClose();
  };

  console.log(typeof user);
  console.log(`userrr`, user);

  return (
    <div className="bg-black">
      <div className="md:px-[70px]">
        <div className="flex justify-between h-16 items-center text-white">
          <h1 className="text-2xl md:pl-6  pl-4 font-bold ">VAHAN</h1>
          <div className="flex items-center">
            <div className="flex items-center">
              <div className="hidden text-black font-bold md:flex text-lg">
                {links.map((data,index) => (
                  <NavLink
                  key={index}
                    to={data.path}
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "#E63946" : "white",
                      };
                    }}
                  >
                    <ul className="md:flex hidden md:pr-8 pr-6 hover:cursor-pointer">
                      <li>{data.title}</li>
                    </ul>
                  </NavLink>
                ))}
              </div>
            </div>

            <div
              onClick={() => setNav(!nav)}
              className="md:hidden text-xl text-white cursor-pointer pr-5 z-10 "
            >
              {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>
            <div>
              {user && (
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <span>
                    <Avatar className="bg-white  ">
                      <span className="flex ">
                        <h1 className="capitalize">
                          {" "}
                          {user?.fname?.charAt(0)}
                        </h1>
                        <h1 className="capitalize">{user?.lname?.charAt(0)}</h1>
                      </span>
                    </Avatar>
                  </span>
                </IconButton>
              )}
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <NavLink to="/profile">
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                </NavLink>
                <MenuItem onClick={handleOpen}>Logout</MenuItem>
              </Menu>
            </div>
          </div>

          {nav && (
            <div className="flex flex-col justify-center items-center absolute top-0 left-0 h-screen w-full text-2xl font-bold bg-zinc-950">
              {links.map((data) => (
                <NavLink
                  to={data.path}
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "#E63946" : "white",
                    };
                  }}
                >
                  <ul>
                    <li
                      key={Math.random()}
                      className="my-5"
                      onClick={() => setNav(!nav)}
                    >
                      {data.title}
                    </li>
                  </ul>
                </NavLink>
              ))}
            </div>
          )}
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} className="rounded-xl">
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Are You sure! want's to Logout
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <div className="flex gap-5 ">
                <Button variant="contained" size="small" onClick={handleLogout}>
                  Yes
                </Button>
                <Button
                  variant="outlined"
                  size="small"
                  onClick={handleClose}
                  className=""
                >
                  No
                </Button>
              </div>
            </Typography>
          </Box>
        </Modal>
      </div>
    </div>
  );
}

export default Navbar;
