import React from "react";
import { CiLocationOn } from "react-icons/ci"

const page = () => {
  return (
    <div className="flex flex-col py-20 px-8 text-center">
      <h1 className="font-bold text-xl">IP ADDRESS SEARCH</h1>
      <div className="border w-full py-8 px-4 mt-4">
        <div className="flex justify-between">
          <div className="relative"> 
            <div className="absolute h-20 w-20"><CiLocationOn /></div>
            <input type="text" className="w-[240px] h-10 p-4 pl-8 border" placeholder="Enter Ip address" />
          </div>
          <button type="submit">Search</button>
        </div>
      </div>
    </div>
  );
};

export default page;
