import { useEffect, useState } from "react";
import Loader from "../../components/Layouts/Loader";
import React from "react";
import { useRouter } from "next/router";
import { Strings, Images } from "../../constants";
import { Fragment } from "react";
import { Tab } from "@headlessui/react";
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
import { format, isValid, parseISO } from 'date-fns';

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

const RecommendationDeveloperDetails = () => {
  const router = useRouter();
  const [userData, setUserData] = useState({ monthlyPayment: null, summary: "", name: "", course: "", department: "", university: "", startDate: "", endDate: "", startDate2: "", endDate2: "", responsibility: "", companyName: "", position: "", profile: "", price: "", country: "", amount: "", sentOn: "", raise: "", raise_two: "", skill: "", skill_two: "", vettingResult: "", vettingResult_two: "", yearOfExperience: "", yearOfExperience_two: "", workType: "", monthlySalary: "", bonusGiven: "", technicalInterviewNotes: "", otherTechnicalSkills: "", softSkillAssessment: "", educationDetails: [{}], experienceDetails: [{}], teckStack: [""], verifiedAiTools: [""] });
  const [loading, setLoading] = useState(true);
  const [selectedTab, setSelectedTab] = useState("vettingProcess");
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTooltipVisible, setTooltipVisible] = useState(false);


  let formattedStartDate = '';
  if (userData.startDate) {
    const dateObject = parseISO(userData.startDate); // Parse ISO-formatted date string
    if (isValid(dateObject)) {
      formattedStartDate = format(dateObject, "MMM dd, yyyy"); // Format date
    } else {
      console.error('Invalid date:', userData.startDate);
    }
  }

  let formattedEndDate = '';
  if (userData.endDate) {
    const dateObject = parseISO(userData.endDate); // Parse ISO-formatted date string
    if (isValid(dateObject)) {
      formattedEndDate = format(dateObject, "MMM dd, yyyy"); // Format date
    } else {
      console.error('Invalid date:', userData.endDate);
    }
  }

  let formatStartDate = '';
  if (userData.startDate2) {
    const dateObject = parseISO(userData.startDate2); // Parse ISO-formatted date string
    if (isValid(dateObject)) {
      formatStartDate = format(dateObject, "MMM yyyy"); // Format date
    } else {
      console.error('Invalid date:', userData.startDate2);
    }
  }

  let formatEndDate = '';
  if (userData.endDate2) {
    const dateObject = parseISO(userData.endDate2); // Parse ISO-formatted date string
    if (isValid(dateObject)) {
      formatEndDate = format(dateObject, "MMM yyyy"); // Format date
    } else {
      console.error('Invalid date:', userData.endDate2);
    }
  }

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    setUserData(prevUserData => ({
      ...prevUserData,
      ...router.query
    }));
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
      id: 1,
      skill: `${userData?.skill_two}`,
      vetting_result: `${userData?.vettingResult_two}`,
      yearOfExperience: `${userData?.yearOfExperience_two}`,
    },
  ];

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
        <div className="bg-blue-300- w-[100px] h-[90px]">
          <img src={userData.profile} alt="profile" className="rounded-[50%] w-[100%] h-[100%] overflow-hidden" />
        </div>
        <div className="w-full pl-2.5">
          <div className=" flex flex-col items-start">
            <div className="flex  w-full justify-between pr-3">
              <div className="flex items-center space-x-1">
                <text className="text-base font-semibold text-black dark:text-white">
                  {userData?.name}
                </text>
              </div>
              <div className=" xs:hidden md:flex ">
                <button className="mr-2 flex items-center rounded-xl border border-black px-2 py-0.5 shadow-sm dark:shadow">
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
                  <text>{'compliantly hired'}</text>
                </button>
                <button className="mr-[-5px] flex items-center rounded-xl border border-black px-2 py-0.5 shadow-sm dark:shadow">
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
              <div className=" py-0.5">
                <text className="text-sm text-[#000] dark:text-white">{userData?.position}</text>
              </div>
            </div>
            <div className="flex w-full items-center justify-between">
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
                {userData?.monthlyPayment != null && !isNaN(userData?.monthlyPayment) ? (
                  <>
                    {userData?.monthlyPayment >= 1000
                      ? `$${(userData?.monthlyPayment / 1000).toFixed(1)}k`
                      : `$${userData.monthlyPayment}`}
                    /month
                  </>
                ) : (
                  "Monthly payment not available"
                )}
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
                <Tab.List className="flex- my-3 inline-flex  flex-wrap rounded-[10px] bg-white dark:bg-[#000]">
                  <Tab as={Fragment}>
                    {({ selected }) => (
                      <button
                        className={`${selected
                          ? " ml-[2px] rounded-[30px] px-[15px]  py-[5px] text-white !outline-none dark:!border-b-black bg-[#8D3F42] dark:text-white "
                          : ""
                          }
                    border- -mb-[1px] block border-transparent p-4 py-3 dark:hover:border-b-black dark:hover:text-white`}
                      >
                        {Strings.VETTING_RESULT}
                      </button>
                    )}
                  </Tab>
                  <Tab as={Fragment}>
                    {({ selected }) => (
                      <button
                        className={`${selected
                          ? "nav-item group flex items-center rounded-[30px] text-white px-[15px] py-2 shadow-md bg-[#8d3f42]"
                          : ""
                          }
                    border- -mb-[1px] block border-transparent p-4 py-3  dark:hover:border-b-black dark:hover:text-white`}
                      >
                        {Strings.About}
                      </button>
                    )}
                  </Tab>
                  <Tab as={Fragment}>
                    {({ selected }) => (
                      <button
                        className={`${selected
                          ? "mr-[2px] rounded-[30px] px-[15px]  py-[5px] text-white !outline-none dark:!border-b-black bg-[#8D3F42] dark:text-white"
                          : ""
                          }
                    border- -mb-[1px] block border-transparent p-4 py-3 dark:hover:border-b-black dark:hover:text-white`}
                      >
                        {Strings.Experience}
                      </button>
                    )}
                  </Tab>
                </Tab.List>
                <Tab.Panels>
                  <Tab.Panel>
                    <div className="mt-3">
                      <div className="rounded-[5px]-  mt-3 w-full rounded-[10px] bg-white  shadow-md dark:bg-[#000] xs:h-[450px]- md:h-[430px]- ">
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
                        <div className="md:ml-8 xs:mx-[10px]  md:w-[500px] border border-[#8D3F42] border-opacity-25 rounded-[10px]">
                          <div className="relative overflow-x-auto ">
                            <table className="table-hover mt-3-">
                              <thead className="sticky top-0 bg-opacity-[.1] bg-[#8D3F42] text-[#000] dark:text-white">
                                <tr>
                                  <th>{Strings.SKILL}</th>
                                  <th>{Strings.VETTING_RESULT}</th>
                                  <th>{Strings.YEAR_OF_EXPERIENCE}</th>
                                </tr>
                              </thead>
                              <tbody>
                                {VettingResult?.length > 0 ? (
                                  VettingResult?.map((data, index) => {
                                    return (
                                      <tr key={index}>
                                        <td>{data.skill}</td>
                                        <td className={``}>
                                          <button className={`bg-red-900- ${index === 0 ? "text-green-800 p-2 rounded-[10px]" :
                                            index === 1 ? "text-yellow-800 p-2 rounded-[10px]" :
                                              index === 2 ? "bg-green-600" :
                                                index === 3 ? "bg-yellow-400" :
                                                  ""
                                            }`}>
                                            {data.vetting_result}
                                          </button>

                                        </td>
                                        <td>{data.yearOfExperience}+ years</td>
                                      </tr>
                                    );
                                  })
                                ) : (
                                  <div className="absolute  flex w-full items-center justify-center">
                                    <h1 className="my-4">{Strings.NO_DATA_AVAILABLE}</h1>
                                  </div>
                                )}
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div className="p-8 mb-[20px] bg-red-900-">
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
                      <div className="rounded-[5px]-  mt-3 w-full rounded-[10px] bg-white shadow-md dark:bg-[#000]  xs:max:h-[430px] md:max:h-[400px] ">
                        <div className="p-8">
                          <LabelComponent
                            label="Soft Skill "
                            className="text-[25px] font-bold leading-normal text-black dark:text-[#fff]"
                          />
                          <div className="mt-[10px]">
                            {
                              userData.teckStack?.length > 0
                                ? userData.teckStack.map((ele: any, index) => (
                                  <div className=" mr-[16px] inline-flex rounded-[10px] border bg-white px-4 py-3 text-[14px] font-semibold text-[#000] dark:bg-[#000] dark:text-white mb-2 ">{ele}</div>
                                ))
                                : ""
                            }
                          </div>
                        </div>
                      </div>
                      <div className="rounded-[5px]- mt-3 w-full rounded-[10px] bg-white shadow-md dark:bg-[#000]  xs:h-[200px]- md:h-[200px]- ">
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
                        <div className="pl-[32px] pb-[32px]">
                          {
                            userData.verifiedAiTools?.length > 0
                              ? userData.verifiedAiTools.map((ele: any, index) => (
                                <div className=" mr-[16px] inline-flex rounded-[10px] border bg-white px-4 py-3 text-[14px] font-semibold text-[#000] dark:bg-[#000] dark:text-white mb-2 ">{ele}</div>
                              ))
                              : ""
                          }
                        </div>
                      </div>
                    </div>
                  </Tab.Panel>
                  {/* Second tab */}
                  <Tab.Panel>
                    <div className="mt-3">
                      <div className="rounded-[5px]-  mt-3 w-full rounded-[10px] bg-white dark:bg-[#000]  shadow-md max-h-[200px]- ">
                        <div className="p-8">
                          <h2 className="text-[20px] text-[#000] dark:text-[#fff] leading-normal mb-[10px]">{userData.name}</h2>
                          <div>
                            {isExpanded ? (
                              <div>
                                {userData.summary}
                                <button onClick={toggleExpand} className="text-[#8D3F42] text-[16px] font-bold">{Strings.Read_Less}</button>
                                <>
                                </>
                              </div>
                            ) : (
                              <div>
                                {userData.summary.slice(0, 150)}
                                <button onClick={toggleExpand} className="text-[#8D3F42] text-[16px] font-bold">{Strings.Read_More}</button>
                              </div>
                            )}
                          </div>
                          <div className="py-2.5 px-4 text-[16px] text-white font-normal bg-[#8D3F42] mt-[20px] rounded-3xl inline-flex items-center">
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
                          <h2 className="text-[20px] text-[#000] dark:text-[#fff] leading-normal mb-[10px]">{Strings.EDUCATION}</h2>
                          <div className="border border-[#8D3F42] p-4 rounded-xl flex items-center gap-3">
                            <div className="bg-blue-300- w-[100px] h-[90px]">
                              <img src={userData.profile} className="rounded-[50%] w-[100%] h-[100%] overflow-hidden" />
                            </div>
                            <div>
                              <h2 className="text-lg font-medium mb-2 text-[#000] dark:text-[#fff]">{userData.course} - {userData.department}</h2>
                              <h3 className="text-sm mb-2 text-[#000] dark:text-[#fff]">{userData.university}</h3>
                              <p className="text-m mb-2 text-[#000] dark:text-[#fff]">{formattedStartDate} - {formattedEndDate}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Tab.Panel>
                  {/* Third tab */}
                  <Tab.Panel>
                    <>
                      <div className="rounded-[5px]-  mt-3 w-full rounded-[10px] bg-white dark:bg-[#000]  shadow-md max-h-[200px]- ">
                        <div className="p-8">
                          <h2 className="text-[20px] text-[#000] dark:text-[#fff] leading-normal mb-[10px]">{Strings.Experience}
                          </h2>
                          <div className="border border-[#8D3F42] p-4 rounded-xl  gap-3">
                            <div className="flex  xs:flex-col md:flex-row">
                              <div className="rounded-full bg-blue-300- p-2-">
                                <img src={userData.profile} className="rounded-full w-[100px] h-[100px]" />
                              </div>
                              <div className="flex-1 pl-4" >
                                <div className="flex bg-red-900- xs:my-[10px] md:my-0 bg-full- md:flex-row xs:flex-col md:justify-between md:items-center">
                                  <div className="text-lg font-medium md:mb-2 text-[#000] dark:text-[#fff]">{userData.responsibility} at {userData.companyName}
                                  </div>
                                  <div> {formatStartDate}-{formatEndDate}
                                  </div>
                                </div>

                                <div className="mb-[10px]">
                                  <h3 className="text-sm mb-2 text-[#000] dark:text-[#fff]">{Strings.TECH_STACKS_USED}</h3>
                                  <div>
                                    {
                                      userData.teckStack?.length > 0 ?
                                        (
                                          userData.teckStack.map((ele, index) => {
                                            return (
                                              <span className="text-xs dark:text-[#fff] text-[#000] mr-[6px] bg-[#8D3F42] bg-opacity-[.25] py-1.5 px-2.5 rounded-full mx-[10px]-">{ele}</span>
                                            )
                                          })
                                        ) : (
                                          null)
                                    }
                                  </div>
                                </div>
                                <div className="mt-2">
                                  <h3 className="text-sm font-medium text-[#000] dark:text-[#fff]">{Strings.RESPONSIBILITIES}</h3>
                                  <ul className="text-sm mt-2 font-light ml-[1.2rem] ">
                                    <li className="list-disc">{userData.responsibility}</li>
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
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export default RecommendationDeveloperDetails
