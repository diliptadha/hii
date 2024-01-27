// import 'file-upload-with-preview/dist/file-upload-with-preview.min.css';

import ImageUploading, { ImageListType } from 'react-images-uploading';
import { Images, Strings } from "@/constants";
import { useEffect, useState } from "react";

import Hiretopengineer from '@/components/Hire-Top-Engg';
import { IRootState } from "../../store";
import Image from "next/image";
import Link from 'next/link';
import Loader from "../../components/Layouts/Loader";
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
      <h1 className="text-[30px] font-bold dark:text-white text-black">{Strings.HIRE_NEW_TALENT}</h1>
      <section className=" flex h-full flex-col items-center justify-center space-y-5 xs:mt-[20px] md:my-[150px]">
        <div className="  justify-between- dark:border-gray-700- m-auto flex items-center space-x-2 rounded-lg border-none bg-white p-6 shadow outline-none dark:bg-[#000] md:w-[650px]">
          <div className="justify-between- flex w-full items-center">
            <div className='h-[80px] flex justify-center items-center bg-[#8D3F42]- rounded-full- '>
            {themeConfig.theme === "light" ? (
               <Image
               src={Images.FAV_ICON_BROWAN}
               width={60}
               height={60}
               alt="Rahullogo"
               className=''
             />
                  ) : (
                    
                    <Image
                    src={Images.FAV_ICON_BROWAN}
                    width={60}
                    height={60}
                    alt="Rahullogo"
                    className=''
                  />
                  )}

            </div>

            <div className="xs:pl-[10px] xs:leading-none sm:pl-[10px] sm:leading-[25px] ">
              <h5 className="  tracking-tight- font-bold text-gray-900 dark:text-white xs:text-[14px] sm:text-[18px]">
                {Strings.HIRE}
              </h5>
              <h5 className="  tracking-tight- font-semibold text-gray-900 dark:text-gray-500 xs:text-[10px] sm:text-[15px]">
                {Strings.TOP}
              </h5>
            </div>
          </div>
          <div>
          <Hiretopengineer/>
          </div>
        </div>
        <div className=" justify-between- dark:border-gray-700- flex items-center space-x-2      rounded-lg border-none bg-white p-6 shadow outline-none dark:bg-[#000] md:w-[650px]">
          <div className="justify-between- flex w-full items-center">
            <div className="bg-[#8D3F42]- p-2- rounded-full h-[80px] flex items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-[40px] md:w-[60px] text-[#BC7666]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                />
              </svg>
            </div>

            <div className="xs:pl-[15px] xs:leading-none sm:pl-[10px] sm:leading-[25px] ">
              <h5 className="  tracking-tight- font-bold text-gray-900 dark:text-white xs:text-[14px] sm:text-[18px]">
                {Strings.ONBOARD}
              </h5>
              <h5 className="  tracking-tight- font-semibold text-gray-900 dark:text-gray-500 xs:text-[10px] sm:text-[15px] leading-normal">
                {Strings.TOP}
                Any talent you've sourced yourself, use eremotehire COR to handle complience, payroll,benifits and more at a fixed $490/month.
              </h5>
            </div>
          </div>
          <div>
           
            
           
            <Image
              src={Images.ARROWLONGTOSCO}
              width={40}
              height={40}
              alt="Rahullogo"
            />
           
          </div>
        </div>
      </section>
  
    </div>
  );
}
