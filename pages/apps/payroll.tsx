import { Fragment, useEffect, useState } from "react";

import Loader from "@/components/Layouts/Loader";
import React from "react";
import { Images, Strings } from "@/constants";
import { useSelector } from "react-redux";
import { IRootState } from "@/store";
import { Image, Switch } from "antd";
import { Tab } from "@headlessui/react";
import { Bar } from "react-chartjs-2";
import router from "next/router";
import axios from "axios";

interface UserData {
  userId: string;
  designation: string;
  firstName: string;
  lastName: string;
  profilePicture: string;
}

interface RaiseData {
  raiseAmount: number;
  effectiveOn: string;
}
interface BonusData {
  date: string;
  bonusAmount: number;
}
interface PaymentData {
  amount: number;
  date: string;
  bonusAmount: number;
}

interface DeveloperData {
  profilePicture: string;

  designation: string;
  monthlyPayment: number;
  firstName: string;
  totalmonthlyPaymentData: number;
  userData: UserData;
  raiseData: RaiseData[];
  bonusData: BonusData[];
  paymentData: PaymentData[];

}
export default function Resources() {
  const themeConfig = useSelector((state: IRootState) => state.themeConfig);
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const [showBouns, setShowBouns] = useState(true);
  const [isTooltipVisible, setTooltipVisible] = useState(false);
  const [raiseHistory, setRaiseHistory] = useState<DeveloperData[]>([]);
  const [bonousHistory, setBonousHistory] = useState<DeveloperData[]>([]);
  const [paymentData, setPaymentData] = useState<DeveloperData[]>([]);
  const [monthlyPaymentData, setMonthlyPaymentData] = useState<DeveloperData[]>([]);
  const [totalmonthlyPaymentData, setTotalMonthlyPaymentData] = useState([]);
  const [totalbonusData, setTotalBonusData] = useState([]);
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const openBonusTab = () => {
    setSelectedTabIndex(2);
    // setMonthlySelectedTabIndex(0)
    // Index of the "Bonus history" tab
  };




  useEffect(() => {
    console.log(router?.query, "queryyy");
    setUserData(router?.query);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [])

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
    {
      id: 0,
      name: "Mihir",
      role: "Backend developer",
      amount: "$4/hour",
      effective_on: "Mar 11, 2023"
    },
    {
      id: 1,
      name: "Dharmit",
      role: "Backend developer",
      amount: "$4/hour",
      effective_on: "Feb 6, 2023"
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

  const userdata = [
    {
      id: 0,
      name: "Mihir",
      profile_process: "verify",
      postion: "Full Stack Developer",
      price: "$10/month",
      hiring_status: "Started on Dec 29, 2023",
    },
    {
      id: 1,
      name: "Nirdosh",
      profile_process: "verify",
      postion: "Shopify Developer",
      price: "$20/month",
      hiring_status: "Started on Dec 29, 2023",

    },
    {
      id: 2,
      name: "Henish",
      profile_process: "verify",
      postion: "MERN Developer",
      price: "$50/month",
      hiring_status: "Started on Dec 29, 2023",
    },
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
  ]


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);


  useEffect(() => {
    const headers = {
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJSSF8wMDAwMDEyIiwiZW1haWxJZCI6ImhhcGFuaWRoYXJtaXRAZ21haWwuY29tIiwiaWF0IjoxNzA3ODAzNTc1LCJleHAiOjE3MDc4MDcxNzV9.wyYOxTzA2pwEldXzJUpmIj4sFSAKRJ56bkvY48XGWCA'
    };
    const fetchData = async () => {
      try {
        const [raiseResponse, bonusResponse, PaymentResponse, MonthlyResponse, TotalMonthlyResponse, TotalBonusResponse] = await Promise.all([
          axios.get("https://api.eremotehire.com/clientdashboard/getRaiseHistoryData", { headers }),
          axios.get("https://api.eremotehire.com/clientdashboard/getBonusHistoryData", { headers }),
          axios.get("https://api.eremotehire.com/clientdashboard/getClientPaymentData", { headers }),
          axios.get("https://api.eremotehire.com/clientdashboard/getMonthlypaymentData", { headers }),
          axios.get("https://api.eremotehire.com/clientdashboard/getTotalMonthlyPaymentData", { headers }),
          axios.get("https://api.eremotehire.com/clientdashboard/getTotalBonusData", { headers })
        ]);
        // Process the raise data
        setRaiseHistory(raiseResponse.data.developerRaiseData);
        // Process the bonus data
        setBonousHistory(bonusResponse.data.developerRaiseData);
        // process payment data
        setPaymentData(PaymentResponse.data.totalBonusData)
        setMonthlyPaymentData(MonthlyResponse.data.monthlyPaymentData)
        setTotalMonthlyPaymentData(TotalMonthlyResponse.data.totalMonthlyPaymentData)
        setTotalBonusData(TotalBonusResponse.data.totalBonusData)
      } catch (error) {
        // console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);


  const repeatCount = 4;
  return loading ? (
    <div>
      <Loader />
    </div>
  ) : (
    <div>
      <div >
        <h1 className="text-3xl font-bold dark:text-[#fff] text-[#000]">Payroll</h1>
        <div className=" flex- items-center mt-4">
          <div className="flex items-center bg-red-900-">
            <img src={Images.VERIFY} alt="Verify" className="w-[30px] h-[30px]" />
            <p className="text-[16px] font-normal text-[#000} dark:text-white">payroll on autopilot</p>
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
                <p className="bg-white border w-[300px] h-[100x] absolute top-[40px] left-[-117px] z-50 overflow-none text-[14px] leading-normal font-normal text-[#000]">
                  {Strings.POPUP_TEXT}
                </p>
              )}
            </div>

          </div>

        </div>

      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-7 ">

          <div className="w-full">

            <div className="w-full h-full flex dark:bg-[#000] bg-[#fff] flex rounded-[12px] p-5 gap-2 items-center justify-center-">
              <div className="rounded-full p-5 bg-[#8D3F42] bg-opacity-[.25]">

                <img src={Images.MONEY} alt="verify" className="w-[50px] h-[50px]" />
              </div>
              <div>

                <button
                 

                  className=" dark:text-white mb-[15px] text-[14px] font-bold dark:text-white"
                // onClick={handleBonusButtonClick}
                >
                  {Strings.TOTAL_MONTHLY_PAYROLL}
                </button>
                {/* <button className="dark:text-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 -1 24 18" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
              </button> */}

                <p className=" text-center text-[20px] font-bold text-black-500 dark:text-white select-none">
                  ${totalmonthlyPaymentData}
                </p>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className=" w-full h-full flex dark:bg-[#000] bg-[#fff] bg-opacity-20 flex rounded-[12px] p-10 gap-2 items-center justify-center hover:cursor-pointer hover:bg-opacity-100-">
              <div>

                <button
                  onClick={openBonusTab}

                  className=" dark:text-white mb-[15px] text-[18px] font-semibold dark:text-white">
                  {Strings.TOTAL_BONUS_GIVEN}
                </button>
                <button className="dark:text-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 -1 24 18" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
              </button>

                <p className=" text-center text-[20px] font-bold text-black-500 dark:text-white select-none">
                  ${totalbonusData}
                </p>
              </div>
            </div>
          </div>
        </div>


        <Tab.Group selectedIndex={selectedTabIndex} onChange={setSelectedTabIndex}>
          <Tab.List className="mt-3 flex md:flex-wrap border-b border-opacity-25 border-[#8D3F42] overflow-x-scroll md:overflow-x-auto">
            {["Monthly pay", "Payments", "Bonus history", "Raise history", "Payment method"].map(
              (tab, index) => (
                <Tab key={index}>
                  {({ selected }) => (
                    <button
                      className={`text-[15px] xs:w-[130px] md:w-full p-4   ${selected
                        ? "border-b-2 border-[#8D3F42] bg-red-900- outline-none bg-[#8D3F42] bg-opacity-[.25] p-2 rounded-t-[5px] text-white "
                        : ""
                        } `}
                      onClick={() => setSelectedTabIndex(index)}
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
              <div className="mt-5-">
                {monthlyPaymentData?.length > 0 ? (
                  monthlyPaymentData.map((item, inedx) => {
                    return (
                      <button
                        onClick={() =>
                          router.push(
                            {
                              pathname: "/apps/developer-details",

                            },
                            "/apps/developer-details"
                          )
                        }
                        className="my-6 flex w-full items-center rounded-xl bg-white px-4 py-3 dark:bg-[#000] dark:shadow-md "
                      >
                        <div className="rounded-full bg-blue-300- p-2-">
                          <Image src={item.profilePicture} alt="profile-pic" width={100} height={100} className="w-[50px] h-[50px] rounded-full" />
                        </div>
                        <div className="w-full pl-2.5">
                          <div className=" flex flex-col items-start">
                            <div className="flex  w-full justify-between pr-3">
                              <div className="flex items-center space-x-1">
                                <text className="text-[18px] font-bold text-black dark:text-white">
                                  {item.firstName}
                                </text>

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

                              </div>
                              <text className="text-lg font-semibold text-black dark:text-white">
                                <strong>${item.monthlyPayment}</strong>/month
                              </text>
                            </div>
                            <div className="flex  w-full items-center justify-between my-[5px]">
                              <div className="flex items-center text-[#000] dark:text-white text-[14px]">

                                <text>{item.designation}</text>
                              </div>
                              {/* <button className="flex items-center  px-2 py-1.5 text-[14px] shadow-sm text-[#000] dark:text-white">

                              <text>{item.hiring_status}</text>
                            </button> */}
                            </div>
                          </div>
                        </div>
                      </button>
                    );
                  })
                ) : (
                  <div className=" flex w-full- items-center justify-center h-[50vh]">
                    <div className="flex items-center flex-col">
                      <img src={Images.MONTHLY_PAYMENT} alt="Payment_logo" className="w-[150px] h-[150px]-" />
                      <h1 className="leading-normal text-xl font-bold dark:text-white text-[#000] mt-4">No subscriptions found!</h1>
                    </div>

                  </div>

                )}
              </div>



            </Tab.Panel>

            {/* < Bouns tab section > */}
            <Tab.Panel>
              {paymentData?.length > 0 ? (

                <table className="table-hover mt-3 bg-red-900- w-full">
                  <thead className="sticky top-0 bg-opacity-[.1] bg-[#8D3F42] text-[#000] dark:text-white px-4">
                    <tr>
                      <th>Developer</th>
                      <th>Role</th>
                      <th>Amount</th>
                      <th>Paid On</th>
                    </tr>
                  </thead>

                  <tbody>
                    {paymentData?.map((data, index) => {
                      return (
                        <tr key={index}>
                          <td className="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="blue"
                              className="h-[45px] w-[45px] rounded-full bg-blue-300 p-2 mr-[10px]"
                            >
                              <path
                                fillRule="evenodd"
                                d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                                clipRule="evenodd"
                              />
                            </svg>
                            {data.userData?.firstName}</td>
                          <td>{data.userData?.designation}</td>

                          <td>
                            <ul>
                              {data.paymentData.map((raise, index) => (
                                <li key={index}>
                                  {raise.amount}
                                </li>
                              ))}
                            </ul>
                          </td>
                          <td>
                            <ul>
                              {data.paymentData.map((raise, index) => (
                                <li key={index}>
                                  {new Date(raise.date).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                                  })
                                  }
                                </li>
                              ))}
                            </ul>

                          </td>
                        </tr>
                      );
                    })}

                  </tbody>

                </table>
              ) : (
                <div className=" flex w-full- items-center justify-center h-[50vh]">
                  <div className="flex items-center flex-col">
                    <p className="my-4 h-[100px] w-[110px] space-y-3 rounded-lg bg-[#8d3f42] bg-opacity-[20%] px-2 py-5">
                      {[...Array(repeatCount)].map((_, index) => (
                        <p
                          key={index}
                          className="rounded-full border-[3px] border-[#8d3f42] border-opacity-[40%]"
                        ></p>
                      ))}
                    </p>
                    <h1 className="leading-normal text-xl font-bold dark:text-white text-[#000] mt-4">No payment history found!</h1>
                  </div>

                </div>
              )}
            </Tab.Panel>

            {/* < Raise history tab section > */}

            <Tab.Panel>
              {bonousHistory.length > 0 ? (

                <table className="table-hover mt-3">
                  <thead className="sticky top-0 bg-opacity-[.1] bg-[#8D3F42] text-[#000] dark:text-white">
                    <tr>
                      <th>{Strings.DEVELOPERR}</th>
                      <th>{Strings.ROLE}</th>
                      <th>{Strings.AMOUNT}</th>
                      <th>{Strings.SENT_ON}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bonousHistory.map((data, index) => (
                      <React.Fragment key={index}>
                        {data.bonusData.map((raise, raiseIndex) => (
                          <tr key={`${index}-${raiseIndex}`}>
                            <td className="flex items-center">
                              <div className="rounded-full mr-[10px]">
                                <Image src={data.userData.profilePicture} alt="profile-pic" width={30} height={30} className="w-[20px] h-[20px] rounded-full" />
                              </div>
                              {data.userData.firstName}
                            </td>
                            <td>{data.userData.designation}</td>
                            <td>{raise.bonusAmount}</td>
                            <td>
                              {new Date(raise.date).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              })}
                            </td>
                          </tr>
                        ))}
                      </React.Fragment>
                    ))}


                  </tbody>
                </table>
              ) : (
                <div className=" flex w-full- items-center justify-center h-[50vh]">
                  <div className="flex items-center flex-col">
                  <p className="my-4 h-[100px] w-[110px] space-y-3 rounded-lg bg-[#8d3f42] bg-opacity-[20%] px-2 py-5">
                      {[...Array(repeatCount)].map((_, index) => (
                        <p
                          key={index}
                          className="rounded-full border-[3px] border-[#8d3f42] border-opacity-[40%]"
                        ></p>
                      ))}
                    </p>
                    <h1 className="leading-normal text-xl font-bold dark:text-white text-[#000] mt-4">No bonus history found!</h1>
                  </div>
                </div>
              )}
            </Tab.Panel>

            {/* < Benefits tab section > */}

            <Tab.Panel>
              <>
                {raiseHistory.length > 0 ? (
                  <table className="table-hover mt-3">
                    <thead className="sticky top-0 bg-opacity-[.1] bg-[#8D3F42] text-[#000] dark:text-white">
                      <tr>
                        <th>{Strings.DEVELOPERR}</th>
                        <th>{Strings.ROLE}</th>
                        <th>{Strings.RAISE}</th>
                        <th>{Strings.EFFECTIVE_ON}</th>

                      </tr>
                    </thead>
                    <tbody>
                      {raiseHistory.map((data, index) => (
                        <React.Fragment key={index}>
                          {data.raiseData.map((raise, raiseIndex) => (
                            <tr key={`${index}-${raiseIndex}`}>
                              <td className="flex items-center">
                                <div className="rounded-full mr-[10px]">
                                  <Image src={data.userData.profilePicture} alt="profile-pic" width={30} height={30} className="w-[20px] h-[20px] rounded-full" />
                                </div>
                                {data.userData.firstName}
                              </td>
                              <td>{data.userData.designation}</td>
                              <td>{raise.raiseAmount}</td>
                              <td>
                                {new Date(raise.effectiveOn).toLocaleDateString("en-US", {
                                  year: "numeric",
                                  month: "short",
                                  day: "numeric",
                                })}
                              </td>
                            </tr>
                          ))}
                        </React.Fragment>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <div className=" flex w-full- items-center justify-center h-[50vh]">
                    <div className="flex items-center flex-col">
                    <p className="my-4 h-[100px] w-[110px] space-y-3 rounded-lg bg-[#8d3f42] bg-opacity-[20%] px-2 py-5">
                      {[...Array(repeatCount)].map((_, index) => (
                        <p
                          key={index}
                          className="rounded-full border-[3px] border-[#8d3f42] border-opacity-[40%]"
                        ></p>
                      ))}
                    </p>
                      
                      <h1 className="leading-normal text-xl font-bold dark:text-white text-[#000] mt-4">No raise history found!</h1>
                    </div>
                  </div>
                )}
              </>

            </Tab.Panel>




            <Tab.Panel>
              <div className=" flex w-full- items-center justify-center h-[50vh]">
                <div className="flex items-center flex-col">
                  <img src={Images.PAYMENT_METHOD} alt="Payment_logo" className="w-[150px] h-[150px]" />
                  <h1 className="leading-normal text-xl font-bold dark:text-white text-[#000] mt-4">Payment method not found
                  </h1>
                </div>
              </div>
            </Tab.Panel>

          </Tab.Panels>
        </Tab.Group>

      </div>
    </div>
  );
}
