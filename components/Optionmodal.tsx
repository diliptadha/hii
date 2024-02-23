import { Images, Strings } from "../constants";

import Image from "next/image";
import { LabelComponent } from "./label";
import React from "react";

interface OptionmodalProps {
  isImageShow?: boolean;
  buttonText: string;
  label: string;
  imageSrc: any;
  isSelected: boolean;
  onClick: () => void;
}

const Optionmodal: React.FC<OptionmodalProps> = ({
  isImageShow = true,
  buttonText,
  label,
  imageSrc,
  isSelected,
  onClick,
}) => {
  return (
    <div>
      <button
        className={`relative border-2 rounded-full dark:border-white border-[#000]    xs:py-4 lg:py-[10px] px-[10px]- flex justify-center border-Cod_Gray- items-center mb-[10px] w-[200px] ${
          isSelected ? "border-2 border-[#8D3F42]" : "dark:bg-[#000] bg-white"
        }`}
        onClick={() => {
          onClick();
          console.log(`Selected option: ${label}`);
        }}
      >
        <div className={` flex justify-between items-center px-[10px] bg-red-400-`} >
          {isImageShow && (
            <Image
              src={imageSrc}
              alt="/"
              height={30}
              width={30}
              className="rounded-full mr-4"
            />
          )}
           <LabelComponent
          label={label}
          className={` mr-4-  font-outfit font-light xs:text-xl lg:[20px] text-gray-900 dark:text-white`}
        />
        </div>

        {isSelected && (
          <div className="top-0 flex right-0 absolute w-full justify-end ">
            <Image
              src={Images.checkIcon}
              alt="/"
              height={20}
              width={20}
              className=""
            />
          </div>
        )}
      </button>
    </div>
  );
};

export default Optionmodal;
