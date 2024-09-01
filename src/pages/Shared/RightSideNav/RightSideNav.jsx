import React from "react";
import { RiGoogleFill } from "react-icons/ri";
import { FaGithub, FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";

const RightSideNav = () => {
  return (
    <div>
      <h2 className="font-bold text-xl">Login With</h2>
      <div className="space-y-2 mt-3">
        <button className="btn btn-outline btn-info w-full">
          <RiGoogleFill />
          Login with Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub />
          Login with Github
        </button>
      </div>
      <h2 className="font-bold text-xl mt-5">Find Us On</h2>
      <div className=" mt-3">
        <a className=" flex items-center gap-2 text-lg text-gray-600 border border-gray-300 p-3 rounded-t-lg">
          <FaFacebook />
          Facebook
        </a>
        <a className=" flex items-center gap-2 text-lg text-gray-600 border-x border-gray-300 p-3">
          <AiFillTwitterCircle />
          Twitter
        </a>
        <a className=" flex items-center gap-2 text-lg text-gray-600 border border-gray-300 p-3 rounded-b-lg">
          <AiFillTwitterCircle />
          Twitter
        </a>
      </div>

      <div className="p-3 my-6 space-y-3 mb-6 bg-gray-100 rounded">
        <h2 className="font-bold text-xl mt-5">Q-Zone</h2>
        <img src={qZone1} alt="" srcset="" />
        <img src={qZone2} alt="" srcset="" />
        <img src={qZone3} alt="" srcset="" />
      </div>
    </div>
  );
};

export default RightSideNav;
