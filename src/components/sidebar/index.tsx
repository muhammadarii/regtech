import Image from "next/image";
import React from "react";
import SearchIcon from "@/assets/icons/searchIcon.svg";
import AddIcon from "@/assets/icons/addIcon.svg";

const sidebar = () => {
  return (
    <div className="w-[250px] h-screen bg-[#213555] hidden md:flex flex-col">
      <div className="flex flex-row items-center justify-end pt-[23px] pr-[11px] gap-[17px]">
        <Image src={SearchIcon} alt="Search" className="w-[24px] h-[24px]" />
        <Image src={AddIcon} alt="Add" className="w-[24px] h-[24px]" />
      </div>
      <div className="flex flex-col mt-[30px] mx-[10px] bg-[#0D1C47] rounded-[10px] shadow-sm p-[10px]">
        <p className="text-[11px] font-semibold text-[#FFFFFF] ">Frequently</p>
        <div className="flex flex-col text-[12px] font-bold text-[#FFFFFF] mt-[15px] gap-[10px]">
          <p>Jelaskan apa yang di maksu...</p>
          <p>Buatkan pengertian apa dari...</p>
          <p>Jelaskan apa yang di mana t...</p>
          <p>Buatkan pengertian apa tent...</p>
        </div>
      </div>
    </div>
  );
};

export default sidebar;
