import React, { useEffect, useState } from "react";
import { LuMoonStar } from "react-icons/lu";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const Search_And_Filter = ({
  data,
  region,
  setRegion,
  searchedData,
  setSearchedData,
  search,
  setSearch,
  isDarkMode,
}) => {
  const [isToggle, setIsToggle] = useState(false);

  const handleToggle = () => {
    setIsToggle(!isToggle);
  };

  const handleRegion = (selectedRegion) => {
    setRegion(selectedRegion);
  };

  let filtered;

  const handleSearch = () => {
    if (search.trim() === "") {
      setSearchedData(data);
      return;
    }

    filtered = data.filter((item) => {
      return item.name.common.toLowerCase().includes(search.toLowerCase());
    });
    setSearchedData(filtered);
  };

  return (
    <div className="p-0 xl:p-3 flex flex-col xl:flex-row  justify-between h-[16vh] xl:h-[14vh] [box-shadow:_3px_3px_33px_-16px_black] mt-4">
      <div
        className={`searchfield flex  items-centers gap-[2vw] w-full [box-shadow:_3px_3px_33px_-16px_black] rounded-2xl p-0 xl:p-[3vh] pr-10 ${
          isDarkMode ? "bg-[#2B3743]" : "bg-[#FFFFFF]"
        } w-fit`}
      >
        <FaSearch className="w-4 h-full xl:h-[1.5rem]" />
        <input
          onChange={(e) => {
            setSearch(e.target.value);
            handleSearch();
          }}
          type="text"
          className="outline-none h-[6vh] border-none"
          placeholder="Search for a country..."
        />
      </div>
      <div className=" h-[40vh] top-0 flex items-baseline flex-col z-10">
        <div
          onClick={handleToggle}
          className={`filter ${
            isDarkMode ? "bg-[#2B3743]" : "bg-[#FFFFFF]"
          } flex px-9 [box-shadow:_3px_3px_33px_-16px_black] rounded-[.4rem] h-[6vh] xl:h-[10vh] mt-8 xl:mt-0 items-center`}
        >
          <span>Filter by {region} </span>
          <IoIosArrowDown className="ml-3.5" />
        </div>
        <div
          className={`filter-result ${
            isDarkMode ? "bg-[#2B3743]" : "bg-[#FFFFFF]"
          } flex flex-col [box-shadow:_3px_3px_33px_-16px_black] w-full mt-1 rounded-[.4rem] p-3.5 ${
            isToggle ? "block" : "hidden"
          }`}
        >
          <span
            onClick={() => {
              handleRegion("Random");
            }}
          >
            Random
          </span>
          <span
            onClick={() => {
              handleRegion("Africa");
            }}
          >
            Africa
          </span>
          <span
            onClick={() => {
              handleRegion("Americas");
            }}
          >
            Americas
          </span>
          <span
            onClick={() => {
              handleRegion("Asia");
            }}
          >
            Asia
          </span>
          <span
            onClick={() => {
              handleRegion("Europe");
            }}
          >
            Europe
          </span>
          <span
            onClick={() => {
              handleRegion("Oceania");
            }}
          >
            Oceania
          </span>
          <span
            onClick={() => {
              handleRegion("Antartic");
            }}
          >
            Antarctic
          </span>
        </div>
      </div>
    </div>
  );
};

export default Search_And_Filter;
