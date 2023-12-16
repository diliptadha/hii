import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Dropdown from "../../components/Dropdown";
import { Fragment } from "react";
import Image from "next/image";
import { Images } from "../../constants";
import Link from "next/link";
import Loader from "../../components/Layouts/Loader";
import { ReactSortable } from "react-sortablejs";
import Select from "react-select";
import { Tab } from "@headlessui/react";
import { t } from "i18next";
import { useRouter } from "next/router";
import axios from "axios";
import React from "react";

interface UserData {
  vettingResults: any;
  id: number;
  name: string;
  profile_process: string;
  postion: string;
  country: string;
  price: string;
  hiring_status: string;
  location: string;
  designation: string;
  rate: string;
  overview?: {
    workingHoursInDay: string;
    workType: string;
    monthlySalary: string;
    bonusGiven: string;
  };
  bonusHistory?: {
    developer: string;
    role: string;
    amount: string;
  };
  raiseHistory?: {
    developer: string;
    role_Software: string;
    raise: string;
  };
}

export default function Payout() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [userdata, setUserdata] = useState<UserData[]>([]);
  const [userdataa, setUserdataa] = useState<UserData[]>([]);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.eremotehire.com/myteam/getHiredData?userId=RH_0000001",
          {
            headers: { 
              'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJSSF8wMDAwMDAzIiwiZW1haWxJZCI6Ik5pcmRvc2hQYXRpbEBnbWFpbC5jb20iLCJpYXQiOjE3MDI3MDYwNjMsImV4cCI6MTcwMjcwOTY2M30.g7m1lNC-pDlO0YhA-momU0UJqcMCXfQJQha3nQ96K3g'
            },
          }
        );

        if (response.data.hiredData) {
          const dataToSet = Array.isArray(response.data.hiredData)
            ? response.data.hiredData
            : [response.data.hiredData];

          setUserdata(dataToSet);
          console.log("User Data:", dataToSet);
        } else {
          console.error(
            "Data received is not in the expected format:",
            response.data
          );
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.eremotehire.com/myteam/getRecommendationData?userId=RH_0000001",
          {
            headers: { 
              'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJSSF8wMDAwMDAzIiwiZW1haWxJZCI6Ik5pcmRvc2hQYXRpbEBnbWFpbC5jb20iLCJpYXQiOjE3MDI3MDYwNjMsImV4cCI6MTcwMjcwOTY2M30.g7m1lNC-pDlO0YhA-momU0UJqcMCXfQJQha3nQ96K3g'
            },
          }
        );

        if (response.data.recommendationData) {
          const dataToSet = Array.isArray(response.data.recommendationData)
            ? response.data.recommendationData
            : [response.data.recommendationData];

          setUserdataa(dataToSet);
          console.log("User Data:", dataToSet);
        } else {
          console.error(
            "Data received is not in the expected format:",
            response.data
          );
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // const userdataa = [
  //   {
  //     id: 0,
  //     name: "Mihir",
  //     profile_process: "verify",
  //     postion: "Full Stack Developer",
  //     country: "India",
  //     price: "$10/hour",
  //     hiring_status: "compliantly hired",
  //   },
  //   {
  //     id: 1,
  //     name: "Nirdosh",
  //     profile_process: "verify",
  //     postion: "Shopify Developer",
  //     country: "United State",
  //     price: "$20/hour",
  //     hiring_status: "compliantly hired",
  //   },
  //   {
  //     id: 2,
  //     name: "Henish",
  //     profile_process: "verify",
  //     postion: "MERN Developer",
  //     country: "India",
  //     price: "$50/hour",
  //     hiring_status: "Compliantly hired",
  //   },
  // ];

  return loading ? (
    <div>
      <Loader />
    </div>
  ) : (
    <div className="flex flex-col">
      {/* < heading section > */}

      <div className="flex items-center justify-between ">
        <h1 className="text-xl font-bold ">My Team</h1>
        <button className="nav-item group flex items-center rounded-lg  bg-white px-2 py-2 shadow-md dark:bg-[#8d3f42]">
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
              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          <text className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#fff] dark:group-hover:text-white-dark">
            Hire New Talent
          </text>
        </button>
      </div>

      {/* < tab bar section > */}
      <Tab.Group>
        <Tab.List className="mt-3 flex flex-wrap border-b border-white-light dark:border-[#8D3F42]">
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={`${
                  selected
                    ? "!border-white-light !border-b-white  text-black !outline-none dark:!border-[#8D3F42] dark:!border-b-black dark:text-white "
                    : ""
                }
                    -mb-[1px] block border border-transparent p-4 py-3 dark:hover:border-b-black dark:hover:text-white`}
              >
                Hired
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={`${
                  selected
                    ? "!border-white-light !border-b-white text-black !outline-none dark:!border-[#8D3F42] dark:!border-b-black dark:text-white"
                    : ""
                }
                    -mb-[1px] block border border-transparent p-4 py-3 dark:hover:border-b-black dark:hover:text-white`}
              >
                Recommendation
              </button>
            )}
          </Tab>
        </Tab.List>
        <Tab.Panels>
          {/* < Hired tab section > */}
          {loading ? (
          <Loader/>
        ) : (
          <Tab.Panel>
            <div className="mt-5">
              {userdata?.map((item, inedx) => {
                return (
                  <button
                    onClick={() =>
                      router.push(
                        {
                          pathname: "/apps/developer-details",
                          query: {
                            name: item.name,
                            country: item.location,
                            postion: item.designation,
                            hiring_status: item.hiring_status,
                            price: item.rate,
                            workingHoursInDay: item.overview?.workingHoursInDay,
                            workType: item.overview?.workType,
                            monthlySalary: item.overview?.monthlySalary,
                            bonusGiven: item.overview?.bonusGiven,
                            developer: item.bonusHistory?.developer,
                            role: item.bonusHistory?.role,
                            amount: item.bonusHistory?.amount,
                            sentOn:item.bonusHistory?.sentOn,
                            developer: item.raiseHistory?.developer,
                            role_Software: item.raiseHistory?.role,
                            raise: item.raiseHistory?.raise,
                            effectiveOn:item.raiseHistory?.effectiveOn,
                            skill:item.vettingResults?.[0].skill,
                            skill_two:item.vettingResults?.[1].skill,
                            vettingResult:item.vettingResults?.[0].vettingResult,
                            vettingResult_two:item.vettingResults?.[1].vettingResult,
                            yearOfExperience:item.vettingResults?.[0].yearOfExperience,
                            yearOfExperience_two:item.vettingResults?.[1].yearOfExperience

                           
                
                          },
                        },
                        "/apps/developer-details"
                      )
                    }
                    className="my-6 flex w-full items-center rounded-xl bg-white px-4 py-3 shadow-md   dark:bg-[#000] dark:shadow-md "
                  >
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
                              {item.name}
                            </text>
                            {item.profile_process === "verify" && (
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
                            )}
                          </div>
                          <text className="text-lg font-semibold text-black dark:text-white">
                            {item.rate}
                          </text>
                        </div>
                        <div className="my-2 rounded-full bg-gray-400 px-2 py-0.5">
                          <text className="text-sm  text-black">
                            {item.designation}
                          </text>
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
                            <text className="mx-1">{item.location}</text>
                          </div>
                          <button className="flex items-center rounded-xl border border-black px-2 py-1.5 shadow-sm dark:shadow">
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
                            <text>{item.hiring_status}</text>
                          </button>
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </Tab.Panel>
          )}

          {/* < Recommendtion tab section > */}
          <Tab.Panel>
            <div className="mt-5">
              {userdataa.map((item, inedx) => {
                return (
                  <button
                  onClick={() =>
                    router.push(
                      {
                        pathname: "/apps/getRecommendation-details",
                        query: {
                          name: item.name,
                          country: item.location,
                          postion: item.designation,
                          monthlySalary: item.monthlySalary,
                          technicalInterviewNotes:item.technicalInterviewNotes,
                          softSkillAssessment:item.softSkillAssessment,
                          otherTechnicalSkills:item.otherTechnicalSkills,
                          verifiedAiTools:item.verifiedAiTools,
                          skill:item.vettingResults?.[0].skill,
                          skill_two:item.vettingResults?.[1].skill,
                          vettingResult:item.vettingResults?.[0].vettingResult,
                          vettingResult_two:item.vettingResults?.[1].vettingResult,
                          yearOfExperience:item.vettingResults?.[0].yearOfExperience,
                          yearOfExperience_two:item.vettingResults?.[1].yearOfExperience

                          

                         
              
                        },
                      },
                      "getRecommendation-details"
                    )
                  }



                   className="my-6 flex w-full items-center rounded-xl bg-white px-4 py-3 shadow-md   dark:bg-[#000] dark:shadow-md ">
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
                              {item.name}
                            </text>
                            {item.profile_process === "verify" && (
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
                            )}
                          </div>
                          <text className="text-lg font-semibold text-black dark:text-white">
                            {item.monthlySalary}
                          </text>
                        </div>
                        <div className="my-2 rounded-full bg-gray-400 px-2 py-0.5">
                          <text className="text-sm  text-black">
                            {item.designation}
                          </text>
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
                            <text className="mx-1">{item.location}</text>
                          </div>
                          <button className="flex items-center rounded-xl border border-black px-2 py-1.5 shadow-sm dark:shadow">
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
                            <text>{item.hiring_status}</text>
                          </button>
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
