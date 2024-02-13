import {
  ArrowLeftOutlined,
  CloseOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { Switch, Tooltip } from "antd";

import { Strings } from "@/constants";

const onChange = (checked: boolean) => {
  console.log(`switch to ${checked}`);
};
export const toggleModal1 = (
  managesavedtests: boolean,
  setManagesavedtests: {
    (value: React.SetStateAction<boolean>): void;
    (arg0: boolean): void;
  }
) => {
  setManagesavedtests(!managesavedtests);
};
const Managetests = ({
  managesavedtests,
  setManagesavedtests,
}: {
  managesavedtests: boolean;
  setManagesavedtests: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  // const [managesavedtests, setManagesavedtests] = useState(false);
  const [managetests, setManagetests] = useState(false);
  const [skills, setSkills] = useState([{ skill: "", level: "" }]);

  const tooltipContent = <span className="text-xs">{Strings.tooltip}</span>;
  const tooltipContent1 = <span className="text-xs">{Strings.tooltip1}</span>;
  const addSkill = () => {
    if (skills.length < 5) {
      setSkills([...skills, { skill: "", level: "" }]);
    }
  };
  const deleteSkill = (index: number) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    setSkills(updatedSkills);
  };

  const handleSkillChange = (index: number, value: string) => {
    const updatedSkills = [...skills];
    updatedSkills[index].skill = value;
    setSkills(updatedSkills);
  };

  const handleLevelChange = (index: number, value: string) => {
    const updatedSkills = [...skills];
    updatedSkills[index].level = value;
    setSkills(updatedSkills);
  };
  useEffect(() => {
    if (managetests) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [managetests]);

  useEffect(() => {
    if (managesavedtests) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [managesavedtests]);

  const openModal5 = () => {
    setManagesavedtests(!managesavedtests);
  };
  const openModal6 = () => {
    setManagetests(!managetests);
  };
  const closeModal = () => {
    setManagetests(false);
    setManagesavedtests(false);
  };
  const repeatCount = 4;
  return (
    <div>
      {managesavedtests && (
        <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center  bg-gray-500 bg-opacity-[20%] backdrop-blur-sm ">
          <div className="items-center- justify-center- flex- h-[300px] rounded-lg bg-white p-5 xs:w-[310px] md:w-[500px] ">
            <div className="fixed xs:ml-[250px] md:ml-[520px]">
              <button
                className="flex h-8 w-8 items-center justify-center rounded-full border-transparent bg-white text-black opacity-[80%]"
                onClick={openModal5}
              >
                <CloseOutlined rev={undefined} />
              </button>
            </div>
            <h1 className="text-xl font-bold text-black">
              {Strings.Manage_tests}
            </h1>
            <div className="flex justify-center text-center">
              <p className="my-4 h-[100px] w-[110px] space-y-3 rounded-lg bg-[#8d3f42] bg-opacity-[20%] px-2 py-5">
                {[...Array(repeatCount)].map((_, index) => (
                  <p
                    key={index}
                    className="rounded-full border-[3px] border-[#8d3f42] border-opacity-[40%]"
                  ></p>
                ))}
              </p>
            </div>
            <div className="text-center">
              <p className="mb-4 text-lg font-semibold text-black">
                {Strings.Nothing_found}
              </p>
              <button
                onClick={openModal6}
                className="xs:w-[270px]- md:w-[450px]- w-full transform rounded-full bg-[#8d3f42] bg-opacity-[20%] p-3 text-base font-semibold text-[#8d3f42] transition-transform hover:scale-105"
              >
                {Strings.Add}
              </button>
            </div>
          </div>
        </div>
      )}
      {managetests && (
        <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center  bg-gray-500 bg-opacity-[20%] backdrop-blur-sm">
          <div className="min-h-auto no-scrollbar max-h-[600px] overflow-y-scroll rounded-2xl bg-white  p-4 xs:w-[310px] md:w-[500px]">
            <div className="fixed ml-[250px] md:ml-[500px]">
              <button
                className="flex h-8 w-8 items-center justify-center rounded-full border-transparent bg-white text-black opacity-[80%]"
                onClick={closeModal}
              >
                <CloseOutlined rev={undefined} />
              </button>
            </div>
            <button
              onClick={openModal6}
              className="transform text-lg font-bold transition-transform hover:scale-105"
            >
              <ArrowLeftOutlined rev={undefined} />
            </button>
            <h1 className="text-xl font-bold text-black">
              {Strings.Add_new_test}
            </h1>

            <h1 className="my-2 text-base font-normal text-black">
              {Strings.Name_the_test}
            </h1>
            <input
              placeholder={"Test name"}
              className="w-full rounded-lg border-2 p-3 text-black outline-none"
            />
            <div>
              <div className="justify-between- mt-2 flex items-center">
                <p className="flex items-center">
                  {Strings.Please_define_the_skills}
                </p>
              </div>

              {skills.map((skill, index) => (
                <div key={index} className="mt-2 flex justify-between">
                  <input
                    value={skill.skill}
                    onChange={(e) => {
                      handleSkillChange(index, e.target.value);
                      console.log(`Skill ${index + 1}: ${e.target.value}`);
                    }}
                    placeholder={`Enter skill #${index + 1}`}
                    className="rounded-lg border-2 p-3 outline-none xs:mr-1 xs:w-[140px] md:mr-0 md:w-[200px]"
                  />

                  <select
                    value={skill.level}
                    onChange={(e) => {
                      handleLevelChange(index, e.target.value);
                      console.log(`Level ${index + 1}: ${e.target.value}`);
                    }}
                    className={`rounded-lg border-2 px-1 outline-none xs:w-[140px] xs:text-xs md:w-[230px] md:text-sm ${
                      index === 0 ? "mr-[26px]" : ""
                    }`}
                  >
                    <option disabled={!index} value="">
                      {Strings.Level_of_difficulty}
                    </option>
                    <option value="Junior">{Strings.Junior}</option>
                    <option value="Mid Level">{Strings.Mid_Level}</option>
                    <option value="Senior">{Strings.Senior}</option>
                  </select>
                  {index > 0 && (
                    <button
                      onClick={() => deleteSkill(index)}
                      className="text-red-500"
                    >
                      <DeleteOutlined />
                    </button>
                  )}
                </div>
              ))}
              {skills.length < 5 && (
                <p
                  className="mt-2 transform cursor-pointer text-sm font-bold text-[#8d3f42] transition-transform hover:scale-[1.01]"
                  onClick={addSkill}
                >
                  + Add another skill (up to {5 - skills.length} more)
                </p>
              )}
            </div>
            <div className="my-4 flex max-h-max min-h-14 items-center justify-between rounded-lg border-2 xs:block xs:px-2 md:flex  md:px-14">
              <p className="flex items-center space-x-2 ">
                <Switch
                  onChange={onChange}
                  className="mr-2 bg-gray-300 font-bold text-black xs:my-2 md:my-0"
                />
                {Strings.Add_coding_exercise}
                <Tooltip title={tooltipContent} placement="top">
                  <ExclamationCircleOutlined rev={undefined} />
                </Tooltip>
              </p>
              <p className="flex items-center space-x-2">
                <Switch
                  defaultChecked
                  onChange={onChange}
                  className=" mr-2 bg-gray-300 font-bold text-black xs:my-2 md:my-0"
                />
                {Strings.Proctoring}
                <Tooltip title={tooltipContent1} placement="top">
                  <ExclamationCircleOutlined rev={undefined} />
                </Tooltip>
              </p>
            </div>
            <div className="flex justify-center">
              <button className="w-full transform rounded-full bg-[#8d3f42] bg-opacity-[20%] p-3 text-base font-semibold text-[#8d3f42] transition-transform hover:scale-105">
                {Strings.Save}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Managetests;
