import React from "react";
import Char from "../assets/Char.jpg";
export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 mx-10 shadow-lg rounded-md">
      <div className="text-center w-max">
        <h1 className="text-2xl ">Pokedex-Lite</h1>
      </div>
      <div className=" ">
        <img
          src={Char}
          alt="Charmsoure"
          width={50}
          height={50}
          className="rounded-full"
        />
      </div>
    </nav>
  );
};
