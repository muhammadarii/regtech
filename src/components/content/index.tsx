import React from "react";
import Logo from "@/assets/images/Logofull.png";
import Profile from "@/assets/icons/profile.svg";
import Image from "next/image";
import SearchBox from "../ui/searchBox";

const content = () => {
  return (
    <>
      <div className="w-full h-full">
        <nav className="flex flex-row h-[20px] justify-between w-full my-[20px] px-[23px] z-50">
          <Image src={Logo} alt="Logo" className="w-[130px] h-[30px]" />
          <Image src={Profile} alt="Profile" className="w-[30px] h-[30px]" />
        </nav>
        <div className="flex flex-col justify-center items-center w-full h-[500px]">
          <h1 className="text-[30px] md:text-[40px] font-bold text-[#FFFFFF]">
            What can I help with AI?
          </h1>
          <SearchBox />
        </div>
      </div>
    </>
  );
};

export default content;
