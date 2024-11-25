'use client'
import React, { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";

const page = () => {
  const [ipAddress, setIpAddress] = useState("");
  const [result, setResult] = useState("");
  const [isError, setError] = useState("")
  const [isloading, setisLoading] = useState(true)

  const API_KEY =`6f841fd4ccb6dce94df383a052e38917`;

  const validateIpAddress =(ipAddress) => {
    const iPAddressRegex =/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return iPAddressRegex(ipAddress);
  }


  const handleIPSearch = async () => {
    if(!validateIpAddress){
      setError("Enter a valid IP Address")
      return;
    }
    setisLoading(true)

    try{
      const response = await fetch ()

    } catch (error){

    }finally{
      setisLoading(false)
    }
  }

  useEffect(()=> {
    handleIPSearch()
  },[])
  return (
    <div className="flex flex-col py-20 px-8 ">
      <h1 className="font-bold text-xl text-center">IP ADDRESS SEARCH</h1>
      <div className="border w-full py-8 px-4 mt-4">
        <div className="flex justify-between gap-4">
          <div className="relative">
            <div className="absolute top-2 left-2">
              <CiLocationOn className="h-6 w-6" />
            </div>
            <input
              type="text"
              value = {ipAddress}
              onChange={(e) => setIpAddress(e.target.value)}
              className="w-[260px] h-10 p-4 pl-12 border outline-none rounded"
              placeholder="Enter Ip Address"
            />
          </div>
          <button
            className="border w-full font-bold bg-blue-500 text-white rounded cursor-pointer"
            type="submit"
          >
            Search
          </button>
        </div>
        {/* result */}

        {result && (
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
        )}
      </div>
    </div>
  );
};

export default page;
