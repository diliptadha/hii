
import { CloseOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Images, Strings } from "@/constants";
import React, { useEffect, useState } from "react";
import { IRootState } from "@/store";
import Image from "next/image";
import { LabelComponent } from "@/components/label";
import Link from "next/link";
import Optionmodal from "@/components/Optionmodal";
import Optionmodal2 from "@/components/Optionmodal2";
import axios from "axios";
import { useSelector } from "react-redux";

const formhireengineer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [worktype, setWorktype] = useState<string | null>(null);
  const [noOfSoftEngineer, setnoOfSoftEngineer] = useState<string | null>(null);
  const [noOfEmployee, setnoOfEmployee] = useState<string | null>(null);
  const [skills, setSkills] = useState<number[]>([]);
  const [findus, setFindus] = useState<number[]>([]);
  const [isOtherSelected, setIsOtherSelected] = useState(false);
  const [isOtherSelected2, setIsOtherSelected2] = useState(false);
  const [otherText, setOtherText] = useState("");
  const [otherText2, setOtherText2] = useState("");
  const [additionalOptions, setAdditionalOptions] = useState([]);
  const [additionalOptions2, setAdditionalOptions2] = useState([]);
  const [fname, setfirstName] = useState("");
  const [fnameError, setfirstNameError] = useState(false);
  const [lastName, setLname] = useState("");
  const [lastNameError, setLnameError] = useState(false);
  const [companyEmail, setcompanyEmail] = useState("");
  const [companyEmailError, setcompanyEmailError] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [optionCounter, setOptionCounter] = useState(10);
  const [optionCounter1, setOptionCounter1] = useState(7);
  const [message, setMessage] = useState("");
  const [hasSelectedOption, setHasSelectedOption] = useState(true);
  const [hasSelectedOption1, setHasSelectedOption1] = useState(true);
  const [hasSelectedOption2, setHasSelectedOption2] = useState(true);
  const [activeModalPage, setActiveModalPage] = useState(1);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedFind, setSelectedFind] = useState<string[]>([]);
  const [isError, setIsError] = useState(false);
  const themeConfig = useSelector((state: IRootState) => state.themeConfig);

  const handleSubmit = () => {
    let data = JSON.stringify({
      workType: worktype,
      skill: selectedSkills,
      noOfSoftEngineer: noOfSoftEngineer,
      firstName: fname,
      lastName: lastName,
      companyEmail: companyEmail,
      noOfEmployee: noOfEmployee,
      message: message,
      findUs: selectedFind,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${process.env.NEXT_PUBLIC_API_URL}hiretopengineer/addHireData`,
      headers: {
        Authorization:
          `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  const openModal = () => {
    setIsOpen(!isOpen);
  };

  const handleNextClick = () => {
    console.log("firstname:", fname);
    if (fname.trim().length < 3) {
      setfirstNameError(true);
    } else {
      setfirstNameError(false);
      setActiveModalPage(activeModalPage + 1);
    }
  };

  const handleNextClick2 = () => {
    console.log("lastname:", lastName);
    if (lastName.trim().length < 3) {
      setLnameError(true);
    } else {
      setLnameError(false);
      setActiveModalPage(activeModalPage + 1);
    }
  };

  const validateEmail = (companyEmail: string) => {
    const companyEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return companyEmailRegex.test(companyEmail);
  };

  const handleEmailChange = (e: any) => {
    setcompanyEmail(e.target.value);

    if (validateEmail(e.target.value)) {
      setIsEmailValid(true);
      setcompanyEmailError("");
    } else {
      setIsEmailValid(false);
      setcompanyEmailError("Please enter a valid companyEmail address.");
    }
    // handle(e);
  };

  const [optionModalData2, setOptionModalData2] = useState([
    {
      id: 1,
      buttonText: "Button 1 Text",
      label: "Twitter",
      imageSrc: Images.TWITTER,
    },
    {
      id: 2,
      buttonText: "Button 2 Text",
      label: "Linkedin",
      imageSrc: Images.LINKDIN,
    },
    {
      id: 3,
      buttonText: "Button 2 Text",
      label: "Google",
      imageSrc: Images.GOOGAL,
    },
    {
      id: 4,
      buttonText: "Button 2 Text",
      label: "Clutch",
      imageSrc: Images.CLUTCH,
    },
    {
      id: 5,
      buttonText: "Button 2 Text",
      label: "Instagram",
      imageSrc: Images.INSTAGRAM,
    },
    ...additionalOptions2,
    {
      id: 6,
      buttonText: "Button 2 Text",
      label: "Other",
    },
  ]);

  const [optionModalData, setOptionModalData] = useState([
    {
      id: 1,
      buttonText: "Button 1 Text",
      label: "React",
      imageSrc: Images.ReactSvg,
    },
    {
      id: 2,
      buttonText: "Button 2 Text",
      label: "Figma",
      imageSrc: Images.Figma,
    },
    {
      id: 3,
      buttonText: "Button 2 Text",
      label: "Js",
      imageSrc: Images.javascrit,
    },
    {
      id: 4,
      buttonText: "Button 2 Text",
      label: "Node Js",
      imageSrc: Images.JS,
    },
    {
      id: 5,
      buttonText: "Button 2 Text",
      label: "Python",
      imageSrc: Images.Python,
    },
    {
      id: 6,
      buttonText: "Button 2 Text",
      label: "React Native",
      imageSrc: Images.atom,
    },
    {
      id: 7,
      buttonText: "Button 2 Text",
      label: "AWS",
      imageSrc: Images.Aws,
    },
    {
      id: 8,
      buttonText: "Button 2 Text",
      label: "Blockchain",
      imageSrc:
        themeConfig.theme === "light"
          ? Images.Blockchain
          : Images.Blockchain_Black,
    },

    ...additionalOptions,
    {
      id: 9,
      buttonText: "Button 2 Text",
      label: "Other",
    },
  ]);

  const handleOptionClick = (data: { id: number; label: string }) => {
    let newSelectedOptions;

    // Replace the entire array with a new one
    if (data.id === 9) {
      setIsOtherSelected(!isOtherSelected);
      newSelectedOptions = [data.id]; // Assuming you want to replace the array with a single element when id is 9
    } else {
      // Update the array by toggling the id
      newSelectedOptions = skills.includes(data.id)
        ? skills.filter((skill) => skill !== data.id)
        : [...skills, data.id];
    }

    setSkills(newSelectedOptions);

    let newSelectedSkills;

    // Replace the entire array with a new one
    if (data.id === 9) {
      // setIsOtherSelected(!isOtherSelected);
      newSelectedSkills = [data.label]; // Assuming you want to replace the array with a single element when id is 9
    } else {
      // Update the array by toggling the label
      newSelectedSkills = selectedSkills.includes(data.label)
        ? selectedSkills.filter((skill) => skill !== data.label)
        : [...selectedSkills, data.label];
    }

    setSelectedSkills(newSelectedSkills);
  };

  const handleAddButtonClick = () => {
    if (isOtherSelected && otherText) {
      const newOption = {
        id: optionCounter, // Generate a new unique ID
        buttonText: "Button Text", // Set your desired button text
        label: otherText, // Use the otherText as the label
        // Set other properties like imageSrc if needed
      };
      console.log(newOption);

      setOptionCounter(optionCounter + 1);
      const setAdditionalOptions = () => [...additionalOptions, newOption];

      // Update the optionModalData array by creating a new array with the existing data and the new option
      const updatedOptionModalData = [
        ...optionModalData.slice(0, 8),
        newOption,
        ...optionModalData.slice(8),
      ];

      // Update the optionModalData state with the updated array
      setOptionModalData(updatedOptionModalData);
      setIsOtherSelected(false); // Reset the isOtherSelected state
      setOtherText(""); // Res
    }
  };

  const handleOptionClick2 = (data: { id: number; label: string }) => {
    let newSelectedOptions2;

    // Replace the entire array with a new one
    if (data.id === 6) {
      setIsOtherSelected2(!isOtherSelected2);
      newSelectedOptions2 = [data.id]; // Assuming you want to replace the array with a single element when id is 6
    } else {
      // Replace the array with a new one by toggling the id
      newSelectedOptions2 = findus.includes(data.id)
        ? findus.filter((item) => item !== data.id)
        : [...findus, data.id];
    }

    setFindus(newSelectedOptions2);

    let newSelectedFind;

    // Replace the entire array with a new one
    if (data.id === 6) {
      setIsOtherSelected2(!isOtherSelected2);
      newSelectedFind = [data.label]; // Assuming you want to replace the array with a single element when id is 6
    } else {
      // Replace the array with a new one by toggling the label
      newSelectedFind = selectedFind.includes(data.label)
        ? selectedFind.filter((item) => item !== data.label)
        : [...selectedFind, data.label];
    }

    setSelectedFind(newSelectedFind);
  };

  const handleAddButtonClick2 = () => {
    if (isOtherSelected2 && otherText2) {
      const newOption = {
        id: optionCounter1, // Generate a new unique ID
        buttonText: "Button Text", // Set your desired button text
        label: otherText2, // Use the otherText as the label
        // Set other properties like imageSrc if needed
      };
      console.log(newOption);

      setOptionCounter1(optionCounter1 + 1);
      const setAdditionalOptions2 = () => [...additionalOptions2, newOption];

      // Update the optionModalData array by creating a new array with the existing data and the new option
      const updatedOptionModalData2 = [
        ...optionModalData2.slice(0, 5),
        newOption,
        ...optionModalData2.slice(5),
      ];

      // Update the optionModalData state with the updated array
      setOptionModalData2(updatedOptionModalData2);
      setIsOtherSelected2(false); // Reset the isOtherSelected state
      setOtherText2(""); // Res
      setIsError(false);
    } else {
      setIsError(true);
    }
  };

  return (
    <div>
      <div className="flex justify-center">
      </div>

      <div
        className="  
        flex h-full items-center justify-center bg-balck bg-opacity-90- group- fixed- z-50- xs:left-[20px]- xs:right-[20px]- xs:top-[80px]- md:left-[30px]-  md:right-[30px]- md:top-[80px]-  lg:left-[290px]- lg:top-[90px]- xl:top-[80px]- "
      >
        <div className=" fixed xs:right-[2rem] xs:top-[90px] md:top-[82px]- xl:top-[70px]-">
          <Link href="/apps/hire-new-talent
          ">
            <button className="bg-[#8D3F42] hover:bg-[#BC7666] flex h-8 w-8 items-center justify-center rounded-full border-transparent text-white">
              <CloseOutlined rev={undefined} />
            </button>
          </Link>
        </div>

        <div className="  sidebar- no-scrollbar  xs:h-full md:h-[500px] lg:h-[625px]  w-[100%] overflow-y-scroll rounded-xl bg-white py-7 dark:bg-[#000] xs:px-3 md:px-6 lg:flex lg:items-center lg:justify-center lg:px-12">
          {activeModalPage === 1 && (
            <div>
              <div className="my-7 space-y-1 ">
                <p className="font-outfit font-bold text-gray-900 dark:text-white xs:text-xl md:text-2xl lg:text-[24px]">
                  {Strings.QUS_1}
                </p>
                <p className="font-outfit font-semibold text-[#7a7979] xs:text-lg md:text-xl lg:text-[16px]">
                  {Strings.QUS_1_SUB}
                </p>
              </div>
              <div className="flex xs:flex-col xs:space-y-7 lg:flex-row lg:space-x-12 lg:space-y-0 ">
                <button
                  className="flex h-12 items-center rounded-full border-2  border-[#000] px-3 dark:border-white xs:w-60 lg:w-64"
                  // onClick={() => setWorktype("fullTime")}
                  onClick={() => {
                    if (worktype === "fullTime") {
                      setWorktype(null);
                    } else {
                      setWorktype("fullTime");
                      setHasSelectedOption(true);
                    }
                  }}
                >
                  <div
                    className={` mr-14 pt-1 h-8 w-8 rounded-full  border-2 border-[#000] text-[16px] font-semibold dark:border-white ${worktype === "fullTime" ? " bg-black dark:bg-white" : ""
                      } ${worktype === "fullTime"
                        ? "text-white dark:text-black"
                        : "text-black dark:text-white"
                      }`}
                  >
                    A
                  </div>
                  <div className="mr-7 font-semibold text-gray-900 dark:text-white xs:text-base lg:text-[20px]">
                    {Strings.FULL_TIME}
                  </div>
                  {worktype === "fullTime" || setWorktype === null ? (
                    <Image
                      src={Images.checkIcon}
                      alt="/"
                      height={20}
                      width={20}
                      className=""
                    />
                  ) : (
                    ""
                  )}
                </button>
                <button
                  className="flex h-12 items-center rounded-full border-2   border-[#000] px-3 dark:border-white xs:w-60 lg:w-64"
                  onClick={() => {
                    if (worktype === "partTime") {
                      setWorktype(null);
                    } else {
                      setWorktype("partTime");
                      setHasSelectedOption(true);
                    }
                  }}
                // onClick={() => "partTime"}
                >
                  <div
                    className={`  mr-14 pt-1 h-8 w-8 rounded-full  border-2 border-[#000] font-semibold dark:border-white text-[16px]${worktype === "partTime" ? " bg-black dark:bg-white" : ""
                      } ${worktype === "partTime"
                        ? "text-white dark:text-black"
                        : "text-black dark:text-white"
                      }`}
                  >
                    {Strings.B}
                  </div>
                  <div className="mr-7 font-semibold  text-gray-900  dark:text-white xs:text-base lg:text-[20px]">
                    {Strings.PART_TIME}
                  </div>
                  {worktype === "partTime" || setWorktype === null ? (
                    <Image
                      src={Images.checkIcon}
                      alt="/"
                      height={20}
                      width={20}
                      className=""
                    />
                  ) : (
                    ""
                  )}
                </button>
              </div>
              {!hasSelectedOption && (
                <p className="font-outfit text-red-500 mt-3">
                  {Strings.PLEASE_SELECT_AN_OPTION}
                </p>
              )}
              <div className="mt-[25px] flex justify-end space-x-[1px] ">
                <button
                  className="flex items-center justify-center rounded-l-full bg-gradient-to-t from-[#8D3F42] to-[#BC7666] px-3 py-2 text-gray-900 opacity-[50%] hover:from-gray-600 hover:to-gray-600 dark:text-white"
                  onClick={() => {
                    if (activeModalPage > 1) {
                      setActiveModalPage(activeModalPage - 1);
                    }
                  }}
                >
                  <LeftOutlined rev={undefined} />
                </button>
                <button
                  onClick={() => {
                    console.log("worktype:", worktype);
                    if (activeModalPage < 9 && worktype !== null) {
                      setHasSelectedOption(true);
                      setActiveModalPage(activeModalPage + 1);
                    } else {
                      setHasSelectedOption(false);
                    }
                  }}
                  className="flex items-center justify-center rounded-r-full bg-gradient-to-b from-[#BC7666] to-[#8D3F42] px-3 py-2 text-gray-900 hover:from-gray-600 hover:to-gray-600 dark:text-white"
                >
                  <RightOutlined rev={undefined} />
                </button>
              </div>
            </div>
          )}
          {activeModalPage === 2 && (
            <div>
              <div className="space-y-2">
                <p className="font-outfit font-bold text-gray-900 dark:text-white xs:text-xl md:text-2xl lg:text-[24px]">
                  {Strings.QUS_2}
                </p>
                {/* <p className="font-outfit font-semibold text-gray-900 dark:text-white xs:text-lg md:text-xl lg:text-[16px]">
                    {Strings.QUS_2}
                  </p> */}
              </div>
              <p className="my-5 font-outfit text-sm font-medium text-[#7a7979]">
                {Strings.CHOOSE_AS_MANY_AS_YOU_LIKE}
              </p>
              <div className="-  bg-red-500- flex-start  flex flex-wrap items-center justify-center gap-x-[10px] lg:w-[560px] xl:w-[660px]">
                {optionModalData.map((data) => (
                  <Optionmodal
                    isImageShow={data.id < 8.5 && data.id !== 9}
                    key={data.id}
                    buttonText={data.buttonText}
                    label={data.label}
                    imageSrc={data.imageSrc}
                    isSelected={
                      data.id === 9 ? isOtherSelected : skills.includes(data.id)
                    }
                    onClick={() => handleOptionClick(data)}
                  />
                ))}
              </div>
              {isOtherSelected && (
                <div className="my-4 flex justify-start space-x-2 font-outfit text-gray-900 dark:text-white">
                  <input
                    type="text"
                    placeholder="Enter your other skills here..."
                    className="border-Cod_Gray w-[90%] rounded-lg border-[2px] border-[#000] bg-white p-2 py-3 outline-none dark:border-white dark:bg-[#000] xs:text-sm lg:text-xl"
                    value={otherText}
                    onChange={(e) => setOtherText(e.target.value)}
                  />
                  <button
                    onClick={handleAddButtonClick}
                    className="from-tosca to-contessa hover:to-CodGray rounded-lg  border-[2px] border-[#000] bg-gradient-to-t px-[30px] font-outfit font-semibold text-white hover:from-gray-950 dark:border-white"
                  >
                    {Strings.ADD}
                  </button>
                </div>
              )}
              <div className="flex justify-end space-x-[1px] mt-[20px] ">
                <button
                  className="flex items-center justify-center rounded-l-full bg-gradient-to-t from-[#8D3F42] to-[#BC7666] px-3 py-2 text-gray-900 hover:from-gray-600 hover:to-gray-600 dark:text-white"
                  onClick={() => {
                    if (activeModalPage > 1) {
                      setActiveModalPage(activeModalPage - 1);
                    }
                  }}
                >
                  <LeftOutlined rev={undefined} />
                </button>
                <button
                  onClick={() => {
                    if (activeModalPage < 9) {
                      setActiveModalPage(activeModalPage + 1);
                    }
                  }}
                  className="flex items-center justify-center rounded-r-full bg-gradient-to-t from-[#8D3F42] to-[#BC7666] px-3 py-2 text-gray-900 hover:from-gray-600 hover:to-gray-600 dark:text-white"
                >
                  <RightOutlined rev={undefined} />
                </button>
              </div>
            </div>
          )}
          {activeModalPage === 3 && (
            <div className="space-y-7">
              <div className="space-y-1">
                <p className="font-outfit font-bold text-white xs:text-xl md:text-2xl lg:text-[24px]">
                  {Strings.QUS_3}
                </p>
                <p className=" font-outfit font-semibold text-[#7a7979] xs:text-lg md:text-xl lg:text-[16px]">
                  {Strings.QUS_3_SUB}
                </p>
              </div>
              <div className="flex xs:flex-col xs:space-y-7 lg:flex-row lg:space-x-12 lg:space-y-0 ">
                <button
                  className="flex h-12 items-center  rounded-full  border-2   border-[#000]  px-3 dark:border-white xs:w-60 lg:w-[11rem] xl:w-[17rem]"
                  onClick={() => {
                    if (noOfSoftEngineer === "1-2") {
                      setnoOfSoftEngineer(null);
                    } else {
                      setnoOfSoftEngineer("1-2");
                      setHasSelectedOption1(true);
                    }
                  }}
                >
                  <button
                    className={` h-8 w-8 rounded-full   border-2 border-[#000] text-[20px] font-semibold dark:border-white  xs:mr-16 md:mr-[10px] xl:mr-16 ${noOfSoftEngineer === "1-2"
                      ? " bg-black dark:bg-white"
                      : ""
                      } ${noOfSoftEngineer === "1-2"
                        ? "text-white dark:text-black"
                        : "text-black dark:text-white"
                      }`}
                  >
                    {Strings.A}
                  </button>
                  <p className="font-semibold text-gray-900 dark:text-white xs:mr-16 xs:text-base lg:mr-[50px] lg:text-lg xl:mr-20">
                    1-2
                  </p>
                  {noOfSoftEngineer === "1-2" ||
                    setnoOfSoftEngineer === null ? (
                    <Image
                      src={Images.checkIcon}
                      alt="/"
                      height={20}
                      width={20}
                      className=""
                    />
                  ) : (
                    ""
                  )}
                </button>
                <button
                  className="flex h-12 items-center  rounded-full  border-2    border-[#000] px-3 dark:border-white xs:w-60 lg:w-[11rem] xl:w-[17rem]"
                  onClick={() => {
                    if (noOfSoftEngineer === "2-5") {
                      setnoOfSoftEngineer(null);
                    } else {
                      setnoOfSoftEngineer("2-5");
                      setHasSelectedOption1(true);
                    }
                  }}
                >
                  <button
                    className={` h-8 w-8 rounded-full border-2 border-[#000] text-[20px] font-semibold dark:border-white xs:mr-16  md:mr-[10px] xl:mr-16 ${noOfSoftEngineer === "2-5"
                      ? " bg-black dark:bg-white"
                      : ""
                      } ${noOfSoftEngineer === "2-5"
                        ? "text-white dark:text-black"
                        : "text-black dark:text-white"
                      }`}
                  >
                    {Strings.B}
                  </button>
                  <p className="font-semibold text-gray-900 dark:text-white xs:mr-16 xs:text-base lg:mr-[50px] lg:text-lg xl:mr-20">
                    2-5
                  </p>
                  {noOfSoftEngineer === "2-5" ||
                    setnoOfSoftEngineer === null ? (
                    <Image
                      src={Images.checkIcon}
                      alt="/"
                      height={20}
                      width={20}
                      className=""
                    />
                  ) : (
                    ""
                  )}
                </button>
                <button
                  className="flex  h-12 items-center rounded-full  border-2      border-[#000]  px-3  dark:border-white xs:w-60 lg:w-[11rem] xl:w-[17rem]"
                  onClick={() => {
                    if (noOfSoftEngineer === "5+") {
                      setnoOfSoftEngineer(null);
                    } else {
                      setnoOfSoftEngineer("5+");
                      setHasSelectedOption1(true);
                    }
                  }}
                >
                  <button
                    className={` h-8 w-8 rounded-full border-2 border-[#000] text-[20px] font-semibold dark:border-white xs:mr-16  md:mr-[10px] xl:mr-16 ${noOfSoftEngineer === "5+" ? " bg-black dark:bg-white" : ""
                      } ${noOfSoftEngineer === "5+"
                        ? "text-white dark:text-black"
                        : "text-black dark:text-white"
                      }`}
                  >
                    {Strings.C}
                  </button>
                  <p className="font-semibold text-gray-900 dark:text-white xs:mr-16 xs:text-base lg:mr-[50px] lg:text-lg xl:mr-20">
                    5+
                  </p>
                  {noOfSoftEngineer === "5+" || setnoOfSoftEngineer === null ? (
                    <Image
                      src={Images.checkIcon}
                      alt="/"
                      height={20}
                      width={20}
                      className=""
                    />
                  ) : (
                    ""
                  )}
                </button>

              </div>
              {!hasSelectedOption1 && (
                <p className="font-outfit text-red-500 m-0">
                  {Strings.PLEASE_SELECT_AN_OPTION}
                </p>
              )}
              <div className="flex justify-end space-x-[1px]">
                <button
                  className="flex items-center justify-center rounded-l-full bg-gradient-to-t from-[#8D3F42] to-[#BC7666] px-3 py-2 text-gray-900 hover:from-gray-600 hover:to-gray-600 dark:text-white"
                  onClick={() => {
                    if (activeModalPage > 1) {
                      setActiveModalPage(activeModalPage - 1);
                    }
                  }}
                >
                  <LeftOutlined rev={undefined} />
                </button>
                <button
                  onClick={() => {
                    console.log("noOfSoftEngineer:", noOfSoftEngineer);
                    if (activeModalPage < 9 && noOfSoftEngineer !== null) {
                      setHasSelectedOption1(true);
                      setActiveModalPage(activeModalPage + 1);
                    } else {
                      setHasSelectedOption1(false);
                    }
                  }}
                  className="flex items-center justify-center rounded-r-full bg-gradient-to-t from-[#8D3F42] to-[#BC7666] px-3 py-2 text-gray-900 hover:from-gray-600 hover:to-gray-600 dark:text-white"
                >
                  <RightOutlined rev={undefined} />
                </button>
              </div>

            </div>
          )}
          {activeModalPage === 4 && (
            <div className="space-y-7">
              <div className="space-y-1">
                <p className="font-outfit font-bold text-gray-900 dark:text-white xs:text-xl md:text-[20px] lg:text-[20px]">
                  {Strings.QUS_4}
                </p>
                <p className="font-outfit font-semibold text-[#7a7979] xs:text-lg md:text-[16px] lg:text-[16px]">
                  {Strings.QUS_4_SUB}
                </p>
              </div>
              <div className="mt-4 flex justify-start font-outfit text-[#000] dark:text-white">
                <input
                  type="text"
                  required
                  placeholder="Type your answer here..."
                  className={`border-Cod_Gray rounded-lg border-[1px] border-[#000]   bg-white p-2 py-5 outline-none dark:border-white dark:bg-[#000] xs:w-full xs:text-base md:w-[600px] lg:text-[16px] xl:w-[900px] ${fnameError ? "border-red-500" : ""
                    }`}
                  // name="FirstName"
                  value={fname}
                  // onChange={handle}
                  id="name"
                  onChange={(e) => {
                    const inputValue = e.target.value;
                    const isAlphabetic = /^[a-zA-Z\s]*$/.test(inputValue);

                    if (isAlphabetic || inputValue === "") {
                      setfirstName(inputValue);
                      setfirstNameError(false);
                      // handle(e)
                    }
                  }}
                />
              </div>
              {fnameError && (
                <p className="font-outfit font-normal text-red-500">
                  {Strings.PLEASE_ENTER_YOUR_NAME}
                </p>
              )}
              <div className="flex justify-end space-x-[1px] ">
                <button
                  className="flex items-center justify-center rounded-l-full bg-gradient-to-t from-[#8D3F42] to-[#BC7666] px-3 py-2 text-gray-900 hover:from-gray-600 hover:to-gray-600 dark:text-white"
                  onClick={() => {
                    if (activeModalPage > 1) {
                      setActiveModalPage(activeModalPage - 1);
                    }
                  }}
                >
                  <LeftOutlined rev={undefined} />
                </button>
                <button
                  onClick={handleNextClick}
                  className="flex items-center justify-center rounded-r-full bg-gradient-to-t from-[#8D3F42] to-[#BC7666] px-3 py-2 text-gray-900 hover:from-gray-600 hover:to-gray-600 dark:text-white"
                >
                  <RightOutlined rev={undefined} />
                </button>
              </div>
            </div>
          )}
          {activeModalPage === 5 && (
            <div className="space-y-7">
              <div className="space-y-1">
                <p className="font-outfit font-bold text-gray-900 dark:text-white xs:text-xl md:text-[24px] lg:text-[24px]">
                  {Strings.QUS_5}
                </p>
              </div>
              <div className="mt-4 flex justify-start font-outfit text-gray-900 dark:text-white">
                <input
                  type="text"
                  placeholder="Type your answer here..."
                  className={`border-Cod_Gray bg-white- rounded-lg border-[1px]  border-[#000] p-2 py-5 outline-none dark:border-white dark:bg-[#000] xs:w-full xs:text-base md:w-[600px] lg:text-[16px] xl:w-[900px] ${lastNameError ? "border-red-500" : ""
                    }`}
                  value={lastName}
                  name="LastName"
                  // onChange={handle}
                  onChange={(e) => {
                    const inputValue = e.target.value;
                    const isAlphabetic = /^[a-zA-Z\s]*$/.test(inputValue);

                    if (isAlphabetic || inputValue === "") {
                      setLname(inputValue);
                      setLnameError(false);
                      // handle(e)
                    }
                  }}
                />
              </div>
              {lastNameError && (
                <p className="font-outfit font-normal text-red-500">
                  {Strings.PLEASE_ENTER_YOUR_NAME}
                </p>
              )}
              <div className="flex justify-end space-x-[1px]">
                <button
                  className="flex items-center justify-center rounded-l-full bg-gradient-to-t from-[#8D3F42] to-[#BC7666] px-3 py-2 text-gray-900 hover:from-gray-600 hover:to-gray-600 dark:text-white"
                  onClick={() => {
                    if (activeModalPage > 1) {
                      setActiveModalPage(activeModalPage - 1);
                    }
                  }}
                >
                  <LeftOutlined rev={undefined} />
                </button>
                <button
                  onClick={handleNextClick2}
                  className="to-[#BC7666]a flex items-center justify-center rounded-r-full bg-gradient-to-t from-[#8D3F42] to-[#BC7666] px-3 py-2 text-gray-900 hover:from-gray-600 hover:to-gray-600 dark:text-white"
                >
                  <RightOutlined rev={undefined} />
                </button>
              </div>
            </div>
          )}
          {activeModalPage === 6 && (
            <div className="space-y-7">
              <div className="space-y-1">
                <p className="font-outfit font-bold text-gray-900 dark:text-white xs:text-xl md:text-[24px] lg:text-[24px]">
                  {Strings.QUS_6}
                </p>
                <p className="font-outfit font-semibold text-[#7a7979] xs:text-lg md:text-xl lg:text-[16px]">
                  {Strings.PLEASE_ADD_YOUR_COMPANY_EMAIL}
                </p>
              </div>
              <div className="mb-72 mt-4 flex justify-start font-outfit text-gray-900 dark:text-white">
                <input
                  type="companyEmail"
                  placeholder="name@example.com"
                  className="border-Cod_Gray rounded-lg border-[1px] border-[#000]  bg-white p-2 py-5 outline-none dark:border-white dark:bg-[#000] xs:w-full xs:text-base md:w-[600px] lg:text-xl xl:w-[900px]"
                  // name="CompanyEmail"
                  value={companyEmail}
                  onChange={(e) => handleEmailChange(e)}
                  id="name"
                />
              </div>
              {companyEmailError && (
                <LabelComponent
                  className="font-outfit text-sm text-red-500"
                  label={companyEmailError}
                />
              )}
              <div className="flex justify-end space-x-[1px] ">
                <button
                  className="flex items-center justify-center rounded-l-full bg-gradient-to-t from-[#8D3F42] to-[#BC7666] px-3 py-2 text-gray-900 hover:from-gray-600 hover:to-gray-600 dark:text-white"
                  onClick={() => {
                    if (activeModalPage > 1) {
                      setActiveModalPage(activeModalPage - 1);
                    }
                  }}
                >
                  <LeftOutlined rev={undefined} />
                </button>
                <button
                  onClick={() => {
                    console.log("companyEmail:", companyEmail);
                    if (validateEmail(companyEmail)) {
                      setIsEmailValid(true);
                      setActiveModalPage(activeModalPage + 1);
                    } else {
                      setIsEmailValid(false);
                      setcompanyEmailError(
                        "Please enter a valid companyEmail address."
                      );
                    }
                  }}
                  disabled={companyEmail === "" || !isEmailValid}
                  className={`flex items-center justify-center rounded-r-full bg-gradient-to-t from-[#8D3F42] to-[#BC7666] px-3 py-2  text-gray-900 dark:text-white ${companyEmail === "" || !isEmailValid
                    ? "cursor-not-allowed opacity-50"
                    : "hover:from-gray-600 hover:to-gray-600"
                    }`}
                >
                  <RightOutlined rev={undefined} />
                </button>
              </div>
            </div>
          )}
          {activeModalPage === 7 && (
            <div className="space-y-7">
              <div className="space-y-1">
                <p className="font-outfit font-bold text-gray-900 dark:text-white xs:text-xl md:text-[24px] lg:text-[24px]">
                  {Strings.QUS_7}
                </p>
                <p className="font-outfit font-semibold text-[#7a7979] xs:text-lg md:text-xl lg:text-[16px]">
                  {Strings.WE_TAILOR_OUR}
                </p>
              </div>
              <div className="flex xs:flex-col xs:space-y-7 lg:flex-row lg:space-x-9 lg:space-y-0 ">
                <button
                  className="flex h-12 w-64  items-center rounded-full border-2 border-[#000] px-3 dark:border-white xs:w-60 lg:w-[11rem] xl:w-[17rem]"

                  onClick={() => {
                    if (noOfEmployee === "1-10") {
                      setnoOfEmployee(null);
                    } else {
                      setnoOfEmployee("1-10");
                    }
                  }}
                >
                  <button
                    className={`mr-8 h-8 w-8  rounded-full border-2 border-[#000] text-lg font-semibold dark:border-white xs:mr-16 md:mr-[10px] xl:mr-16 ${noOfEmployee === "1-10" ? " bg-black dark:bg-white" : ""
                      } ${noOfEmployee === "1-10"
                        ? "text-white dark:text-black"
                        : "text-black dark:text-white"
                      }`}
                  >
                    {Strings.A}
                  </button>
                  <p className="mr-8 font-semibold text-gray-900 dark:text-white xs:text-base lg:text-lg lg:mr-[50px]- xl:mr-20-">

                    1-10
                  </p>
                  {noOfEmployee === "1-10" || setnoOfEmployee === null ? (
                    <Image
                      src={Images.checkIcon}
                      alt="/"
                      height={20}
                      width={20}
                      className=""
                    />
                  ) : (
                    ""
                  )}
                </button>
                <button
                  className="flex h-12 w-64  items-center rounded-full border-2 border-[#000] px-3 dark:border-white xs:w-60 lg:w-[11rem] xl:w-[17rem]"
                  onClick={() => {
                    if (noOfEmployee === "10-50") {
                      setnoOfEmployee(null);
                    } else {
                      setnoOfEmployee("10-50");
                    }
                  }}
                >
                  <button
                    className={`mr-8 h-8 w-8  rounded-full border-2 border-[#000] text-lg font-semibold dark:border-white xs:mr-16 md:mr-[10px] xl:mr-16 ${noOfEmployee === "10-50" ? " bg-black dark:bg-white" : ""
                      } ${noOfEmployee === "10-50"
                        ? "text-white dark:text-black"
                        : "text-black dark:text-white"
                      }`}
                  >
                    {Strings.B}
                  </button>
                  <p className="mr-8 font-semibold text-gray-900 dark:text-white xs:text-base lg:text-lg">
                    10-50
                  </p>
                  {noOfEmployee === "10-50" || setnoOfEmployee === null ? (
                    <Image
                      src={Images.checkIcon}
                      alt="/"
                      height={20}
                      width={20}
                      className=""
                    />
                  ) : (
                    ""
                  )}
                </button>
                <button
                  className="flex h-12 w-64  items-center rounded-full border-2 border-[#000] px-3 dark:border-white xs:w-60 lg:w-[11rem] xl:w-[17rem]"
                  onClick={() => {
                    if (noOfEmployee === "50+") {
                      setnoOfEmployee(null);
                    } else {
                      setnoOfEmployee("50+");
                    }
                  }}
                >
                  <button
                    className={`mr-[35px] h-8 w-8  rounded-full border-2 border-[#000] text-lg font-semibold dark:border-white xs:mr-16 md:mr-[10px] xl:mr-16 ${noOfEmployee === "50+" ? " bg-black dark:bg-white" : ""
                      } ${noOfEmployee === "50+"
                        ? "text-white dark:text-black"
                        : "text-black dark:text-white"
                      }`}
                  >
                    {Strings.C}
                  </button>
                  <p className="mr-8 font-semibold text-gray-900 dark:text-white xs:text-base lg:text-lg">
                    50+
                  </p>
                  {noOfEmployee === "50+" || setnoOfEmployee === null ? (
                    <Image
                      src={Images.checkIcon}
                      alt="/"
                      height={20}
                      width={20}
                      className=""
                    />
                  ) : (
                    ""
                  )}
                </button>
              </div>
              <div className="flex justify-end space-x-[1px] ">
                <button
                  className="flex items-center justify-center rounded-l-full bg-gradient-to-t from-[#8D3F42] to-[#BC7666] px-3 py-2 text-gray-900 hover:from-gray-600 hover:to-gray-600 dark:text-white"
                  onClick={() => {
                    if (activeModalPage > 1) {
                      setActiveModalPage(activeModalPage - 1);
                    }
                  }}
                >
                  <LeftOutlined rev={undefined} />
                </button>
                <button
                  onClick={() => {
                    console.log("noOfEmployee:", noOfEmployee);
                    if (activeModalPage < 9 && noOfEmployee !== null) {
                      setHasSelectedOption2(true);
                      setActiveModalPage(activeModalPage + 1);
                    } else {
                      setHasSelectedOption2(false);
                    }
                  }}
                  className="flex items-center justify-center rounded-r-full bg-gradient-to-t from-[#8D3F42] to-[#BC7666] px-3 py-2 text-gray-900 hover:from-gray-600 hover:to-gray-600 dark:text-white"
                >
                  <RightOutlined rev={undefined} />
                </button>
              </div>
              {!hasSelectedOption2 && (
                <p className="font-outfit text-red-500">
                  {Strings.PLEASE_SELECT_AN_OPTION}
                </p>
              )}
            </div>
          )}
          {activeModalPage === 8 && (
            <div className="space-y-7">
              <div className="space-y-1">
                <p className="lg:text-[24px font-outfit font-bold text-gray-900 dark:text-white xs:text-xl md:text-[24px]">
                  {Strings.QUS_8}
                </p>
                <p className="font-outfit font-semibold text-[#7a7979] xs:text-lg md:text-xl lg:text-[16px]">
                  {Strings.FELL_FREE_TO_TELL}
                </p>
              </div>
              <div className="mt-4 flex justify-start font-outfit text-gray-900 dark:text-white">
                <textarea
                  id="message"
                  rows={4}
                  className="border-Cod_Gray focus:ring-Cod_Gray focus:border-Cod_Gray dark:focus:ring-Cod_Gray dark:focus:border-Cod_Gray block rounded-lg border-[1px] border-[#000] bg-white  p-2.5 outline-none   dark:border-white dark:bg-[#000]  dark:text-white dark:placeholder-gray-400 xs:w-full xs:text-base md:w-[600px] lg:text-xl xl:w-[900px]"
                  placeholder="Type your answer here..."
                  name="Massage"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              {/* <p className="font-outfit text-sm font-medium text-gray-900 dark:text-white">
                {Strings.SHIFT_ENTER}
              </p> */}
              <div className="flex justify-end space-x-[1px] ">
                <button
                  className="flex items-center justify-center rounded-l-full bg-gradient-to-t from-[#8D3F42] to-[#BC7666] px-3 py-2 text-gray-900 hover:from-gray-600 hover:to-gray-600 dark:text-white"
                  onClick={() => {
                    if (activeModalPage > 1) {
                      setActiveModalPage(activeModalPage - 1);
                    }
                  }}
                >
                  <LeftOutlined rev={undefined} />
                </button>
                <button
                  onClick={() => {
                    console.log("aboutproject:", message);
                    if (activeModalPage < 9) {
                      setActiveModalPage(activeModalPage + 1);
                    }
                  }}
                  className="flex items-center justify-center rounded-r-full bg-gradient-to-t from-[#8D3F42] to-[#BC7666] px-3 py-2 text-gray-900 hover:from-gray-600 hover:to-gray-600 dark:text-white"
                >
                  <RightOutlined rev={undefined} />
                </button>
              </div>
            </div>
          )}
          {activeModalPage === 9 && (
            <div className="space-y-7">
              <div className="space-y-1">
                <p className="lg:text-[24px font-outfit font-bold text-gray-900 dark:text-white xs:text-xl md:text-[24px]">
                  {Strings.QUS_9}
                </p>
                <p className="font-outfit font-semibold text-[#7a7979] xs:text-lg md:text-xl lg:text-[16px]">
                  {Strings.WE_APPRECIATE_IT}
                </p>
              </div>
              <div className="-  bg-red-500- flex  flex-wrap items-center justify-center gap-x-[10px] lg:w-[560px] xl:w-[660px]">
                {optionModalData2.map((data) => (
                  <Optionmodal2
                    isImageShow={data.id < 5.5 && data.id !== 6}
                    key={data.id}
                    buttonText={data.buttonText}
                    label={data.label}
                    imageSrc={data.imageSrc}
                    // isSelected={selectedOptions2.has(data.id)}
                    isSelected={
                      data.id === 6
                        ? isOtherSelected2
                        : findus.includes(data.id)
                    }
                    onClick={() => handleOptionClick2(data)}
                  />
                ))}
              </div>
              {isOtherSelected2 && (
                <div className="mt-4 flex justify-start space-x-2 font-outfit text-gray-900 dark:text-white">
                  <input
                    type="text"
                    placeholder="Enter your other skills here..."
                    className="border-Cod_Gray w-full rounded-lg border-[1px]   border-[#000] bg-white p-2 py-3 outline-none dark:border-white dark:bg-[#000] xs:text-sm lg:text-xl"
                    value={otherText2}
                    onChange={(e) => setOtherText2(e.target.value)}
                  />
                  <button
                    onClick={handleAddButtonClick2}
                    className="from-tosca to-contessa hover:to-CodGray rounded-lg border   border-[#000] bg-gradient-to-t font-outfit font-semibold text-gray-900 hover:from-gray-950 dark:border-white dark:text-white xs:px-3 lg:px-5"
                  >
                    {Strings.ADD}
                  </button>
                </div>
              )}
              <div className="flex justify-center">
                <button
                  onClick={() => {
                    handleSubmit();
                    if (!(findus.length === 0 && !isOtherSelected2)) {
                      setActiveModalPage(activeModalPage + 1);
                    }
                  }}
                  disabled={findus.length === 0 && !isOtherSelected2}
                  className={`font-outfit from-tosca to-contessa hover:from-[#8D3F42] hover:to-[#BC7666] hover:border-none rounded-full  border-2 bg-gradient-to-t px-5 py-2 text-lg font-semibold  border:black border:red-600 dark:text-white ${findus.length === 0 && !isOtherSelected2 ? "opacity-50" : ""
                    }`}
                // disabled={findus.length > 0 }
                >
                  {Strings.SUBMIT}
                </button>
              </div>

              <div className="flex justify-end space-x-[1px]">
                <button
                  className="flex items-center justify-center rounded-l-full bg-gradient-to-t from-[#8D3F42] to-[#BC7666] px-3 py-2 text-gray-900 hover:from-gray-600 hover:to-gray-600 dark:text-white"
                  onClick={() => {
                    if (activeModalPage > 1) {
                      setActiveModalPage(activeModalPage - 1);
                    }
                  }}
                >
                  <LeftOutlined rev={undefined} />
                </button>
                <button
                  disabled
                  onClick={() => {
                    if (activeModalPage < 10) {
                      setActiveModalPage(activeModalPage + 1);
                    }
                  }}
                  className="flex items-center justify-center rounded-r-full bg-gradient-to-t from-[#8D3F42] to-[#BC7666] px-3 py-2 text-gray-900 opacity-[50%] hover:from-gray-600 hover:to-gray-600 dark:text-white"
                >
                  <RightOutlined rev={undefined} />
                </button>
              </div>
            </div>
          )}
          {activeModalPage === 10 && (
            <div className="flex justify-center">
              <div className=" space-y-4 text-center">
                <div className="bg-gradient-to-r from-[#8d3f42] to-[#bc7666] bg-clip-text font-outfit font-bold text-transparent xs:text-[30px] xl:text-6xl">
                  {Strings.THANK_YOU_FOR}
                </div>
                <div className="font-outfit font-semibold text-black dark:text-white xs:text-[25px] xl:text-3xl">
                  {Strings.THE_FORM}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default formhireengineer;
