import React from "react";
import { Link } from "react-scroll";
export default function NavLink({href,title,setMenuOpen}) {
  return (
    <Link  
    to={href}
    spy={true} 
    smooth={true} 
    offset={-75} 
    duration={500} 
    onClick={()=>{setMenuOpen?setMenuOpen(false):null}}
    className=" block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
    >
      {title}
    </Link>
  );
}
