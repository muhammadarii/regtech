import React from "react";
import Image from "next/image";
import Send from "@/assets/icons/send.svg";
import Upload from "@/assets/icons/upload.svg";
import Voice from "@/assets/icons/voiceIcon.svg";
import Link from "next/link";

const searchBox = () => {
  return (
    <div className="w-[370px] md:w-[720px] h-[124px] rounded-[34px] bg-[#0D1C47] shadow-lg">
      <div className="flex flex-row items-center justify-between px-[20px] pt-[24px]">
        <input
          type="text"
          className="text-white bg-transparent w-full pr-[10px] text-[20px] placeholder-[20px] focus:outline-none"
          placeholder="Message Lazarev"
        />
        <button type="submit">
          <Image src={Send} alt="Send" className="w-[25px] h-[25px]" />
        </button>
      </div>
      <div className="flex flex-row items-center justify-between px-[20px] pt-[24px]">
        <Link href="#upload">
          <Image src={Upload} alt="Upload" className="w-[25px] h-[25px] " />
        </Link>
        <Link href="#voice">
          <Image src={Voice} alt="Voice" className="w-[25px] h-[25px]" />
        </Link>
      </div>
    </div>
  );
};

export default searchBox;
