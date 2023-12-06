import { useEffect, useState } from "react";

import Loader from "@/components/Layouts/Loader";
import React from "react";
import { useRouter } from "next/router";
import { Images, Strings } from "@/constants";
import { Fragment } from "react";
import { Tab } from "@headlessui/react";
import { Bar } from "react-chartjs-2";
import Select from "react-select";

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
import { Switch } from "antd";
import { GiveBounsModal } from "@/components/Give-Bouns-Modal";

export default function DeveloperDetails() {
  const router = useRouter();
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const [showBouns, setShowBouns] = useState(true);

  useEffect(() => {
    console.log(router?.query, "queryyy");
    setUserData(router?.query);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };

  const BounsHistoryData = [
    { id: 0, amount: "$1", sent_on: "Apr 2,2023" },
    { id: 0, amount: "$100", sent_on: "Feb 9,2023" },
    { id: 0, amount: "$20", sent_on: "Feb 4,2023" },
    { id: 0, amount: "$100", sent_on: "Dec 17,2023" },
    { id: 0, amount: "$20", sent_on: "Dec 15,2023" },
  ];

  const Benefits = [
    "15 days PTO",
    "coding chair",
    "laptop credit",
    "Fast speed wifi",
    "1 week pay covered",
    "Healthcare incurance",
    "Bonus points",
  ];
  const BenefitsData = [
    {
      id: 1,
      title: "15 days PTO",
      img: Images.TREE,
    },
    {
      id: 2,
      title: "coding chair",
      img: Images.CHAIR,
    },
    {
      id: 3,
      title: "laptop credit",
      img: Images.LAPTOP,
    },
    {
      id: 4,
      title: "Fast speed wifi",
      img: Images.WORLD,
    },
    {
      id: 5,
      title: "1 week pay covered",
      img: Images.MONEY_BAG,
    },
    {
      id: 6,
      title: "Healthcare incurance",
      img: Images.MED_CAR,
    },
    {
      id: 7,
      title: "Bonus points",
      img: Images.STAR,
    },
  ];
  const RaiseHistory = [
    { id: 0, amount: "$4/hour", effective_on: "Mar 11,2023" },
    { id: 1, amount: "$4/hour", effective_on: "Feb 6,2023" },
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

  const useroverview = [
    { id: 0, title: "HOURS WORKED", value: "390.4" },
    { id: 1, title: "WORK TYPE", value: "Full time" },
    { id: 2, title: "MONTHLY SALARY", value: "$1" },
    { id: 3, title: "BOUNS GIVEN", value: "$241" },
  ];

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

  const options = [
    { value: "This Month", label: "This Month" },
    { value: "Previous Month", label: "Previous Month" },
  ];

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
        <div className="flex space-x-2 xs:hidden md:flex">
          <button className="nav-item group flex items-center rounded-lg  bg-white px-2 py-2 shadow-md dark:bg-[#8d3f42]">
            <text className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#fff] dark:group-hover:text-white-dark">
              {Strings.REPLACMENT_REQUSET}
            </text>
          </button>
          <button
            className="nav-item group flex items-center rounded-lg  bg-white px-2 py-2 shadow-md dark:bg-[#8d3f42]"
            onClick={() => setShowBouns(!showBouns)}
          >
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
                d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <text className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#fff] dark:group-hover:text-white-dark">
              {Strings.GIVE_BOUNS}
            </text>
          </button>
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
                d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <text className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#fff] dark:group-hover:text-white-dark">
              {Strings.GIVE_RAISE}
            </text>
          </button>
        </div>
      </div>

      {showBouns && (
        <GiveBounsModal
          onCloseModal={() => setShowBouns(!showBouns)}
          showmodal={showBouns}
        />
      )}

      {/** < profile header > */}
      <button className="my-6 flex w-full items-center rounded-xl bg-white px-4 py-3 shadow-md  hover:border dark:bg-[#8D3F42]/40 dark:shadow-md dark:hover:border dark:hover:border-[#8D3F42] ">
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
                  <text>{"micro1 certified"}</text>
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
              <text className="text-lg font-semibold text-black dark:text-white">
                {userData?.price}
              </text>
            </div>
          </div>
        </div>
      </button>

      {/* < tabbar section > */}

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
                Overview
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
                Bouns history
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
                Raise history
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
                Benefits
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
                {userData?.name}'s details
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
                Settings
              </button>
            )}
          </Tab>
        </Tab.List>
        <Tab.Panels>
          {/* < Overview tab section > */}

          <Tab.Panel>
            <div>
              <div className="mt-3 flex justify-between">
                {useroverview.map((item) => {
                  return (
                    <div className="w-full max-w-[18rem] justify-between  rounded border   border-white-light bg-white shadow-[4px_6px_10px_-3px_#bfc9d4] dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none ">
                      <div className="px-4 py-7 ">
                        <div className="flex items-center justify-center">
                          <p className="text-center text-white-dark">
                            {item.title}
                          </p>
                          {item.title === "BOUNS GIVEN" && (
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
                                d="M8.25 4.5l7.5 7.5-7.5 7.5"
                              />
                            </svg>
                          )}
                        </div>
                        <h5 className=" mt-1 text-center text-xl font-semibold text-[#3b3f5c] dark:text-white-light">
                          {item.value}
                        </h5>
                        {item.title === "BOUNS GIVEN" && (
                          <h3 className="text-center text-blue-500">
                            Give more bouns
                          </h3>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex  justify-between xs:flex-col md:flex-row">
                <div className="mt-8 justify-between  rounded border border-white-light   bg-white p-2 shadow-[4px_6px_10px_-3px_#bfc9d4] dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-sm ">
                  <div className="flex items-center justify-between">
                    <div className="mb-4 mt-2 flex items-center">
                      <h1 className="mr-2 font-bold">PERFORMANCE</h1>
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
                          d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                        />
                      </svg>
                    </div>
                    <select className="rounded-lg bg-transparent py-1.5">
                      <option value="This Month">This Month</option>
                      <option value="Next Month">Next Month</option>
                    </select>
                  </div>
                  <Bar
                    data={chartData}
                    options={ChartOptions}
                    className="h-72"
                  />
                </div>
                <div className="mt-8 justify-between rounded border  border-white-light bg-white p-2   shadow-[4px_6px_10px_-3px_#bfc9d4] dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-sm xs:w-full md:w-2/4 ">
                  <h1 className="text-lg font-bold">WEEKLY SUMMARIES</h1>
                  <p className=" my-1 text-white-dark">
                    Weekly summeries data is only available from Dec 26th,2022 &
                    beyond.
                  </p>
                  <div className="scrollbar-thin scrollbar-track-[#010314]  scrollbar-thumb-[#1a2941] no-scrollbar  flex h-72 flex-col overflow-y-scroll">
                    {weeklywork.map((items) => {
                      return (
                        <div className="mt-8 justify-between  rounded-lg border border-white-light bg-white   p-2 px-4 py-2 shadow-[4px_6px_10px_-3px_#bfc9d4] dark:border-[#1b2e4b] dark:bg-[#191e3a]  dark:shadow-sm">
                          <div className="flex justify-between ">
                            <text className="text-lg font-bold">
                              {items.work}
                            </text>
                            <div className="rounded-lg border border-black px-2 py-1 shadow-sm">
                              <text className="text-sm font-medium">
                                {items.time}
                              </text>
                            </div>
                          </div>
                          <div>
                            <text>{items.status}</text>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </Tab.Panel>

          {/* < Bouns tab section > */}
          <Tab.Panel>
            <table className="table-hover mt-3">
              <thead className="sticky top-0">
                <tr>
                  <th>Developer</th>
                  <th>Role</th>
                  <th>Amount</th>
                  <th>Sent On</th>
                </tr>
              </thead>
              <tbody>
                {BounsHistoryData?.length > 0 ? (
                  BounsHistoryData?.map((data, index) => {
                    return (
                      <tr key={index}>
                        <td>{userData?.name}</td>
                        <td>{userData?.postion}</td>

                        <td>{data?.amount}</td>

                        <td>{data?.sent_on}</td>
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
          </Tab.Panel>

          {/* < Raise history tab section > */}

          <Tab.Panel>
            <table className="table-hover mt-3">
              <thead className="sticky top-0">
                <tr>
                  <th>Developer</th>
                  <th>Role</th>
                  <th>Raise</th>
                  <th>Effective On</th>
                </tr>
              </thead>
              <tbody>
                {RaiseHistory?.length > 0 ? (
                  RaiseHistory?.map((data, index) => {
                    return (
                      <tr key={index}>
                        <td>{userData?.name}</td>
                        <td>{userData?.postion}</td>

                        <td>{data?.amount}</td>

                        <td>{data?.effective_on}</td>
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
          </Tab.Panel>

          {/* < Benefits tab section > */}

          <Tab.Panel>
            <div className="my-6 flex w-full flex-col  rounded-lg bg-white px-4 py-3 shadow-md  hover:border dark:bg-[#8D3F42]/40 dark:shadow-md dark:hover:border dark:hover:border-[#8D3F42] ">
              <h1 className="text-xl font-bold">Benefits Sakshi getting</h1>
              <p className="my-1 text-sm font-normal">
                We take care of the developer's benefits so you don't have to.
                No extra fees for this.
              </p>
              <div className="flex flex-wrap">
                {BenefitsData.map((items) => {
                  return (
                    <div className="mx-2 my-2 flex items-center space-x-2 rounded-full border px-2.5 py-2 shadow-md">
                      <img src={items.img} className="h-10 w-10" />
                      <text className="text-md font-bold">{items.title}</text>
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
                          d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                        />
                      </svg>
                    </div>
                  );
                })}
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <h1>sasbas</h1>
          </Tab.Panel>
          <Tab.Panel>
            <div className="my-6 flex w-full flex-col items-center justify-center rounded-xl bg-white px-4 py-3 shadow-md  hover:border dark:bg-[#8D3F42]/40 dark:shadow-md dark:hover:border dark:hover:border-[#8D3F42] ">
              <div className="mx-2 my-2 flex  w-1/2 items-center justify-between space-x-2 rounded-lg border px-3 py-3.5 shadow-md">
                <div className="flex items-center space-x-1">
                  <text>Time Tracker</text>
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
                      d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                    />
                  </svg>
                </div>
                <Switch defaultChecked onChange={onChange} />
              </div>
              <div className="mx-2 my-2 flex  w-1/2 items-center justify-between space-x-2 rounded-lg border px-3 py-3.5 shadow-md">
                <div className="flex items-center space-x-1">
                  <text>Weekly Summaries</text>
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
                      d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                    />
                  </svg>
                </div>
                <Switch defaultChecked onChange={onChange} />
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
