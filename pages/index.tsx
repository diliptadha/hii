import { useEffect, useState } from "react";

import { IRootState } from "@/store";
import Image from "next/image";
import { Images } from "@/constants";
import Loader from "@/components/Layouts/Loader";
import React from "react";
import { Strings } from "@/constants";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import axios from "axios";

export default function Index() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const themeConfig = useSelector((state: IRootState) => state.themeConfig);
  const [managerData, setManagerData] = useState<Managing | null>(null);
  const [hiredDataCount, setHiredDataCount] = useState<number>(0);
  const [userdataa, setUserdataa] = useState<UserData[]>([]);


  interface UserData {
    userData: any;
    softSkillAssessment: string | number | boolean | readonly string[] | readonly number[] | readonly boolean[] | null | undefined;
    otherTechnicalSkills: string | number | boolean | readonly string[] | readonly number[] | readonly boolean[] | null | undefined;
    verifiedAiTools: string | number | boolean | readonly string[] | readonly number[] | readonly boolean[] | null | undefined;
    technicalInterviewNotes: string | number | boolean | readonly string[] | readonly number[] | readonly boolean[] | null | undefined;
    monthlySalary: ReactNode;
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


  interface Managing {
    profilePicture: any,
    firstName: any,
    lastName: any,
    emailId: any,
    phoneNo: any
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJSSF8wMDAwMDEyIiwiZW1haWxJZCI6ImhhcGFuaWRoYXJtaXRAZ21haWwuY29tIiwiaWF0IjoxNzA4MDg3Njk4LCJleHAiOjE3MDgwOTEyOTh9.MwVS5MhjA6hV6GYAUP-vX25AM4uTHul9sjnp88zDXxM';

    const fetchData = async () => {


      try {
        const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJSSF8wMDAwMDEyIiwiZW1haWxJZCI6ImhhcGFuaWRoYXJtaXRAZ21haWwuY29tIiwiaWF0IjoxNzA4MDg3Njk4LCJleHAiOjE3MDgwOTEyOTh9.MwVS5MhjA6hV6GYAUP-vX25AM4uTHul9sjnp88zDXxM';

        const [successManagerResponse] = await Promise.all([
          axios.get(`${process.env.NEXT_PUBLIC_API_URL}devdashboard/getdeveloperManagerData?userId=RH_0000004`, { headers: { 'Authorization': token } }),
        ]);

        setManagerData(successManagerResponse?.data?.managerData);
      }
      catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    
    fetchData();

    return () => clearTimeout(timer); 

  }, []); 

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}myteam/getHiredData?userId=RH_0000012`,
          {
            headers: {
              'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJSSF8wMDAwMDEyIiwiZW1haWxJZCI6ImhhcGFuaWRoYXJtaXRAZ21haWwuY29tIiwiaWF0IjoxNzA4MDg3Njk4LCJleHAiOjE3MDgwOTEyOTh9.MwVS5MhjA6hV6GYAUP-vX25AM4uTHul9sjnp88zDXxM'
            },
          }
        );

        if (response.data.hiredData) {
          const dataCount = Array.isArray(response.data.hiredData)
            ? response.data.hiredData.length
            : 0; 
          setHiredDataCount(dataCount);
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
          `${process.env.NEXT_PUBLIC_API_URL}myteam/getRecommendationData`,
          {
            headers: {
              'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJSSF8wMDAwMDEyIiwiZW1haWxJZCI6ImhhcGFuaWRoYXJtaXRAZ21haWwuY29tIiwiaWF0IjoxNzA4MDg3Njk4LCJleHAiOjE3MDgwOTEyOTh9.MwVS5MhjA6hV6GYAUP-vX25AM4uTHul9sjnp88zDXxM'
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



  const isDark = useSelector(
    (state: IRootState) =>
      state.themeConfig.theme === "dark" || state.themeConfig.isDarkMode
  );
  const isRtl =
    useSelector((state: IRootState) => state.themeConfig.rtlClass) === "rtl"
      ? true
      : false;

  return loading ? (
    <div>
      <Loader />
    </div>
  ) : (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="select-none text-xl font-bold dark:text-white">
          {Strings.DASHBOARD}
        </h1>
        <a
          href="/apps/hire-new-talent"
          className="nav-item group flex items-center rounded-[45px] bg-white px-7 py-2 text-black shadow-md hover:text-blue-500 dark:bg-[#000] dark:text-[#fff] ltr:pl-3 rtl:pr-3 "
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
              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          <text className="text-black ltr:pl-3 rtl:pr-3 hover:text-[#8D3F42] hover:dark:text-[#8D3F42] dark:text-white">
            {Strings.HIRE_NEW_TALENT}
          </text>
        </a>
      </div>
      <div>
        <div className="flex w-full xs:flex-col md:flex-row justify-between">
          <div className="dark:border-gray-700 mb-[20px] flex items-center justify-center space-x-2 rounded-lg border-none bg-white p-6 shadow outline-none dark:bg-[#000] lg:mr-[10px] xl:mr-[20px] xs:w-full sm:w-[350px]  lg:w-full lg:max-w-[475px] xl:max-w-[720px] ">
            <div>
              <a href="/apps/my-team">
                <button className="dark:text-white mb-[15px] text-[14px] font-bold dark:text-white">
                  {Strings.HIRED_ENGINEERS}
                </button>
                <button className="dark:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 -1 24 18" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </a>
              <p className="text-center text-[20px] font-bold text-black-500 dark:text-white select-none">
                {hiredDataCount}
              </p>
            </div>
          </div>
          <div className="dark:border-gray-700- mb-[20px] space-x-2 rounded-lg border-none bg-white p-6 shadow outline-none dark:bg-[#000] xs:w-full sm:w-[350px] lg:w-full lg:max-w-[475px] xl:max-w-[720px] ">
            <div>
              <div>
                <h2 className="dark:text-gray mb-[15px] select-none text-[14px] font-bold">
                  {Strings.YOUR_ACCOUNT_MANAGER}
                </h2>
              </div>
              {managerData ? (
                <>
                  <div className="flex w-full items-center ">
                    <img
                      src={managerData.profilePicture}
                      width={80}
                      height={80}
                      alt="manager"
                      className="rounded-full style={{ transform: 'scale(2)'"
                    />
                    <div className="w-full pl-[15px]">
                      <div>
                        <a href="#">
                          <h5 className="text-[14px] font-bold tracking-tight text-gray-900 dark:text-white">
                            {managerData.firstName + " " + managerData.lastName}
                          </h5>
                        </a>
                        <div className="flex flex-col sm:flex-col sm:flex-col xl:flex-row">
                          <a href="#" className="mb-[5px] flex text-[16px] text-gray-500 dark:text-white">
                            {themeConfig.theme === "light" ? (
                              <img className="inline h-[20px] w-[20px] mr-[5px]" src={Images.MSG_WHITE} alt="logo" />
                            ) : (
                              <img className="inline h-[20px] w-[20px] mr-[5px]" src={Images.MSG} alt="logo" />
                            )}
                            {managerData.emailId}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="ml-[3px] mt-[3px] w-3.5 h-3.5">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                          </a>
                          <strong className="mb-[5px] flex items-center px-[5px] dark:text-white xs:hidden sm:hidden lg:hidden xl:block">
                            |
                          </strong>
                          <a href="#" className="inline-flex items-center text-[15px] hover:underline dark:text-white">
                            {themeConfig.theme === "light" ? (
                              <img className="inline h-[18px] w-[18px] mr-[5px]" src={Images.PHONE_WHITE} alt="logo" />
                            ) : (
                              <img className="inline h-[18px] w-[18px] mr-[5px]" src={Images.PHONE} alt="logo" />
                            )}
                            {managerData.phoneNo}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex items-center justify-center pt-5">
                  <div className="flex flex-col items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-[50px] h-[50px]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                    </svg>
                    <h5 className="mb-4 text-xl font-medium">
                      {Strings.NOTHING_FOUND}
                    </h5>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-l select-none font-bold dark:text-white ">
          {Strings.HAND_PICKED_RECOMMENDATIONS}
        </h3>
      </div>
      <div className="mt-5">
      {userdataa?.length > 0 ? (
                  userdataa.map((item, inedx) => {
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
                                verifiedAiTools: item.userData.verifiedAiTools,
                                skill: item.vettingResults?.[0]?.skill,
                                skill_two: item.vettingResults?.[1]?.skill,
                                vettingResult: item.vettingResults?.[0].vettingResult,
                                vettingResult_two: item.vettingResults?.[1].vettingResult,
                                yearOfExperience: item.vettingResults?.[0].yearOfExperience,
                                yearOfExperience_two: item.vettingResults?.[1].yearOfExperience
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
                                {/* {item.profile_process === "verify" && (
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
                              {/* <text className="text-lg font-semibold text-black dark:text-white">
                            {item.userData.hourlyRate}
                          </text> */}
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
                  <><div>
                    {/* <p className="dark:text-white text-[#000] text-[18px] my-[5px]">These are the recommendations based on your requirements</p> */}

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
    </div>
  );
}
