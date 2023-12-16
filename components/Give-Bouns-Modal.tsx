import React, { useState, useEffect } from "react";
import { LabelComponent } from "../components/label";
import axios from "axios";

export default function GiveBounsModal({ isOpen, closeModal }) {
  const [isOpenn, setIsOpenn] = useState(false);
  const [clickedNumber, setClickedNumber] = useState(null);
  const [customValue, setCustomValue] = useState(""); // Set initial value to "$"
  const [showInput, setShowInput] = useState(false);

  useEffect(() => {
    if (isOpenn) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpenn]);

  const openModal_two = () => {
    setIsOpenn(!isOpenn);
  };

  const number = [
    { id: "0", num: "$20" },
    { id: "1", num: "$40" },
    { id: "2", num: "$80" },
    { id: "3", num: "Other" },
  ];

  if (clickedNumber === null && number.length > 0) {
    setClickedNumber(number[0].num);
  }

  const handleButtonClick = (num) => {
    if (num === "Other") {
      setShowInput(true);
      setClickedNumber(num);
      // Keep the existing value if not empty, otherwise, set to "$"
      setCustomValue(customValue || "$0");
    } else {
      setShowInput(false);
      setClickedNumber(num);
    }
  };
const handleCustomInputChange = (event) => {
  const inputValue = event.target.value;

  // Check if the input is a valid format (e.g., "$" followed by digits)
  if (/^\$?\d*$/.test(inputValue)) {
    // Preserve the dollar sign if present, otherwise, add it
    const newValue = inputValue.startsWith("$") ? inputValue : "$" + inputValue;
    setCustomValue(newValue);
  } else {
    // Provide feedback to the user, e.g., display an error message
    alert("Please enter numbers only.");
  }
};



const handleSubmit = () => {
  let bonusAmount;

  if (clickedNumber === "Other") {
    bonusAmount = parseInt(customValue.replace("$", ""), 10) || 0;
  } else {
    bonusAmount = parseInt(clickedNumber.replace("$", ""), 10) || 0;
  }

  console.log("Custom value:", customValue);
  console.log("Clicked number:", clickedNumber);
  console.log("Parsed bonusAmount:", bonusAmount);

  if (!isNaN(bonusAmount)) {
    const postData = {
      bonusAmount: bonusAmount,
    };

    console.log("Submitting postData:", postData);

    axios
      .post("https://api.eremotehire.com/myTeam/giveBonusData", postData, {
        headers: { 
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJSSF8wMDAwMDAzIiwiZW1haWxJZCI6Ik5pcmRvc2hQYXRpbEBnbWFpbC5jb20iLCJpYXQiOjE3MDI3MjY3ODcsImV4cCI6MTcwMjczMDM4N30.aI1D1PjRpLt6YayBwlHw7kVxBQwJWijMAt_XwLn_nuU', 
          'Content-Type': 'application/json'
        },
      })
      .then((response) => {
        console.log('datahhhhhhhhhhh', response.data);
        // Check if the response indicates success
        if (response.data.message === "Bonus give Successfully") {
          const bonusData = response.data.bonusData;
      
          alert(`Bonus of ${bonusData.bonusAmount} successfully given to user ${bonusData.userId}.`);
      
          // Additional logic if needed, e.g., reset the form or update the UI
        } else {
          alert("Error submitting data. Please try again.");
        }
        // setCustomValue("");
        // setClickedNumber("");
        
      })
      .catch((error) => {
        console.error(error);
        alert("Error submitting data. Please try again.");
        // Handle error, show user feedback, etc.
      });
  } else {
    alert("Please enter a valid number.");
  }
};



  return (
    <>
      {isOpen && (
        <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-[80%]">
          <div className="relative min-h-[300px] w-[500px] rounded-2xl bg-white p-4 dark:bg-[#000]">
            <div className="p-4">
              <LabelComponent
                className="text-center text-[18px] font-bold text-[#000] dark:text-[#fff]"
                label="How much bonus do you want to give Mihir?"
              />
            </div>

            <div className="m-8">
              {number.map((item, index) => (
                <button
                  key={index}
                  className={`mr-[5px] items-center rounded-lg bg-white px-8 py-2 shadow-md dark:bg-[#000] ${
                    (item.num === "Other" && showInput) ||
                    clickedNumber === item.num
                      ? "active border-2 border-[#8d3f42]"
                      : ""
                  }`}
                  onClick={() => handleButtonClick(item.num)}
                >
                  {item.num}
                </button>
              ))}
              <div className="mt-[20px]">
                {clickedNumber !== null && (
                  <input
                    type="text"
                    value={showInput ? customValue : clickedNumber}
                    onChange={handleCustomInputChange}
                    placeholder="Enter numbers only"
                    className="mb-[20px] h-[40px] w-[400px] rounded-[10px] border-2 border-[#8d3f42] bg-white px-4 py-2 outline-none dark:bg-[#000]"
                  />
                )}
              </div>
              <div className="text-right">
                <button
                  onClick={handleSubmit}
                  className="rounded-[25px] bg-white px-[20px] py-2 font-semibold text-[#000] shadow-md outline-none dark:bg-[#8d3f42] dark:text-[#fff]"
                  type="submit"
                >
                  Submit
                </button>
              </div>
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
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6 text-[#000] dark:text-[#fff] "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
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
}
