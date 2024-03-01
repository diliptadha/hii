import { Fragment, useEffect, useState } from "react";
import { Images, Strings } from "../constants";
import Loader from "../components/Layouts/Loader";
import React from "react";
import { Tab } from "@headlessui/react";
import axios from "axios";
import { useRouter } from "next/router";
import Image from "next/image";

interface UserData {
  experienceDetails: any;
  educationDetails: any;
  summary:
  | string
  | number
  | boolean
  | readonly string[]
  | readonly number[]
  | readonly boolean[]
  | null
  | undefined;
  vettingResult: any;
  raiseHistory: any;
  bonusHistory: any;
  totalBonusGiven:
  | string
  | number
  | boolean
  | readonly string[]
  | readonly number[]
  | readonly boolean[]
  | null
  | undefined;
  monthlySalary:
  | number
  | boolean
  | readonly number[]
  | readonly boolean[]
  | null
  | undefined;
  userData: any;

  course: string;
  department: string;
  university: string;
  startDate: string;
  endDate: string;

  responsibility: any;
  companyName: any;
  techStack: any;
  startDate2: any;
  endDate2: any;
  hiring_status:
  | string
  | number
  | boolean
  | readonly string[]
  | readonly number[]
  | readonly boolean[]
  | null
  | undefined;

  firstName: string;
  country: string;
  designation: string;
  hourlyRate: string;
  overview?: {
    workingHoursInDay: number;
  };
  typeOfEngagement: string;
  skill: string;
  yearOfExperience: string;
  monthlyPayment:
  | number
  | boolean
  | readonly number[]
  | readonly boolean[]
  | null
  | undefined;
  verifiedAiTools: string;
  profilePicture: string;
}
interface BonusHistory {
  bonusAmount: any;
  developer: string;
  role: string;
  date: string;
}

interface RaiseHistory {
  raiseAmount: string;
  effectiveOn: string;
}

interface VettingResult {
  skill: string;
  vettingResult: string;
  yearOfExperience: string;
}

interface EducationDetail {
  course: any;
}

interface ExperienceDetails {
  startDate: string;
  endDate: string;
}

interface TeckStack {
  teckStack: any;
}

interface UserItem {
  userData: UserData;
  hiring_status: string;
  monthlySalary: string;
  totalBonusGiven: string;
  bonusHistory?: BonusHistory[];
  raiseHistory?: RaiseHistory[];
  educationDetails?: EducationDetail[];
  vettingResult?: VettingResult[];
  experienceDetails?: ExperienceDetails[];
  techStack?: TeckStack[];
  profile_process?: string;
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
    const headers = { Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}` };

    const fetchData = async () => {
      try {
        const hiredResponse = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}myteam/getHiredData?userId=RH_0000012`,
          { headers }
        );
        if (hiredResponse.data.hiredData) {
          const hiredDataToSet = Array.isArray(hiredResponse.data.hiredData)
            ? hiredResponse.data.hiredData
            : [hiredResponse.data.hiredData];

          setUserdata(hiredDataToSet);
        } else {
          console.error(
            "Hired data received is not in the expected format:",
            hiredResponse.data
          );
        }

        // Fetch recommendation data
        const recommendationResponse = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}myteam/getRecommendationData`,
          { headers }
        );

        if (recommendationResponse.data.recommendationData) {
          const recommendationDataToSet = Array.isArray(
            recommendationResponse.data.recommendationData
          )
            ? recommendationResponse.data.recommendationData
            : [recommendationResponse.data.recommendationData];

          setUserdataa(recommendationDataToSet);
        } else {
          console.error(
            "Recommendation data received is not in the expected format:",
            recommendationResponse.data
          );
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return loading ? (
    <div>
      <Loader />
    </div>
  ) : (
    <div>
      <div className="flex flex-col">
        {/* < heading section > */}
        <div className="flex items-center justify-between  ">
          <h1 className="text-3xl font-bold text-[#000] dark:text-[#fff] ">
            {Strings.MY_TEAM}
          </h1>
          <a href="/hire-new-talent">
            <button className="nav-item grou- mt-[20px]- flex items-center rounded-full bg-white  py-4 text-base shadow-md dark:bg-[#8d3f42] xs:px-[10px] md:px-8">
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

              <text className="font-outfit text-black dark:text-[#fff] dark:group-hover:text-white-dark ltr:pl-3 rtl:pr-3 ">
                {Strings.Hire_New_Talent}
              </text>
            </button>
          </a>
        </div>
        {/* < tab bar section > */}
        <Tab.Group>
          <Tab.List className="mt-3 flex flex-wrap border-b border-[#8D3F42] border-opacity-25">
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={` text-[15px] text-[#000] dark:text-white ${selected
                    ? "bg-red-900- rounded-t-[5px] border-b-2 border-[#8D3F42] bg-[#8D3F42] bg-opacity-[.25] p-2 outline-none  "
                    : ""
                    }
                  px-4 py-3`}
                >
                  {Strings.HIRED}
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={`${selected
                    ? "bg-red-900- rounded-t-[5px] border-b-2 border-[#8D3F42] bg-[#8D3F42] bg-opacity-[.25] p-2 outline-none   "
                    : ""
                    }
                  px-4 py-3 text-[15px] text-[#000] dark:text-white`}
                >
                  {Strings.Recommendation}
                </button>
              )}
            </Tab>
          </Tab.List>

          <Tab.Panels>
            <Tab.Panel>
              <div className="mt-5">
                {userdata?.length > 0 ? (
                  userdata?.map((item) => {
                    return (
                      <button
                        onClick={() =>
                          router.push(
                            {
                              pathname: "/payroll/developer-details",
                              query: {
                                profilePicture: item?.userData?.profilePicture,
                                name: item?.userData.firstName,
                                country: item?.userData.country,
                                position: item?.userData.designation,
                                hiring_status: item?.hiring_status,
                                price: item?.userData?.hourlyRate,
                                workingHoursInDay:
                                  item?.userData?.overview?.workingHoursInDay,
                                workType: item?.userData?.typeOfEngagement,
                                monthlySalary: item?.monthlySalary,
                                bonusGiven: item?.totalBonusGiven,
                                sentOn: item?.bonusHistory[0]?.date,
                                amount: item.bonusHistory
                                  ? item.bonusHistory.map(
                                    (ele: { bonusAmount: any }) =>
                                      ele?.bonusAmount
                                  )
                                  : [],
                                raise: item?.raiseHistory?.[0]?.raiseAmount,
                                raise_two: item?.raiseHistory?.[1]?.raiseAmount,
                                effectiveOn: item?.raiseHistory[0]?.effectiveOn,
                                effectiveOn_two:
                                  item?.raiseHistory[1]?.effectiveOn,
                                skill: item?.vettingResult?.[0]?.skill,
                                skill_two: item?.vettingResult?.[1]?.skill,
                                vetting:
                                  item?.vettingResult?.[0]?.vettingResult,
                                vetting_two:
                                  item?.vettingResult?.[1]?.vettingResult,
                                yearOfExperience:
                                  item?.vettingResult?.[0]?.yearOfExperience,
                                yearOfExperience_two:
                                  item?.vettingResult?.[1]?.yearOfExperience,
                                educationDetails: JSON.stringify(
                                  item.educationDetails
                                ),
                                experienceDetails: JSON.stringify(
                                  item.experienceDetails
                                ),
                                summary: item?.userData?.summary,
                              },
                            },
                            "/myTeam/developer-details"
                          )
                        }
                        className="my-6 flex w-full items-center rounded-xl bg-white px-4 py-3 shadow-md   dark:bg-[#000] dark:shadow-md "
                      >
                        <div className="rounded-full p-2">
                          {
                            item.userData.profilePicture.length > 0 ? (
                              <img
                                src={item.userData.profilePicture}
                                alt="profile"
                                className="w-[130px] rounded-full xs:h-[85px] md:h-[115px]"
                              />
                            ) : (
                              <img
                                src="/Images/Avtar.png"
                                alt="profile"
                                className="w-[130px] rounded-full xs:h-[85px] md:h-[115px]"
                              />
                            )
                          }

                        </div>
                        <div className="w-full pl-2.5">
                          <div className=" flex flex-col items-start">
                            <div className="flex  w-full justify-between pr-3">
                              <div className="space-x-1- flex items-center">
                                <text className="text-base font-semibold leading-normal text-black dark:text-white">
                                  {item.userData.firstName}
                                </text>
                              </div>
                            </div>
                            <div className=" px-2- py-0.5-">
                              <text className="text-sm  text-[#000] dark:text-white ">
                                {item.userData.designation}
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
                                <text className="mx-1-">
                                  {item.userData.country}
                                </text>
                              </div>

                              <div>
                                <text className="text-lg  font-bold text-black dark:text-white">
                                  {item?.monthlySalary != null &&
                                    !isNaN(Number(item?.monthlySalary)) ? (
                                    <>
                                      {Number(item?.monthlySalary) >= 1000
                                        ? `$${(
                                          Number(item?.monthlySalary) / 1000
                                        ).toFixed(1)}k`
                                        : `$${item?.monthlySalary}`}
                                      /month
                                    </>
                                  ) : (
                                    "Monthly payment not available"
                                  )}
                                </text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </button>
                    );
                  })
                ) : (
                  <div className="  flex h-[70vh] w-full items-center justify-center">
                    <div className="flex flex-col items-center">
                      <img
                        src={Images.NOT_FOUND}
                        alt="Payment_logo"
                        className="h-[150px] w-[150px]"
                      />
                      <h1 className="my-4 text-[22px] font-bold text-[#000] dark:text-white">
                        {Strings.NOTHING_FOUND}
                      </h1>
                      <p className="text-[18px] font-bold text-[#000] dark:text-white">
                        {Strings.NO_HIRES_MADE}{" "}
                      </p>
                      <p className="text-[18px] font-bold leading-normal text-[#000] dark:text-white">
                        {" "}
                        {Strings.STARTED}
                      </p>
                      <a href="/hire-new-talent">
                        <button className="nav-item grou- mt-[20px] flex items-center rounded-full bg-white  px-8 py-4 text-base shadow-md dark:bg-[#8d3f42]">
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

                          <text className="text-black dark:text-[#fff] dark:group-hover:text-white-dark ltr:pl-3 rtl:pr-3">
                            {Strings.Hire_New_Talent}
                          </text>
                        </button>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </Tab.Panel>
            {/* < Recommendtion tab section > */}
            <Tab.Panel>
              <div className="mt-5">
                {userdataa?.length > 0 ? (
                  userdataa.map((item: UserData) => {
                    return (
                      <button
                        onClick={() =>
                          router.push(
                            {
                              pathname: "/apps/getRecommendation-details",
                              query: {
                                name: item.userData.firstName,
                                profile: item.userData.profilePicture,
                                country: item.userData.country,
                                position: item.userData.designation,
                                monthlySalary: item.userData.hourlyRate,
                                technicalInterviewNotes:
                                  item.userData.technicalInterviewNotes,
                                softSkillAssessment:
                                  item.userData.softSkillAssessment,
                                otherTechnicalSkills: item.userData.techStack,
                                skill: item.vettingResult[0]?.skill,
                                skill_two: item.vettingResult[1]?.skill,
                                vettingResult:
                                  item.vettingResult[0]?.vettingResult,
                                vettingResult_two:
                                  item.vettingResult[1]?.vettingResult,
                                yearOfExperience:
                                  item.vettingResult[0]?.yearOfExperience,
                                yearOfExperience_two:
                                  item.vettingResult[1]?.yearOfExperience,
                                course: item.educationDetails[0]?.course,
                                department:
                                  item.educationDetails[0]?.department,
                                university:
                                  item.educationDetails[0]?.university,
                                startDate: item.educationDetails[0]?.startDate,
                                endDate: item.educationDetails[0]?.endDate,
                                companyName:
                                  item.experienceDetails[0]?.companyName,
                                responsibility:
                                  item.experienceDetails[0]?.responsibility,
                                teckStack: item.experienceDetails[0]?.techStack,
                                verifiedAiTools:
                                  item?.userData?.verifiedAiTools,
                                startDate2:
                                  item.experienceDetails[0]?.startDate,
                                endDate2: item.experienceDetails[0]?.endDate,
                                summary: item.userData?.summary,
                                monthlyPayment: item?.monthlyPayment,
                              },
                            },
                            "/myTeam/getRecommendation-details"
                          )
                        }
                        className="my-6 flex w-full items-center rounded-xl bg-white px-4 py-3 shadow-md   dark:bg-[#000] dark:shadow-md "
                      >
                        <div className="bg-blue-300- p-2-">
                          <img
                            src={item.userData.profilePicture || "/Images/Avtar.png" }
                            alt="profile"
                            className="w-[130px] rounded-full xs:h-[85px] md:h-[115px]"
                          />
                        </div>
                        <div className="w-full pl-2.5">
                          <div className=" flex flex-col items-start">
                            <div className="flex  w-full justify-between pr-3">
                              <div className="space-x-1- flex items-center">
                                <text className="text-base font-semibold leading-normal text-black dark:text-white">
                                  {item.userData.firstName}
                                </text>
                              </div>
                            </div>
                            <div className=" px-2- py-0.5-">
                              <text className="text-sm  text-[#000] dark:text-white ">
                                {item.userData.designation}
                              </text>
                            </div>
                            <div className="flex  w-full items-center justify-between">
                              {
                                item.userData.country ? (
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
                                    <text className="mx-1-">
                                      {item.userData.country}
                                    </text>
                                  </div>
                                ) : (
                                  <div></div>
                                )
                              }

                              <div>
                                <text className="text-lg  font-bold text-black dark:text-white">
                                  {item?.monthlyPayment != null &&
                                    !isNaN(Number(item?.monthlyPayment)) ? (
                                    <>
                                      {Number(item?.monthlyPayment) >= 1000
                                        ? `$${(
                                          Number(item?.monthlyPayment) / 1000
                                        ).toFixed(1)}k`
                                        : `$${item.monthlyPayment}`}
                                      /month
                                    </>
                                  ) : (
                                    "Monthly payment not available"
                                  )}
                                </text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </button>
                    );
                  })
                ) : (
                  <>
                    <div>
                      <p className="my-[5px] text-[18px] text-[#000] dark:text-white">
                        {Strings.THESE_ARE_RECOMEND}
                      </p>
                    </div>
                    <div className="  flex h-[70vh] w-full items-center justify-center">
                      <div className="flex flex-col items-center">
                        <img
                          src={Images.NOT_FOUND}
                          alt="Payment_logo"
                          className="h-[150px] w-[150px]"
                        />
                        <h1 className="text-xl font-bold leading-normal text-[#000] dark:text-white">
                          {Strings.NO_HANDPICKED}
                        </h1>
                        <p className="text-[18px] font-bold leading-normal text-[#000] dark:text-white">
                          {Strings.RECOMMENDATIONS}
                        </p>
                        <p className="text-[16px] font-bold text-[#000] dark:text-white">
                          {Strings.CREATE_YOUR_REQUIREMENT}
                        </p>
                        <p className="text-[16px] font-bold leading-normal text-[#000] dark:text-white">
                          {Strings.HAND_PICKED}
                        </p>
                        <a href="/apps/hire-new-talent">
                          <button className="nav-item grou- mt-[20px] flex items-center rounded-full bg-white  px-8 py-4 text-base shadow-md dark:bg-[#8d3f42]">
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
                            <text className="text-black dark:text-[#fff] dark:group-hover:text-white-dark ltr:pl-3 rtl:pr-3">
                              {Strings.Hire_New_Talent}
                            </text>
                          </button>
                        </a>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}
