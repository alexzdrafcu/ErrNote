import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuItem } from "./MenuItem";
import "./Dropdown.css";

function Dropdown() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}>
        {MenuItem.map((item, index) => {
          return (
            <li key={index}
              id={window.location.pathname === item.path ? "active" : ""}
              onClick={() => {
                window.location.pathname = item.path;
                if(item.path==="/login"){
                localStorage.removeItem("id")
                localStorage.removeItem("prenume")
                localStorage.removeItem("nume")
                localStorage.removeItem("email")
                localStorage.removeItem("notitaId")
              }
              }}>
              
              <Link className={item.cName} to={item.path} onClick={() => setClick(false)}>
                {item.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  );
}

export default Dropdown;
