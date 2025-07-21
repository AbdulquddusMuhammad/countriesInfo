import React, { useEffect, useState } from "react";
import countryFlag from "../src/assets/image.png";
import { useNavigate } from "react-router-dom";

const Countries = ({
  data,
  region,
  setRegion,
  searchedData,
  setSearchedData,
  search,
  setSearch,
  previewData,
  setPreviewData,
  isDarkMode,
}) => {
  const [regList, setRegList] = useState([]);

  console.log(searchedData);

  useEffect(() => {
    if (search.trim() === "") {
      setSearchedData(data);
    }
  });

  const navigate = useNavigate();

  const gotoPreview = (ele) => {
    console.log("from country");
    setPreviewData(ele);
    console.log(ele);
    navigate("/preview", { state: { country: ele } });
  };

  return (
    <div className="flex flex-row flex-wrap gap-[2vw] justify-between mt-3">
      {searchedData
        .filter((item) => {
          if (region === "Random") {
            return true;
          } else {
            return item.region === region;
          }
        })
        .map((ele, index) => (
          <div
            key={index}
            onClick={() => {
              gotoPreview(ele);
            }}
            className={`rounded-2xl shadow-2xl w-[300px] max-h-[28rem] my-4 xl:max-h-[350px] ${
              isDarkMode ? "bg-[#2B3743]" : "bg-[#FFFFFF]"
            }`}
          >
            <div className="flag">
              <img
                src={ele.flags.png}
                className="rounded-2xl h-[30vh] w-full"
                alt=""
              />
            </div>
            <div className="description flex flex-col  p-4">
              <span className="mt-2">{ele.name.common}</span>
              <span className="mt-2">
                Population: {ele.population.toLocaleString()}
              </span>
              <span className="mt-2">Region: {ele.region}</span>
              <span className="mt-2">Capital: {ele.capital}</span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Countries;
