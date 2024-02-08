import React from "react";
import logo from "../assets/logo.png";
import { footerContents, mediaLinks } from "../constants";

const Footer = () => {
  return (
    <div className=" w-full bg-black p-6 text-white">
      <div className="w-full lg:w-10/12 md:w-11/12 flex justify-between mx-auto items-center">
        <img src={logo} className="h-9" />
        <div className="flex gap-4 md:gap-6 lg:gap-8">
          {mediaLinks.map((mediaLink, index) => (
            <a key={mediaLink.id} href={mediaLink.link}>
              <img
                src={mediaLink.image}
                alt={mediaLink.id}
                className="h-7 bg-white p-1 rounded-sm"
              />
            </a>
          ))}
        </div>
      </div>

      <div className="w-full lg:w-10/12 md:w-11/12 h-0.5 bg-white my-7 mx-auto"></div>

      <div className="w-full lg:w-10/12 md:w-11/12 flex justify-between gap-4 whitespace-nowrap mx-auto flex-wrap mb-10">
        {footerContents.map((content, index) => (
          <div key={content.id} className=" py-4">
            <h4 className="text-lg font-semibold py-2">
              {content.heading}
            </h4>
            <div className="text-xs  lg:text-sm text-slate-300 flex flex-col gap-1">
              <p>{content.option1}</p>
              <p>{content.option2}</p>
              <p>{content.option3}</p>
              <p>{content.option4}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
