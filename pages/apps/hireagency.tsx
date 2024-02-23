import { CloseOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";
import React, { useEffect, useState, useRef } from "react";
import { IRootState } from "@/store";
import Image from "next/image";
import { useSelector } from "react-redux";
import { Images, Strings } from "@/constants";
import Link from "next/link";
import axios from "axios";

const formhireagency = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedWorktypes, setSelectedWorktypes] = useState<string[]>([]);
  const [projectBudget, setprojectBudget] = useState<string | null>(null);
  const [hasSelectedOption, setHasSelectedOption] = useState(true);
  const [hasSelectedOption1, setHasSelectedOption1] = useState(true);
  const [activeModalPage, setActiveModalPage] = useState(1);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [message, setMessage] = useState("");
  const maxWords = 501;
  const [showWarning, setShowWarning] = useState(false);
  const [dragActive, setDragActive] = useState<boolean>(false);
  const inputRef = useRef<any>(null);
  const [files, setFiles] = useState<any>([]);
  const themeConfig = useSelector((state: IRootState) => state.themeConfig);

  const generateRandomId = () => {
    // Generate a random ID (example: a 6-digit number)
    const randomId = "RH_0000012"; // Change 1000000 to the desired maximum value
    return randomId.toString(); // Convert to string if needed
  };


  const handleFormSubmit = async () => {

    const userId = generateRandomId();

    const formData = new FormData();
    formData.append("userId", userId);
    formData.append("projectType", selectedWorktypes.join(", "));
    formData.append("projectBudget", projectBudget || '');
    formData.append("projectDescription", message);
    if (files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        formData.append("files", files[i]);
      }
    }

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}clientdashboard/addERemoteLabData`,
        formData,
        {
          headers: {
            Authorization:
              `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

    } catch (error) {
      console.error(error);
    }
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

  const handleWorktypeToggle = (worktype: string) => {
    const isSelected = selectedWorktypes.includes(worktype);

    if (isSelected) {
      // If already selected, remove it
      setSelectedWorktypes(selectedWorktypes.filter((type) => type !== worktype));
    } else {
      // If not selected, add it
      setSelectedWorktypes([...selectedWorktypes, worktype]);
    }
  };

  const isWorktypeSelected = (worktype: string) => selectedWorktypes.includes(worktype);

  const handleTextarea = (e: any) => {
    const inputValue = e.target.value;
    const words = inputValue.trim().split(/\s+/);

    if (words.length <= maxWords) {
      setMessage(inputValue);
      // Hide the warning when text is entered
      setShowWarning(false);
    } else {
      setShowWarning(true);
    }
  };

  const wordsLeft = maxWords - message.trim().split(/\s+/).length;

  const handleChange = (e: any) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      setFiles([e.target.files[0]]);
    }
    setFiles((prevState: any) => [e.target.files[0]]);
  };

  const handleDrop = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      if (files.length === 0) {
        setFiles([e.dataTransfer.files[0]]);
      } else {
        setFiles([e.dataTransfer.files[0]]);
      }
    }
  };

  const handleDragLeave = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const handleDragOver = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragEnter = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const removeFile = (fileName: any, idx: any) => {
    const newArr = [...files];
    newArr.splice(idx, 1);
    setFiles([]);
    setFiles(newArr);
  };

  const openFileExplorer = () => {
    inputRef.current.value = "";
    inputRef.current.click();
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
          <Link href="/apps/hire-new-talent">
            <button className="bg-[#8D3F42] flex h-8 w-8 items-center justify-center rounded-full border-transparent text-white">
              <CloseOutlined rev={undefined} />
            </button>
          </Link>
        </div>

        <div className="  sidebar- no-scrollbar  xs:h-full md:h-[500px] lg:h-[625px] w-[100%] overflow-y-scroll rounded-xl bg-white py-7 dark:bg-[#000] xs:px-3 md:px-6 lg:flex lg:items-center lg:justify-center lg:px-12">

          {activeModalPage === 1 && (
            <div>
              <div className="my-7 space-y-1 ">
                <p className="font-outfit font-bold text-gray-900 dark:text-white xs:text-xl md:text-2xl lg:text-[24px]">
                  {Strings.AGENCY_QUE1}
                </p>
                <p className="font-outfit font-semibold text-[#7a7979] xs:text-lg md:text-xl lg:text-[16px]">
                  {Strings.AGENCY_QUE1A}
                </p>
              </div>

              <div className="flex xs:flex-col xs:space-y-7 xl:flex-row xl:space-y-0 xl:space-x-12 lg:w-[560px] xl:w-[860px]">

                <button
                  className={`flex h-12 items-center rounded-full border-2 border-[#000] px-3 dark:border-white xs:w-60 lg:w-64  ${isWorktypeSelected("website") ? "" : ""
                    }`}
                  onClick={() => handleWorktypeToggle("website")}
                >
                  <div
                    className={`mr-14 pt-1 h-8 w-8 rounded-full border-2 border-[#000] text-[16px] font-semibold dark:border-white ${isWorktypeSelected("website") ? "bg-black dark:bg-white text-white dark:text-black" : "text-black dark:text-white"
                      }`}
                  >
                    {Strings.A}
                  </div>
                  <div className=" mr-7 font-semibold text-gray-900 dark:text-white xs:text-base lg:text-[20px]">
                    {Strings.WEBSITE}
                  </div>
                  {isWorktypeSelected("website") || selectedWorktypes.length === null ? (
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
                  className={`flex h-12 items-center rounded-full border-2 border-[#000] px-3 dark:border-white xs:w-60 lg:w-64 ${isWorktypeSelected("app") ? "" : ""
                    }`}
                  onClick={() => handleWorktypeToggle("app")}
                >
                  <div
                    className={`mr-14 pt-1 h-8 w-8 rounded-full border-2 border-[#000] text-[16px] font-semibold dark:border-white ${isWorktypeSelected("app") ? "bg-black dark:bg-white text-white dark:text-black" : "text-black dark:text-white"
                      }`}
                  >
                    {Strings.B}
                  </div>
                  <div className="mr-7 font-semibold text-gray-900 dark:text-white xs:text-base lg:text-[20px]">
                    {Strings.APP}
                  </div>
                  {isWorktypeSelected("app") || selectedWorktypes.length === null ? (
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
                  className={`flex h-12 items-center rounded-full border-2 border-[#000] px-3 dark:border-white xs:w-60 lg:w-64 ${isWorktypeSelected("ui/ux") ? "" : ""
                    }`}
                  onClick={() => handleWorktypeToggle("ui/ux")}
                >
                  <div
                    className={`mr-14 p-1 h-8 w-8 rounded-full border-2 border-[#000] text-[16px] font-semibold dark:border-white ${isWorktypeSelected("ui/ux") ? "bg-black dark:bg-white text-white dark:text-black" : "text-black dark:text-white"
                      }`}
                  >
                    {Strings.C}
                  </div>
                  <div className="mr-7 font-semibold text-gray-900 dark:text-white xs:text-base lg:text-[20px]">
                    {Strings.UI_UX}
                  </div>
                  {isWorktypeSelected("ui/ux") || selectedWorktypes.length === null ? (
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
                <p className="font-outfit text-red-500 mt-[10px]">
                  {Strings.PLEASE_SELECT_AN_OPTION}
                </p>
              )}
              <div className="mt-[40px] flex justify-end space-x-[1px]  ">
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
                    console.log("selectedWorktypes:", selectedWorktypes.toString());
                    if (activeModalPage < 5 && selectedWorktypes.length > 0) {
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
            <div className="space-y-7">
              <div className="space-y-1">
                <p className="font-outfit font-bold text-black dark:text-white xs:text-xl md:text-2xl lg:text-[24px]">
                  {Strings.AGENCY_QUE2}
                </p>
                <p className=" font-outfit font-semibold text-[#7a7979] xs:text-lg md:text-xl lg:text-[16px]">
                  {Strings.AGENCY_QUE2A}
                </p>
              </div>
              <div className="flex flex-start xs:flex-col xs:space-y-7 xl:space-y-0 xl:flex-row xl:flex-wrap lg:w-[560px] xl:w-[860px] grid xl:grid-cols-3">
                <button
                  className="flex h-12 xl:mb-10 items-center rounded-full border-2 border-[#000] px-3 dark:border-white  xs:w-60 lg:w-66"
                  onClick={() => {
                    if (projectBudget === "") {
                      setprojectBudget(null);
                    } else {
                      setprojectBudget("$15-50k");
                      setHasSelectedOption1(true);
                    }
                  }}
                >
                  <div
                    className={`mr-2 pt-1 h-8 w-8 rounded-full border-2 border-[#000] text-[16px] font-semibold dark:border-white ${projectBudget === "$15-50k" ? "bg-black dark:bg-white" : ""
                      } ${projectBudget === "$15-50k" ? "text-white dark:text-black" : "text-black dark:text-white"
                      }`}
                  >
                    {Strings.A}
                  </div>
                  <div className="m-auto font-semibold text-gray-900 dark:text-white xs:text-base lg:text-[20px]">
                    {Strings.Q2_OP1}
                  </div>
                  {projectBudget === "$15-50k" || setprojectBudget === null ? (
                    <Image src={Images.checkIcon} alt="/" height={20} width={20} className="" />
                  ) : (
                    ""
                  )}
                </button>
                <button
                  className="flex h-12 items-center rounded-full border-2 border-[#000] px-3 dark:border-white  xs:w-60 lg:w-66"
                  onClick={() => {
                    if (projectBudget === "$50k-200k") {
                      setprojectBudget(null);

                    } else {
                      setprojectBudget("$50k-200k");
                      setHasSelectedOption1(true);
                    }
                  }}
                >
                  <div
                    className={`mr-2 pt-1 h-8 w-8 rounded-full border-2 border-[#000] text-[16px] font-semibold dark:border-white ${projectBudget === "$50k-200k"
                      ? " bg-black dark:bg-white"
                      : ""
                      } ${projectBudget === "$50k-200k"
                        ? "text-white dark:text-black"
                        : "text-black dark:text-white"
                      }`}
                  >
                    {Strings.B}
                  </div>
                  <div className="m-auto font-semibold text-gray-900 dark:text-white xs:text-base lg:text-[20px]">
                    {Strings.Q2_OP2}
                  </div>
                  {projectBudget === "$50k-200k" ||
                    setprojectBudget === null ? (
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
                  className="flex h-12 items-center rounded-full border-2 border-[#000] px-3 dark:border-white xs:w-60 lg:w-70"
                  onClick={() => {
                    if (projectBudget === "$200k-500k") {
                      setprojectBudget(null);

                    } else {
                      setprojectBudget("$200k-500k");
                      setHasSelectedOption1(true);
                    }
                  }}
                >
                  <div
                    className={`mr-2 pt-1 h-8 w-8 rounded-full border-2 border-[#000] text-[16px] font-semibold dark:border-white ${projectBudget === "$200k-500k"
                      ? " bg-black dark:bg-white"
                      : ""
                      } ${projectBudget === "$200k-500k"
                        ? "text-white dark:text-black"
                        : "text-black dark:text-white"
                      }`}
                  >
                    {Strings.C}
                  </div>
                  <div className="m-auto font-semibold text-gray-900 dark:text-white xs:text-base lg:text-[20px]">
                    {Strings.Q2_OP3}
                  </div>
                  {projectBudget === "$200k-500k" ||
                    setprojectBudget === null ? (
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
                  className="flex h-12 items-center rounded-full border-2 border-[#000] px-3 mt-[7px]   dark:border-white xs:w-60 lg:w-66"
                  onClick={() => {
                    if (projectBudget === "500k+") {
                      setprojectBudget(null);

                    } else {
                      setprojectBudget("500k+");
                      setHasSelectedOption1(true);
                    }
                  }}
                >
                  <div
                    className={`mr-10 pt-1 h-8 w-8 rounded-full border-2 border-[#000] text-[16px] font-semibold dark:border-white ${projectBudget === "500k+" ? "bg-black dark:bg-white" : ""
                      } ${projectBudget === "500k+" ? "text-white dark:text-black" : "text-black dark:text-white"
                      }`}
                  >
                    D
                  </div>
                  <div className="mr-7 font-semibold text-gray-900 dark:text-white xs:text-base lg:text-[20px]">
                    {Strings.Q2_OP4}
                  </div>
                  {projectBudget === "500k+" || setprojectBudget === null ? (
                    <Image src={Images.checkIcon} alt="/" height={20} width={20} className="" />
                  ) : (
                    ""
                  )}
                </button>
              </div>
              {!hasSelectedOption1 && (
                <p className="font-outfit text-red-500">
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
                    console.log("projectBudget:", projectBudget);
                    if (activeModalPage < 5 && projectBudget !== null) {
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
          {activeModalPage === 3 && (
            <div className="space-y-7">
              <div className="space-y-1">
                <p className="font-outfit lg:text-[24px font-bold text-black dark:text-white xs:text-xl md:text-[24px]">
                  {Strings.AGENCY_QUE3}
                </p>
                <p className="font-outfit font-semibold text-[#7a7979]  xs:text-lg md:text-xl lg:text-[16px]">
                  {Strings.AGENCY_QUE3A}
                </p>
              </div>

              <div>
                <textarea
                  id="message"
                  rows={4}
                  ref={textareaRef}
                  className="border-Cod_Gray focus:ring-Cod_Gray focus:border-Cod_Gray dark:focus:ring-Cod_Gray dark:focus:border-Cod_Gray block rounded-lg border-[1px] border-[#000] bg-white p-2.5 outline-none dark:border-white dark:bg-[#000] dark:text-white dark:placeholder-gray-400 xs:w-full xs:text-base md:w-[620px] lg:text-xl xl:w-[900px]"
                  placeholder="Type your answer here..."
                  name="Massage"
                  value={message}
                  onChange={handleTextarea}
                ></textarea>
                <div className="mt-2 flex justify-between">
                  {showWarning && (
                    <p className=" font-outfit text-red-500">{Strings.FILL_TEXT}
                    </p>
                  )}
                  <p className="font-outfit text-[#BC7666]w-full">{`${wordsLeft} words left`}</p>
                </div>
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
                    console.log("proejctdescription:", message);
                    if (message.trim().length === 0) {
                      setShowWarning(true); // Show warning if no text entered
                      textareaRef.current?.focus();
                    } else {
                      setShowWarning(false); // Hide warning if text entered
                      if (activeModalPage < 5) {
                        setActiveModalPage(activeModalPage + 1);
                      }
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
            <div>
              <div className="">
                <div className="space-y-7 ">
                  <div className="">
                    <p className="font-outfit dark:text-white text-black font-bold xs:text-LG md:text-xl lg:text-2xl">
                      {Strings.AGENCY_QUE4}
                    </p>
                  </div>
                  <div className="flex items-center justify-center  ">
                    <form
                      className={`${dragActive ? "bg-neutral-700" : "bg-tundora"
                        }  p-4 xs:w-[320px] md:w-[600px] xl:w-[900px] rounded-lg  min-h-[15rem] text-center border-2 border-dashed flex flex-col items-center justify-center`}
                      onDragEnter={handleDragEnter}
                      onSubmit={(e) => e.preventDefault()}
                      onDrop={handleDrop}
                      onDragLeave={handleDragLeave}
                      onDragOver={handleDragOver}
                    >
                      {/* this input element allows us to select files for upload. We make it hidden so we can activate it when the user clicks select files */}
                      <input
                        placeholder="fileInput"
                        className="hidden"
                        ref={inputRef}
                        type="file"
                        multiple={false}
                        onChange={handleChange}
                        accept=".docx,.pdf"
                        id="fileInput"
                      />
                      <p className=" font-outfit dark:text-white text-black">
                        {Strings.DRAG}
                        <span
                          className="font-bold text-contessa cursor-pointer"
                          onClick={openFileExplorer}
                        >
                          <u>{Strings.SELECT}</u>
                        </span>
                        {Strings.UPLOAD}
                      </p>
                      <div className="flex flex-col items-center p-3">
                        {files.map((file: any, idx: any) => (
                          <div
                            key={idx}
                            className="flex flex-row space-x-5 dark:text-white text-black"
                          >
                            <span>{file.name}</span>

                            <span
                              className="text-red-500 font-outfit text-lg cursor-pointer"
                              onClick={() => removeFile(file.name, idx)}
                            >
                              {Strings.REMOVE}
                            </span>
                          </div>
                        ))}
                      </div>
                    </form>
                  </div>
                  <p className="border border-[#8d3f42]"></p>

                  <div className="flex flex-col items-center justify-center h-full">
                    <button
                      onClick={() => {
                        setActiveModalPage(activeModalPage + 1);
                        handleFormSubmit();
                      }}

                      className={`font-outfit from-tosca to-contessa hover:from-[#8D3F42] hover:to-[#BC7666] hover:border-none rounded-full  border-2 bg-gradient-to-t px-5 py-2 text-lg font-semibold  border:black border:red-600 dark:text-white`}
                    >
                      {Strings.SUBMIT}

                    </button>
                  </div>
                  <div className="flex justify-end space-x-[1px] mt-4">
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
                        if (activeModalPage < 5) {
                          setActiveModalPage(activeModalPage + 1);
                        }
                      }}
                      className="flex  rounded-r-full bg-gradient-to-t from-[#8D3F42] to-[#BC7666] px-3 py-2 text-gray-900 opacity-[50%] hover:from-gray-600 hover:to-gray-600 dark:text-white"
                    >
                      <RightOutlined rev={undefined} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeModalPage === 5 && (
            <div className="flex justify-center">
              <div className=" space-y-4 text-center">
                <div className="font-outfit bg-gradient-to-r from-[#8d3f42] to-[#bc7666] bg-clip-text font-bold text-transparent xs:text-[30px] xl:text-6xl">
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

export default formhireagency;
// function setNameError(arg0: boolean) {
//   throw new Error("Function not implemented.");
// }

