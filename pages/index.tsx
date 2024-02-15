import { useEffect, useState } from "react";

import { IRootState } from "@/store";
import Image from "next/image";
import { Images } from "@/constants";
import Loader from "@/components/Layouts/Loader";
import React from "react";
import { Strings } from "@/constants";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

export default function Index() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const themeConfig = useSelector((state: IRootState) => state.themeConfig);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);
  const isDark = useSelector(
    (state: IRootState) =>
      state.themeConfig.theme === "dark" || state.themeConfig.isDarkMode
  );
  const isRtl =
    useSelector((state: IRootState) => state.themeConfig.rtlClass) === "rtl"
      ? true
      : false;

  const userdata = [
    {
      id: 0,
      name: "Mihir",
      profile_process: "verify",
      postion: "Full Stack Developer",
      country: "India",
      price: "$10K/month",
      status: "Decline",
      interview: "Request Interview",
    },
    {
      id: 1,
      name: "Nirdosh",
      profile_process: "verify",
      postion: "Shopify Developer",
      country: "USA",
      price: "$20K/month",
      status: "Decline",
      interview: "Request Interview",
    },
    {
      id: 2,
      name: "Henish",
      profile_process: "verify",
      postion: "MERN Developer",
      country: "UK",
      price: "$40K/month",
      status: "Decline",
      interview: "Request Interview",
    },
  ];

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

          <text className="text-black hover:text-[#8D3F42] dark:text-white hover:dark:text-[#8D3F42] ltr:pl-3 rtl:pr-3">
            {Strings.HIRE_NEW_TALENT}
          </text>
        </a>
      </div>
      <div>
        <div className="flex w-full flex-wrap justify-between">
          <div className=" mb-[20px] flex items-center justify-center space-x-2 rounded-lg border bg-white p-6 outline-none dark:border-none dark:border-gray-700 dark:bg-[#000]  xs:w-[384px] sm:w-[320px] lg:w-[450px] xl:w-[550px]">
            <div>
              <a href="#">
                <button className=" mb-[15px] text-[14px] font-bold dark:text-white">
                  {Strings.HIRED_ENGINEERS}
                </button>
                <button className="dark:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 -1 24 18"
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
                </button>
              </a>
              <p className=" text-black-500 select-none text-center text-[20px] font-bold dark:text-white">
                1
              </p>
            </div>
          </div>
          <div className=" dark:border-gray-700- mb-[20px] space-x-2 rounded-lg border bg-white p-6 outline-none  dark:border-none dark:bg-[#000] xs:w-[384px] sm:w-[320px] lg:w-[450px] xl:w-[550px]">
            <div>
              <div>
                <h2 className="dark:text-gray mb-[15px] select-none text-[14px] font-bold">
                  {Strings.YOUR_ACCOUNT_MANAGER}
                </h2>
              </div>
              <div className="flex w-full items-center">
                <Image
                  src={Images.RAHULSAHAI}
                  width={60}
                  height={60}
                  alt="Rahullogo"
                />
                <div className="w-full pl-[15px]">
                  <div>
                    <a href="#">
                      <h5 className="  text-[14px] font-bold tracking-tight text-gray-900 dark:text-white">
                        {Strings.DEVELOPER_NAME}
                      </h5>
                    </a>
                    <div className="flex flex-col sm:flex-col xl:flex-row">
                      <a
                        href="#"
                        className="mb-[5px] flex text-[16px] text-gray-500 dark:text-white"
                      >
                        {themeConfig.theme === "light" ? (
                          <img
                            className="mr-[5px] inline h-[20px] w-[20px]"
                            src={Images.MSG_WHITE}
                            alt="logo"
                          />
                        ) : (
                          <img
                            className="mr-[5px] inline h-[20px] w-[20px]"
                            src={Images.MSG}
                            alt="logo"
                          />
                        )}
                        {Strings.EMAIL}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="ml-[3px] mt-[3px] h-3.5 w-3.5"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                          />
                        </svg>
                      </a>

                      <strong className="mb-[5px] flex items-center px-[5px] dark:text-white xs:hidden sm:hidden lg:hidden xl:block">
                        |
                      </strong>

                      <a
                        href="#"
                        className="inline-flex items-center text-[15px] hover:underline dark:text-white"
                      >
                        {themeConfig.theme === "light" ? (
                          <img
                            className="mr-[5px] inline h-[18px] w-[18px]"
                            src={Images.PHONE_WHITE}
                            alt="logo"
                          />
                        ) : (
                          <img
                            className="mr-[5px] inline h-[18px] w-[18px]"
                            src={Images.PHONE}
                            alt="logo"
                          />
                        )}
                        {Strings.CONTACT_NUMBER}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
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
        {userdata.map((item, index) => {
          return (
            <a
              onClick={() =>
                router.push(
                  {
                    pathname: "/apps/developer-details",
                    query: {
                      name: item.name,
                      country: item.country,
                      postion: item.postion,
                      hiring_status: item.status,
                      price: item.price,
                      interview: item.interview,
                    },
                  },
                  "/apps/developer-details"
                )
              }
              className="my-6 flex w-full items-center rounded-xl border bg-white px-4 py-3  shadow-md dark:border-none dark:bg-[#000] dark:shadow-md dark:hover:border dark:hover:border-[#8D3F42]"
            >
              <div className="rounded-full bg-blue-300 p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="blue"
                  className="h-20 w-20"
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
                    <text className="font-outfit text-[16px] font-bold text-black dark:text-white">
                      {item.price}
                    </text>
                  </div>
                  <div className="my-2 rounded-full bg-[#8D3F42] px-2 py-0.5">
                    <text className="text-[12px] text-white">
                      {item.postion}
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
                      <text className="mx-1">{item.country}</text>
                    </div>

                    <div className="ml-auto flex items-center">
                      <button className="mr-2 transition duration-300 ease-in-out">
                        {item.status}
                      </button>
                      <button className="flex items-center rounded-full border-none bg-[#8D3F42] px-1 py-1.5 text-white transition duration-300 ease-in-out dark:shadow">
                        <text className="xs:text-[11px]">{item.interview}</text>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
