import { Images, Strings } from "../../constants";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Fragment } from "react";
import GiveBounsModal from "../../components/Give-Bouns-Modal";
import GiveRaiseModal from "../../components/Give-Raise-Modal";
import { LabelComponent } from "../../components/label";
import Loader from "../../components/Layouts/Loader";
import React from "react";
import Select from "react-select";
import { Switch } from "antd";
import { Tab } from "@headlessui/react";
import { useRouter } from "next/router";

import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip
} from "chart.js";


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Legend
);

export default function DeveloperDetails() {
  const router = useRouter();
  const [userData, setUserData] = useState({ name: "", position: "", price: "", country: "", amount: "", sentOn: "", raise: "", raise_two: "", skill: "", skill_two: "", vetting: "", vetting_two: "", yearOfExperience: "", yearOfExperience_two: "", workType: "", monthlySalary: "", bonusGiven: "", effectiveOn: "", effectiveOn_two: "" });
  const [loading, setLoading] = useState(true);
  const [showBouns, setShowBouns] = useState(true);

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenn, setIsOpenn] = useState(false);

  const [isExpanded, setIsExpanded] = useState(false);
  const [isTooltipVisible, setTooltipVisible] = useState(false);


  const longText = "Experienced in writing custom Python code to extend Django applications, collaborating with other developers, and integrating third-party services and APIs. Highly skilled Python Django Developer with a proven track record of developing and maintaining complex web applications. Achieved a 20% increase in user engagement, resulting in a revenue boost of $50,000, while reducing development time by 30% and improving overall code quality.";


  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };


  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const openModall = () => {
    setIsOpenn(true);
  };

  const closeModall = () => {
    setIsOpenn(false);
  };

  useEffect(() => {
    // console.log(router?.query, "queryyy");

    setUserData(prevUserData => ({
      ...prevUserData,
      ...router.query,
      
    }));

    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };

  const BounsHistoryData = [
    {
      id: 0,
      role: `${userData?.position} `,
      amount: `${userData?.amount} `,
      senton: `${userData?.sentOn}`,
    },
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
    {
      id: 0,
      amount: `${userData?.raise} `,
      amount_two: `${userData?.raise_two} `,
      effective_on: `${userData?.effectiveOn} `,
      effective_on_two: `${userData?.effectiveOn_two} `,

    },

  ];
  const VettingResult = [
    {
      id: 0,
      skill: `${userData.skill}`,
      vetting_result: `${userData?.vetting}`,
      yearOfExperience: `${userData.yearOfExperience}`,
    },
    {
      id: 0,
      skill: `${userData.skill_two}`,
      vetting_result: `${userData?.vetting_two}`,
      yearOfExperience: `${userData.yearOfExperience_two}`,
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

  const useroverview = [
    { id: 0, title: "HOURS WORKED", value: `8` },
    { id: 1, title: "WORK TYPE", value: `${userData.workType}` },
    { id: 2, title: "MONTHLY SALARY", value: `${userData.monthlySalary}` },
    { id: 3, title: "BOUNS GIVEN", value: `${userData.bonusGiven}` },
  ];
  // console.log("hyyyyyyy", userData);

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
    <>
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
            <text className="mx-2">
              {">" + " " + Strings.DEVELOPER_DETAILS},
            </text>
          </div>
          <div className="flex space-x-2 xs:hidden ">
            <button className="nav-item group flex items-center rounded-lg  bg-white px-2 py-2 shadow-md dark:bg-[#8d3f42]">
              <text className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#fff] dark:group-hover:text-white-dark">
                {Strings.REPLACMENT_REQUSET}
              </text>
              {/* <text className="mx-2">
                {">" + " " + Strings.DEVELOPER_DETAILS}
              </text> */}
            </button>
          </div>
          <div className="flex space-x-2 xs:hidden md:flex">
            <button className="nav-item group ">
              <text className="text-black  dark:text-[#fff] dark:group-hover:text-white-dark">
                Ask for replacement
              </text>
            </button>

            <button
              onClick={openModal}
              className="nav-item group flex items-center rounded-full  bg-white px-[15px] py-2 shadow-md dark:bg-[#8d3f42]"
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

              <text className="ml-[5px] text-black dark:text-[#fff] dark:group-hover:text-white-dark">
                {Strings.GIVE_BOUNS}
              </text>
            </button>

            <div className="">
              <GiveBounsModal isOpen={isOpen} closeModal={closeModal} />
            </div>

            <button
              onClick={openModall}
              className="nav-item group flex items-center rounded-full  bg-white px-2 py-2 shadow-md dark:bg-[#8d3f42]"
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

              <text className="text-black  dark:text-[#fff] dark:group-hover:text-white-dark">
                {Strings.GIVE_RAISE}
              </text>
            </button>
            <div className="">
              <GiveRaiseModal isOpenn={isOpenn} closeModall={closeModall} />
            </div>
          </div>
        </div>

        {/* {showBouns && (
                <GiveBounsModal
                  onCloseModal={() => setShowBouns(!showBouns)}
                  showmodal={showBouns}
                />
              )} */}

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
                d="M7.5 6a4.5  4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="w-full pl-2.5">
            <div className=" flex flex-col items-start">
              <div className="flex  w-full justify-between pr-3">
                <div className="flex items-center space-x-1-">
                  <text className="text-base font-semibold text-black dark:text-white">
                    {userData?.name}
                  </text>

                </div>
                <div className=" xs:hidden md:flex">
                  <button className="mr-2 flex items-center  px-2 py-1.5 shadow-sm dark:shadow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="green"
                      className="h-5 w-5 "
                    >
                      <path
                        fillRule="evenodd"
                        d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <text className="text-[#000] dark:text-[#fff]">compliantly hired</text>
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
                    <text className="text-[#000] dark:text-[#fff]">{"eremotehire certified"}</text>
                  </button>
                </div>
              </div>
              <div className="flex w-full items-center justify-between">
                <div className="  px-2- py-0.5">
                  <text className="text-sm  dark:text-white text-black">
                    {userData?.position}
                  </text>
                </div>
                {/* <text className="mr-3">{"Rate"}</text> */}
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
                  ${userData?.price}/month
                </text>
              </div>
            </div>
          </div>
        </button>

        {/* < tabbar section > */}

        <Tab.Group>


          <Tab.List className="mt-3 flex md:flex-wrap border-b border-opacity-25 border-[#8D3F42] overflow-x-scroll md:overflow-x-auto">
            {["Overview", "Bonus history", "Raise history", "Benifits", `${userData?.name}'s details`, "Settings"].map(
              (tab, index) => (
                <Tab key={index}>
                  {({ selected }) => (
                    <button
                      className={`text-[15px] xs:w-[130px] md:w-full p-4   ${selected
                        ? "border-b-2 border-[#8D3F42] bg-red-900- outline-none bg-[#8D3F42] bg-opacity-[.25] p-2 rounded-t-[5px] text-white "
                        : ""
                        } `}
                    // onClick={() => setSelectedTabIndex(index)}
                    >
                      {tab}
                    </button>
                  )}
                </Tab>
              )
            )}
          </Tab.List>


          <Tab.Panels>
            {/* < Overview tab section > */}

            <Tab.Panel>
              <div>
                <div className="mt-3 flex xs:flex-col md:flex-row md:justify-between xs:justify-center items-center xs:space-y-2 md:space-y-0">
                  {useroverview.map((item) => {
                    return (
                      <div className="w-full md:max-w-[18rem] xs:mx-width-[24rem] mx-[10px] justify-between    rounded-[10px]  bg-white shadow-[4px_6px_10px_-3px_#bfc9d4] dark:bg-[#000]   dark:shadow-none ">
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
                  <div className="mt-8 justify-between  rounded-[10px]  bg-white p-2 shadow-[4px_6px_10px_-3px_#bfc9d4]  dark:bg-[#000] dark:shadow-sm xs:w-full md:w-2/4 md:mx-[10px] ">
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
                  <div className="mt-8 justify-between rounded-[10px] bg-white p-2   shadow-[4px_6px_10px_-3px_#bfc9d4]  dark:bg-[#000] dark:shadow-sm xs:w-full md:mx-[10px] md:w-2/4 ">
                    <h1 className="text-lg font-bold">WEEKLY SUMMARIES</h1>
                    <p className=" my-1 text-white-dark">
                      Weekly summeries data is only available from Dec 26th,2022
                      & beyond.
                    </p>
                    <div className="scrollbar-thin scrollbar-track-[#010314]  scrollbar-thumb-[#1a2941] no-scrollbar  flex h-72 flex-col overflow-y-scroll">
                      {weeklywork.map((items) => {
                        return (
                          <div className="mt-8 justify-between  rounded-lg border border-white-light bg-white   p-2 px-4 py-2 shadow-[4px_6px_10px_-3px_#bfc9d4] dark:border-[#8D3F42] dark:bg-[#000]  dark:shadow-sm">
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
                <thead className="sticky top-0 bg-opacity-[.1] bg-[#8D3F42] text-[#000] dark:text-white">
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
                          <td>{userData?.position}</td>

                          <td>{data?.amount}</td>

                          <td>
                            {/* {data?.senton} */}
                            <ul>
                              <li>
                                {new Date(data.senton).toLocaleDateString("en-US", {
                                  year: "numeric",
                                  month: "short",
                                  day: "numeric",
                                })
                                }
                              </li>
                            </ul>
                          </td>
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
                <thead className="sticky top-0 bg-opacity-[.1] bg-[#8D3F42] text-[#000] dark:text-white">
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
                        <>
                          <tr key={index}>
                            <td>{userData?.name}</td>
                            <td>{userData?.position}</td>

                            <td>
                              <p>{data?.amount}</p>
                              {/* <p>{data?.amount_two}</p> */}
                            </td>

                            <td>
                              {/* {data?.senton} */}
                              <ul>
                                <li>
                                  {new Date(data.effective_on).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                                  })
                                  }
                                </li>
                              </ul>
                            </td>

                          </tr><tr key={index}>
                            <td>{userData?.name}</td>
                            <td>{userData?.position}</td>

                            <td>
                              {/* <p>{data?.amount}</p> */}
                              <p>{data?.amount_two}</p>
                            </td>

                            <td>
                              {/* {data?.senton} */}
                              <ul>
                                <li>
                                  {new Date(data.effective_on_two).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                                  })
                                  }
                                </li>
                              </ul>
                            </td>





                          </tr></>
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
              <div className="my-6 flex w-full flex-col  rounded-[10px] bg-white px-4 py-3 shadow-md   dark:bg-[#000] dark:shadow-md   ">
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
              <div>
                <Tab.Group>
                  <Tab.List className="flex- mt-3 inline-flex  flex-wrap rounded-[10px] bg-white dark:bg-[#000] ">
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <button
                          className={`${selected
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
                          className={`${selected
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
                          className={`${selected
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
                            <p className="text-[25px] font-bold leading-normal text-black dark:text-[#fff]  "
                            >
                              Vetted Technical Skill
                            </p>
                            <p className="text-[16px] font-bold leading-normal text-black dark:text-gray-400 "
                            >
                              These are the skill we have explicity vetted for in the technical interview
                            </p>
                          </div>
                          <div className="md:ml-8 xs:mx-[10px]  md:w-[500px] border border-[#8D3F42] border-opacity-25 rounded-[10px]">
                            <div className="relative overflow-x-auto  ">
                              <table className="table-hover mt-3-">
                                <thead className="sticky top-0 bg-opacity-[.1] bg-[#8D3F42] text-[#000] dark:text-white ">
                                  <tr className="xs:text-[12px] md:text-[14px]">
                                    <th>SKILL</th>
                                    <th>VETTING RESULT</th>
                                    <th>YEAR OF EXPERIENCE</th>
                                  </tr>
                                </thead>
                                <tbody className="">
                                  {VettingResult?.length > 0 ? (
                                    VettingResult?.map((data, index) => {
                                      return (
                                        <tr key={index}>
                                          <td>{data.skill}</td>
                                          <td className={`bg-red-900- ${index === 0 ? "text-green-800 p-2 rounded-[10px]" :
                                            index === 1 ? "text-yellow-800 p-2 rounded-[10px]" :
                                              index === 2 ? "bg-green-600" :
                                                index === 3 ? "bg-yellow-400" :
                                                  ""
                                            }`}>
                                            {data.vetting_result}
                                          </td>

                                          <td>{data.yearOfExperience}+ years</td>
                                        </tr>
                                      );
                                    })
                                  ) : (
                                    <div className="absolute  flex w-full items-center justify-center">
                                      <h1 className="my-4">
                                        No data available
                                      </h1>
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
                      <div className="mt-3">
                        <div className="rounded-[5px]-  mt-3 w-full rounded-[10px] bg-white dark:bg-[#000]  shadow-md max-h-[200px]- ">
                          <div className="p-8">
                            <h2 className="text-[20px] text-[#000] dark:text-[#fff] leading-normal mb-[10px]">About Mihir</h2>
                            <div>
                              {isExpanded ? (
                                <div>
                                  {longText}<>
                                  {console.log('usage',userData)}</>
                                  <button
                                    onClick={toggleExpand}
                                   
                                    className="text-[16px] font-bold text-[#8D3F42]"
                                  >
                                    {Strings.Read_Less}
                                  </button>
                                </div>
                              ) : (
                                <div>
                                  {longText.slice(0, 256)} {/* Display first 100 characters */}
                                  <button onClick={toggleExpand} className="text-[#8D3F42] text-[16px] font-bold">{Strings.Read_More}</button>
                                </div>
                              )}
                            </div>
                            <div className="py-2.5 px-4 text-[16px] text-[#000] text-[#fff] font-normal bg-[#8D3F42] mt-[20px] rounded-3xl inline-flex items-center">
                              <button className="">
                                {Strings.Background_checked}

                              </button>
                              <div className="relative">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke-width="1.5"
                                  stroke="currentColor"
                                  className="h-6 w-6 ml-[10px] cursor-pointer"
                                  onMouseEnter={() => setTooltipVisible(true)}
                                  onMouseLeave={() => setTooltipVisible(false)}
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                                  />
                                </svg>
                                {isTooltipVisible && (
                                  <p className="bg-white border w-[300px] rounded-xl h-[100x]- absolute md:top-[-20px] md:left-[50px] xs:top-[40px] xs:left-[-185px] z-50 overflow-none text-[14px] leading-normal font-normal text-[#000]">
                                    {Strings.POPUP_TEXT_TWO}
                                  </p>
                                )}
                              </div>

                            </div>

                          </div>


                        </div>

                        <div className="rounded-[5px]-  mt-3 w-full rounded-[10px] bg-white dark:bg-[#000]  shadow-md max-h-[200px]- ">
                          <div className="p-8">
                            <h2 className="text-[20px] text-[#000] dark:text-[#fff] leading-normal mb-[10px]">Education</h2>
                            <div className="border border-[#8D3F42] p-4 rounded-xl flex items-center gap-3">
                              <div>
                                <img src={Images.RAHULSAHAI} className="w-[100px] h-[100px]" />
                              </div>
                              <div>
                                <h2 className="text-lg font-medium mb-2 text-[#000] dark:text-[#fff]">Bachelor of Science - BS, Information Technology</h2>
                                <h3 className="text-sm mb-2 text-[#000] dark:text-[#fff]">University of Mumbai</h3>
                                <p className="text-m mb-2 text-[#000] dark:text-[#fff]">Jun 2016 - May 2019</p>

                              </div>

                            </div>



                          </div>


                        </div>



                      </div>
                    </Tab.Panel>

                    <Tab.Panel>
                      <>
                        <div className="rounded-[5px]-  mt-3 w-full rounded-[10px] bg-white dark:bg-[#000]  shadow-md max-h-[200px]- ">
                          <div className="p-8">
                            <h2 className="text-[20px] text-[#000] dark:text-[#fff] leading-normal mb-[10px]">Experience
                            </h2>
                            <div className="border border-[#8D3F42] p-4 rounded-xl  gap-3">
                              <div className="flex  xs:flex-col md:flex-row">
                                <div>
                                  <img src={Images.RAHULSAHAI} className="w-[100px] h-[100px]" />
                                </div>
                                <div className="flex-1 pl-4" >
                                  <div className="flex bg-red-900- xs:my-[10px] md:my-0 bg-full- md:flex-row xs:flex-col md:justify-between md:items-center">
                                    <div className="text-lg font-medium md:mb-2 text-[#000] dark:text-[#fff]">Full Stack Developer at ANTRIX INFOTECH
                                    </div>
                                    <div> Jun 2019 - Present

                                    </div>
                                  </div>

                                  <div className="mb-[10px]">
                                    <h3 className="text-sm mb-2 text-[#000] dark:text-[#fff]">TECH STACKS USED
                                    </h3>
                                    <div >
                                      <span className="text-xs dark:text-[#fff] text-[#000]  bg-[#8D3F42] bg-opacity-[.25] py-1.5 px-2.5 rounded-full mx-[10px]-">React</span>
                                      <span className="text-xs dark:text-[#fff] text-[#000]  bg-[#8D3F42] bg-opacity-[.25] py-1.5 px-2.5 rounded-full ml-[5px]">node</span>
                                      <span className="text-xs dark:text-[#fff] text-[#000]  bg-[#8D3F42] bg-opacity-[.25] py-1.5 px-2.5 rounded-full ml-[5px]">Material UI</span>
                                    </div>

                                  </div>
                                  <div className="mt-2">
                                    <h3 className="text-sm font-medium text-[#000] dark:text-[#fff]">RESPONSIBILITIES</h3>
                                    <ul className="text-sm mt-2 font-light ml-[1.2rem] ">
                                      <li className="list-disc">Worked on different MES and WMS software products</li>
                                      <li className="list-disc">Handled product task using react js and node js
                                      </li>
                                    </ul>
                                  </div>


                                </div>
                              </div>

                            </div>



                          </div>


                        </div>
                      </>



                    </Tab.Panel>

                  </Tab.Panels>
                </Tab.Group>
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="my-6 flex w-full flex-col items-center justify-center rounded-xl bg-white px-4 py-3 shadow-md  hover:border dark:bg-[#000] dark:shadow-md dark:hover:border dark:hover:border-[#8D3F42] ">
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
    </>
  );
}