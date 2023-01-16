import React from "react";
import { Link } from "gatsby";

const Navbar = () => {
  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="ml-2 tracking-wide flex justify-between">
        <div className="font-bold text-xl text-blue-700">
          <Link to="/">GDG Blog</Link>
        </div>
        <Link to="/about">About Us</Link>
      </div>
    </div>
  );
};

export default Navbar;
