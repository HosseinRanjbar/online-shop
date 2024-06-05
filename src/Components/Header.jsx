import React, { useContext, useEffect, useState } from "react";
import { SideBarContext } from "../Context/SideBarContext";
import logo from "../assets/logo/logo.jpg";
import MyBadge from "../assets/Badge";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SideBarContext);
  const [isScroll, setIsScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsScroll(true) : setIsScroll(false);
    });
  });
  return (
    <div
      className={`fixed w-full bg-white z-10 ${isScroll ? "shadow-md" : ""}`}
    >
      <div className="flex flex-row-reverse justify-between items-center container mx-auto px-4">
        <div>
          <Link to="/">
            <img className="w-32" src={logo} alt="onlineshop logo" />
          </Link>
        </div>
        <div>
          <Link to={"/"}>Home</Link>
        </div>
        <div className="flex justify-between items-center">
          <div onClick={() => setIsOpen(!isOpen)}>
            <MyBadge />
          </div>
          <div>
            <Link to={"/login"}>
              <Button variant="contained">Login</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
