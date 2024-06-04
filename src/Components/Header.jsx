import React, { useContext } from "react";
import { SideBarContext } from "../Context/SideBarContext";

import MyBadge from "../assets/Badge";

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SideBarContext);
  return (
    <div>
      <div>header</div>
      <div onClick={() => setIsOpen(!isOpen)}>
        <MyBadge />
      </div>
    </div>
  );
};

export default Header;
