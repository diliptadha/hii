import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import Dropdown from "@/components/Dropdown";
import { Fragment } from "react";
import { IRootState } from "@/store";
import Image from "next/image";
import { Images } from "@/constants";
import Link from "next/link";
import Loader from "@/components/Layouts/Loader";
import React from "react";
import { ReactSortable } from "react-sortablejs";
import { Select } from 'antd';
import { Tab } from "@headlessui/react";

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};
const items1 = [
  {
    id: 1,
    iconlogo: Images.BENIFITS,
    text: "Chechkout Benifits",
    arrowlongtosco: Images.ARROWLONGTOSCO,
    arrowlongblack: Images.ARROWLONGBLACK,
  },
  {
    id: 2,
    iconlogo: Images.STAR,
    text: "Your Certificate",
    arrowlongtosco: Images.ARROWLONGTOSCO,
    arrowlongblack: Images.ARROWLONGBLACK,
  },
  {
    id: 3,
    iconlogo: Images.STOPWATCH,
    text: "Start Time tracker",
    arrowlongtosco: Images.ARROWLONGTOSCO,
    arrowlongblack: Images.ARROWLONGBLACK,
  },
];

export default function Index() {
  const [loading, setLoading] = useState(true);
  const [swap, setSwap] = useState([...items1]);
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

  const colourStyles = {
    placeholder: (defaultStyles) => {
      return {
        ...defaultStyles,
        color: "#ffffff",
      };
    },
  };

  return loading ? (
    <div>
      <Loader />
    </div>
  ) : (
    <div>
      <div>
        {/* <div className="mb-5 flex items-center justify-center">
          <div className="w-full max-w-[19rem] rounded border border-white-light bg-white shadow-[4px_6px_10px_-3px_#bfc9d4] dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none">
            <div className="px-6 py-7">
              <div className="mb-5 inline-block rounded-full bg-[#3b3f5c] p-3 text-[#f1f2f3]">
                <svg>...</svg>
              </div>
              <h5 className="mb-4 text-xl font-semibold text-[#3b3f5c] dark:text-white-light">
                Simple
              </h5>
              <p className="text-white-dark">
                Mauris nisi felis, placerat in volutpat id, varius et sapien.
              </p>
            </div>
          </div>
        </div> */}

        <div className="flex flex-wrap  justify-between   ">
          <div className=" dark:border-gray-700- mb-[20px]  flex items-center space-x-2 rounded-lg border-none  bg-white p-6 shadow outline-none dark:bg-[#000] xs:w-[384px] sm:w-[320px] xl:w-[384px]">
            <div>
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-6 w-6 text-red-400"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg> */}
              <Image src={Images.BENIFITS} width={40} height={40} alt="arrow" />
            </div>
            <div>
              <a href="#">
                <h5 className=" mb-[10px] text-[20px] font-semibold tracking-tight text-gray-900 dark:text-white">
                  eRemoteHire Points
                </h5>
              </a>
              <p className=" mb-[5px] text-[22px] font-bold text-gray-500 dark:text-white">
                2,670
              </p>
              <a
                href="#"
                className="inline-flex items-center text-[16px] text-[#8D3F42] hover:underline"
              >
                Redeem
              </a>
            </div>
          </div>
          <div className=" dark:border-gray-700- mb-[20px] flex items-center justify-center space-x-2 rounded-lg border-none bg-white p-6 shadow outline-none dark:bg-[#000] xs:w-[384px] sm:w-[320px] xl:w-[384px]">
            <div>
              <a href="#">
                <h5 className=" mb-[10px] text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  Total Amount Made
                </h5>
              </a>
              <p className=" text-center text-[25px] text-green-500 dark:text-green-800">
                $21K
              </p>
            </div>
          </div>
          <div className=" dark:border-gray-700- mb-[20px] flex items-center justify-center space-x-2 rounded-lg border-none bg-white p-6 text-center shadow outline-none dark:bg-[#000] xs:w-[384px] sm:w-[320px] xl:w-[384px]">
            <div className=" justify-center text-center">
              <a href="#">
                <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  Work Type
                </h5>
              </a>
              <p className=" flex items-center justify-center font-normal text-gray-500 dark:text-white">
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
                    d="M18 12H6"
                  />
                </svg>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-[20px] lg:grid-cols-2 ">
        <div className="panel h-full w-full">
          <div className="mb-5 flex items-center justify-between">
            {/* <h5 className="text-lg font-semibold dark:text-white-light">
            Recent Orders
          </h5> */}
          </div>
          <div className="table-responsive h-full">
            <div className=" h-full ">
              <div className="">
                <Tab.Group>
                  <Tab.List className=" flex h-full items-center justify-between   ">
                    <div>
                      <Tab as={Fragment}>
                        {({ selected }) => (
                          <button
                            className={`${
                              selected ? "  text-gray-400 " : "dark:text-white"
                            }
                            `}
                          >
                            Home
                          </button>
                        )}
                      </Tab>
                      <Tab as={Fragment}>
                        {({ selected }) => (
                          <button
                            className={` mx-[20px] border-none${
                              selected ? "  text-gray-400 " : "dark:text-white"
                            }
                    `}
                          >
                            Profile
                          </button>
                        )}
                      </Tab>
                    </div>
                    <div className=" flex items-center  dark:text-white-light ">
                      {/* <h5 className="text-lg font-semibold">This Month</h5> */}
                      <Select
                        defaultValue="This Month"
                        className="Customm"
                        onChange={handleChange}
                        dropdownStyle={{backgroundColor:'#fff'}}
                        options={[
                          { label: "This Month", value: "This Month" },
                          { label: "Last Month", value: "Last Month" },
                          
                        ]}
                        
                      />
                      {/* <div className="dropdown">
                      <Dropdown
                        placement={`${isRtl ? "bottom-start" : "bottom-end"}`}
                        button={
                          <svg
                            className="ml-2.5 h-2.5 w-2.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="m1 1 4 4 4-4"
                            />
                          </svg>
                        }
                      >
                        <ul>
                          <li>
                            <button type="button">View Report</button>
                          </li>
                          <li>
                            <button type="button">Edit Report</button>
                          </li>
                          <li>
                            <button type="button">Mark as Done</button>
                          </li>
                        </ul>
                      </Dropdown>
                    </div> */}
                    </div>
                  </Tab.List>
                  <Tab.Panels>
                    <Tab.Panel>
                      <div className="bg-red-400- flex h-[400px] justify-center">
                        <div className="flex h-full items-center justify-center  pt-5">
                          <div className="flex-auto">
                            <h5 className="mb-4 text-xl font-medium">
                              Home Page
                            </h5>
                          </div>
                        </div>
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>
                      <div className="bg-red-400- flex h-[400px] justify-center">
                        <div className="flex h-full items-center justify-center  pt-5">
                          <div className="flex h-20 w-20 flex-none flex-col ltr:mr-4 rtl:ml-4">
                            <img
                              src="/assets/images/profile-34.jpeg"
                              alt="img"
                              className="m-0 h-20 w-20 rounded-full object-cover ring-2 ring-[#ebedf2] dark:ring-white-dark"
                            />
                          </div>
                          <div className="flex-auto">
                            <h5 className="mb-4 text-xl font-medium">
                              Media heading
                            </h5>
                          </div>
                        </div>
                      </div>
                    </Tab.Panel>
                  </Tab.Panels>
                </Tab.Group>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className=" dark:border-gray-700-      space-x-2 rounded-lg border-none bg-white p-6 shadow outline-none dark:bg-[#000]">
            <div>
              <h2 className="dark:text-gray mb-[15px] text-[14px] font-bold">
                YOUR SUCCESS MANAGER
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
                    <h5 className="  text-[14px] font-semibold tracking-tight text-gray-900 dark:text-white">
                      Mihir Mistry
                    </h5>
                  </a>
                  <div className="bg-red-400- flex-start  flex xs:flex-col sm:flex-row sm:items-center">
                    <a
                      href="#"
                      className=" mb-[5px] flex text-[15px] font-bold text-gray-500 dark:text-white"
                    >
                      {themeConfig.theme === "light" ? (
                        <img
                          className="inline- h-[20px] w-[20px]  "
                          src={Images.MSG_WHITE}
                          alt="logo"
                        />
                      ) : (
                        <img
                          className="inline- h-[20px] w-[20px] dark:mr-[5px]  "
                          src={Images.MSG}
                          alt="logo"
                        />
                      )}
                      eremotehire@gmail.com
                    </a>

                    <strong className="mb-[5px] flex items-center px-[5px] dark:text-white xs:hidden sm:block ">
                      |
                    </strong>
                    <a
                      href="#"
                      className="inline-flex- items-center text-[16px] hover:underline dark:text-white "
                    >
                      {themeConfig.theme === "light" ? (
                        <img
                          className="inline h-[20px] w-[20px]  "
                          src={Images.PHONE_WHITE}
                          alt="logo"
                        />
                      ) : (
                        <img
                          className="inline h-[20px] w-[20px]  "
                          src={Images.PHONE}
                          alt="logo"
                        />
                      )}
                      +91 99985 78704
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[30px]">
            <div className=" dark:border-gray-700-      space-x-2 rounded-lg border-none bg-white p-6 shadow outline-none dark:bg-[#000]">
              <div className="panel h-full w-full ">
                <div>
                  <div>
                    <ul id="example7">
                      <ReactSortable
                        list={swap}
                        setList={setSwap}
                        animation={200}
                        swap={true}
                        swapThreshold={1}
                        className="grid-cols-1- sm:grid-cols-2- grid w-full gap-x-12 gap-y-2.5"
                      >
                        {swap.map((item) => {
                          return (
                            <li key={item.id} className=" cursor-grab">
                              <div className="items-md-center flex-col- md:flex-row- flex items-center justify-between rounded-md border border-white-light bg-white px-6 py-3.5 ltr:text-left rtl:text-right dark:border-dark dark:bg-[#000]">
                                <div className="flex flex-col md:flex-row">
                                  <div className="ltr:sm:mr-4 rtl:sm:ml-4">
                                    <img
                                      alt="avatar"
                                      src={item.iconlogo}
                                      className="mx-auto h-11 w-11 rounded-full "
                                    />
                                  </div>
                                  <div className="flex flex-1 flex-col items-center justify-between text-center md:flex-row md:text-left">
                                    <div className="my-3 font-semibold md:my-0">
                                      <div className="text-base text-dark dark:text-[#bfc9d4]">
                                        {item.text}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="ltr:sm:mr-4 rtl:sm:ml-4">
                                  <img
                                    alt="avatar"
                                    src={item.arrowlongtosco}
                                    className="rounded-full- mx-auto h-11 w-11  text-white  	"
                                  />
                                </div>
                              </div>
                            </li>
                          );
                        })}
                      </ReactSortable>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
