import { useEffect, useState } from "react";
import { Fragment } from "react";
import { Images, Strings } from "../../constants";
import Loader from "../../components/Layouts/Loader";
import { Tab } from "@headlessui/react";
import { useRouter } from "next/router";
import axios from "axios";
import React from "react";



interface UserData {
  vettingResult: any;
  raiseHistory: any;
  bonusHistory: any;
  totalBonusGiven: string | number | boolean | readonly string[] | readonly number[] | readonly boolean[] | null | undefined;
  monthlySalary: string | number | boolean | readonly string[] | readonly number[] | readonly boolean[] | null | undefined;
  userData: any;
  educationDetails: any;
  course: string;
  department: string;
  university: string;
  startDate: string;
  endDate: string;
  experienceDetails: any;
  responsibility: any;
  companyName: any;
  techStack: any;
  startDate2: any;
  endDate2: any;
  summary: any;
  hiring_status: string | number | boolean | readonly string[] | readonly number[] | readonly boolean[] | null | undefined;
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
  monthlyPayment: number | boolean | readonly number[] | readonly boolean[] | null | undefined;
  verifiedAiTools: string
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
    const headers = {
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJSSF8wMDAwMDEyIiwiZW1haWxJZCI6ImhhcGFuaWRoYXJtaXRAZ21haWwuY29tIiwiaWF0IjoxNzA4MDg3Njk4LCJleHAiOjE3MDgwOTEyOTh9.MwVS5MhjA6hV6GYAUP-vX25AM4uTHul9sjnp88zDXxM'
    };

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
          "https://api.eremotehire.com/myteam/getRecommendationData",
          { headers }
        );

        if (recommendationResponse.data.recommendationData) {
          const recommendationDataToSet = Array.isArray(recommendationResponse.data.recommendationData)
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
          <h1 className="text-3xl font-bold dark:text-[#fff] text-[#000] ">My Team</h1>
          <button className="nav-item grou- mt-[20px]- flex items-center rounded-full text-base bg-white md:px-8 xs:px-[10px] py-4 shadow-md dark:bg-[#8d3f42]">
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

            <text className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#fff] dark:group-hover:text-white-dark font-outfit ">
              {Strings.Hire_New_Talent}
            </text>
          </button>
        </div>
        {/* < tab bar section > */}
        <Tab.Group>
          <Tab.List className="mt-3 flex flex-wrap border-b border-opacity-25 border-[#8D3F42]">
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={` dark:text-white text-[#000] text-[15px] ${selected
                    ? "border-b-2 border-[#8D3F42] bg-red-900- outline-none bg-[#8D3F42] bg-opacity-[.25] p-2 rounded-t-[5px]  "
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
                    ? "border-b-2 border-[#8D3F42] bg-red-900- outline-none bg-[#8D3F42] bg-opacity-[.25] p-2 rounded-t-[5px]   "
                    : ""
                    }
                  px-4 py-3 dark:text-white text-[#000] text-[15px]`}
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
                              pathname: "/apps/developer-details",
                              query: {
                                name: item?.userData.firstName,
                                country: item?.userData.country,
                                position: item?.userData.designation,
                                hiring_status: item?.hiring_status,
                                price: item?.userData?.hourlyRate,
                                workingHoursInDay: item?.userData?.overview?.workingHoursInDay,
                                workType: item?.userData?.typeOfEngagement,
                                monthlySalary: item?.monthlySalary,
                                bonusGiven: item?.totalBonusGiven,
                                sentOn: item?.bonusHistory?.map((ele: { date: any; }) => ele?.date),
                                amount: item.bonusHistory ? item.bonusHistory.map((ele: { bonusAmount: any; }) => ele?.bonusAmount) : [],
                                raise: item?.raiseHistory?.raiseAmount,
                                raise_two: item?.raiseHistory?.raiseAmount,
                                effectiveOn: item?.raiseHistory?.effectiveOn,
                                effectiveOn_two: item?.raiseHistory?.effectiveOn,
                                skill: item?.vettingResult?.skill,
                                skill_two: item?.vettingResult?.skill,
                                vetting: item?.vettingResult?.vettingResult,
                                vetting_two: item?.vettingResult?.vettingResult,
                                yearOfExperience: item?.vettingResult?.yearOfExperience,
                                yearOfExperience_two: item?.vettingResult?.yearOfExperience,
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
                              <div className="flex items-center space-x-1-">
                                <text className="text-base font-semibold text-black dark:text-white leading-normal">
                                  {item.userData.firstName}
                                </text>
                              </div>
                            </div>
                            <div className=" px-2- py-0.5-">
                              <text className="text-sm  dark:text-white text-[#000] ">
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
                                <text className="mx-1-">{item.userData.country}</text>
                              </div>

                              <div>
                                <text className="text-lg  text-black dark:text-white font-bold">
                                  ${item.userData.hourlyRate}/month
                                </text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </button>
                    );

                  })
                ) : (
                  <div className="  flex w-full items-center justify-center h-[70vh]">
                    <div className="flex items-center flex-col">
                      <img src={Images.NOT_FOUND} alt="Payment_logo" className="w-[150px] h-[150px]" />
                      <h1 className="my-4 text-[22px] font-bold dark:text-white text-[#000]">No data found!</h1>
                      <p className="text-[18px] font-bold dark:text-white text-[#000]">No hires made yet, click below to get  </p>
                      <p className="text-[18px] font-bold dark:text-white text-[#000] leading-normal"> started</p>
                      <button className="nav-item grou- mt-[20px] flex items-center rounded-full text-base  bg-white px-8 py-4 shadow-md dark:bg-[#8d3f42]">
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
                          {Strings.Hire_New_Talent}
                        </text>
                      </button>

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
                                technicalInterviewNotes: item.userData.technicalInterviewNotes,
                                softSkillAssessment: item.userData.softSkillAssessment,
                                otherTechnicalSkills: item.userData.techStack,
                                skill: item.vettingResult[0]?.skill,
                                skill_two: item.vettingResult[1]?.skill,
                                vettingResult: item.vettingResult[0]?.vettingResult,
                                vettingResult_two: item.vettingResult[1]?.vettingResult,
                                yearOfExperience: item.vettingResult[0]?.yearOfExperience,
                                yearOfExperience_two: item.vettingResult[1]?.yearOfExperience,
                                educationDetails: item.educationDetails.course,
                                course: item.educationDetails[0]?.course,
                                department: item.educationDetails[0]?.department,
                                university: item.educationDetails[0]?.university,
                                startDate: item.educationDetails[0]?.startDate,
                                endDate: item.educationDetails[0]?.endDate,
                                companyName: item.experienceDetails[0]?.companyName,
                                responsibility: item.experienceDetails[0]?.responsibility,
                                teckStack: item.experienceDetails[0]?.techStack,
                                verifiedAiTools: item?.userData?.verifiedAiTools,
                                startDate2: item.experienceDetails[0]?.startDate,
                                endDate2: item.experienceDetails[0]?.endDate,
                                summary: item.userData?.summary,
                                monthlyPayment: item.monthlyPayment,
                              },
                            },
                            "getRecommendation-details"
                          )
                        }



                        className="my-6 flex w-full items-center rounded-xl bg-white px-4 py-3 shadow-md   dark:bg-[#000] dark:shadow-md ">
                        <div className="rounded-full bg-blue-300- p-2-">
                          {/* <Image src={item.userData.profilePicture} alt="profile-pic" width={100} height={100} className="w-[50px] h-[50px] rounded-full" /> */}
                          <img src={item.userData.profilePicture} alt="profile" className="w-[130px] md:h-[120px] xs:h-[95px] rounded-full" />




                        </div>
                        <div className="w-full pl-2.5">
                          <div className=" flex flex-col items-start">
                            <div className="flex  w-full justify-between pr-3">
                              <div className="flex items-center space-x-1-">
                                <text className="text-base font-semibold text-black dark:text-white leading-normal">
                                  {item.userData.firstName}
                                </text>
                              </div>
                            </div>
                            <div className=" px-2- py-0.5-">
                              <text className="text-sm  dark:text-white text-[#000] ">
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
                                <text className="mx-1-">{item.userData.country}</text>
                              </div>

                              <div>
                                <text className="text-lg  text-black dark:text-white font-bold">
                                  {item?.monthlyPayment != null && !isNaN(Number(item?.monthlyPayment)) ? (
                                    <>
                                      {Number(item?.monthlyPayment) >= 1000
                                        ? `$${(Number(item?.monthlyPayment) / 1000).toFixed(1)}k`
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
                  <><div>
                    <p className="dark:text-white text-[#000] text-[18px] my-[5px]">These are the recommendations based on your requirements</p>

                  </div>
                  <div className="  flex w-full items-center justify-center h-[70vh]">
                      <div className="flex items-center flex-col">
                        <img src={Images.NOT_FOUND} alt="Payment_logo" className="w-[150px] h-[150px]" />
                        <h1 className="leading-normal text-xl font-bold dark:text-white text-[#000]">No hand picked</h1>
                        <p className="leading-normal text-[18px] font-bold dark:text-white text-[#000]">recommendations available</p>
                        <p className="text-[16px] font-bold dark:text-white text-[#000]">Create your first requirement to receive </p>
                        <p className="text-[16px] font-bold dark:text-white text-[#000] leading-normal">hand-picked recommendations.</p>
                        <button className="nav-item grou- mt-[20px] flex items-center rounded-full text-base  bg-white px-8 py-4 shadow-md dark:bg-[#8d3f42]">
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
                              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>

                          <text className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#fff] dark:group-hover:text-white-dark">
                            {Strings.Hire_New_Talent}
                          </text>
                        </button>

                      </div>

                    </div></>

                )}
              </div>
            </Tab.Panel>
          </Tab.Panels>


        </Tab.Group>



      </div >
    </div>

  );
}