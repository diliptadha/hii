import React, { useState } from "react";
import { Images, Strings } from "../../constants";
import Loader from "../../components/Layouts/Loader";
import Loaderr from "../../components/Layouts/Loader";
import { SendOutlined } from "@ant-design/icons";

const AIjob = () => {
  const [searchInput, setSearchInput] = useState("");
  const [showExampleQuestions, setShowExampleQuestions] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleExampleClick = (text: any) => {
    setSearchInput(text);
    setShowExampleQuestions(false);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the timeout based on your actual search time
  };

  const handleSearchChange = (e: any) => {
    const inputValue = e.target.value;
    setSearchInput(inputValue);
    setShowExampleQuestions(false);
    setLoading(true); // Show loader as soon as the user starts typing

    setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the timeout based on your actual search time
  };

  const handleClearSearch = () => {
    setSearchInput("");
    setShowExampleQuestions(true);
  };

  const TalentPagee = [
    {
      id: "2",
      img_logo: Images.RAHULSAHAI ? (
        <img src={Images.RAHULSAHAI} alt="Logo" className="h-[90px] w-[100px]" />
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="blue"
          className="h-16 w-16"
        >
          <path
            fillRule="evenodd"
            d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
            clipRule="evenodd"
          />
        </svg>
      ),
      name: "Dharmit",
      position: "Raect Native developer",
      skills: ["React Native", "PHP", "2+"],
      rate: "$33k/month",
      interview: "Activity interviewing with 6 companies",
      summary:
        "Dharmit is a senior UI/UX designer with ten years of professional experience specializing in designing applications for startups. Nick believes that design is not about deliverables and beautiful pixels but solving problems and achieving business and user goals.",
    },

    {
      id: "1",
      img_logo: Images.RAHULSAHAI ? (
        <img src={Images.RAHULSAHAI} alt="Logo" className="h-[90px] w-[100px]" />
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="blue"
          className="h-[90px] w-[90px] bg-blue-300 p-2 rounded-full"
        >
          <path
            fillRule="evenodd"
            d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
            clipRule="evenodd"
          />
        </svg>
      ),
      name: "Henish",
      position: "Front end developer",
      skills: ["Python", "React", "1+"],
      rate: "$21k/month",
      interview: "Activity interviewing with 3 compaines",
      summary:
        "Henish is a UI/UX specialist with more than ten years of industry experience who focuses on usability, user experience, and user research in his designs.",
    },
    {
      id: "2",
      img_logo: Images.RAHULSAHAI ? (
        <img src={Images.RAHULSAHAI} alt="Rahul Sahai Logo" className="h-[90px] w-[100px]" />
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="blue"
          className="h-[90px] w-[90px] bg-blue-300 p-2 rounded-full"
        >
          <path
            fillRule="evenodd"
            d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
            clipRule="evenodd"
          />
        </svg>
      ),
      name: "Dharmit",
      position: "Raect Native developer",
      skills: ["React Native", "PHP", "2+"],
      rate: "$33k/month",
      interview: "Activity interviewing with 6 companies",
      summary:
        "Dharmit is a senior UI/UX designer with ten years of professional experience specializing in designing applications for startups. Nick believes that design is not about deliverables and beautiful pixels but solving problems and achieving business and user goals.",
    },

    {
      id: "2",
      img_logo: Images.RAHULSAHAI ? (
        <img src={Images.RAHULSAHAI} alt="Logo" className="h-[90px] w-[100px]" />
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="blue"
          className="h-[90px] w-[90px] bg-blue-300 p-2 rounded-full"
        >
          <path
            fillRule="evenodd"
            d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
            clipRule="evenodd"
          />
        </svg>
      ),
      name: "Dharmit",
      position: "React Native developer",
      skills: ["React Native", "PHP", "2+"],
      rate: "$33k/month",
      interview: "Activity interviewing with 6 compaines",
      summary:
        "Dharmit is a senior UI/UX designer with ten years of professional experience specializing in designing applications for startups. Nick believes that design is not about deliverables and beautiful pixels but solving problems and achieving business and user goals.",
    },
    {
      id: "2",
      img_logo: Images.RAHULSAHAI ? (
        <img src={Images.RAHULSAHAI} alt="Logo" className="h-[90px] w-[100px]" />
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="blue"
          className="h-[90px] w-[90px] bg-blue-300 p-2 rounded-full"
        >
          <path
            fillRule="evenodd"
            d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
            clipRule="evenodd"
          />
        </svg>
      ),
      name: "Dharmit",
      position: "React Native developer",
      skills: ["React Native", "PHP", "2+"],
      rate: "$33k/month",
      interview: "Activity interviewing with 6 compaines",
      summary:
        "Dharmit is a senior UI/UX designer with ten years of professional experience specializing in designing applications for startups. Nick believes that design is not about deliverables and beautiful pixels but solving problems and achieving business and user goals.",
    },
    {
      id: "2",
      img_logo: Images.RAHULSAHAI ? (
        <img src={Images.RAHULSAHAI} alt="Logo" className="h-[90px] w-[100px]" />
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="blue"
          className="h-16 w-16"
        >
          <path
            fillRule="evenodd"
            d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
            clipRule="evenodd"
          />
        </svg>
      ),
      name: "Dharmit",
      position: "React Native developer",
      skills: ["React Native", "PHP", "2+"],
      rate: "$33k/month",
      interview: "Activity interviewing with 6 compaines",
      summary:
        "Dharmit is a senior UI/UX designer with ten years of professional experience specializing in designing applications for startups. Nick believes that design is not about deliverables and beautiful pixels but solving problems and achieving business and user goals.",
    },
    {
      id: "2",
      img_logo: Images.RAHULSAHAI ? (
        <img src={Images.RAHULSAHAI} alt="Logo" className="h-[90px] w-[100px]" />
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="blue"
          className="h-[90px] w-[90px] bg-blue-300 p-2 rounded-full"
        >
          <path
            fillRule="evenodd"
            d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
            clipRule="evenodd"
          />
        </svg>
      ),
      name: "Dharmit",
      position: "React Native developer",
      skills: ["React Native", "PHP", "2+"],
      rate: "$33k/month",
      interview: "Activity interviewing with 6 compaines",
      summary:
        "Dharmit is a senior UI/UX designer with ten years of professional experience specializing in designing applications for startups. Nick believes that design is not about deliverables and beautiful pixels but solving problems and achieving business and user goals.",
    },
  ];

  return (
    <>
      <div className=" flex w-full flex-col xs:items-center rounded-[10px] bg-white dark:bg-[#000]">
        <div className=" flex w-full md:flex-row xs:flex-col items-center justify-between  px-[20px] ">
          <div className="md:text-start xs:text-center xs:mb-2px  xl:w-[50%] md:w-[50%] xs:w-full xl:mr-2 md:mr-2 ">
            <h1 className="text-[26px] font-bold leading-normal text-black dark:text-white">
              {Strings.SEARCH_TALENT}
            </h1>
            <p className="text-[13px] leading-normal text-black dark:text-white">
              {Strings.PARAGRAPH_SEARCH}
            </p>
          </div>
          <div className=" flex xs:flex-col md:flex-row ">
            <div className="flex items-center rounded-full border-none dark:bg-white bg-[#8D3F42] bg-opacity-[0.3] p-[20px] py-[10px] xs:my-[8px] md:m-0    transition duration-300 ease-in-out dark:shadow xs:text-sm md:text-[14px] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="ml-[0px] mr-2 h-6 w-6 "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
              <input
                className=" text-[#8D3F42] font-bold text-[14px] border-none outline-none"
                type="text"
                placeholder="Normal search"
              />
            </div>
            <div>
              <button className="flex items-center xs:ml-[30px] md:ml-[10px]  rounded-full border-none bg-[#8D3F42] font-bold text-[14px] p-[20px] py-[12px] text-white transition duration-300 ease-in-out dark:shadow xs:text-sm md:text-[14px]">
                {Strings.GET_MANUALLY}
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="color-gray-500 my-[40px] mr-2 flex  xl:w-[650px] md:w-[550px]  flex-row items-center justify-between overflow-auto rounded-[10px] border bg-transparent py-[10px] ">
            <div className="flex w-[80%]  ">
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
                className="w-full overflow-visible border-none bg-transparent text-[16px]   text-[#000] outline-none dark:text-white "
                type="text"
                placeholder="Tell us about your talent needs"
                value={searchInput}
                onChange={(e) => {
                  setSearchInput(e.target.value);
                  setShowExampleQuestions(false);
                }}
              />
            </div>
            <button className="mr-[10px] flex items-center justify-center rounded-[30px] bg-[#8D3F42] bg-opacity-[0.3] px-[18px] py-[10px] text-[#000] dark:text-[#fff] text-center">
              {Strings.AI_SEARCH}{" "}
              {loading && (
                <div className="mr-2 inline-block">
                  <Loader />
                </div>
              )}
            </button>
          </div>
          <div className="ml-[10px]">
            {searchInput && (
              <button
                className="xs:m-[5px] md:ml-[10px]  rounded-[30px] bg-[#8D3F42] bg-opacity-[0.3] px-[18px] py-[10px] text-[#000] dark:text-[#fff]"
                onClick={handleClearSearch}
              >
                {Strings.CLEAR_SEARCH}
              </button>
            )}
          </div>
        </div>
      </div>

      {showExampleQuestions ? (
        <div className="text-center- flex h-[400px] items-center justify-center">
          <div>
            <h2 className="mb-[20px] text-center text-[18px] font-bold text-[#000] dark:text-[#fff]">
              {" "}
              {Strings.EXAMPLE}
            </h2>
            <div className="flex xs:w-full md:w-[450px]  flex-col items-center justify-center space-y-4 text-[16px]">
              <div
                className=" cursor-pointer rounded-[10px] bg-white- px-[10px] py-[20px] text-[#000] bg-[#8D3F42] bg-opacity-[0.3] dark:text-[#fff] dark:hover:bg-white dark:hover:text-[#000] "
                onClick={() =>
                  handleExampleClick(
                    "I am in search of a senior frontend developer with expertise in React and a knack for UI/UX design. Who in your talent pool fits this description?"
                  )
                }
              >
                {Strings.FIRST_EXAMPLE}
              </div>
              <div
                className=" cursor-pointer rounded-[10px]  bg-white- px-[10px] py-[20px] text-[#000] bg-[#8D3F42] bg-opacity-[0.3] dark:text-[#fff] dark:hover:bg-white dark:hover:text-[#000]"
                onClick={() =>
                  handleExampleClick(
                    "Looking for a full-stack engineer who is Passionate about startups and can hit the ground running. Any matches?"
                  )
                }
              >
                {Strings.SECOND_EXAMPLE}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex h-full flex-col items-center justify-center ">
          {loading && (
            <div className="text-center- ">
              <Loaderr />
            </div>
          )}
          {!loading &&
            TalentPagee.map((item, inedx) => {
              return (
                <>
                  <button className="my-2 flex xs:w-full md:w-[650px]  flex-col items-center outline-none justify-center rounded-xl bg-white px-4 py-3 shadow-md   dark:bg-[#000] dark:shadow-md">
                    <div className="flex w-full items-center justify-center  ">
                      <div className="rounded-full ">
                        {item.img_logo}

                      </div>
                      <div className="w-full pl-2.5">
                        <div className=" flex flex-col items-start">
                          <div className="flex  w-full justify-between pr-3">
                            <div className="flex w-full items-center justify-between space-x-1">
                              <div className="text-base font-semibold text-black dark:text-white">
                                {item.name}
                              </div>
                              <div className="text-[14px] font-semibold text-black dark:text-white xs:hidden md:block ">
                                {item.interview}
                              </div>
                            </div>
                          </div>
                          <div className="mb-[5px]">
                            <text className="text-[14px] leading-normal text-black dark:text-white">
                              {item.position}
                            </text>
                          </div>
                          <div className="flex w-full items-center justify-between">
                            <div className="flex items-center">
                              {item.skills.map((skill, index) => (
                                <button
                                  key={index}
                                  className=" mr-1 text-center flex justify-center  items-center rounded-full border-none bg-[#8D3F42] px-2 py-1.5 text-white transition duration-300 ease-in-out dark:shadow xs:text-sm"
                                >
                                  {skill}
                                </button>
                              ))}
                            </div>
                            <button className="flex items-center rounded-xl border border-black px-2 py-1.5 shadow-sm dark:shadow">
                              <text>{item.rate}</text>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-[20px]   bg-[#8D3F42] bg-opacity-[0.3] px-[10px] py-[10px] text-left text-[14px] outline-none dark:text-white">
                      <strong>{Strings.AI_SUMMARY}</strong>
                      {item.summary}
                    </div>
                  </button>
                </>
              );
            })}
          {!loading && (
            <div className="mb-[10px]- fixed   bottom-0 w-full dark:bg-[#000] bg-white">
              <div className="flex justify-center items-center my-[20px]">
                <div className="  mr-2 pl-[10px] flex xs:w-full md:w-[650px]  flex-row items-center justify-between overflow-auto rounded-[10px] border border-[#8D3F42] bg-transparent py-[5px] ">
                  <div className="flex w-[80%] ">
                    <input
                      className="w-full overflow-visible border-none bg-transparent text-[16px] text-[#000] outline-none dark:text-[#fff] "
                      type="text"
                      placeholder="Do you have any other questions or doubts? "
                    />
                  </div>
                  <div className="mr-[10px] cursor-pointer flex items-center justify-center  text-[#8D3F42] bg-opacity-[0.3] px-[12px] py-[10px] ">
                    <SendOutlined rotate={-45} rev={undefined} />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default AIjob;
