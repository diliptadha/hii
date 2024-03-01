import ImageUploading, { ImageListType } from 'react-images-uploading';
import { Images, Strings } from "@/constants";
import { useEffect, useState } from "react";
import Hiretopengineer from '@/components/Hire-Top-Engg';
import { IRootState } from "../store";
import Image from "next/image";
import Link from 'next/link';
import Loader from "../components/Layouts/Loader";
import React from "react";
import { useSelector } from 'react-redux';

export default function Reports() {
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState<any>([]);
  const maxNumber = 69;
  const onChange = (imageList: ImageListType, addUpdateIndex: number[] | undefined) => {
    setImages(imageList as never[]);
  };
  const themeConfig = useSelector((state: IRootState) => state.themeConfig);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);
  return loading ? (
    <div>
      <Loader />
    </div>
  ) : (
    <div className="">
      <h1 className="text-[30px] font-bold dark:text-white text-black lg:mb-10">{Strings.HIRE_NEW_TALENT}</h1>
      <div className='dark:bg-red-200- dark:bg-[#000000] bg-white  w-full h-[70%] rounded xs:mt-[20px] md:my-[40px]'>
        <section className=" flex  flex-col items-center justify-center space-y-5 xs:p-0 md:p-[40px]">
          <Link href="/apps/hiretopeng">
            <div className="justify-between dark:border-gray-700 xs:mt-4 m-auto xs:h-[90px] md:h-[140px] xs:w-[95%] md:w-[650px] dark:bg-gradient-to-l from-[#8D3F42] to-[#BC7666] flex items-center space-x-2 rounded-full border-none bg-white xs:p-4 md:p-6 shadow hover:shadow-lg- hover:shadow-[#8D3F42]- hover:scale-105 transition ease-in-out  hover:ring-[#BC7666]- hover:bg-[#f2a79619] outline-none- dark:bg-[#000]  duration-500 hover-scale-svg">
              <div className="bg-blue-200- justify-between- flex w-full items-center">
                <div className='h-[80px] flex justify-center items-center  rounded-full '>
                  <div className="dark:bg-[#000000] bg-white rounded-full xs:p-[3px] md:p-4">
                    <Image
                      src={Images.FAV_ICON_BROWAN}
                      width={60}
                      height={60}
                      alt="Rahullogo"
                      className=""
                    />
                  </div>
                </div>
                <div className="xs:pl-[10px] xs:leading-none sm:pl-[10px] sm:leading-[25px] ">
                  <h5 className="  tracking-tight- font-bold text-gray-900 dark:text-white xs:text-[14px] sm:text-[18px]">
                    {Strings.HIRE}
                  </h5>
                  <h5 className="  tracking-tight- font-semibold text-gray-400  dark:text-[#c8c8ef] xs:text-[10px] sm:text-[15px] xs:mt-1">
                    {Strings.TOP}
                  </h5>
                </div>
              </div>
              <div>
                {/* <Hiretopengineer /> */}
                {/* <Link href="/apps/hiretopeng"> */}
                  <svg

                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-6 w-6 dark:text-white text-[#000000] cursor-pointer" >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                {/* </Link> */}
              </div>
            </div>
          </Link>
          <Link href="/apps/hireagency">
            <div className="justify-between dark:border-gray-700 m-auto xs:h-[90px] md:h-[140px] xs:w-[95%] md:w-[650px] dark:bg-gradient-to-l from-[#8D3F42] to-[#BC7666] flex items-center space-x-2 rounded-full border-none bg-white  xs:p-4 md:p-6 shadow hover:shadow-lg- hover:shadow-[#8D3F42]- hover:scale-105   hover:ring-[#BC7666]- outline-none- dark:bg-[#000] hover:bg-[#f2a79619] transition ease-in-out duration-500 hover-scale-svg">

              <div className="bg-blue-200- justify-between- flex w-full items-center">
                <div className='h-[80px] flex justify-center items-center  rounded-full '>
                  <div className="dark:bg-[#000000] bg-white rounded-full xs:p-2 md:p-4 ">
                    <Image
                      src={Images.AGENCY}
                      width={60}
                      height={60}
                      alt="Rahullogo"
                      className=''
                    />
                  </div>
                </div>

                <div className="xs:pl-[10px] xs:leading-none sm:pl-[10px] sm:leading-[25px] ">
                  <h5 className="  tracking-tight- font-bold text-gray-900 dark:text-white xs:text-[14px] sm:text-[18px] ">
                    {Strings.AGENCY}
                  </h5>
                  <h5 className="  tracking-tight- font-semibold text-gray-400 dark:text-[#c8c8ef] xs:text-[10px] sm:text-[15px] xs:mt-1">
                    {Strings.EREMOTELAB}
                  </h5>
                </div>
              </div>
              <div>
                {/* <Hireagency /> */}
                {/* <Link href="/apps/hireagency"> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-6 w-6 dark:text-white text-[#000000] cursor-pointer">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  // d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                  </svg>
                {/* </Link> */}
              </div>
            </div>
          </Link>
          <Link href="/apps/gpt-vetting">
            <div className="justify-between dark:border-gray-700 xs:mb-4 m-auto xs:h-[110px] md:h-[140px] xs:w-[95%] md:w-[650px] dark:bg-gradient-to-l from-[#8D3F42] to-[#BC7666] flex items-center space-x-2 rounded-full border-none bg-white  xs:p-4 md:p-6 shadow hover:shadow-lg- hover:shadow-[#8D3F42]- hover:scale-105   hover:ring-[#BC7666]- outline-none- dark:bg-[#000] hover:bg-[#f2a79619] transition ease-in-out duration-500 hover-scale-svg">

              <div className="bg-blue-200- justify-between- flex w-full items-center">
                <div className='h-[80px] flex justify-center items-center  rounded-full '>
                  <div className="dark:bg-[#000000] bg-white rounded-full xs:p-[4px] md:p-4">
                    <Image
                      src={Images.ONBOARD}
                      width={215}
                      height={215}
                      alt="Rahullogo"
                      className=''
                    />
                  </div>
                </div>
                <div className="xs:pl-[10px] xs:leading-none sm:pl-[10px] sm:leading-[25px] ">
                  <h5 className="  tracking-tight-  font-bold text-gray-900 dark:text-white xs:text-[14px] sm:text-[18px]">
                    {Strings.ONBOARD}
                  </h5>
                  <h5 className="  tracking-tight- font-semibold text-gray-400 dark:text-[#c8c8ef] xs:text-[10px] sm:text-[15px] xs:mt-1 leading-normal">
                    {Strings.TOP}
                    {Strings.ANY_TALENT_HIRE}
                  </h5>
                </div>
              </div>
              <div>
                {/* <Link href="/apps/gpt-vetting"> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-6 w-6 dark:text-white text-[#000000] cursor-pointer"
                  // onClick={openModal}
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                {/* </Link> */}
              </div>
            </div>
          </Link>
        </section>
      </div>
    </div>
  );
}