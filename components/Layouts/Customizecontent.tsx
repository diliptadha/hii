import "react-quill/dist/quill.snow.css";

import { CloseOutlined, EditTwoTone } from "@ant-design/icons";
import { Images, Strings } from "@/constants";
import Managetests, { toggleModal1 } from "@/components/Layouts/Managetests";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";

import Image from "next/image";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export const toggleModal = (
  customizecontent: boolean,
  setCustomizecontent: {
    (value: React.SetStateAction<boolean>): void;
    (arg0: boolean): void;
  }
) => {
  setCustomizecontent(!customizecontent);
};

const Customizecontent = ({
  customizecontent,
  setCustomizecontent,
}: {
  customizecontent: boolean;
  setCustomizecontent: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [managesavedtests, setManagesavedtests] = useState(false);
  const [managetests, setManagetests] = useState(false);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(
    "Please note that this test is timed & the time will be defined per question, you will \n" +
      "answer each question verbally so make sure you have stable wifi & are in a quiet \n" +
      "place."
  );
  const [isEditing2, setIsEditing2] = useState(false);
  const [savedContent, setSavedContent] = useState<string | null>(null);
  const [editedContent2, setEditedContent2] = useState(
    "Hi {candidate name}\n" +
      "{{company_name}} has invited you to take a quick -15 minute assessment. This is an important part of our interview process and we appreciate you taking the time.\n" +
      "Please note that you will answer each question using voice instead of text. This allows for much output, a more casual experience, and a much quicker test.\n" +
      "We appreciate your time and will get back to you after you've completed the assessment."
  );
  const [newContent, setNewContent] = useState(editedContent2);
  const [startassessment, setStartassessment] = useState("Start assessment");
  const [newButtonText, setNewButtonText] = useState("");
  const [emailText, setEmailText] = useState("info@eremotehire.com");
  const [newEmailText, setNewEmailText] = useState("");
  const [linkedinUrl, setLinkedinUrl] = useState(
    "https://www.linkedin.com/company/eremotehire"
  );
  const [newLinkedinUrl, setNewLinkedinUrl] = useState("");
  const [selectedFile1, setSelectedFile1] = useState<string | null>(null);

  const handleFileChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setSelectedFile1(fileUrl);
      setIsEditing(false);
    }
  };
  const formats = [
    "bold",
    "italic",
    "color",
    "header",
    "font",
    "background",
  ];
  const modules = {
    toolbar: [
      ["bold", "italic", "underline"],
      ["blockquote", "code-block"],
      [{ indent: "-1" }, { indent: "+1" }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ color: [] }, { background: [] }],
      [{ font: [] }],
      [{ align: [] }],
      ["clean"],
    ],
  };
  const handleEditClick = () => {
    setIsEditing(true);
  };
  const handleEditClick2 = () => {
    setIsEditing2(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };
  const handleSaveClick2 = () => {
    setIsEditing2(false);
    setStartassessment(newButtonText || "Start assessment");
    setNewButtonText("");
    setEmailText(newEmailText || "info@eremotehire.com");
    setNewEmailText("");
    setEditedContent2(newContent);
    setLinkedinUrl(newLinkedinUrl || "https://www.linkedin.com/henish");
    setNewLinkedinUrl("");
  };

  const handleChange = (value: string) => {
    setEditedContent(value);
  };
  const handleChange2 = (value: string) => {
    setNewContent(value);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      setSelectedFile(URL.createObjectURL(file));
    }
  };

  const handleButtonClick1 = () => {
    toggleModal1(managesavedtests, setManagesavedtests);
  };

  useEffect(() => {
    if (customizecontent) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [customizecontent]);
  const openModal4 = () => {
    setCustomizecontent(!customizecontent);
  };
  const openModal5 = () => {
    setManagesavedtests(!managesavedtests);
  };
  const openModal6 = () => {
    setManagetests(!managetests);
  };

  return (
    <div>
      {customizecontent && (
        <div className="fixed left-0 top-0 z-50 flex h-full w-full items-end justify-center bg-black bg-opacity-[80%] backdrop-blur-sm">
          <div className="fixed right-7 top-6">
            <button
              className="flex h-8 w-8 items-center justify-center rounded-full border-transparent bg-white text-black opacity-[80%]"
              onClick={openModal4}
            >
              <CloseOutlined rev={undefined} />
            </button>
          </div>
          <div className="no-scrollbar flex h-[90%] w-[100%] justify-center overflow-y-scroll bg-gray-100 xs:px-6 md:px-6 lg:px-12">
            <div>
              <div className="mt-10 flex justify-between xs:w-[310px] md:w-[700px]">
                <h1 className="font-bold text-black xs:text-xl md:text-2xl">
                  {Strings.Customize_content}
                </h1>
                <button
                  onClick={handleButtonClick1}
                  className="transform cursor-pointer text-sm font-semibold text-[#8d3f42] transition-transform hover:scale-105"
                >
                  {Strings.Manage_saved_tests}
                </button>
              </div>
              <div className="max-h-auto my-5 min-h-[140px] rounded-xl bg-white p-5 text-xl font-bold text-black xs:w-[310px] md:w-[700px]">
                {Strings.Your_logo}
                <div className="flex">
                  <div className="max-h-auto my-4 flex min-h-[25px] w-[240px] items-center justify-center rounded-lg border-2 border-black p-2 text-lg font-semibold">
                    {selectedFile ? (
                      <>
                        <div className="flex items-center justify-center">
                          <img
                            src={selectedFile}
                            alt="Company logo"
                            className="mr-4 h-24 w-24 rounded-lg"
                          />
                        </div>
                      </>
                    ) : (
                      // Display default content if no file is selected
                      <>
                        <h1 className="mr-4 rounded-lg bg-[#711CA6] px-4 py-2 text-lg font-semibold text-white">
                          C
                        </h1>
                        <p className="text-black">{Strings.Company_logo}</p>
                      </>
                    )}
                  </div>
                  <label className="flex items-center text-base font-normal text-primary">
                    <EditTwoTone className="mx-2" />
                    {Strings.Edit}
                    <input
                      type="file"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={handleFileChange}
                    />
                  </label>
                </div>
              </div>
              <div className="max-h-max min-h-[460px] rounded-xl bg-white p-5 text-xl font-bold xs:w-[310px] md:w-[700px]">
                <div className="flex items-center text-black xs:block md:flex md:justify-between">
                  <div>
                    {Strings.Welcome_screen}
                    <p className="my-2 text-base font-normal text-black">
                      {Strings.This_is_the}
                    </p>
                  </div>
                  <button
                    className="flex items-center text-base font-normal text-primary xs:mb-2 md:mb-0"
                    onClick={handleEditClick}
                  >
                    <EditTwoTone className="mr-2" /> {Strings.Edit_content}
                  </button>
                </div>

                <div className="flex max-h-full min-h-[350px] items-center justify-center rounded-lg border-2 border-black px-2 ">
                  <div>
                    <div className="flex justify-center">
                      <div className="my-4 flex w-[220px] items-center justify-center rounded-lg text-lg font-semibold">
                        {selectedFile ? (
                          <>
                            <div className="flex items-center justify-center">
                              <img
                                src={selectedFile}
                                alt="Company logo"
                                className="mr-4 h-5 w-5"
                              />
                            </div>
                          </>
                        ) : (
                          <>
                            <h1 className="mr-4 rounded-lg bg-[#711CA6] px-4 py-2 text-lg font-semibold text-white">
                              C
                            </h1>
                            <p className="text-black">{Strings.Company_logo}</p>
                          </>
                        )}
                      </div>
                    </div>
                    <div>
                      {isEditing ? (
                        <>
                          <ReactQuill
                            value={editedContent}
                            onChange={handleChange}
                            formats={formats}
                            modules={modules}
                          />
                          <button
                            className="text-base font-normal text-primary"
                            onClick={handleSaveClick}
                          >
                            {Strings.Save}
                          </button>
                        </>
                      ) : (
                        <div
                          className="text-center text-base font-medium text-black"
                          dangerouslySetInnerHTML={{
                            __html: savedContent || editedContent,
                          }}
                        />
                      )}
                    </div>
                    {isEditing ? (
                      <div className="my-5 flex justify-center">
                        <label
                          htmlFor="fileInput"
                          className="custom-file-upload cursor-pointer text-center text-primary"
                        >
                          {Strings.Upload_Video}
                          <input
                            id="fileInput"
                            type="file"
                            accept="video/*"
                            onChange={handleFileChange1}
                            style={{ display: "none" }}
                          />
                          <video
                            className=" my-5 h-[140px] w-[250px] rounded-xl"
                            controls
                          >
                            <source
                              src="/images/video.mp4"
                              height={60}
                              width={30}
                              type="video/mp4"
                            />
                            Your browser does not support the video tag.
                          </video>
                        </label>
                      </div>
                    ) : (
                      <div className="flex justify-center">
                        {selectedFile1 ? (
                          <video
                            className="my-5 h-[140px] w-[250px] rounded-xl"
                            controls
                          >
                            <source src={selectedFile1} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        ) : (
                          <div className=" flex justify-center">
                            <video
                              className=" my-5 h-[140px] w-[250px] rounded-xl"
                              controls
                            >
                              <source
                                src="/images/video.mp4"
                                height={60}
                                width={30}
                                type="video/mp4"
                              />
                              Your browser does not support the video tag.
                            </video>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="my-5 max-h-max min-h-[460px] rounded-xl bg-white p-5 xs:w-[310px] md:w-[700px]">
                <div className="xs:block flex items-center md:flex md:justify-between">
                  <div className="text-xl font-bold text-black">
                    {Strings.Invitation_email}
                    <p className="my-2 text-base font-normal text-black">
                      {Strings.This_is_the_preview}
                    </p>
                  </div>
                  <button
                    onClick={handleEditClick2}
                    className="flex items-center text-base font-normal text-primary xs:mb-2 md:mb-0"
                  >
                    <EditTwoTone className="mr-2" /> {Strings.Edit_content}
                  </button>
                </div>
                <div className="max-h-full min-h-[460px] space-y-3 border-4 border-[#8d3f42] border-opacity-[50%] p-4">
                  <div className="my-4 flex w-[220px] items-center rounded-lg text-lg font-semibold">
                    {selectedFile ? (
                      <>
                        <div className="flex items-center justify-center">
                          <img
                            src={selectedFile}
                            alt="Company logo"
                            className="mr-4 h-5 w-5"
                          />
                        </div>
                      </>
                    ) : (
                      <>
                        <h1 className="mr-4 rounded-lg bg-[#711CA6] px-4 py-2 text-lg font-semibold text-white">
                          C
                        </h1>
                        <p className="text-black">{Strings.Company_logo}</p>
                      </>
                    )}
                  </div>
                  {isEditing2 ? (
                    <>
                      <ReactQuill
                        value={newContent}
                        onChange={handleChange2}
                        formats={formats}
                        modules={modules}
                      />
                      <button
                        className="text-base font-normal text-primary"
                        onClick={handleSaveClick2}
                      >
                        {Strings.Save}
                      </button>
                    </>
                  ) : (
                    <div
                      className="text-base font-medium text-black"
                      dangerouslySetInnerHTML={{
                        __html: editedContent2.replace(/\n/g, "<br>"),
                      }}
                    />
                    // <div className="text-base font-medium ">{htmlContent}</div>
                  )}
                  {isEditing2 ? (
                    <div>
                      <p className="text-black">{Strings.CTA}</p>
                      <input
                        type="text"
                        value={newButtonText}
                        onChange={(e) => setNewButtonText(e.target.value)}
                        placeholder="Enter new text"
                        className="mx-2 my-2 w-full rounded-md border-2 p-3 text-black outline-none"
                      />
                    </div>
                  ) : (
                    <button className="flex w-[160px] justify-center rounded-full bg-[#8d3f42] bg-opacity-[20%] p-2 text-sm font-medium text-[#8d3f42]">
                      {startassessment}
                    </button>
                  )}
                  <p className="text-black">
                    {Strings.Best_wishes}
                    <br />
                    <span className="font-bold">{Strings.test_team}</span>
                  </p>
                  <p className="border"></p>
                  <div className="flex items-center justify-between">
                    <h1 className="space-y-1 text-black">
                      {isEditing2 ? (
                        <div>
                          <p>{Strings.if_you_experience}</p>
                          <p>
                            {Strings.reply_to_this_email}
                            <span className="text-[#8d3f42]">
                              <input
                                type="text"
                                value={newEmailText}
                                onChange={(e) =>
                                  setNewEmailText(e.target.value)
                                }
                                placeholder="Enter new email"
                                className="mx-2 rounded-md border-2 p-2 outline-none"
                              />
                            </span>
                          </p>
                        </div>
                      ) : (
                        <p>
                          {Strings.if_you_experience}
                          <br />
                          {Strings.reply_to_this_email}
                          <span className="text-[#8d3f42]">{emailText}</span>
                        </p>
                      )}
                    </h1>
                    {isEditing2 ? (
                      <div>
                        <input
                          type="text"
                          value={newLinkedinUrl}
                          onChange={(e) => setNewLinkedinUrl(e.target.value)}
                          placeholder="Enter new LinkedIn URL"
                          className="mx-2 mt-5 rounded-md border-2 p-2 outline-none"
                        />
                        {/* <button
                          className="text-base font-normal text-primary"
                          onClick={handleSaveClick2}
                        >
                          Save
                        </button> */}
                      </div>
                    ) : (
                      <a
                        href={linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={Images.Linkedin}
                          alt="/"
                          height={24}
                          width={24}
                        />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="my-5 h-[100px] bg-gray-100 xs:w-[310px] md:w-[700px]"></div>
            </div>
          </div>
        </div>
      )}
      <Managetests
        managesavedtests={managesavedtests}
        setManagesavedtests={setManagesavedtests}
      />
    </div>
  );
};

export default Customizecontent;
