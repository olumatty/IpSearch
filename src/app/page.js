"use client";
import React, { useState } from "react";
import { CiLocationOn } from "react-icons/ci";

const page = () => {
  const [ipAddress, setIpAddress] = useState("");
  const [result, setResult] = useState("");
  const [isError, setError] = useState("");
  const [isloading, setisLoading] = useState(true);

  const API_KEY = "6f841fd4ccb6dce94df383a052e38917";

  const validateIpAddress = (ipAddress) => {
    const iPAddressRegex =
      /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return iPAddressRegex.test(ipAddress);
  };

  const handleIPSearch = async () => {
    setError("");
    if (!validateIpAddress(ipAddress)) {
      setError("Enter a valid IP Address");
      return;
    }
    setisLoading(true);

    try {
      const response = await fetch(
        `http://api.ipstack.com/${ipAddress}?access_key=${API_KEY}`
      );
      const data = await response.json();
      if (response.ok) {
        setResult(data);
      } else {
        setError("Failed to fetch Ip data");
      }
    } catch (error) {
      setError("Error fetching data. Please try again");
    } finally {
      setisLoading(false);
    }
  };

  return (
    <div className="flex flex-col py-20 px-8 ">
      <h1 className="font-bold text-xl text-center">IP ADDRESS SEARCH</h1>
      <div className="border w-full md:flex md:flex-col md:mx-auto md:w-[600px] py-8 px-4 mt-4">
        <div className="flex justify-between gap-4">
          <div className="relative">
            <div className="absolute top-2 left-2">
              <CiLocationOn className="h-6 w-6" />
            </div>
            <input
              type="text"
              value={ipAddress}
              onChange={(e) => setIpAddress(e.target.value)}
              className="w-[200px] md:w-[500px] h-10 p-4 pl-12 border outline-none rounded"
              placeholder="Enter Ip Address"
            />
          </div>
          <button
            className="border w-[200px] font-bold bg-blue-500 text-white rounded cursor-pointer"
            type="submit"
            onClick={handleIPSearch}
          >
            Search
          </button>
        </div>
        {/* result */}
        
        {isError && <p className="text-red-500 mt-4">{isError}</p>}

        {result && (
          <div className="mt-6 grid grid-cols-3 gap-4 items-center">
            <div className="flex flex-col justify-center items-center border-blue-500 border">
              <h3 className="mt-3 font-bold ">Type</h3>
              <p className="mt-2 mb-4 font-semibold"> {result.type}</p>
            </div>
            <div className="flex flex-col justify-center items-center border-blue-500 border">
              <h3 className="mt-3 font-bold ">IP</h3>
              <p className="mt-2 mb-4 font-semibold"> {result.ip}</p>
            </div>
            <div className="flex flex-col justify-center items-center border-blue-500 border">
              <h3 className="mt-3 font-bold ">Continent  </h3>
              <p className="mt-2 mb-4 font-semibold"> {result.continent_name}</p>
            </div>
            <div className="flex flex-col justify-center items-center border-blue-500 border">
              <h3 className="mt-3 font-bold ">Country</h3>
              <p className="mt-2 mb-4 font-semibold"> {result.country_name}</p>
            </div>
            <div className="flex flex-col justify-center items-center border-blue-500 border">
              <h3 className="mt-3 font-bold ">Country Code</h3>
              <p className="mt-2 mb-4 font-semibold">{result.country_code}</p>
            </div>
            <div className="flex flex-col justify-center items-center border-blue-500 border">
              <h3 className="mt-3 font-bold ">Region</h3>
              <p className="mt-2 mb-4 font-semibold"> {result.region_name}</p>
            </div>
            <div className="flex flex-col justify-center items-center border-blue-500 border">
              <h3 className="mt-3 font-bold ">Region Code</h3>
              <p className="mt-2 mb-4 font-semibold"> {result.region_code}</p>
            </div>
            <div className="flex flex-col justify-center items-center border-blue-500 border">
              <h3 className="mt-3 font-bold ">Latitude</h3>
              <p className="mt-2 mb-4 font-semibold">
                {" "}
                {result.latitude.toFixed(2)}
              </p>
            </div>
            <div className="flex flex-col justify-center items-center border-blue-500 border">
              <h3 className="mt-3 font-bold ">Longitude</h3>
              <p className="mt-2 mb-4 font-semibold">
                {" "}
                {result.longitude.toFixed(2)}
              </p>
            </div>
            <div className="flex flex-col justify-center items-center border-blue-500 border">
              <h3 className="mt-3 font-bold ">Zip</h3>
              <p className="mt-2 mb-4 font-semibold">{result.zip}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
