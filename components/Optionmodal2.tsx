import { Images, Strings } from "../constants";

import Image from "next/image";
import { LabelComponent } from "./label";
import React from "react";

interface Optionmodal2Props {
  isImageShow?: boolean;
  buttonText: string;
  label: string;
  imageSrc: any;
  isSelected: boolean;
  onClick: () => void;
}

const Optionmodal2: React.FC<Optionmodal2Props> = ({
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
        className={`relative  border-2 dark:border-white border-[#000]  border-white- rounded-full xs:py-4 lg:py-[10px] px-[20px]- flex justify-center border-Cod_Gray items-center mb-[10px] w-[200px] ${
          isSelected ? "border-2 border-[#8D3F42]" : "dark:bg-[#000] bg-white"
        }`}
        onClick={() => {
          onClick();
          console.log(`Selected option: ${label}`);
        }}
      >
        <div className=" mr-4">
          {isImageShow && (
            <Image
            src={imageSrc}
            alt="/"
            height={30}
            width={30}
            className="rounded-full"
          />
          )}
        </div>
        <LabelComponent
          label={label}
          className="font-outfit font-light xs:text-xl lg:text-[20px] text-gray-900 dark:text-white"
        />

        {isSelected && (
          <div className="top-0 flex right-0 absolute w-full justify-end">
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

export default Optionmodal2;
