import React, { useEffect } from "react";

import { CloseOutlined } from "@ant-design/icons";

export const toggleModal2 = (
  quickdemo: boolean,
  setQuickdemo: {
    (value: React.SetStateAction<boolean>): void;
    (arg0: boolean): void;
  }
) => {
  setQuickdemo(!quickdemo);
};

const Quickdamo = ({
  quickdemo,
  setQuickdemo,
}: {
  quickdemo: boolean;
  setQuickdemo: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  useEffect(() => {
    if (quickdemo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [quickdemo]);

  const openModal = () => {
    setQuickdemo(!quickdemo);
  };
  return (
    <div>
      {quickdemo && (
        <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center  bg-gray-500 bg-opacity-[20%] backdrop-blur-sm ">
          <div className="items-center- justify-center- flex- rounded-xl bg-white p-5 xs:h-[220px] xs:w-[310px] md:h-[310px] md:w-[460px] ">
            <div className="fixed xs:ml-[250px] md:ml-[460px]">
              <button
                className="flex h-8 w-8 items-center justify-center rounded-full border-transparent bg-white text-black opacity-[80%]"
                onClick={openModal}
              >
                <CloseOutlined rev={undefined} />
              </button>
            </div>
            <h1 className="text-xl font-bold text-black"> Quick demo</h1>
            <div className=" flex justify-center">
              <video
                className=" my-2 rounded-xl xs:h-[140px] xs:w-[250px] md:h-[235px] md:w-[420px]"
                controls
              >
                <source
                  src="/images/video.mp4"
                  height={60}
                  width={60}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quickdamo;
