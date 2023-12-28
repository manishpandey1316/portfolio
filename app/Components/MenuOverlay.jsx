import React from "react";
import NavLink from "./NavLink";
export default function MenuOverlay({ links,setMenuOpen}) {
  
  return (
    <div>
      <ul className="flex flex-col py-4 items-center">
        {links.map((link, index) => (
          <li key={index}  className="cursor-pointer" >
            <NavLink href={link.path} title={link.title} setMenuOpen={setMenuOpen}></NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
