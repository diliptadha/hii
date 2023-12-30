import React, { useEffect, useState } from "react";
import { LabelComponent } from "../components/label";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Strings } from "../constants";
import axios from "axios";

const Filtermodal = ({ isOpen, closeModal }) => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  const [selectedOption, setSelectedOption] = useState<number>(1);
  const [defineSkills, setDefineSkills] = useState<boolean>(false);
  const [clickedNumber, setClickedNumber] = useState(null);
  const [value, setValue] = useState<number>(0);
  const [isOpenn, setIsOpenn] = useState(false);

  const [customValue, setCustomValue] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [message, setMessage] = useState("");
  const toggleDropdown = () => {
    setIsOpenn(!isOpenn);
  };
  const handleSearchChange = (event) => {
    setSearchValue(event.target.value.toLowerCase());
  };
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);
  

  const initialDateString = "2023-12-31"; // Replace this with your actual date string
  const initialDate = new Date(initialDateString);

  const [selectedDate, setSelectedDate] = useState(initialDate);
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleInputChange = (event) => {
    const newValue = parseInt(event.target.value, 10);
    setValue(newValue);
  };
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const gradientBackground = `linear-gradient(to right, #8d3f42 0%, #8d3f42 ${parseInt(
    (value / 100) * 100
  )}%, #DEE2E6 ${parseInt((value / 100) * 100)}%, #DEE2E6 100%)`;

  const updateSliderValue = (value) => {
    const sliderValue = document.getElementById("slider-value");
    sliderValue.textContent = `$${value}/h`;
  };


  
 
  
  const skillsData = [
    "JavaScript",
    "React",
    "Python",
    "MongoDB",
    "GCP",
    "vue.Js",
    "Kubernetes",
    "3dcart",
    "ActionScript 3",
    "Actix",
    "Typescript",
    "Node.js",
    "Ruby",
    "MySQL",
    "AWS",
    "Angular",
    "GoLang",
    "Jenkins",
    "3DS Max",
    "ActiveCampaign",
    "3DS Max",
    "ActiveCampaign",
  ];
  

  return (
    <>
      {isOpen && (
        <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center  bg-black bg-opacity-[80%]">
          <div className=" relative min-h-[600px] w-[500px]   rounded-2xl bg-white p-4 dark:bg-[#000]">
            <div className="mb-[20px] text-[24px] font-bold text-[#000] dark:text-[white]">
              Filters
            </div>
            {/* <div className="range-container my-4">
              <div className="mb-[14px] text-[16px] font-bold text-[#000] dark:text-[white]">
                How much raise do you want to give to Mihir?
              </div>
              <div className="slidecontainer flex items-center">
                <div className="chrome">
                  <input
                    id="myinput"
                    type="range"
                    min={0}
                    value={value}
                    max={20}
                    className="h-[15px] w-[400px] rounded-md outline-none bg-transparent appearance-none "
                    style={{ background: gradientBackground }}
                    onChange={handleInputChange}
                  />
                </div>
                <LabelComponent className="ml-[20px]" label="$20/h" />
              </div>

              <div id="slider-value" className="slider-value">
                ${value}/h
              </div>
            </div> */}
            <div className="">
              <div className="inline-block- relative">
                <label
                  htmlFor="countries"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Technical skills
                </label>
                <div
                  className="bg-red-800- flex w-full cursor-pointer justify-between items-center text-[16px] rounded-[10px] border border-[#8D3F42] px-4 py-[14px]"
                  onClick={toggleDropdown}
                >
                  Select
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className={`h-6 w-6 transform transition-transform ${
                      isOpenn ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>

                <div
                  className={`absolute left-0 top-full ml-[5px] mt-[10px] h-[490px] w-[456px] rounded-[10px] bg-white overflow-hidden ${
                    isOpenn ? "block" : "hidden"
                  }`}
                >
                  <div
                    className={` mx-[20px] mb-[10px] flex h-[40px] w-[410px] flex-row items-center rounded-[10px] border  border-[#8D3F42] bg-white ${
                      isOpenn ? "block" : "hidden"
                    } mt-[10px] w-full border-t  bg-gray-200  py-2  `}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="ml-[10px] mr-2 h-6 w-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      />
                    </svg>
                    <input
                      type="text"
                      placeholder="Search skills"
                      onChange={handleSearchChange}
                      className="outline-none"
                      // You can add an onChange handler for search functionality
                    />
                  </div>
                  <div
                    className={` grid grid-cols-2  ${
                      isOpenn ? "block" : "hidden"
                    }  bg-white- z-10 w-full`}
                  >
                    {skillsData.map(
                      (skill) =>
                        skill.toLowerCase().includes(searchValue) && (
                          <label key={skill} className=" px-4 py-2">
                            <input type="checkbox" className="mr-2" /> {skill}
                          </label>
                        )
                    )}

                    {/* Add more checkboxes as needed */}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-[30px]">
              <div className="flex items-center">
                <input
                  id="link-checkbox"
                  type="checkbox"
                  value=""
                  className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                />
                <label
                  htmlFor="link-checkbox"
                  className="ms-2 text-[16px] font-bold text-[#000] dark:text-white"
                >
                  Only consider vetted skills
                </label>
              </div>
            </div>

            <div className="flex- mt-3 ">
              <label
                htmlFor="countries"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Soft skills
              </label>
              <select
                id="countries"
                className="block w-full rounded-lg border border-[#8d3f42] bg-transparent px-[10px] py-[14px] text-[16px] text-gray-900 outline-none dark:text-white "
              >
                <option selected>Choose a skill</option>
                <option value="US">React</option>
                <option value="CA">JavaScript</option>
                <option value="FR">HTML</option>
                <option value="DE">CSS</option>
              </select>
            </div>
            <div className="flex- mt-3 ">
              <label
                htmlFor="countries"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Country
              </label>
              <select
                id="countries"
                className="  block w-full rounded-lg border border-[#8d3f42] bg-transparent py-[14px] px-[12px] text-[16px] text-gray-900 outline-none dark:text-white"
              >
                <option selected>Choose a country</option>
                <option value="US" className="greenColor">
                  United States
                </option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
            <div className="mt-[30px]">
              <label
                htmlFor="countries"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Availability
              </label>
              <div className="flex items-center rounded-[10px] border border-[#8D3F42] px-[10px] py-[16px] text-[16px]">
                <input
                  id="link-checkbox"
                  type="checkbox"
                  value=""
                  className="  h-4 w-4 rounded border-gray-300 bg-gray-100 text-[#8D3F42] focus:ring-2 focus:ring-[#8D3F42] dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-[#8D3F42]"
                />
                <label
                  htmlFor="link-checkbox"
                  className="ms-2 text-[16px] font-bold text-[#000] dark:text-white"
                >
                  Only consider vetted skills
                </label>
              </div>
            </div>
            <div className="mt-[30px]">
              <div className="mb-[14px] text-[16px] font-bold text-[#000] dark:text-[white]">
                Price per hour
              </div>
              <div className="slidecontainer">
                  <input
                    id="myinput"
                    type="range"
                    min={0}
                    value={value}
                    max={100}
                    className="h-[10px] w-[440px] rounded-md outline-none bg-transparent appearance-none "
                    style={{ background: gradientBackground }}
                    onChange={handleInputChange}
                  />
                </div>
                <div id="slider-value" className="slider-value">
                ${value}/h
              </div>
            </div>

            <div className="mt-[20px] text-right">
              <button
                //    onClick={handleSubmit}
                className=" rounded-[25px] bg-white px-[20px] py-2 font-semibold text-[#000] shadow-md outline-none dark:bg-[#8d3f42] dark:text-[#fff]"
                type="submit"
              >
                Apply
              </button>
            </div>

            <div className="absolute right-[-40px] top-0">
              <button
                className="flex h-8 w-8 items-center justify-center rounded-full border-transparent bg-white text-black opacity-[80%] dark:bg-[#8d3f42]"
                onClick={closeModal}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-6 w-6 text-[#000] dark:text-[#fff] "
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Filtermodal;
