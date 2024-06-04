import React, { useContext, useEffect, useState } from "react";
import { SideBarContext } from "../Context/SideBarContext";
import logo from "../assets/logo/logo.jpg";
import MyBadge from "../assets/Badge";

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SideBarContext);
  const [isScroll,setIsScroll] = useState(false)
  useEffect(()=>{
    window.addEventListener('scroll',() =>{
      window.scrollY > 60 ? setIsScroll(true) : setIsScroll(false)
    })
  })
  return (
    <div className={`fixed w-full bg-white z-10 ${isScroll? 'shadow-md' : ''}`}>
      <div className="flex justify-between items-center container mx-auto px-4">
        <div>
          <img className="w-32" src={logo} alt="onlineshop logo" />
        </div>
        <div onClick={() => setIsOpen(!isOpen)}>
          <MyBadge />
        </div>
      </div>
    </div>
  );
};

export default Header;
