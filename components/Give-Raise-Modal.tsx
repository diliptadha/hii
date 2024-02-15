import React, { useState } from "react";
import { LabelComponent } from "./label";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Strings } from "../constants";
import axios from "axios";

const GiveRaiseModal = ({ isOpenn, closeModall }) => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);

  const [selectedOption, setSelectedOption] = useState<number>(1);
  const [defineSkills, setDefineSkills] = useState<boolean>(false);
  const [clickedNumber, setClickedNumber] = useState(null);
  const [value, setValue] = useState<number>(0);

  const [customValue, setCustomValue] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [message, setMessage] = useState("");

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
    (value / 20) * 100
  )}%, #DEE2E6 ${parseInt((value / 20) * 100)}%, #DEE2E6 100%)`;

  const updateSliderValue = (value) => {
    const sliderValue = document.getElementById("slider-value");
    sliderValue.textContent = `$${value}/h`;
  };

  const currentDate = new Date();
  const day = currentDate.getDate().toString().padStart(2, "0");
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0"); // Month is zero-based, so add 1
  const year = currentDate.getFullYear();

  // Format the date as "dd mm yyyy"
  const formattedDate = `${day}/${month}/${year}`;

  const CustomDatePickerInput = ({ value, onClick }) => (
    <div
      className="flex w-full  items-center justify-center  rounded-lg border border-[#8d3f42] bg-white p-2.5 text-sm  text-[#000] dark:bg-[#000] dark:text-white
     "
      onClick={onClick}
    >
      {value || formattedDate}
      {/* <CalendarIcon className="absolute right-2.5 top-2.5 h-4 w-4 text-gray-400" /> */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="ml-1 h-6 w-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
        />
      </svg>
    </div>
  );
  const resetState = () => {
    setValue(0);
    setSelectedDate(initialDate);
    setMessage("");
  };
  const handleSubmit = async () => {
    try {
      // Validate user input (add your validation logic here)
      if (!value || isNaN(parseInt(value))) {
        // Handle invalid value
        console.error("Invalid value. Please enter a valid raise amount.");
        return;
      }

      if (
        selectedDate &&
        !(selectedDate instanceof Date && !isNaN(selectedDate))
      ) {
        // Handle invalid date
        console.error("Invalid date. Please select a valid effective date.");
        return;
      }

      const raiseData = {
        raiseAmount: value,
        effectiveOn: selectedDate
          ? selectedDate.toISOString().split("T")[0]
          : null,
        currentRate: 10,
        afterRaiseRate: 10 + parseInt(value),
        messageRegardingRaise: message,
      };

      console.log("Request Data:", raiseData);

      const response = await axios.post(
        "https://api.eremotehire.com/myTeam/giveRaiseData",
        raiseData,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJSSF8wMDAwMDAzIiwiZW1haWxJZCI6Ik5pcmRvc2hQYXRpbEBnbWFpbC5jb20iLCJpYXQiOjE3MDI3MjY3ODcsImV4cCI6MTcwMjczMDM4N30.aI1D1PjRpLt6YayBwlHw7kVxBQwJWijMAt_XwLn_nuU",
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Response Data:", response.data);
      closeModall();
      // Optionally, display a success message to the user
      alert("Raise submitted successfully!");

      resetState();
    } catch (error) {
      console.error(
        "API Error:",
        error.response ? error.response.data : error.message
      );
      // Handle the error (e.g., display an error message to the user)
      alert("Error submitting raise. Please try again.");
    }
  };

  return (
    <>
      {isOpenn && (
        <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center  bg-black bg-opacity-[80%]">
          <div className=" relative min-h-[600px] w-[500px]   rounded-2xl bg-white p-4 dark:bg-[#000]">
            <div className="mb-[20px] text-[20px] font-bold text-[#000] dark:text-[white]">
              {Strings.GIVE_RAISE}
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
                    className="h-[15px] w-[400px] appearance-none rounded-md bg-transparent outline-none "
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

            <div>
              <div className="mb-[14px] text-[16px] font-bold text-[#000] dark:text-[white]">
                When is this raise effective?
              </div>
              <div>
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  dateFormat="dd/MM/yy"
                  customInput={<CustomDatePickerInput />}
                />
              </div>
            </div>

            <div className="mt-3 flex space-x-2">
              <div className="w-full max-w-[18rem] justify-between  rounded-[5px] border-2 border-[#8d3f42]   bg-white shadow-[4px_6px_10px_-3px_#bfc9d4]  dark:bg-[#000]  dark:shadow-none ">
                <div className="px-4 py-7 ">
                  <LabelComponent
                    className="text-center text-[16px] font-semibold leading-normal text-[#000] dark:text-gray-300"
                    label="CURRENT RATE"
                  />

                  <LabelComponent
                    className=" mt-1 text-center text-[18px] font-bold leading-normal text-[#3b3f5c] dark:text-white-light"
                    label="$10/h"
                  />
                  <LabelComponent
                    className=" mt-1 text-center text-[16px] font-normal leading-normal text-[#3b3f5c] dark:text-white-light"
                    label="$1/month"
                  />
                </div>
              </div>
              <div className="w-full max-w-[18rem] justify-between  rounded-[5px] border-2 border-[#8d3f42]   bg-white shadow-[4px_6px_10px_-3px_#bfc9d4]  dark:bg-[#000]  dark:shadow-none ">
                <div className="px-4 py-7 ">
                  <LabelComponent
                    className="text-center text-[16px] font-semibold leading-normal text-[#000] dark:text-gray-300"
                    label="RATE AFTER RAISE"
                  />

                  <LabelComponent
                    className=" mt-1 text-center text-[18px] font-bold leading-normal text-[#3b3f5c] dark:text-white-light"
                    label={`$${10 + parseInt(value)}/h`}
                  />
                  <LabelComponent
                    className=" mt-1 text-center text-[16px] font-normal leading-normal text-[#3b3f5c] dark:text-white-light"
                    label="$2/month"
                  />
                </div>
              </div>
            </div>
            <div className="mb-[30px]- bg-red-900- mt-[20px]">
              <LabelComponent
                className="mb-[20px] text-[14px] font-bold text-[#000] dark:text-[white]"
                label="We don't take any cut from this raise, 100% of it it will go to Mihir"
              />
              <div className="mt-[20px]">
                <LabelComponent
                  className="mb-[20px] text-[18px]  font-bold text-[#000] dark:text-[white]"
                  label="Message to Mihir regarding this raise:"
                />
                <textarea
                  id="message"
                  value={message}
                  onChange={handleMessageChange}
                  rows="4"
                  class="mt-[10px] block w-full rounded-lg border-2 border-[#8d3f42]  bg-white p-2.5 text-sm outline-none dark:bg-[#000]"
                  placeholder="Write your thoughts here..."
                ></textarea>
              </div>
            </div>

            <div className="mt-[20px] text-right">
              <button
                onClick={handleSubmit}
                className=" rounded-[25px] bg-white px-[20px] py-2 font-semibold text-[#000] shadow-md outline-none dark:bg-[#8d3f42] dark:text-[#fff]"
                type="submit"
              >
                Submit
              </button>
            </div>

            <div className="absolute right-[-40px] top-0">
              <button
                className="flex h-8 w-8 items-center justify-center rounded-full border-transparent bg-white text-black opacity-[80%] dark:bg-[#8d3f42]"
                onClick={closeModall}
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

export default GiveRaiseModal;
