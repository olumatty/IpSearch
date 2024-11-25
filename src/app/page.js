import React, { useState } from "react";
import { CiLocationOn } from "react-icons/ci"

const page = () => {
  const [ipAddress, setIpAddress] = useState("")
  return (
    <div className="flex flex-col py-20 px-8 ">
      <h1 className="font-bold text-xl text-center">IP ADDRESS SEARCH</h1>
      <div className="border w-full py-8 px-4 mt-4">
        <div className="flex justify-between gap-4">
          <div className="relative"> 
            <div className="absolute top-2 left-2"><CiLocationOn className="h-6 w-6"/></div>
            <input type="text" className="w-[260px] h-10 p-4 pl-12 border outline-none rounded" placeholder="Enter Ip address" />
          </div>
          <button className="border w-full font-bold bg-blue-500 text-white rounded cursor-pointer" type="submit">Search</button>
        </div>
        {/* result */}
        <div className="mt-4">
          <p>ip : </p>
          <p>type : </p>
          <p>Continent_name : </p>
          <p>Country_name : </p>
          <p>Country_code : </p>
          <p>Region_name : </p>
          <p>Region_code : </p>
          <p>Latitude : </p>
          <p>Longitude : </p>
          <p>Zip : </p>
        </div>
      </div>
    </div>
  );
};

export default page;
