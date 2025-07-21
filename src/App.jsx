import React from "react";
import Countries from "./Countries";
import Search_And_Filter from "./Search_And_Filter";
import { IoMdMoon } from "react-icons/io";
import { useState, useEffect } from "react";
import Preview from "./Preview";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const [data, setData] = useState(null);
  const [searchedData, setSearchedData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [region, setRegion] = useState("Random");
  const [search, setSearch] = useState("");
  const [previewData, setPreviewData] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (data) {
      data.map((item) => {
        // console.log(item.name.common);
      });
    }
  });

  // console.log(region);

  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,flags,capital,region,population"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading....</p>;

  // console.log(data[0]);

  const handleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      id="darkModeLight"
      className={`${
        isDarkMode
          ? "bg-[#202D36] [&>*]:!text-[#FFFFFF]"
          : "bg-[#FFFFFF] [&>*]:!text-[#000000]"
      } h-screen w-screen overflow-x-hidden [&>div]:shadow-2xl `}
    >
      <div
        className={`top flex ${
          isDarkMode ? "bg-[#2B3743]" : "bg-[#FFFFFF]"
        }  p-[5vh] justify-between shadow-2xl `}
      >
        <span className="text-[4vw] xl:text-[4vh]">Where in the world?</span>
        <div
          onClick={() => handleDarkMode()}
          className="dark-mode-toggle flex items-center gap-4"
        >
          <span>
            <IoMdMoon className="w-8 h-8" />
          </span>
          <span>Dark Mode</span>
        </div>
      </div>

      <div
        className={`body px-[5vh] h-auto ${
          isDarkMode ? "bg-[#202D36]" : "bg-[#FFFFFF]"
        }`}
      >
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Search_And_Filter
                  data={data}
                  region={region}
                  setRegion={setRegion}
                  searchedData={searchedData}
                  setSearchedData={setSearchedData}
                  search={search}
                  setSearch={setSearch}
                  isDarkMode={isDarkMode}
                />
                <Countries
                  data={data}
                  region={region}
                  setRegion={setRegion}
                  searchedData={searchedData}
                  setSearchedData={setSearchedData}
                  search={search}
                  setSearch={setSearch}
                  previewData={previewData}
                  setPreviewData={setPreviewData}
                  isDarkMode={isDarkMode}
                />
              </>
            }
          />
          <Route
            path="/preview"
            element={
              <Preview
                previewData={previewData}
                setPreviewData={setPreviewData}
                isDarkMode={isDarkMode}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
