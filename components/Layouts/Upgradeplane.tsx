import { Images, Strings } from "@/constants";
import React, { useState } from "react";

import { CloseOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export interface UpgradeplaneProps {
  title: string;
  price: string | number;
  reportsPerMonth: string;
  seats: string;
  dedicatedSupport: boolean;
  customForm: boolean;
  atsIntegrations: boolean;
  customFeatures: boolean;
  buttonText: string;
  titleColor: string;
  backgroundColor: string;
  yearly: boolean;
  imageSrc: any;
}

const Upgradeplane: React.FC<UpgradeplaneProps> = ({
  title,
  price,
  reportsPerMonth,
  seats,
  dedicatedSupport,
  customForm,
  atsIntegrations,
  customFeatures,
  buttonText,
  titleColor,
  backgroundColor,
  yearly,
  imageSrc,
}) => {
  const titleWidth = title.length > 9 ? "w-36" : "w-24";

  return (
    <div>
      <div className="rounded-xl border p-7 shadow-md xs:w-full lg:h-[460px] lg:w-[300px] xl:h-[450px] xl:w-[350px]">
        <div
          className={`flex items-center justify-between rounded-lg p-2 text-base font-normal ${titleWidth} ${titleColor} ${backgroundColor}`}
        >
          <Image src={imageSrc} alt="/" height={20} width={20} />
          {title}
        </div>
        <h1 className="my-4 text-2xl font-medium">
          <span className="font-bold text-black">
            {price === "Let's talk" ? (
              price
            ) : yearly ? (
              <>
                {Strings.$}
                {(price as number) * 12}
                <span className="font-medium">{Strings.year}</span>
              </>
            ) : (
              <>
                {Strings.$}
                {price}
                <span className="font-medium">{Strings.month}</span>
              </>
            )}
          </span>
        </h1>
        <div className="space-y-3">
          <p className="flex text-lg font-medium text-black">
            <p
              className={`mr-2 flex h-[28px] w-[28px] items-center justify-center rounded-full ${
                reportsPerMonth ? "bg-green-500" : "bg-[#B4B4B4]"
              } font-bold text-white`}
            >
              {reportsPerMonth ? (
                <FontAwesomeIcon icon={faCheck} style={{ color: "#ffffff" }} />
              ) : (
                <CloseOutlined rev={undefined} />
              )}
            </p>
            {reportsPerMonth}
          </p>
          <p className="flex text-lg font-medium text-black">
            <p
              className={`mr-2 flex h-[28px] w-[28px] items-center justify-center rounded-full ${
                seats ? "bg-green-500" : "bg-[#B4B4B4]"
              } font-bold text-white`}
            >
              {seats ? (
                <FontAwesomeIcon icon={faCheck} style={{ color: "#ffffff" }} />
              ) : (
                <CloseOutlined rev={undefined} />
              )}
            </p>
            {seats}
          </p>
          <p className="flex text-lg font-medium text-black">
            <p
              className={`mr-2 flex h-[28px] w-[28px] items-center justify-center rounded-full ${
                dedicatedSupport ? "bg-green-500" : "bg-[#B4B4B4]"
              } font-bold text-white`}
            >
              {dedicatedSupport ? (
                <FontAwesomeIcon icon={faCheck} style={{ color: "#ffffff" }} />
              ) : (
                <CloseOutlined rev={undefined} />
              )}
            </p>
            {Strings.Dedicated_support}
          </p>
          <p className="flex text-lg font-medium text-black">
            <p
              className={`mr-2 flex h-[28px] w-[28px] items-center justify-center rounded-full ${
                customForm ? "bg-green-500" : "bg-[#B4B4B4]"
              } font-bold text-white`}
            >
              {customForm ? (
                <FontAwesomeIcon icon={faCheck} style={{ color: "#ffffff" }} />
              ) : (
                <CloseOutlined rev={undefined} />
              )}
            </p>
            {Strings.Custom_form}
          </p>
          <p className="flex text-lg font-medium text-black">
            <p
              className={`mr-2 flex h-[28px] w-[28px] items-center justify-center rounded-full ${
                atsIntegrations ? "bg-green-500" : "bg-[#B4B4B4]"
              } font-bold text-white`}
            >
              {atsIntegrations ? (
                <FontAwesomeIcon icon={faCheck} style={{ color: "#ffffff" }} />
              ) : (
                <CloseOutlined rev={undefined} />
              )}
            </p>
            {Strings.ATS_integrations}
          </p>
          <p className="flex text-lg font-medium text-black">
            <p
              className={`mr-2 flex h-[28px] w-[28px] items-center justify-center rounded-full ${
                customFeatures ? "bg-green-500" : "bg-[#B4B4B4]"
              } font-bold text-white`}
            >
              {customFeatures ? (
                <FontAwesomeIcon icon={faCheck} style={{ color: "#ffffff" }} />
              ) : (
                <CloseOutlined rev={undefined} />
              )}
            </p>
            {Strings.Custom_features}
          </p>
          <button className="flex w-28 transform items-center justify-center rounded-full bg-[#8D3F42] p-[14px] text-base font-semibold text-white transition-transform hover:scale-105">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Upgradeplane;
