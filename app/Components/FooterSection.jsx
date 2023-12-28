import React from "react";

export default function FooterSection() {
  return (
    <footer className="footer z-10 border border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container flex justify-between p-14 sm:p-20">
        <div>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
          {"{ "}M
        </span>
        P{" }"}
        </div>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
}
