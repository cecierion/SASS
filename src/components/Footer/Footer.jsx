import React from "react";
import { FooterData } from "../../utils/DummyData";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
        <p className="py-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro quidem
          repudiandae dolorum repellendus cupiditate itaque nemo sint dolor
          doloribus voluptatibus!
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
          <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        {FooterData.map((foot) => (
          <div>
            <h6 className="font-medium text-gray-400">{foot.title}</h6>
            <ul>
              <li className="py-2 text-sm">{foot.el_1}</li>
              <li className="py-2 text-sm">{foot.el_2}</li>
              <li className="py-2 text-sm">{foot.el_3}</li>
              <li className="py-2 text-sm">{foot.el_4}</li>
              <li className="py-2 text-sm">{foot.el_5}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
