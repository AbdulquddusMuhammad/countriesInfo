import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";

const Preview = ({ previewData, setPreviewData, isDarkMode }) => {
  const data = previewData;
  const [isHover, setIsHover] = useState(false);

  const firstNativeName = Object.values(data.name.nativeName)[0];
  //   console.log(firstNativeName.official);
  console.log(data);

  console.log(firstNativeName.official.length);
  console.log(firstNativeName.official.slice(0, 17));

  const checkCharLength = () => {
    if (firstNativeName.official.length > 17) {
      let shorted = firstNativeName.official.slice(0, 17);
      return shorted + ".....";
    } else {
      return firstNativeName.official;
    }
  };

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  useEffect(() => {
    console.log(isHover);
  }, [isHover]);

  return (
    <div className="p-0 xl:p-10 mb-6">
      <button
        className={`shadow-2xl my-14 flex items-center gap-2 ${
          isDarkMode ? "bg-[#2B3743]" : "bg-[#FFFFFF]"
        } py-2 px-4 rounded-md`}
      >
        <FaArrowLeft />
        Back
      </button>
      <div className="flex w-full flex-col xl:flex-row">
        <div className="flag-container w-full xl:w-1/2 flex justify-start items-center">
          <img
            className="h-[16rem] xl:h-[46vh] w-full xl:w-[76vh] "
            src={data.flags.png}
            alt={data.name.common}
          />
        </div>
        <div className="flex flex-col justify-center w-1/2">
          <span className="text-3xl ml-4">{data.name.common}</span>
          <div className="description grid p-4 grid-cols-1  xl:grid-cols-2 gap-4 w-auto">
            <div className="[&>span]:block [&>span]:mt-[2vh] w-1/2 [&>span]:whitespace-nowrap w-auto relative">
              <span
                className={`top-[-40px] absolute ${
                  isDarkMode ? "bg-[#2B3743]" : "bg-[#FFFFFF]"
                } p-2.5 ${isHover ? "!block" : "!hidden"}`}
              >
                Native Name: {firstNativeName.official}
              </span>
              <span
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="hoverthis"
              >
                Native Name: {checkCharLength()}
              </span>
              <span>Population: {data.population.toLocaleString()}</span>
              <span>Region: {data.region}</span>
              <span>Sub Region: N/A</span>
              <span>Capital: N/A</span>
            </div>
            <div className="w-1/2 [&>span]:block [&>span]:mt-[2vh]  [&>span]:whitespace-nowrap w-auto">
              <span>Top Level Domain: N/A</span>
              <span>Currencies: N/A</span>
              <span>Languages: N/A</span>
            </div>
          </div>
          <div className="additionalInfo ml-4 flex items-center">
            <span className="whitespace-nowrap mr-4">Border Countries:</span>
            <div className="flex justify-start gap-4 w-full">
              <span
                className={`${
                  isDarkMode ? "bg-[#2B3743]" : "bg-[#FFFFFF]"
                } rounded-[.2rem] p-2 shadow-2xl`}
              >
                N/A
              </span>
              <span
                className={`${
                  isDarkMode ? "bg-[#2B3743]" : "bg-[#FFFFFF]"
                } rounded-[.2rem] p-2 shadow-2xl`}
              >
                N/A
              </span>
              <span
                className={`${
                  isDarkMode ? "bg-[#2B3743]" : "bg-[#FFFFFF]"
                } rounded-[.2rem] p-2 shadow-2xl`}
              >
                N/A
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
