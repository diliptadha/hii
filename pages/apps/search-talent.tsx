import { useEffect, useState } from "react";

import Loader from "../../components/Layouts/Loader";
import React from "react";
import { Images, Strings } from "../../constants";
// import Search from "antd/es/input/Search";
import Filtermodal from "../../components/filter-popup";
import Link from "next/link";
// import  { FireOutlined } from  "@ant-design/icons";
// import Loaderr from "../../components/Layouts/Loader";
// import { string } from "yup/lib/locale";

export default function SearchTalent() {
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchCategory, setSearchCategory] = useState("skills");
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const TalentPage = [
    {
      id: "2",
      img_logo: Images.RAHULSAHAI ? (
        // Render the image if Images.RAHULSAHAI is present
        <img
          src={Images.RAHULSAHAI}
          alt="Logo"
          className="h-[90px] w-[100px]"
        />
      ) : (
        // Otherwise, render the SVG
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
      interview: "Activity interviewing with 6 companies",
      summary:
        "Dharmit is a senior UI/UX designer with ten years of professional experience specializing in designing applications for startups. Nick believes that design is not about deliverables and beautiful pixels but solving problems and achieving business and user goals.",
    },

    {
      id: "1",
      img_logo: Images.RAHULSAHAI ? (
        // Render the image if Images.RAHULSAHAI is present
        <img
          src={Images.RAHULSAHAI}
          alt="Logo"
          className="h-[90px] w-[100px]"
        />
      ) : (
        // Otherwise, render the SVG
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="blue"
          className="h-[90px] w-[90px] rounded-full bg-blue-300 p-2"
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
        // Render the image if Images.RAHULSAHAI is present
        <img
          src={Images.RAHULSAHAI}
          alt="Rahul Sahai Logo"
          className="h-[90px] w-[100px]"
        />
      ) : (
        // Otherwise, render a default icon or placeholder
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="blue"
          className="h-[90px] w-[90px] rounded-full bg-blue-300 p-2"
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
      interview: "Activity interviewing with 6 companies",
      summary:
        "Dharmit is a senior UI/UX designer with ten years of professional experience specializing in designing applications for startups. Nick believes that design is not about deliverables and beautiful pixels but solving problems and achieving business and user goals.",
    },

    {
      id: "2",
      img_logo: Images.RAHULSAHAI ? (
        // Render the image if Images.RAHULSAHAI is present
        <img
          src={Images.RAHULSAHAI}
          alt="Logo"
          className="h-[90px] w-[100px]"
        />
      ) : (
        // Otherwise, render the SVG
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="blue"
          className="h-[90px] w-[90px] rounded-full bg-blue-300 p-2"
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
        // Render the image if Images.RAHULSAHAI is present
        <img
          src={Images.RAHULSAHAI}
          alt="Logo"
          className="h-[90px] w-[100px]"
        />
      ) : (
        // Otherwise, render the SVG
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="blue"
          className="h-[90px] w-[90px] rounded-full bg-blue-300 p-2"
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
        // Render the image if Images.RAHULSAHAI is present
        <img
          src={Images.RAHULSAHAI}
          alt="Logo"
          className="h-[90px] w-[100px]"
        />
      ) : (
        // Otherwise, render the SVG
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
        // Render the image if Images.RAHULSAHAI is present
        <img
          src={Images.RAHULSAHAI}
          alt="Logo"
          className="h-[90px] w-[100px]"
        />
      ) : (
        // Otherwise, render the SVG
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="blue"
          className="h-[90px] w-[90px] rounded-full bg-blue-300 p-2"
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
  const filteredTalent = TalentPage.filter((item) => {
    // Filter by name or skills based on the search query
    return (
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.skills.some((skill) =>
        skill.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  });

  //   const nameCount = filteredTalent.filter((item) =>
  //     item.name.toLowerCase().includes(searchQuery.toLowerCase())
  //   ).length;

  //   const skillCount = filteredTalent.reduce(
  //     (count, item) =>
  //       count +
  //       item.skills.filter((skill) =>
  //         skill.toLowerCase().includes(searchQuery.toLowerCase())
  //       ).length,
  //     0
  //   );

  return loading ? (
    <div>
      <Loader />
    </div>
  ) : (
    <div>
      <div className=" flex w-full items-center justify-between xs:flex-col md:flex-row">
        <div className="xs:mb-2px w-[100%]">
          <h1 className="text-[26px] font-bold leading-normal text-black dark:text-white xs:text-center md:text-start">
            {Strings.SEARCH_TALENT}
          </h1>
          <p className="text-[13px] leading-normal text-black dark:text-white xs:text-center md:text-start">
            {Strings.PARAGRAPH_SEARCH}
          </p>
        </div>
        <div className="w-[50%] text-right xs:mt-[8px]">
          <button className="xs:item-center rounded-full border-none bg-[#8D3F42] px-[20px] py-[12px] text-white transition duration-300 ease-in-out dark:shadow xs:text-sm md:text-[14px]">
            {Strings.GET_MANUALLY}
          </button>
        </div>
      </div>
      <div className="x-1 y-0.5 my-5 flex w-full xs:flex-col md:flex-row  xs:items-center justify-between rounded bg-white p-[15px] dark:bg-[#000]">
        <div className="flex xs:flex-col xl:flex-row">
          <div className="color-gray-500 mr-2 flex h-[40px] xl:w-[200px] xs:w-full xs:items-center rounded-[10px] border bg-transparent ">
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
              className="w-full border-none bg-transparent outline-none "
              type="text"
              placeholder="Search by name,skills"
              //   onkeydown="searchOnEnter(event)"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div>
            <Link
              href="/apps/ai-search-job"
              className="flex xl:w-[220px] h-[40px] xs:w-full xl:my-0 md:mb-[8px] xs:my-[8px]  items-center justify-between rounded-full bg-gradient-to-r  from-[#BC7666] to-[#8D3F42] p-[2px]  text-white transition duration-300 ease-in-out  dark:shadow xs:text-sm"
            >
              <div className="flex w-full  items-center justify-center rounded-full">
                <img
                  src={Images.PENCIL_LOGO}
                  alt="ai search"
                  className="h-[20px] w-[20px] rotate-[270deg] mr-[8px] "
                />
                <text className="ml-[5px]- font-bold">{Strings.SWITCH_TO_AI}</text>
                <button className="ml-[8px] h-[20px] w-[40px] rounded-full bg-gradient-to-r from-[#BC7666] to-[#8D3F42]  ">
                  {Strings.BETA}
                </button>
              </div>
            </Link>
          </div>
        </div>
        <div className="w-[50%]- bg-yellow-900- flex ">
          <div
            onClick={openModal}
            className="ml-[10px] xs:ml-[0] flex  items-center rounded-[10px] border bg-transparent p-3 text-white transition duration-300  ease-in-out dark:shadow xs:text-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-6 w-6 text-[#8D3F42]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
            <button className="pl-[5px] text-[16px] xs:text-[10px] leading-normal text-black dark:text-white">
              {Strings.FILTERS}
            </button>
          </div>
          <div>
            <Filtermodal isOpen={isOpen} closeModal={closeModal} />
          </div>
          <div className=" ml-[10px] flex items-center  rounded-[10px] border bg-transparent p-3 xs:px-2 xs:py-1 text-white transition duration-300 ease-in-out  dark:shadow xs:text-sm">
            <img src={Images.BARS_FILTER} className="w-[20px]  text-white" />


            <button className=" px-[10px] text-[16px] xs:text-[10px] leading-normal text-black dark:text-white">
              {Strings.SORT_BY}
            </button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>

          <div className=" ml-[10px] flex items-center  rounded-[10px] border bg-transparent p-3  xs:py-1 text-white transition duration-300 ease-in-out  dark:shadow xs:text-[14px]">
            <button className="text-[16px] xs:text-[10px] leading-normal text-black dark:text-white">
              {Strings.INTERVIEW_REQUEST}
            </button>

            <label className=" relative ml-[10px] cursor-pointer items-center">
              <input type="checkbox" value="" className="peer sr-only" />
              <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-[#8D3F42] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-[#8D3F42]"></div>
            </label>
          </div>
        </div>
      </div>
      {searchQuery && (
        <div>
          <p>
            {filteredTalent.length > 0 && (
              <p>{` ${filteredTalent.length} results found`}</p>
            )}
          </p>
          {/* <p>{`Skills Found: ${filteredTalent.reduce(
            (count, item) =>
              count +
              item.skills.filter((skill) =>
                skill.toLowerCase().includes(searchQuery.toLowerCase())
              ).length,
            0
          )}`}</p> */}
        </div>
      )}
      {filteredTalent.length === 0 ? (
        <p>{Strings.NO_RESULTS_FOUND}</p>
      ) : (
        filteredTalent.map((item, inedx) => {
          return (
            <>
              <button className="my-2 flex w-full flex-col items-center justify-center rounded-xl bg-white px-4 py-3 shadow-md outline-none   dark:bg-[#000] dark:shadow-md">
                <div className="flex w-full items-center justify-center  ">
                  <div className="rounded-full ">{item.img_logo}</div>
                  <div className="w-full pl-2.5">
                    <div className=" flex flex-col items-start">
                      <div className="flex  w-full justify-between pr-3">
                        <div className="flex w-full xl:flex-row md:flex-row items-center justify-between space-x-1">
                          <div className="text-base font-semibold text-black dark:text-white">
                            {item.name}
                          </div>
                          <div className="flex ">
                            {/* <div className=" xs:text-[10px] xl:text-[14px] font-semibold text-black dark:text-white flex justify-center items-center xs:hidden md:block">
                            {item.interview}
                            <FireOutlined rev={undefined} className="text-[#E25822] ml-[5px]"/>
                          </div> */}
                          </div>
                        </div>
                        {/* <text className="text-lg font-semibold text-black dark:text-white">
                              {item.price}
                            </text> */}
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
                              className=" mr-1 flex items-center justify-center  rounded-full border-none bg-[#8D3F42] px-2 py-1.5 text-center text-white transition duration-300 ease-in-out dark:shadow xs:text-sm"
                            //   onClick={() => handleSkillClick(skill)}
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
              </button>
            </>
          );
        })
      )}
    </div>
  );
}
