import "react-datepicker/dist/react-datepicker.css";
import React, { useEffect, useState } from "react";
import { Strings } from "../constants";
import { LabelComponent } from "./label";

interface Filter {
  closeModal: () => void;
  isOpen: any;
}

const Filtermodal:React.FC<Filter> = ({ isOpen, closeModal }) => {
  const [searchValue, setSearchValue] = useState("");

  const [clickedNumber, setClickedNumber] = useState<number | null>(null);
  const [value, setValue] = useState<number>(0);
  const [isOpenn, setIsOpenn] = useState(false);
  const [message, setMessage] = useState("");
  const toggleDropdown = () => {
    setIsOpenn(!isOpenn);
  };
  const handleSearchChange = (event: { target: { value: string; }; }) => {
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
  const handleMessageChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setMessage(e.target.value);
  };

  const handleInputChange = (event: { target: { value: string; }; }) => {
    const newValue = parseInt(event.target.value, 10);
    setValue(newValue);
  };
  const handleDateChange = (date: React.SetStateAction<Date>) => {
    setSelectedDate(date);
  };

  const gradientBackground = `linear-gradient(to right, #8d3f42 0%, #8d3f42 ${parseInt(
    (Number(value) / 100) * 100 as any
  )}%, #DEE2E6 ${parseInt((Number(value) / 100) * 100 as any)}%, #DEE2E6 100%)`;

  const updateSliderValue = (value: number) => {
    const sliderValue = document.getElementById("slider-value");
    if (sliderValue) {
        sliderValue.textContent = `$${value}/h`;
    }
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
        <div className="fixed left-0 top-0 z-50 flex h-full w-full  items-center justify-center  bg-black bg-opacity-[80%]">
          <div className=" relative min-h-[600px] rounded-2xl  bg-white   p-4 dark:bg-[#000] xs:w-[300px] md:w-[500px]">
            <div className="mb-[20px] text-[24px] font-bold text-[#000] dark:text-[white]">
              Filters
            </div>
            <div className="range-container my-4">
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
            </div>
            <div className="">
              <div className="inline-block- relative">
                <label
                  htmlFor="countries"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  {Strings.TECHNICAL_SKILLS}
                </label>
                <div
                  className="flex w-full cursor-pointer items-center justify-between rounded-[10px] border border-[#8D3F42] px-4 py-[14px] text-[16px]"
                  onClick={toggleDropdown}
                >
                  {Strings.SELECT}
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
                  className={`absolute left-0 top-full ml-[5px] mt-[10px] overflow-hidden rounded-[10px] bg-white xs:h-[520px]  xs:w-[280px] md:h-[490px] md:w-[440px] ${
                    isOpenn ? "block" : "hidden"
                  }`}
                >
                  <div
                    className={` mx-[20px] mb-[10px] flex h-[40px] flex-row items-center rounded-[10px] border border-[#8D3F42] bg-white  xs:w-[240px] md:w-[398px] ${
                      isOpenn ? "block" : "hidden"
                    } mt-[10px] w-full border-t  bg-gray-200  py-2`}
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
                {Strings.Soft_skills}
              </label>
              <select
                id="countries"
                className="block w-full rounded-lg border border-[#8d3f42] bg-transparent px-[10px] py-[14px] text-[16px] text-gray-900 outline-none dark:text-white "
              >
                <option selected className="dark:text-black">
                  {Strings.CHOOSE_SKILL}
                </option>
                <option value="US" className="dark:text-black">
                  {Strings.REACT}
                </option>
                <option value="CA" className="dark:text-black">
                  {Strings.JavaScript}
                </option>
                <option value="FR" className="dark:text-black">
                  {Strings.HTML}
                </option>
                <option value="DE" className="dark:text-black">
                  {Strings.CSS}
                </option>
              </select>
            </div>
            <div className="flex- mt-3 ">
              <label
                htmlFor="countries"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                {Strings.COUNTRY}
              </label>
              <select
                id="countries"
                className="block w-full rounded-lg border border-[#8d3f42] bg-transparent px-[12px] py-[14px] text-[16px] text-gray-900 outline-none dark:text-white"
              >
                <option selected className="dark:text-black">
                  {Strings.CHOOSE_COUNTRY}
                </option>
                <option value="US" className="dark:text-black">
                  {Strings.UNITED_STATE}
                </option>
                <option value="CA" className="dark:text-black">
                  {Strings.CANADA}
                </option>
                <option value="FR" className="dark:text-black">
                  {Strings.FRANCE}
                </option>
                <option value="DE" className="dark:text-black">
                  {Strings.GERMANY}
                </option>
              </select>
            </div>
            <div className="mt-[30px]">
              <label
                htmlFor="countries"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                {Strings.AVAILABILITY}
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
                  {Strings.ONLY_VETTED_SKILLS}
                </label>
              </div>
            </div>
            <div className="mt-[30px]">
              <div className="mb-[14px] text-[16px] font-bold text-[#000] dark:text-[white]">
                {Strings.PRICE_PER_HOUR}
              </div>
              <div className="slidecontainer">
                <input
                  id="myinput"
                  type="range"
                  min={0}
                  value={value}
                  max={100}
                  className="h-[10px] w-full appearance-none rounded-md bg-transparent outline-none "
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
                {Strings.Apply}
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
