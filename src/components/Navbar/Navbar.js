import React, { useState, useRef, useEffect } from "react";
import { ReactComponent as CloseMenu } from "../../assets/x.svg";
import { ReactComponent as MenuIcon } from "../../assets/menu.svg";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import "./Navbar.css";
const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const data = [
    {
      name: "About us",
      hrf: "#about",
    },
    {
      name: "Our Values",
      hrf: "#ourvalues",
    },
    {
      name: "Portofolio",
      hrf: "#portofolio",
    },
    {
      name: "Contact",
      hrf: "#contact",
    },
  ];
  return (
    <div className="header">
      <div className="logo-nav">
        <ul className={click ? "nav-options active" : "nav-options"}>
          {data.map((data, index) => (
            <li className="option" onClick={closeMobileMenu}>
              <a href={data.hrf}>{data.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </div>
  );
};

export default Navbar;
