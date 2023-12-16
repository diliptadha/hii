import { useEffect, useState } from "react";

import Loader from "../../components/Layouts/Loader";
import React from "react";
import { useRouter } from "next/router";
import { Strings, Images } from "../../constants";
import { Fragment } from "react";
import { Tab } from "@headlessui/react";
import { Bar } from "react-chartjs-2";
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";
import { LabelComponent } from "../../components/label";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  ArcElement,
  Legend
);

export default function RecommendationDeveloperDetails() {
  const router = useRouter();
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectedTab, setSelectedTab] = useState("vettingProcess");

  useEffect(() => {
    console.log(router?.query, "queryyy");
    setUserData(router?.query);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);
  const VettingResult = [
    {
      id: 0,
      skill: `${userData?.skill}`,
      vetting_result: `${userData?.vettingResult}`,
      yearOfExperience: `${userData?.yearOfExperience}`,
    },
    {
      id: 0,
      skill: `${userData?.skill_two}`,
      vetting_result: `${userData?.vettingResult_two}`,
      yearOfExperience: `${userData?.yearOfExperience_two}`,
    },
  ];

  const weeklywork = [
    { id: 0, work: "41.3 hours worked", status: "test", time: "Mar 27-Apr 2" },
    { id: 0, work: "41.3 hours worked", status: "test", time: "Mar 27-Apr 2" },

    {
      id: 1,
      work: "35.8 hours worked",
      status: "testing",
      time: "feb 6-feb 12",
    },
    {
      id: 2,
      work: "34.2 hours worked",
      status: "test",
      time: "jan 30-feb 5",
    },
  ];
  const soft_skill = [
    {
      id: 0,
      chat: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
          />
        </svg>
      ),
      subject: "English",
      status: "Average",
    },
    {
      id: 1,
      chat: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
          />
        </svg>
      ),

      subject: "Attitude",
      status: "Amazing",
    },
    {
      id: 2,
      chat: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
          />
        </svg>
      ),

      subject: "Passion",
      status: "Good",
    },
  ];

  // const useroverview = [
  //   { id: 0, title: "HOURS WORKED", value: {userData?.workType}},
  //   { id: 1, title: "WORK TYPE", value: "Full time" },
  //   { id: 2, title: "MONTHLY SALARY", value: "$1" },
  //   { id: 3, title: "BOUNS GIVEN", value: "$241" },
  // ];

  // Log userData to check its structure and content

  const Data = [
    {
      id: 1,
      year: 2016,
      userGain: 80000,
      userLost: 823,
    },
    {
      id: 2,
      year: 2017,
      userGain: 45677,
      userLost: 345,
    },
    {
      id: 3,
      year: 2018,
      userGain: 78888,
      userLost: 555,
    },
    {
      id: 4,
      year: 2019,
      userGain: 90000,
      userLost: 4555,
    },
    {
      id: 5,
      year: 2020,
      userGain: 4300,
      userLost: 234,
    },
  ];

  const chartData = {
    labels: Data.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "#ecf0f1",
          "#ecf0f1",
          "#ecf0f1",
          "#ecf0f1",
          "#ecf0f1",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };

  const ChartOptions = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      xAxes: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
        title: {
          display: false,
        },
        barPercentage: 0.5,
      },
      yAxes: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
        title: {
          display: false,
        },
      },
    },
  };

  return loading ? (
    <div>
      <Loader />
    </div>
  ) : (
    <div className="flex flex-col">
      {/** <heading section> */}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={() => router.back()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-6 w-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
          </button>
          <text className="mx-2">{Strings.BACK + " " + "|"}</text>
          <text className="text-red-600 dark:text-blue-300">
            {Strings.DEVELOPERS}
          </text>
          <text className="mx-2">{">" + " " + Strings.DEVELOPER_DETAILS}</text>
        </div>
      </div>

      {/** < profile header > */}
      <button className="my-6 flex w-full items-center rounded-xl bg-white px-4 py-3 shadow-md   dark:bg-[#000] dark:shadow-md  ">
        <div className="rounded-full bg-blue-300 p-2">
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
        </div>
        <div className="w-full pl-2.5">
          <div className=" flex flex-col items-start">
            <div className="flex  w-full justify-between pr-3">
              <div className="flex items-center space-x-1">
                <text className="text-base font-semibold text-black dark:text-white">
                  {userData?.name}
                </text>
                {/* {userData.profile_process === "verify" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="green"
                    className="h-6 w-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clipRule="evenodd"
                    />
                  </svg>
                )} */}
              </div>
              <div className="flex ">
                <button className="mr-2 flex items-center rounded-xl border border-black px-2 py-1.5 shadow-sm dark:shadow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="green"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <text>{userData?.hiring_status}</text>
                </button>
                <button className="mr-[-5px] flex items-center rounded-xl border border-black px-2 py-1.5 shadow-sm dark:shadow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="green"
                    className="h-6 w-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <text>{"eremotehire certified"}</text>
                </button>
              </div>
            </div>
            <div className="flex w-full items-center justify-between">
              <div className="my-2 rounded-full bg-gray-400 px-2 py-0.5">
                <text className="text-sm  text-black">{userData?.postion}</text>
              </div>
              <text className="mr-3">{"Rate"}</text>
            </div>
            <div className="flex  w-full items-center justify-between">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <text className="mx-1">{userData?.country}</text>
              </div>
              <text className="mr-[18px] text-lg font-semibold text-black dark:text-white">
                {userData?.monthlySalary}
              </text>
            </div>
          </div>
        </div>
      </button>

      {/* < tabbar section > */}

      <Tab.Group>
        <Tab.Panels>
         
          <Tab.Panel>
            <div>
              <Tab.Group>
                <Tab.List className="flex- mt-3 inline-flex  flex-wrap rounded-[10px] bg-white dark:bg-[#000]">
                  <Tab as={Fragment}>
                    {({ selected }) => (
                      <button
                        className={`${
                          selected
                            ? " ml-[2px] rounded-[30px] px-[15px]  py-[5px] text-black !outline-none dark:!border-b-black dark:bg-[#8D3F42] dark:text-white "
                            : ""
                        }
                    border- -mb-[1px] block border-transparent p-4 py-3 dark:hover:border-b-black dark:hover:text-white`}
                      >
                        Vetting results
                      </button>
                    )}
                  </Tab>
                  <Tab as={Fragment}>
                    {({ selected }) => (
                      <button
                        className={`${
                          selected
                            ? "nav-item group flex items-center rounded-[30px]  px-[15px] py-2 shadow-md dark:bg-[#8d3f42]"
                            : ""
                        }
                    border- -mb-[1px] block border-transparent p-4 py-3 dark:hover:border-b-black dark:hover:text-white`}
                      >
                        About {userData?.name}
                      </button>
                    )}
                  </Tab>
                  <Tab as={Fragment}>
                    {({ selected }) => (
                      <button
                        className={`${
                          selected
                            ? "mr-[2px] rounded-[30px] px-[15px]  py-[5px] text-black !outline-none dark:!border-b-black dark:bg-[#8D3F42] dark:text-white"
                            : ""
                        }
                    border- -mb-[1px] block border-transparent p-4 py-3 dark:hover:border-b-black dark:hover:text-white`}
                      >
                        Experience
                      </button>
                    )}
                  </Tab>
                </Tab.List>
                <Tab.Panels>
                  <Tab.Panel>
                    <div className="mt-3">
                      <div className="rounded-[5px]-  mt-3 w-full rounded-[10px] bg-white  shadow-md dark:bg-[#000] xs:h-[450px] md:h-[400px] ">
                        <div className="p-8">
                          <LabelComponent
                            label="Vetted Technical Skill "
                            className="text-[25px] font-bold leading-normal text-black dark:text-[#fff]  "
                          />
                          <LabelComponent
                            className="text-[16px] font-bold leading-normal text-black dark:text-gray-400 "
                            label="These are the skill we have explicity vetted for in the technical interview"
                          />
                        </div>
                        <div className="pl-8">
                          <div className="relative overflow-x-auto ">
                            <table className="table-hover mt-3">
                              <thead className="sticky top-0">
                                <tr>
                                  <th>Skill</th>
                                  <th>Vetting Result</th>
                                  <th>yearOfExperiencee</th>
                                </tr>
                              </thead>
                              <tbody>
                                {VettingResult?.length > 0 ? (
                                  VettingResult?.map((data, index) => {
                                    return (
                                      <tr key={index}>
                                        <td>{data.skill}</td>
                                        <td>{data.vetting_result}</td>

                                        <td>{data.yearOfExperience}</td>
                                      </tr>
                                    );
                                  })
                                ) : (
                                  <div className="absolute  flex w-full items-center justify-center">
                                    <h1 className="my-4">No data available</h1>
                                  </div>
                                )}
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div className="p-8">
                          <LabelComponent
                            className="text-[20px] font-bold text-black dark:text-white"
                            label="Technicial Interview notes:"
                          />
                          <LabelComponent
                            className="font-outfit text-[16px] font-normal "
                            label={userData?.technicalInterviewNotes}
                          />
                        </div>
                      </div>
                      <div className="rounded-[5px]-  mt-3 w-full rounded-[10px] bg-white shadow-md dark:bg-[#000]  xs:h-[240px] md:h-[200px] ">
                        <div className="p-8">
                          <LabelComponent
                            label="Other Technical Skill "
                            className="text-[25px] font-bold leading-normal text-black dark:text-[#fff]  "
                          />
                          <LabelComponent
                            className="text-[16px] font-bold leading-normal text-black dark:text-gray-400 "
                            label="The candidate also has these skills,however,these have not been vetted by eremotehire "
                          />
                        </div>
                        <div className="ml-8  inline-flex rounded-[10px] border bg-white px-4 py-3 text-[14px] font-semibold text-[#000] dark:bg-[#000] dark:text-white ">
                          <LabelComponent
                            label={userData?.otherTechnicalSkills?.[0]}
                          />
                        </div>
                        <div className="ml-4  inline-flex rounded-[10px] border bg-white px-4 py-3 text-[14px] font-semibold text-[#000] dark:bg-[#000] dark:text-white ">
                          <LabelComponent
                            label={userData?.otherTechnicalSkills?.[1]}
                          />
                        </div>
                      </div>
                      <div className="rounded-[5px]-  mt-3 w-full rounded-[10px] bg-white shadow-md dark:bg-[#000]  xs:h-[430px] md:h-[400px] ">
                        <div className="p-8">
                          <LabelComponent
                            label="Soft Skill "
                            className="text-[25px] font-bold leading-normal text-black dark:text-[#fff]  "
                          />
                          <LabelComponent
                            className="text-[16px] font-bold leading-normal text-black dark:text-gray-400 "
                            label={userData?.softSkillAssessment}
                          />
                        </div>
                        <div className="xs:pl-[20px] md:pl-8">
                            {soft_skill.map((items) => {
                            return (
                              <div className="mt-4 flex max-w-[350px] justify-between  rounded-lg border border-white-light bg-white   p-2 px-4 py-2 shadow-[4px_6px_10px_-3px_#bfc9d4] dark:border-[#8d3f42] dark:bg-[#000]  dark:shadow-sm">
                                <div className="flex items-center">
                                  <text className="text-lg font-bold text-[#000] dark:text-[#fff]">
                                    {items.chat}
                                  </text>
                                  <div className="pl-[10px]">
                                    <text className="text-sm font-medium text-[#000] dark:text-[#fff]">
                                      {items.subject}
                                    </text>
                                  </div>
                                </div>
                                <div>
                                  <text className="text-[#000] dark:text-[#fff]">
                                    {items.status}
                                  </text>
                                </div>
                              </div>
                            );
                          })}
                          </div>
                      </div>
                      <div className="rounded-[5px]-  mt-3 w-full rounded-[10px] bg-white shadow-md dark:bg-[#000]  xs:h-[200px] md:h-[200px] ">
                        <div className="p-8">
                          <LabelComponent
                            label="Verified Ai Tools "
                            className="text-[25px] font-bold leading-normal text-black dark:text-[#fff]  "
                          />
                          <LabelComponent
                            className="text-[16px] font-bold leading-normal text-black dark:text-gray-400 "
                            label="These are AI tools that we have verified SmitSohagiya uses to increase productivity "
                          />
                        </div>
                        <div className="ml-8  inline-flex rounded-[10px] border bg-white px-4 py-3 text-[14px] font-semibold text-[#000] dark:bg-[#000] dark:text-white ">
                          {/* <div className="item-center h-[20px]- flex w-[20px] cursor-pointer justify-center rounded-full  bg-[#8D3F42] ">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              className="h-4 w-4 pt-[3px] "
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M15.75 19.5L8.25 12l7.5-7.5"
                              />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              className="h-4 w-4 pt-[3px]"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M8.25 4.5l7.5 7.5-7.5 7.5"
                              />
                            </svg>
                          </div> */}

                          <LabelComponent
                            label={userData?.verifiedAiTools?.[0]}
                          />
                        </div>
                        <div className="ml-4  inline-flex rounded-[10px] border bg-white px-4 py-3 text-[14px] font-semibold text-[#000] dark:bg-[#000] dark:text-white ">
                          <LabelComponent
                            label={userData?.verifiedAiTools?.[1]}
                          />
                        </div>
                      </div>
                    </div>
                  </Tab.Panel>
                  <Tab.Panel>
                    <div>About </div>
                  </Tab.Panel>
                </Tab.Panels>
              </Tab.Group>
            </div>
          </Tab.Panel>

          <Tab.Panel>
            <div>
              <Tab.Group>
                <Tab.List className="flex- mt-3 inline-flex  flex-wrap rounded-[10px] bg-white dark:bg-[#000] ">
                  <Tab as={Fragment}>
                    {({ selected }) => (
                      <button
                        className={`${
                          selected
                            ? " ml-[2px] rounded-[30px] px-[15px]  py-[5px] text-black !outline-none dark:!border-b-black dark:bg-[#8D3F42] dark:text-white "
                            : ""
                        }
                    border- -mb-[1px] block border-transparent p-4 py-3 dark:hover:border-b-black dark:hover:text-white`}
                      >
                        {Strings.VETTING}
                      </button>
                    )}
                  </Tab>
                  <Tab as={Fragment}>
                    {({ selected }) => (
                      <button
                        className={`${
                          selected
                            ? "nav-item group flex items-center rounded-[30px]  px-[15px] py-2 shadow-md dark:bg-[#8d3f42]"
                            : ""
                        }
                    border- -mb-[1px] block border-transparent p-4 py-3 dark:hover:border-b-black dark:hover:text-white`}
                      >
                        About
                      </button>
                    )}
                  </Tab>
                  <Tab as={Fragment}>
                    {({ selected }) => (
                      <button
                        className={`${
                          selected
                            ? " mr-[2px] rounded-[30px] px-[5px]  py-[5px] text-black !outline-none dark:!border-b-black dark:bg-[#8D3F42] dark:text-white"
                            : ""
                        }
                    border- -mb-[1px] block border-transparent p-4 py-3 dark:hover:border-b-black dark:hover:text-white`}
                      >
                        Experience
                      </button>
                    )}
                  </Tab>
                </Tab.List>
                <Tab.Panels>
                  <Tab.Panel>
                    <div className="mt-3">
                      <div className="rounded-[5px]-  mt-3 w-full rounded-[10px] bg-white  shadow-md dark:bg-[#000] xs:h-[450px] md:h-[430px] ">
                        <div className="p-8">
                          <LabelComponent
                            label="Vetted Technical Skill "
                            className="text-[25px] font-bold leading-normal text-black dark:text-[#fff]  "
                          />
                          <LabelComponent
                            className="text-[16px] font-bold leading-normal text-black dark:text-gray-400 "
                            label="These are the skill we have explicity vetted for in the technical interview"
                          />
                        </div>
                        <div className="pl-8">
                          <div className="relative overflow-x-auto ">
                            {/* <table className="w-full text-center  text-sm text-gray-500  dark:text-gray-400">
                              <thead className="text-[16px] uppercase text-black dark:bg-[#000] dark:text-gray-400 ">
                                <tr>
                                  <th scope="col" className="px-6 py-3">
                                    SKILL
                                  </th>
                                  <th scope="col" className="px-6 py-3">
                                    VETTING RESULT
                                  </th>
                                  <th scope="col" className="px-6 py-3">
                                    YEARS OF EXPERIENCE
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className=" bg-white text-center dark:border-gray-700 dark:bg-[#000]  dark:text-white text-[#000]">
                                  <td className="px-6 py-4 text-center   ">
                                    {userData?.skill}
                                  </td>

                                  <td className="px-6 py-4 text-center- bg-red-500-  ">
                                    <button className="bg-gray-900 px-[30px] text-[16px] py-[10px] rounded-[10px] text-white">{userData?.vettingResult}</button>
                                    
                                  </td>
                                  <td className="px-6 py-4 text-center ">
                                    {userData?.yearOfExperience}
                                  </td>
                                </tr>
                                <tr className=" bg-white text-center dark:border-gray-700 dark:bg-[#000] dark:text-white  text-[#000]">
                                  <td className="px-6 py-4 text-center   ">
                                    {userData?.skill_two}
                                  </td>

                                  <td className="px-6 py-4 text-center ">
                                    <button className="bg-yellow-800 px-[30px] text-[16px] py-[10px] rounded-[10px] text-white"> {userData?.vettingResult_two}</button>
                                   
                                  </td>
                                  <td className="px-6 py-4 text-center ">
                                    {userData?.yearOfExperience_two}
                                  </td>
                                </tr>
                              </tbody>
                            </table> */}
                            <table className="table-hover mt-3">
                              <thead className="sticky top-0">
                                <tr>
                                  <th>Skill</th>
                                  <th>Vetting Result</th>
                                  <th>yearOfExperiencee</th>
                                </tr>
                              </thead>
                              <tbody>
                                {VettingResult?.length > 0 ? (
                                  VettingResult?.map((data, index) => {
                                    return (
                                      <tr key={index}>
                                        <td>{data.skill}</td>
                                        <td>{data.vetting_result}</td>

                                        <td>{data.yearOfExperience}</td>
                                      </tr>
                                    );
                                  })
                                ) : (
                                  <div className="absolute  flex w-full items-center justify-center">
                                    <h1 className="my-4">No data available</h1>
                                  </div>
                                )}
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div className="p-8">
                          <LabelComponent
                            className="text-[20px] font-bold text-black dark:text-white"
                            label="Technicial Interview notes:"
                          />
                          <LabelComponent
                            className="font-outfit text-[16px] font-normal "
                            label="test"
                          />
                        </div>
                      </div>
                      <div className="rounded-[5px]-  mt-3 w-full rounded-[10px] bg-white shadow-md dark:bg-[#000]  xs:h-[240px] md:h-[200px] ">
                        <div className="p-8">
                          <LabelComponent
                            label="Other Technical Skill "
                            className="text-[25px] font-bold leading-normal text-black dark:text-[#fff]  "
                          />
                          <LabelComponent
                            className="text-[16px] font-bold leading-normal text-black dark:text-gray-400 "
                            label="The developer also has these skills,however,these have not been vetted by eremotehire "
                          />
                        </div>
                        <div className="ml-8  inline-flex rounded-[10px] border bg-white px-4 py-3 text-[14px] font-semibold text-[#000] dark:bg-[#000] dark:text-white ">
                          <div className="item-center h-[20px]- flex w-[20px] cursor-pointer justify-center rounded-full  bg-[#8D3F42] ">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              className="h-4 w-4 pt-[3px] "
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M15.75 19.5L8.25 12l7.5-7.5"
                              />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              className="h-4 w-4 pt-[3px]"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M8.25 4.5l7.5 7.5-7.5 7.5"
                              />
                            </svg>
                          </div>

                          <LabelComponent
                            className="ml-[10px] "
                            label="Being a Founder LOL"
                          />
                        </div>
                      </div>
                      <div className="rounded-[5px]-  mt-3 w-full rounded-[10px] bg-white shadow-md dark:bg-[#000]  xs:h-[360px] md:h-[400px] ">
                        <div className="p-8">
                          <LabelComponent
                            label="Soft Skill "
                            className="text-[25px] font-bold leading-normal text-black dark:text-[#fff]  "
                          />
                          <LabelComponent
                            className="text-[16px] font-bold leading-normal text-black dark:text-gray-400 "
                            label="Our assessemnet of the developer's soft skills.we largely emphasize this part of our vetting process"
                          />
                        </div>
                        <div className="xs:pl-[20px] md:pl-8">
                          {soft_skill.map((items) => {
                            return (
                              <div className="mt-4 flex max-w-[350px] justify-between  rounded-lg border border-white-light bg-white   p-2 px-4 py-2 shadow-[4px_6px_10px_-3px_#bfc9d4] dark:border-[#8d3f42] dark:bg-[#000]  dark:shadow-sm">
                                <div className="flex items-center">
                                  <text className="text-lg font-bold text-[#000] dark:text-[#fff]">
                                    {items.chat}
                                  </text>
                                  <div className="pl-[10px]">
                                    <text className="text-sm font-medium text-[#000] dark:text-[#fff]">
                                      {items.subject}
                                    </text>
                                  </div>
                                </div>
                                <div>
                                  <text className="text-[#000] dark:text-[#fff]">
                                    {items.status}
                                  </text>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                        <div className="p-8">
                          <LabelComponent
                            className="text-[20px] font-bold text-black dark:text-white"
                            label="Soft Skill Interview notes:"
                          />
                          <LabelComponent
                            className="font-outfit text-[16px] font-normal "
                            label="Interview notes"
                          />
                        </div>
                      </div>
                    </div>
                  </Tab.Panel>
                  <Tab.Panel>
                    <div>About </div>
                  </Tab.Panel>
                </Tab.Panels>
              </Tab.Group>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
