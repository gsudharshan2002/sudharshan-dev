import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import {  SiPython } from "react-icons/si";
import { DiDotnet, DiJava, DiMysql } from "react-icons/di";
import { FaNodeJs, FaLeaf } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

const iconStyle =
  "text-7xl transition-transform duration-300 group-hover:scale-110";

const Tech = () => {
  return (
    <div className="border-b border-neutral-800 pb-4">
      <h1 className="my-20 text-4xl text-center">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4 pb-4">
       <div
          className="group rounded-2xl border-4 border-neutral-800 p-4 animate-bounce"
          style={{ animationDelay: "150ms" }}
        >
          <DiJava className={`${iconStyle} text-orange-600`} />
        </div>

        <div
          className="group rounded-2xl border-4 border-neutral-800 p-4 animate-bounce"
          style={{ animationDelay: "0ms" }}
        >
          <RiReactjsLine className={`${iconStyle} text-cyan-400`} />
        </div>


        <div
          className="group rounded-2xl border-4 border-neutral-800 p-4 animate-bounce"
          style={{ animationDelay: "150ms" }}
        >
          <TbBrandNextjs className={`${iconStyle} text-white`} />
        </div>


        


        <div
          className="group rounded-2xl border-4 border-neutral-800 p-4 animate-bounce"
          style={{ animationDelay: "0ms" }}
        >
          <FaNodeJs className={`${iconStyle} text-green-500`} />
        </div>


        <div
          className="group rounded-2xl border-4 border-neutral-800 p-4 animate-bounce"
          style={{ animationDelay: "150ms" }}
        >
          <BiLogoPostgresql className={`${iconStyle} text-sky-700`} />
        </div>


        <div
          className="group rounded-2xl border-4 border-neutral-800 p-4 animate-bounce"
          style={{ animationDelay: "0ms" }}
        >
          <DiDotnet className={`${iconStyle} text-sky-700`} />
        </div>

       


        <div
          className="group rounded-2xl border-4 border-neutral-800 p-4 animate-bounce"
          style={{ animationDelay: "0ms" }}
        >
          <SiPython className={`${iconStyle} text-yellow-400`} />
        </div>


        <div
          className="group rounded-2xl border-4 border-neutral-800 p-4 animate-bounce"
          style={{ animationDelay: "150ms" }}
        >
          <FaLeaf className={`${iconStyle} text-green-600`} />
        </div>

        <div
          className="group rounded-2xl border-4 border-neutral-800 p-4 animate-bounce"
          style={{ animationDelay: "0ms" }}
        >
          <DiMysql className={`${iconStyle} text-blue-600`} />
        </div>
      </div>
    </div>
  );
};

export default Tech;
