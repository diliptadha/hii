import "react-datepicker/dist/react-datepicker.css";

import {
  ArrowLeftOutlined,
  CalendarOutlined,
  CloseOutlined,
  CopyOutlined,
  DeleteOutlined,
  DownOutlined,
  DownloadOutlined,
  EditTwoTone,
  ExclamationCircleOutlined,
  FilterTwoTone,
  LeftOutlined,
  LinkOutlined,
  MailOutlined,
  MenuOutlined,
  PlusCircleOutlined,
  RetweetOutlined,
  RightOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import Customizecontent, {
  toggleModal,
} from "@/components/Layouts/Customizecontent";
import { Fragment, useEffect, useRef, useState } from "react";
import { Images, Strings } from "@/constants";
import Managetests, { toggleModal1 } from "@/components/Layouts/Managetests";
import type { ModalInterface, ModalOptions } from "flowbite";
import Quickdamo, { toggleModal2 } from "@/components/Layouts/Quickdamo";
import { Radio, RadioChangeEvent } from "antd";
import Upgradeplane, {
  UpgradeplaneProps,
} from "@/components/Layouts/Upgradeplane";
import dayjs, { Dayjs } from "dayjs";

import { Checkbox } from "antd";
import type { CheckboxProps } from "antd";
import DatePicker from "react-datepicker";
import Image from "next/image";
import Loader from "@/components/Layouts/Loader";
import { Modal } from "flowbite";
import React from "react";
import ReactPaginate from "react-paginate";
import type { SizeType } from "antd/es/config-provider/SizeContext";
import { Space } from "antd";
import { Switch } from "antd";
import { Tab } from "@headlessui/react";
import { Tooltip } from "antd";
import jsPDF from "jspdf";
import moment from "moment";

interface TableRowData {
  name: string;
  test: string;
  dateTaken: string;
  mainTechStacks: string;
  softSkills: string;
  proctoringResult: string;
  title: string;
  location: string;
  teston: string;
}

const connectedRows = {
  name: "Connected Name",
  test: "Connected Test",
  dateTaken: "Connected Date",
  mainTechStacks: "Connected Main Tech Stacks",
  softSkills: "Connected Soft Skills",
  proctoringResult: "Connected Proctoring Result",
  title: "Connected Title",
  location: "Connected Location",
  teston: "Connected Teston",
};

interface TableData2 {
  name: string;
  test: string;
  dateTaken: string;
  mainTechStacks: string;
  softSkills: string;
  proctoringResult: string;
}
interface Candidate {
  name: string;
  email: string;
  nameError: boolean | undefined;
  emailError: string | undefined;
}

const data: UpgradeplaneProps[] = [
  {
    imageSrc: Images.Earlystage,
    title: "EARLY STAGE",
    price: "149",
    reportsPerMonth: "20 reports/month",
    seats: "Up to 3 seats",
    dedicatedSupport: false,
    customForm: false,
    atsIntegrations: false,
    customFeatures: false,
    buttonText: "Upgrade",
    titleColor: "text-black",
    backgroundColor: " bg-[#f5f4f8]",
    yearly: true,
  },
  {
    imageSrc: Images.Scale,
    title: "SCALE",
    price: "599",
    reportsPerMonth: "100 reports/month",
    seats: "Up to 10 seats",
    dedicatedSupport: true,
    customForm: false,
    atsIntegrations: false,
    customFeatures: false,
    buttonText: "Upgrade",
    titleColor: "text-[#009C20]",
    backgroundColor: "bg-[#EBFCEF]",
    yearly: true,
  },
  {
    imageSrc: Images.Enterprise,
    title: "ENTERPRISE",
    price: "Let's talk",
    reportsPerMonth: "More than 100 reports/month",
    seats: "Unlimited seats",
    dedicatedSupport: true,
    customForm: true,
    atsIntegrations: true,
    customFeatures: true,
    buttonText: "Contact Us",
    titleColor: "text-[#711CA6]",
    backgroundColor: "bg-[#EFDDF8]",
    yearly: false,
  },
];

const gptvetting: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [upgradeplan, setUpgradeplan] = useState(false);
  const [customizecontent, setCustomizecontent] = useState(false);
  const [quickdemo, setQuickdemo] = useState(false);
  const [managesavedtests, setManagesavedtests] = useState(false);
  const [managetests, setManagetests] = useState(false);
  const [filter, setFilter] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTerm1, setSearchTerm1] = useState("");
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number>(1);
  const [defineSkills, setDefineSkills] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);
  const [isChecked, setChecked] = useState(false);
  const reportRef = useRef<HTMLParagraphElement>(null);
  const [skills, setSkills] = useState([{ skill: "", level: "" }]);
  const [candidates, setCandidates] = useState<Candidate[]>([
    { name: "", email: "", nameError: undefined, emailError: undefined },
  ]);
  const [selectedRowData, setSelectedRowData] = useState<TableRowData | null>(
    null
  );
  const [archivedData, setArchivedData] = useState<any[]>([]);
  // const [tableData2, setTableData2] = useState<TableRowData[]>([]);
  const [popoverIndex, setPopoverIndex] = useState<number | null>(null);
  const [popoverPosition, setPopoverPosition] = useState({ top: 0, left: 0 });
  const [copied, setCopied] = useState(false);
  const testLink = "http://localhost:3000/apps/technical-vetting";
  const [yearly, setYearly] = React.useState(false);
  const [size, setSize] = useState<SizeType>("middle");
  const [popoverOpen, setPopoverOpen] = useState(false);

  const [connectedRows, setConnectedRows] = useState<number[]>([]);
  const [TableData, setTableData] = useState([
    {
      name: "Mark Thomas",
      test: "Self defined skills",
      dateTaken: "Nov 06, 2026",
      mainTechStacks: `Web framework angular(junior)\njavascript(junior)\nReact(mid-level)`,
      softSkills: "Average",
      proctoringResult: "N/A",
    },
    {
      name: "Mihir Mistry",
      test: "Self defined skills",
      dateTaken: "Jan 01, 2023",
      mainTechStacks:
        "Web framework angular(junior)\njavascript(junior)\nReact(mid-level)",
      softSkills: "Average",
      proctoringResult: "N/A",
    },
    {
      name: "Nirdosh Patil",
      test: "Self defined skills",
      dateTaken: "Des 02, 2025",
      mainTechStacks: `Web framework angular(senior)\njavascript(junior)\nReact(mid-level)`,
      softSkills: "Average",
      proctoringResult: "N/A",
    },

    {
      name: "Sagar Panchal",
      test: "Self defined skills",
      dateTaken: "Nov 03, 2026",
      mainTechStacks: `Web framework angular(junior)\njavascript(junior)\nReact(mid-level)`,
      softSkills: "Average",
      proctoringResult: "N/A",
    },
    {
      name: "Pavan dubey",
      test: "Self defined skills",
      dateTaken: "Mar 06, 2024",
      mainTechStacks: `Web framework angular(junior)\njavascript(junior)\nReact(mid-level)`,
      softSkills: "Average",
      proctoringResult: "N/A",
    },
    {
      name: "Raj trivedi",
      test: "Self defined skills",
      dateTaken: "Aug 08, 2025",
      mainTechStacks: `Web framework angular(junior)\njavascript(junior)\nReact(mid-level)`,
      softSkills: "Average",
      proctoringResult: "N/A",
    },
    {
      name: "Parth pandya",
      test: "Self defined skills",
      dateTaken: "Nov 07, 2027",
      mainTechStacks: `Web framework angular(junior)\njavascript(junior)\nReact(mid-level)`,
      softSkills: "Average",
      proctoringResult: "N/A",
    },
  ]);

  const [currentPage, setCurrentPage] = useState(0);
  const perPage = 5;
  const pageCount = Math.ceil(TableData.length / perPage);
  const [svgVisibleArray, setSvgVisibleArray] = useState(
    Array(TableData.length).fill(false)
  );
  const [popoverVisibleArray, setPopoverVisibleArray] = useState(
    Array(TableData.length).fill(false)
  );
  const totalRecords = TableData.length;

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  const currentData = TableData.slice(
    currentPage * perPage,
    (currentPage + 1) * perPage
  );
  const filteredConnectedRows = connectedRows.filter((connectedIndex) => {
    const connectedRow = TableData[connectedIndex];
    return (
      connectedRow &&
      connectedRow.name.toLowerCase().includes(searchTerm1.toLowerCase())
    );
  });
  const handleRemoveAndArchive = () => {
    if (popoverIndex !== null) {
      const removedRow = TableData[popoverIndex];

      const newSvgVisibleArray = [...svgVisibleArray];
      newSvgVisibleArray[popoverIndex] = false;
      setSvgVisibleArray(newSvgVisibleArray);

      setConnectedRows((prevConnectedRows) =>
        prevConnectedRows.filter((i) => i !== popoverIndex)
      );

      setTableData((prevTableData) =>
        prevTableData.filter((_, i) => i !== popoverIndex)
      );
      setArchivedData([...archivedData, removedRow]);

      setPopoverIndex(null);
      setOpen(false);
    }
  };

  const customDateRender = (current: Dayjs) => {
    const isToday = current.isSame(new Date(), "day");
    const customClassName = isToday ? "custom-today-class" : "";

    return (
      <td
        className={` ant-picker-cell ant-picker-cell-in-view text-center ${customClassName}`}
      >
        <div className="ant-picker-cell-inner">{current.date()}</div>
      </td>
    );
  };
  const onChange1 = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };
  const onChange: CheckboxProps["onChange"] = (e) => {
    setChecked(e.target.checked);
  };
  const onIconClick = () => {
    setChecked(false);
  };
  const handleButtonClick = () => {
    toggleModal(customizecontent, setCustomizecontent);
  };
  const handleButtonClick1 = () => {
    toggleModal1(managesavedtests, setManagesavedtests);
  };
  const handleButtonClick2 = () => {
    toggleModal2(quickdemo, setQuickdemo);
  };
  const handleTogglePopover = () => {
    setPopoverOpen(!popoverOpen);
  };
  const handleSizeChange = (e: RadioChangeEvent) => {
    setSize(e.target.value);
  };
  const checkYearly = () => {
    setYearly((prevYearly) => !prevYearly);
  };
  const handlePopoverClick = (event: { stopPropagation: () => void }) => {
    event.stopPropagation();
  };
  const handleDotsClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    index: number
  ) => {
    const targetElement = event.target as HTMLElement;
    const rect = targetElement.getBoundingClientRect();
    setPopoverPosition({
      top: rect.bottom + window.scrollY,
      left: rect.left + window.scrollX - 100,
    });
    const newPopoverVisibleArray = [...popoverVisibleArray];
    newPopoverVisibleArray[index] = !newPopoverVisibleArray[index];
    setPopoverVisibleArray(newPopoverVisibleArray);
  };
  const handleMarkAsContected = (index: number) => {
    const newSvgVisibleArray = [...svgVisibleArray];
    newSvgVisibleArray[index] = true;
    setSvgVisibleArray(newSvgVisibleArray);

    setConnectedRows((prevConnectedRows) => {
      const newConnectedRows = [...prevConnectedRows, index];
      console.log("Connected Rows:", newConnectedRows);
      return newConnectedRows;
    });
  };

  const getSkillLevelColor = (techStacks: string | string[]) => {
    if (techStacks.includes("(junior)")) {
      return { color: "gray" };
    } else if (techStacks.includes("(senior)")) {
      return { color: "#008000" };
    } else if (techStacks.includes("(mid-level)")) {
      return { color: "#FFFF00" };
    } else {
      return {};
    }
  };

  const handleCopyClick = () => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(testLink)
        .then(() => {
          setCopied(true);
        })
        .catch((error) => {
          console.error("Failed to copy text: ", error);
          setCopied(false);
        });
    } else {
      console.error("Clipboard API not supported in this environment.");
    }
  };

  const handleLinkCopyClick = () => {
    handleCopyClick();
  };

  const archiveRow = (connectedRow: TableRowData, index: number) => {
    setArchivedData((prevArchivedData) => [...prevArchivedData, connectedRow]);

    setTableData((prevTableData) =>
      prevTableData.filter((_, i) => i !== index)
    );

    setConnectedRows((prevConnectedRows) =>
      prevConnectedRows.filter((i) => i !== index)
    );

    setSvgVisibleArray((prevSvgVisibleArray) => {
      const newSvgVisibleArray = [...prevSvgVisibleArray];
      newSvgVisibleArray[index] = false;
      return newSvgVisibleArray;
    });
  };

  const handleUndo = (rowData: TableRowData, index: number) => {
    setArchivedData((prevArchivedData) => {
      console.log("Previous Archived Data:", prevArchivedData);
      const updatedArchivedData = prevArchivedData.filter(
        (_, i) => i !== index
      );
      console.log("Updated Archived Data:", updatedArchivedData);
      return updatedArchivedData;
    });

    setTableData((prevTableData) => {
      console.log("Previous Table Data:", prevTableData);
      const updatedTableData = [...prevTableData, rowData];
      console.log("Updated Table Data:", updatedTableData);
      return updatedTableData;
    });
  };

  const tooltipContent = (
    <span className="text-xs">
      This adds 15 mins to the test and will test the candidate on a live coding
      exercise.
    </span>
  );
  const tooltipContent1 = (
    <span className="text-xs">
      Use video-based data and tab movements to generate a trust score and
      prevent cheating. We recommend keeping this on; however, you can turn off
      if there are any privacy concerns.
    </span>
  );
  const tooltipContent2 = (
    <span className="text-xs ">
      Customize the welcome screen and candidate invitation email easily.
    </span>
  );
  const tooltipContent3 = (
    <span className="text-xs">
      We use a large language modal to generate question so feel free to put any
      skill in any format
    </span>
  );
  const tooltipContent4 = (
    <span className="text-xs">
      Candidates who have defined their own skills.
    </span>
  );

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (index: number, email: string) => {
    const updatedCandidates = [...candidates];
    updatedCandidates[index].email = email;

    if (validateEmail(email)) {
      updatedCandidates[index].emailError = undefined;
    } else {
      updatedCandidates[index].emailError =
        "Please enter a valid email address.";
    }
    console.log(
      `Email ${index + 1}: ${email} - Valid: ${validateEmail(email)}`
    );

    setCandidates(updatedCandidates);
  };

  const handleNameChange = (index: number, name: string) => {
    const updatedCandidates = [...candidates];
    updatedCandidates[index].name = name;

    if (name.trim().length < 2) {
      updatedCandidates[index].nameError = true;
    } else {
      updatedCandidates[index].nameError = false;
    }
    console.log(
      `Name ${index + 1}: ${name} - Valid: ${name.trim().length >= 2}`
    );
    setCandidates(updatedCandidates);
  };

  const addCandidate = () => {
    setCandidates([
      ...candidates,
      { name: "", email: "", nameError: undefined, emailError: undefined },
    ]);
  };

  const deleteCandidate = (index: number) => {
    const updatedCandidates = [...candidates];
    updatedCandidates.splice(index, 1);
    setCandidates(updatedCandidates);
  };
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

  const handleDownloadReport = () => {
    const pdf = new jsPDF();
    pdf.text(`Report ID: 007`, 10, 10);
    pdf.text(`Name: ${selectedRowData?.name}`, 10, 20);
    pdf.text(`Email: parth@gmail.in`, 10, 30);
    pdf.text(`Date: ${selectedRowData?.teston}`, 10, 40);
    // pdf.text(`${reportRef.current.innerText}`, 10, 80);

    pdf.save(`${selectedRowData?.name}'s report.pdf`);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleRadioChange = (e: RadioChangeEvent) => {
    const value = e.target.value as number;
    setSelectedOption(value);
    setDefineSkills(value === 2);
  };

  const disableBodyScroll = () => {
    document.body.style.overflow = "hidden";
  };

  const enableBodyScroll = () => {
    document.body.style.overflow = "";
  };

  useEffect(() => {
    return () => {
      enableBodyScroll();
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);
  // useEffect(() => {
  //   if (isModalOpen) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "";
  //   }
  // }, [isModalOpen]);
  // useEffect(() => {
  //   if (upgradeplan) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "";
  //   }
  // }, [upgradeplan]);

  const openModal = () => {
    setIsOpen(!isOpen);
    disableBodyScroll();
  };

  const openModal2 = (index: number) => {
    setPopoverIndex(index);
    setOpen(true);
    disableBodyScroll();
  };
  const openModal3 = () => {
    setUpgradeplan(!upgradeplan);
    disableBodyScroll();
  };

  const openModal7 = () => {
    setFilter(!filter);
    disableBodyScroll();
  };
  const openModal1 = (rowData1: TableData2, index: number) => {
    setSelectedRowData(rowData1 as TableRowData);
    setIsModalOpen(true);
    disableBodyScroll();
  };

  const closeModal1 = () => {
    setIsModalOpen(false);
  };
  const closeModal = () => {
    setManagetests(false);
    setManagesavedtests(false);
  };

  // const initialTableData2: TableData2[] = [
  //   {
  //     name: "Parth Pandya",
  //     test: "Self defined skills",
  //     dateTaken: "Des 02, 2025",
  //     mainTechStacks: `Web framework angular(senior)\njavascript(junior)\nReact(mid-level)`,
  //     softSkills: "Average",
  //     proctoringResult: "N/A",
  //   },
  //   {
  //     name: "Nirdosh Patil",
  //     test: "Self defined skills",
  //     dateTaken: "Des 02, 2025",
  //     mainTechStacks: `Web framework angular(senior)\njavascript(junior)\nReact(mid-level)`,
  //     softSkills: "Average",
  //     proctoringResult: "N/A",
  //   },
  //   {
  //     name: "Sagar Panchal",
  //     test: "Self defined skills",
  //     dateTaken: "Des 02, 2025",
  //     mainTechStacks: `Web framework angular(senior)\njavascript(junior)\nReact(mid-level)`,
  //     softSkills: "Average",
  //     proctoringResult: "N/A",
  //   },
  // ];

  // useEffect(() => {
  //   setTableData2(initialTableData2 as TableRowData[]);
  // }, []);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleMenuItemClick = () => {
    setShowMenu(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  return loading ? (
    <div>
      <Loader />
    </div>
  ) : (
    <div>
      <div className="flex items-center xs:flex-col md:flex-row md:justify-between ">
        <div className="flex items-center space-x-2 xs:mb-4 md:mb-0">
          <h1 className="md:text-xl- font-bold text-black dark:text-white xs:text-2xl xl:text-xl">
            {Strings.GPT_VETTING}
          </h1>
          <p className=" flex items-center justify-center rounded-full bg-[#8d3f42] bg-opacity-[20%] xs:h-6 xs:w-6 xl:h-8 xl:w-8 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="text-[#8d3f42] xs:h-4 xs:w-4 xl:h-6  xl:w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </p>
        </div>
        {/* <div className="flex items-center xs:block md:hidden">
          <button
            onClick={toggleMenu}
            className="xs:text:xs transform cursor-pointer font-semibold text-[#8d3f42] transition-transform hover:scale-105 dark:text-white xl:text-sm"
          >
            <MenuOutlined />
          </button>
        </div>
        {showMenu && (
          <div
            ref={menuRef}
            className="absolute right-0 top-16 z-10  flex h-[160px] w-[220px] items-center justify-center  rounded-md bg-white  py-2 shadow-lg dark:bg-gray-800"
          >
            <div className="space-y-2 text-center">
              <p className="flex ">
                <button
                  onClick={handleButtonClick}
                  className="mr-1 flex transform cursor-pointer items-center text-sm font-normal text-[#8d3f42] transition-transform hover:scale-105 dark:text-white"
                >
                  {Strings.Customize_content}
                </button>

                <Tooltip title={tooltipContent2} placement="bottom">
                  <ExclamationCircleOutlined rev={undefined} />
                </Tooltip>
              </p>

              <Customizecontent
                customizecontent={customizecontent}
                setCustomizecontent={setCustomizecontent}
              />
              <p className="border "></p>
              <button
                onClick={handleButtonClick1}
                className="transform cursor-pointer text-sm font-normal text-[#8d3f42] transition-transform hover:scale-105 dark:text-white"
              >
                {Strings.Manage_saved_tests}
              </button>
              <Managetests
                managesavedtests={managesavedtests}
                setManagesavedtests={setManagesavedtests}
              />
              <p className="border"></p>
              <button
                onClick={handleButtonClick2}
                className="nav-item h-10- w-28- rounded-full- bg-[#8d3f42]- shadow-lg- dark:bg-white- group
             flex transform items-center justify-center transition-transform hover:scale-105"
              >
                <text className="text-sm font-normal text-[#8d3f42] dark:text-white">
                  {Strings.Quick_demo}
                </text>
              </button>
              <Quickdamo quickdemo={quickdemo} setQuickdemo={setQuickdemo} />
              <p className="border"></p>
              <button
                onClick={openModal}
                className="h-10-  w-[150px]- rounded-full- border- border-[#8D3F42]- bg-white- text-[#8D3F42]- hover:bg-[#8D3F42]- dark:border-transparent- dark:bg-[#8D3F42]- dark:text-white- dark:hover:bg-white- dark:hover:text-[#8D3F42]- flex items-center  justify-center text-sm font-normal text-white"
              >
                <text className=" text-[#8d3f42] dark:text-white">
                  {Strings.Inviteacandidate}
                </text>
              </button>
            </div>
          </div>
        )} */}
        <div className="flex items-center  xs:flex-col sm:space-x-1 md:flex-row xl:space-x-2">
          <div className="flex xs:space-x-1 xl:space-x-2">
            {" "}
            <p className="flex">
              <button
                onClick={handleButtonClick}
                className="xs:text:xs mr-1 flex transform cursor-pointer items-center font-semibold text-[#8d3f42] transition-transform hover:scale-105 dark:text-white xl:text-sm"
              >
                {Strings.Customize_content}
              </button>
              <Tooltip title={tooltipContent2} placement="bottom">
                <ExclamationCircleOutlined rev={undefined} />
              </Tooltip>
            </p>
            <Customizecontent
              customizecontent={customizecontent}
              setCustomizecontent={setCustomizecontent}
            />
            {/* <div className="h-4 border-2 border-l border-white-dark"></div>
          <h1 className="transform cursor-pointer text-sm font-semibold text-[#8d3f42] transition-transform hover:scale-105 dark:text-white">
            Manage access
          </h1> */}
            <div className="xs:hidden- md:block- h-4 border-2 border-l border-white-dark"></div>
            <button
              onClick={handleButtonClick1}
              className="xs:text:xs transform cursor-pointer font-semibold text-[#8d3f42] transition-transform hover:scale-105 dark:text-white xl:text-sm"
            >
              {Strings.Manage_saved_tests}
            </button>
          </div>
          <Managetests
            managesavedtests={managesavedtests}
            setManagesavedtests={setManagesavedtests}
          />

          <button
            onClick={handleButtonClick2}
            className="nav-item group flex h-10 transform items-center justify-center rounded-full bg-[#8d3f42] shadow-lg transition-transform
             hover:scale-105 dark:bg-white xs:my-2 xs:w-[300px] sm:w-full md:my-0 md:w-28"
          >
            <Image
              src={Images.quickdamo}
              alt="/"
              height={16}
              width={16}
              className="mr-1"
            />
            <text className="text-sm font-semibold text-white dark:text-black">
              {Strings.Quick_demo}
            </text>
          </button>
          <Quickdamo quickdemo={quickdemo} setQuickdemo={setQuickdemo} />
          <button
            onClick={openModal}
            className="flex h-10 transform items-center justify-center rounded-full border border-[#8D3F42] bg-white text-sm font-semibold text-[#8D3F42] transition-transform hover:scale-105 hover:bg-[#8D3F42] hover:text-white dark:border-transparent dark:bg-[#8D3F42] dark:text-white  dark:hover:bg-white dark:hover:text-[#8D3F42] xs:w-[300px] sm:w-full md:w-[150px]"
          >
            <MailOutlined rev={undefined} />

            <text className="ml-1">{Strings.Inviteacandidate}</text>
          </button>
        </div>
        {isOpen && (
          <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center  justify-center bg-black bg-opacity-[80%] backdrop-blur-sm">
            <div className="min-h-auto no-scrollbar max-h-[600px] overflow-y-scroll rounded-2xl bg-white  p-4 xs:w-[310px] md:w-[500px]">
              <div
                className="xs:ml-[250px] md:fixed md:ml-[500px]"
                // className={`fixed  ${
                //   defineSkills
                //     ? "xlg:top-[400px] lg:top-[60px] xl:top-[70px]"
                //     : "xlg:top-[600px] lg:top-[120px] xl:top-[160px]"
                // } xl:right-[500px]`}
              >
                <button
                  className="flex h-8 w-8 items-center justify-center rounded-full border-transparent bg-white text-black opacity-[80%]"
                  onClick={openModal}
                >
                  <CloseOutlined rev={undefined} />
                </button>
              </div>
              <h1 className="text-2xl font-bold text-slate-900">
                {Strings.Inviteacandidate}
              </h1>
              <p className="my-4 font-bold text-slate-500">
                {Strings.Do_you_want}
              </p>
              <div className=" rounded-lg border-2 px-3 py-3  ">
                <Radio.Group
                  className="flex justify-between xs:block xs:space-y-2 md:flex md:space-y-0"
                  name="radiogroup"
                  value={selectedOption}
                  onChange={handleRadioChange}
                >
                  <Radio className="font-semibold" value={1}>
                    {Strings.No_they_can_choose}
                  </Radio>
                  <Radio className="font-semibold" value={2}>
                    {Strings.yes_I_will_define_the_skills}
                  </Radio>
                </Radio.Group>
              </div>
              {defineSkills && (
                <div>
                  <div className="mt-2 flex items-center justify-between">
                    <p className="flex items-center">
                      {Strings.Please_define_the_skills}
                      <Tooltip title={tooltipContent3} placement="right">
                        <ExclamationCircleOutlined
                          rev={undefined}
                          className="ml-2"
                        />
                      </Tooltip>
                    </p>
                    <button className="rounded-full bg-[#8d3f42] bg-opacity-[20%] p-2 text-xs font-bold text-black">
                      {Strings.Save_as_a_new_test}
                    </button>
                  </div>
                  <div className="my-2 rounded-lg border-2 px-3 py-3  ">
                    <Radio.Group
                      className="flex justify-between xs:block xs:space-y-2 md:flex md:space-y-0"
                      name="radiogroup"
                      defaultValue={3}
                    >
                      <Radio className="font-semibold" value={3}>
                        {Strings.Choose_from_existing_tests}
                      </Radio>
                      <Radio className="font-semibold" value={4}>
                        {Strings.Define_new_skill_set}
                      </Radio>
                    </Radio.Group>
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

                      {/* <select className="w-[250px] rounded-lg border-2 text-sm outline-none">
                      <option disabled selected hidden>
                        Level of difficulty
                      </option>
                      <option value="Junior">Junior</option>
                      <option value="Mid Level">Mid Level</option>
                      <option value="Senior">Senior</option>
                    </select> */}

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
                          className="ml-1 text-red-500"
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
              )}
              <p className="my-4 text-sm  font-bold text-black">
                {Strings.Enter_the_name_email}
              </p>
              {candidates.map((candidate, index) => (
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        required
                        placeholder="Name"
                        className="xs:mr-1- rounded-lg border-2 p-3 outline-none xs:w-[130px] md:mr-0 md:w-[200px]"
                        value={candidate.name}
                        onChange={(e) =>
                          handleNameChange(index, e.target.value)
                        }
                      />

                      <input
                        type="email"
                        placeholder="Email address"
                        className="rounded-lg border-2 p-3 outline-none xs:w-[140px] md:w-[230px]"
                        value={candidate.email}
                        onChange={(e) =>
                          handleEmailChange(index, e.target.value)
                        }
                      />
                    </div>
                    <div className="mt-1 flex">
                      <p className="sticky flex justify-start">
                        {candidate.nameError && (
                          <p className="font-bold text-red-500 xs:w-[130px] xs:text-[11px] md:w-[200px] md:text-xs">
                            {Strings.Please_enter_your_name}
                          </p>
                        )}
                      </p>
                      <p className="sticky left-[218px]">
                        {candidate.emailError && (
                          <p className="font-bold text-red-500 xs:w-[140px] xs:text-[11px] md:w-[230px] md:text-xs">
                            {Strings.Enter_a_valid_email_address}
                          </p>
                        )}
                      </p>
                    </div>
                  </div>
                  <div>
                    {index > 0 && (
                      <button
                        onClick={() => deleteCandidate(index)}
                        className=" text-red-500"
                      >
                        <DeleteOutlined />
                      </button>
                    )}
                  </div>
                </div>
              ))}
              <p
                className="mt-3 transform
               cursor-pointer text-sm font-bold text-[#8d3f42] transition-transform hover:scale-[1.01]"
                onClick={addCandidate}
              >
                {Strings.Add_another_candidate}
              </p>
              <div className="my-4 flex max-h-max min-h-14  items-center justify-between rounded-lg border-2  py-3 xs:block xs:px-2 md:flex md:px-14">
                <p className="flex items-center space-x-2">
                  <Switch
                    // defaultChecked
                    onChange={onChange1}
                    className="mr-2 bg-gray-300 font-bold text-black-dark-light xs:my-2 md:my-0"
                  />
                  {Strings.Add_coding_exercise}
                  <Tooltip title={tooltipContent} placement="top">
                    <ExclamationCircleOutlined rev={undefined} />
                  </Tooltip>
                </p>
                <p className="flex items-center space-x-2">
                  <Switch
                    // defaultChecked
                    onChange={onChange1}
                    className=" mr-2 bg-gray-300 font-bold text-black-dark-light xs:my-2 md:my-0"
                  />
                  {Strings.Proctoring}
                  <Tooltip title={tooltipContent1} placement="top">
                    <ExclamationCircleOutlined rev={undefined} />
                  </Tooltip>
                </p>
              </div>
              <div className=" flex justify-between xs:block xs:space-y-2 md:flex md:space-y-0">
                <button
                  onClick={handleCopyClick}
                  className="flex transform items-center rounded-full bg-[#8d3f42] bg-opacity-[20%] p-3 text-sm font-bold text-black transition-transform hover:scale-105"
                >
                  <Image
                    src={Images.Copy}
                    alt="/"
                    height={16}
                    width={18}
                    className="mr-1"
                  />
                  {copied ? "Link Copied!" : "Copy the test link instead"}
                </button>
                <button className="transform rounded-full bg-slate-500 bg-opacity-[20%] p-3 text-sm font-bold text-black transition-transform hover:scale-105">
                  {Strings.Send_invitation}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="flex xs:justify-center md:justify-end">
        <button
          onClick={handleLinkCopyClick}
          className="mx-2 mt-1 flex transform cursor-pointer items-center justify-end text-[#8d3f42] transition-transform hover:scale-105"
        >
          <LinkOutlined rev={undefined} className="mr-1 rotate-45" />
          {copied ? "Link Copied!" : "Copy link instead"}
        </button>
      </div>
      <Tab.Group>
        <Tab.List className="mt-3 flex flex-wrap border-b border-white-light dark:border-[#8D3F42] xs:text-[12px] xs:font-normal md:text-sm md:font-semibold">
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={`${
                  selected
                    ? "rounded-t-md !border-white-light !border-b-white text-black !outline-none dark:!border-[#8D3F42] dark:!border-b-black dark:text-white "
                    : ""
                }
                    -mb-[1px] block border border-transparent dark:hover:border-b-black dark:hover:text-white xs:p-2 xs:py-1 md:p-4 md:py-3`}
              >
                {Strings.Reports}({totalRecords})
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={`${
                  selected
                    ? "rounded-t-md !border-white-light !border-b-white text-black !outline-none dark:!border-[#8D3F42] dark:!border-b-black dark:text-white"
                    : ""
                }
                    -mb-[1px] block border border-transparent dark:hover:border-b-black dark:hover:text-white xs:p-2 xs:py-1 md:p-4 md:py-3`}
              >
                {Strings.Contected}({connectedRows.length})
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={`${
                  selected
                    ? "rounded-t-md !border-white-light !border-b-white text-black !outline-none dark:!border-[#8D3F42] dark:!border-b-black dark:text-white"
                    : ""
                }
                    -mb-[1px] block border border-transparent dark:hover:border-b-black dark:hover:text-white xs:p-2 xs:py-1 md:p-4 md:py-3`}
              >
                {Strings.Archived}({archivedData.length})
              </button>
            )}
          </Tab>
        </Tab.List>
        <Tab.Panels>
          {/* < Hired tab section > */}
          <Tab.Panel>
            <div className="mt-5 w-full rounded-2xl border-2 bg-white shadow-md dark:border-dark-Cod_Gray dark:bg-black-dark-light xs:h-[570px] xs:p-3 md:h-[540px] md:p-5">
              <div className="flex xs:flex-col md:flex-row md:justify-between">
                <div className="flex xs:justify-between md:space-x-2">
                  <div className="relative ">
                    <input
                      type="text"
                      placeholder="Search"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="flex items-center rounded-lg border-2 bg-white p-3 text-black outline-none dark:border-dark-Cod_Gray dark:bg-gray-300 xs:w-[158px] md:w-[180px]"
                      style={{ paddingLeft: "2.5rem" }}
                    />
                    <span className="item-center absolute left-3 top-1/2 flex -translate-y-1/2 transform text-black">
                      <SearchOutlined />
                    </span>
                  </div>
                  <button
                    onClick={openModal7}
                    className="flex w-[85px] items-center rounded-lg border-2 bg-white p-3 text-black dark:border-dark-Cod_Gray dark:bg-gray-300 "
                  >
                    <Image
                      src={Images.Filter}
                      alt="/"
                      height={16}
                      width={16}
                      className="mr-1"
                    />
                    {Strings.Filters}
                  </button>
                </div>
                {filter && (
                  <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center  bg-gray-500 bg-opacity-[40%] backdrop-blur-sm ">
                    <div className="items-center- flex min-h-[250px] max-w-full justify-center rounded-lg bg-white p-5 xs:w-[310px] md:w-[480px] ">
                      <div className="fixed xs:ml-[250px] md:ml-[520px]">
                        <button
                          className="flex h-8 w-8 items-center justify-center rounded-full border-transparent bg-white text-black opacity-[80%]"
                          onClick={openModal7}
                        >
                          <CloseOutlined rev={undefined} />
                        </button>
                      </div>
                      <div>
                        <h1 className="text-xl font-bold text-black">
                          {Strings.Filters}
                        </h1>
                        <p className="mt-4 text-black">
                          {Strings.Filter_by_test}
                        </p>
                        <h1
                          className="mt-2 flex cursor-pointer justify-between rounded-md border p-4 text-base font-medium xs:w-[280px] md:w-[460px]"
                          onClick={handleTogglePopover}
                        >
                          <p className="text-black">{Strings.Select}</p>
                          <DownOutlined />
                        </h1>
                        {popoverOpen && (
                          <div className="max-h-full min-h-[150px] rounded-lg bg-white p-4 shadow-md xs:w-[280px] md:w-[460px]">
                            <div className="relative ">
                              <input
                                type="text"
                                placeholder="Search"
                                className="flex items-center rounded-lg border-2 bg-white p-3 text-black outline-none xs:w-[250px] md:w-[440px]"
                                style={{ paddingLeft: "2.5rem" }}
                              />
                              <span className="item-center absolute left-3 top-1/2 flex -translate-y-1/2 transform text-black">
                                <SearchOutlined />
                              </span>
                            </div>
                            <div
                              className={`mt-2 flex w-[220px] items-center justify-center
                               rounded-full bg-gray-200 text-sm font-normal text-black ${
                                 isChecked ? "visible" : "hidden"
                               }`}
                            >
                              {Strings.Candidate_self_defined_skills}
                              <CloseOutlined
                                rev={undefined}
                                className="ml-1"
                                onClick={onIconClick}
                              />
                            </div>
                            <div className="mt-6 flex items-center rounded-md bg-gray-200 p-2 text-sm font-light text-black">
                              <Checkbox onChange={onChange} checked={isChecked}>
                                {Strings.Candidate_self_defined_skills}
                                <Tooltip
                                  title={tooltipContent4}
                                  placement="top"
                                >
                                  <ExclamationCircleOutlined
                                    rev={undefined}
                                    className="ml-1"
                                  />
                                </Tooltip>
                              </Checkbox>
                            </div>
                          </div>
                        )}
                        <p className="mt-4 text-black">{Strings.Date_taken}</p>

                        {/* <div className="mt-2 text-base font-semibold">
                          <Space direction="vertical" size={12}>
                            <RangePicker
                              size={size}
                              className="custom-datepicker custom-range-picker mt-2 p-4 xs:w-[280px] md:w-[460px]"
                              dateRender={customDateRender}
                              picker="date" // Set the picker to 'date' to only show date picker
                              dropdownClassName="custom-date-picker-dropdown" 
                            />
                          </Space>
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateRangePicker
                              value={value}
                              onChange={(newValue) => setValue(newValue)}
                              className="custom-date-range-picker"
                            />
                            <div className="custom-date-range-picker-labels">
                              <TextField
                                label="Start Date"
                                variant="outlined"
                                value={value[0]}
                                onChange={(e) =>
                                  setValue([
                                    e.target.value as unknown as Date,
                                    value[1],
                                  ])
                                }
                              />
                              <TextField
                                label="End Date"
                                variant="outlined"
                                value={value[1]}
                                onChange={(e) =>
                                  setValue([
                                    value[0],
                                    e.target.value as unknown as Date,
                                  ])
                                }
                              />
                            </div>
                          </LocalizationProvider>
                         

                        </div>  */}
                        <div className="mt-2 flex items-center xs:flex-col md:flex-row">
                          <div className="relative flex items-center">
                            <DatePicker
                              selected={startDate}
                              onChange={(date: Date | null) =>
                                setStartDate(date)
                              }
                              selectsStart
                              startDate={startDate}
                              endDate={endDate}
                              dateFormat="dd/MM/yyyy"
                              placeholderText="Start Date"
                              className=" block w-full rounded-md border border-gray-300 bg-gray-50 p-3 text-base text-gray-900 outline-none "
                            />
                            <CalendarOutlined className="absolute xs:right-2 md:right-7" />
                          </div>
                          <span className="text-gray-500 xs:my-2 md:mx-4">
                            {Strings.to}
                          </span>
                          <div className="relative flex items-center">
                            <DatePicker
                              selected={endDate}
                              onChange={(date: Date | null) => setEndDate(date)}
                              selectsEnd
                              startDate={startDate}
                              endDate={endDate}
                              minDate={startDate}
                              dateFormat="dd/MM/yyyy"
                              placeholderText="End Date"
                              className=" block w-full rounded-md border border-gray-300 bg-gray-50 p-3 text-base text-gray-900 outline-none "
                            />
                            <CalendarOutlined className="absolute xs:right-2 md:right-7" />
                          </div>
                        </div>
                        <div className="mt-4 flex justify-end">
                          <button className="flex w-28 transform items-center justify-center rounded-full border bg-[#8D3F42] p-4 text-base font-semibold text-white transition-transform hover:scale-105">
                            {Strings.Apply}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <button
                  onClick={openModal3}
                  className="flex h-12 transform items-center justify-center rounded-full bg-[#8D3F42] bg-opacity-[10%] text-sm font-bold text-black transition-transform hover:scale-105 dark:bg-[#8D3F42] dark:bg-opacity-[10%] dark:text-white xs:mt-2 xs:w-full md:mt-0 md:w-32"
                >
                  <Image
                    src={Images.Upgradeplane}
                    alt="/"
                    height={16}
                    width={16}
                    className={`mr-1`}
                  />

                  {Strings.Upgrade_plan}
                </button>

                {upgradeplan && (
                  <div className="fixed left-0 top-0 z-50 flex h-full w-full items-end justify-center bg-black bg-opacity-[80%] backdrop-blur-sm">
                    <div className="fixed right-7 top-6">
                      <button
                        className="flex h-8 w-8 items-center justify-center rounded-full border-transparent bg-white text-black opacity-[80%]"
                        onClick={openModal3}
                      >
                        <CloseOutlined rev={undefined} />
                      </button>
                    </div>
                    <div className="items-center- justify-center- flex- no-scrollbar h-[90%] w-[100%] overflow-y-scroll bg-white xs:px-6 md:px-6 lg:px-12 ">
                      <h1 className="mt-7 text-center text-4xl font-bold text-black">
                        {Strings.Upgrade_your_plane}
                      </h1>
                      <div className="my-7 flex justify-center">
                        <div className="flex w-[250px] justify-center rounded-lg border-2 p-4 text-black">
                          <p
                            className={`text-base ${
                              !yearly ? "font-semibold" : ""
                            }`}
                          >
                            {Strings.Monthly}
                          </p>
                          <Switch
                            onChange={checkYearly}
                            className="mx-2 bg-gray-300 font-bold text-black-dark-light"
                          />
                          <p
                            className={`text-base ${
                              yearly ? "font-semibold" : ""
                            }`}
                          >
                            {Strings.Yearly}
                          </p>
                        </div>
                      </div>
                      <div className="m-auto- max-w-screen-2xl-">
                        <div className="flex justify-center xs:flex-col xs:space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0">
                          {data.map((item, index) => (
                            <Upgradeplane
                              key={index}
                              {...item}
                              yearly={yearly}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="relative- min-h-auto no-scrollbar overflow-y-scroll- mt-5 max-h-[410px] overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full  text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right">
                  <thead
                    className={`sticky top-0 bg-[#d7bfbf] text-sm font-light text-black  dark:text-white`}
                  >
                    <tr>
                      <th scope="col" className="px-6 py-3 dark:bg-[#863e41]">
                        {Strings.Name}
                      </th>
                      <th scope="col" className="px-6 py-3 dark:bg-[#863e41]">
                        {Strings.Test}
                      </th>
                      <th scope="col" className="px-6 py-3 dark:bg-[#863e41]">
                        {Strings.Date_taken}
                      </th>
                      <th scope="col" className="px-6 py-3 dark:bg-[#863e41]">
                        {Strings.Main_tech_stacks}
                      </th>
                      <th scope="col" className="px-6 py-3 dark:bg-[#863e41]">
                        {Strings.Soft_skills}
                      </th>
                      <th scope="col" className="px-6 py-3 dark:bg-[#863e41]">
                        {Strings.Proctoring_result}
                      </th>
                      <th scope="col" className="px-6 py-3 dark:bg-[#863e41]">
                        <span className="sr-only">{Strings.Edit}</span>
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {currentData.length === 0 ? (
                      <tr className="text-center">
                        <td colSpan={7} className="py-8">
                          <div className="flex flex-col items-center justify-center">
                            <Image
                              src={Images.NoRecords}
                              alt="/"
                              height={90}
                              width={90}
                            />
                            <span className="text-base font-bold text-black dark:text-white">
                              {Strings.No_records_found}
                            </span>
                          </div>
                        </td>
                      </tr>
                    ) : (
                      currentData
                        .filter((rowData, index) =>
                          rowData.name
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase())
                        )

                        .map((rowData, index) => (
                          <tr
                            key={index}
                            className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-[#1B1B1B] dark:hover:bg-dark-tundora"
                          >
                            <th
                              scope="row"
                              className="flex items-center whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                            >
                              {rowData.name}
                              {svgVisibleArray[
                                currentPage * perPage + index
                              ] && (
                                <Image
                                  src={Images.Contacted}
                                  alt="/"
                                  height={14}
                                  width={14}
                                  className="ml-2"
                                />
                              )}
                            </th>
                            <td className="px-6 py-4">{rowData.test}</td>
                            <td className="px-6 py-4">{rowData.dateTaken}</td>
                            {/* <td
                            className={`whitespace-nowrap ${
                              rowData.mainTechStacks === "(junior)"
                                ? "text-slate-500"
                                : rowData.mainTechStacks === "(senior)"
                                ? "text-[#008000]"
                                : rowData.mainTechStacks === "(mid-level)"
                                ? "text-[#FFFF00]"
                                : "text-white"
                            }`}
                          >
                            {rowData.mainTechStacks}
                          </td> */}
                            <td
                              style={getSkillLevelColor(rowData.mainTechStacks)}
                              className="px-6 py-4 "
                            >
                              {rowData.mainTechStacks}
                            </td>
                            <td className="px-6 py-4">{rowData.softSkills}</td>
                            <td className="px-6 py-4">
                              {rowData.proctoringResult}
                            </td>
                            <td className="px-6 py-4 text-right">
                              <a onClick={(e) => handleDotsClick(e, index)}>
                                <div className="flex h-7 w-7 items-center justify-center rounded-lg border-2 dark:bg-white">
                                  <Image
                                    src={Images.dots}
                                    width={20}
                                    height={20}
                                    alt={""}
                                  />
                                </div>
                              </a>
                              {popoverVisibleArray[index] && (
                                <div
                                  id="popover"
                                  className="absolute z-10 flex h-24 w-[180px]  items-center justify-center  rounded-lg border bg-white p-4 shadow-md"
                                  style={{
                                    top: popoverPosition.top,
                                    left: popoverPosition.left,
                                  }}
                                  onClick={(e) => handlePopoverClick(e)}
                                >
                                  <h1 className="space-y-4 text-base font-semibold">
                                    <p
                                      onClick={() =>
                                        handleMarkAsContected(
                                          currentPage * perPage + index
                                        )
                                      }
                                      className="cursor-pointer text-black"
                                    >
                                      {Strings.Mark_as_contected}
                                    </p>
                                    <p
                                      onClick={() => openModal2(index)}
                                      className="cursor-pointer text-red-500"
                                    >
                                      {Strings.Archive}
                                    </p>
                                  </h1>
                                </div>
                              )}
                            </td>
                          </tr>
                        ))
                    )}
                    {open && (
                      <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-gray-500 bg-opacity-[20%] backdrop-blur-sm">
                        <div className="flex h-[250px] w-[400px] items-center justify-center rounded-xl bg-white">
                          <div className="text-center">
                            <div className="flex justify-center">
                              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-yellow-300 bg-opacity-[20%] text-4xl text-yellow-600">
                                <ExclamationCircleOutlined rev={undefined} />
                              </div>
                            </div>
                            <h1 className="mx-10 my-3 text-lg font-semibold text-black">
                              {Strings.Are_You_sure}
                            </h1>
                            <div className="flex justify-center space-x-4">
                              <button
                                className="flex w-24 items-center justify-center rounded-full border border-[#8D3F42] bg-white p-4 text-base font-semibold text-[#8D3F42] hover:bg-[#8D3F42] hover:text-white "
                                onClick={() => setOpen(false)}
                              >
                                {Strings.Cancel}
                              </button>

                              <button
                                onClick={handleRemoveAndArchive}
                                className="flex w-28 transform items-center justify-center rounded-full border bg-[#8D3F42] p-4 text-base font-semibold text-white transition-transform hover:scale-105"
                              >
                                {Strings.Yes_remove}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {/* Add similar rows for other products */}
                  </tbody>
                </table>
                <ReactPaginate
                  previousLabel={
                    <svg
                      className="h-2.5 w-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 1 1 5l4 4"
                      />
                    </svg>
                  }
                  nextLabel={
                    <svg
                      className="h-2.5 w-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                  }
                  breakLabel={"..."}
                  pageCount={pageCount}
                  onPageChange={handlePageChange}
                  //
                  containerClassName={
                    " bg-gray-200 dark:bg-[#8D3F42] w-auto  rounded-b-lg pagination flex items-center text-sm justify-center"
                  }
                  pageClassName={
                    "  px-[15px] py-[5px] hover:bg-[#8D3F42] dark:hover:bg-white font-bold"
                  }
                  activeClassName={
                    "bg-[#8D3F42] dark:bg-white text-white dark:text-black"
                  }
                  previousClassName={
                    " p-[10px] px-[15px] hover:bg-[#8D3F42] dark:hover:bg-white rounded-l-lg text-lg"
                  }
                  nextClassName={
                    " p-[10px] px-[15px] hover:bg-[#8D3F42] dark:hover:bg-white rounded-r-lg"
                  }
                  previousLinkClassName={
                    currentPage === 0
                      ? "pointer-events-none opacity-50 bg-[#8D3F42] dark:bg-white text-black hover:text-white"
                      : "bg-blue-500 text-black  hover:text-white dark:hover:text-black"
                  }
                  nextLinkClassName={
                    currentPage === pageCount - 1
                      ? "pointer-events-none opacity-50 bg-[#8D3F42] dark:bg-white text-black hover:text-white"
                      : "bg-blue-500 text-black   hover:text-white dark:hover:text-black"
                  }
                  breakClassName={
                    "border p-2 hover:bg-[#8D3F42] dark:hover:bg-white hover:dark:text-black"
                  }
                />
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="mt-5 h-[540px] w-full rounded-2xl border-2 bg-white shadow-md  dark:border-dark-Cod_Gray dark:bg-black-dark-light xs:p-3 md:p-5">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchTerm1}
                  onChange={(e) => setSearchTerm1(e.target.value)}
                  className="flex items-center rounded-lg border-2 bg-white p-3 text-black outline-none dark:border-dark-Cod_Gray dark:bg-gray-300 xs:w-[200px] md:w-[380px] "
                  style={{ paddingLeft: "2.5rem" }}
                />
                <span className="item-center absolute left-3 top-1/2 flex -translate-y-1/2 transform text-black">
                  <SearchOutlined />
                </span>
              </div>
              <div className="relative- min-h-auto no-scrollbar mt-5 max-h-[420px] overflow-x-auto overflow-y-scroll shadow-md sm:rounded-lg">
                <table className="w-full  text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right">
                  <thead className="bg-opacity-[20%]- sticky top-0 bg-[#d7bfbf] text-sm text-gray-700 dark:bg-dark-CodGray dark:text-white">
                    <tr>
                      <th scope="col" className="px-6 py-3 dark:bg-[#863e41]">
                        {Strings.Name}
                      </th>
                      <th scope="col" className="px-6 py-3 dark:bg-[#863e41]">
                        {Strings.Test}
                      </th>
                      <th scope="col" className="px-6 py-3 dark:bg-[#863e41]">
                        {Strings.Date_taken}
                      </th>
                      <th scope="col" className="px-6 py-3 dark:bg-[#863e41]">
                        {Strings.Main_tech_stacks}
                      </th>
                      <th scope="col" className="px-6 py-3 dark:bg-[#863e41]">
                        {Strings.Soft_skills}
                      </th>
                      <th scope="col" className="px-6 py-3 dark:bg-[#863e41]">
                        {Strings.Proctoring_result}
                      </th>
                      <th scope="col" className="px-6 py-3 dark:bg-[#863e41]">
                        <span className="sr-only">{Strings.Edit}</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredConnectedRows.length === 0 ? (
                      <tr className="text-center">
                        <td colSpan={7} className="py-8">
                          <div className="flex flex-col items-center justify-center">
                            <Image
                              src={Images.NoRecords}
                              alt="/"
                              height={90}
                              width={90}
                            />
                            <span className="text-base font-bold text-black dark:text-white">
                              {Strings.No_records_found}
                            </span>
                          </div>
                        </td>
                      </tr>
                    ) : (
                      filteredConnectedRows.map((connectedIndex, index) => {
                        console.log("Rendering Connected Row:", connectedIndex);
                        const connectedRow = TableData[connectedIndex];

                        if (connectedRow) {
                          console.log("Connected Row Data:", connectedRow);
                          return (
                            <tr
                              key={connectedIndex}
                              style={{ cursor: "pointer" }}
                              className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-[#1B1B1B] dark:hover:bg-dark-tundora"
                            >
                              <th
                                onClick={() => openModal1(connectedRow, index)}
                                scope="row"
                                className="flex items-center whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                              >
                                {connectedRow.name}
                                <Image
                                  src={Images.Contacted}
                                  alt="/"
                                  height={14}
                                  width={14}
                                  className="ml-2"
                                />
                              </th>
                              <td
                                onClick={() => openModal1(connectedRow, index)}
                                className="px-6 py-4"
                              >
                                {connectedRow.test}
                              </td>
                              <td
                                onClick={() => openModal1(connectedRow, index)}
                                className="px-6 py-4"
                              >
                                {connectedRow.dateTaken}
                              </td>
                              <td
                                onClick={() => openModal1(connectedRow, index)}
                                className="px-6 py-4"
                              >
                                {connectedRow.mainTechStacks}
                              </td>
                              <td
                                onClick={() => openModal1(connectedRow, index)}
                                className="px-6 py-4"
                              >
                                {connectedRow.softSkills}
                              </td>
                              <td
                                onClick={() => openModal1(connectedRow, index)}
                                className="px-6 py-4"
                              >
                                {connectedRow.proctoringResult}
                              </td>
                              <td className="px-6 py-4 text-right">
                                <a
                                  className=""
                                  onClick={() =>
                                    archiveRow(
                                      {
                                        ...connectedRow,
                                        title: "",
                                        location: "",
                                        teston: "",
                                      },
                                      connectedIndex
                                    )
                                  }
                                >
                                  <div className="z-50 cursor-pointer text-sm font-bold text-red-500">
                                    {Strings.Archive}
                                  </div>
                                </a>
                              </td>
                            </tr>
                          );
                        } else {
                          console.warn(
                            "Connected Row Data not found for index:",
                            connectedIndex
                          );
                          return null;
                        }
                      })
                    )}
                    {isModalOpen && (
                      <div className="fixed left-0 top-0 z-50 flex h-full w-full items-end justify-center  bg-black bg-opacity-[80%] backdrop-blur-sm">
                        <div className="fixed right-7 top-6">
                          <button
                            className="flex h-8 w-8 items-center justify-center rounded-full border-transparent bg-white text-black opacity-[80%]"
                            onClick={closeModal1}
                          >
                            <CloseOutlined rev={undefined} />
                          </button>
                        </div>
                        <div className="items-center- xs:justify-center- md:justify-start- no-scrollbar flex h-[90%] w-[100%] overflow-y-scroll bg-white xs:px-3 md:px-6 lg:px-12 ">
                          <div>
                            <div className="my-10 flex justify-between xs:w-[310px]  md:w-[950px]">
                              <button
                                onClick={handleDownloadReport}
                                className="flex items-center space-x-2 text-base font-bold text-[#8d3f42]"
                              >
                                <DownloadOutlined rev={undefined} />
                                <p>{Strings.Download_report}</p>
                              </button>
                              <div className="flex items-center space-x-2 ">
                                <button className="rounded-full bg-slate-500 bg-opacity-[20%] p-2 text-black hover:shadow-sm">
                                  {Strings.Contected}
                                </button>
                                <h1 className="cursor-pointer text-sm font-bold text-red-500">
                                  {Strings.Archive}
                                </h1>
                              </div>
                            </div>
                            <div className="no-scrollbar- h-[80%]- overflow-y-scroll- rounded-md border-2 p-4 shadow-lg xs:w-[310px] md:w-[950px]">
                              <div className="mt-5 flex justify-between">
                                <div>
                                  <h1 className="text-base font-bold">
                                    Report id: 007
                                  </h1>
                                  <h1 className="text-base font-bold">
                                    name: {selectedRowData?.name}
                                  </h1>
                                  <h1 className="text-base font-bold">
                                    Email: parth@gmail.in
                                  </h1>
                                </div>
                                <h1 className=" text-base font-bold">
                                  Date: {selectedRowData?.dateTaken}
                                </h1>
                              </div>
                              <p className="my-5 border"></p>
                              <h1 className="text-lg font-bold text-slate-500">
                                TECHNICAL RESULTS
                              </h1>
                              <p ref={reportRef} className="space-y-7">
                                <p className="text-lg font-bold text-black">
                                  Node.js
                                </p>
                                <p className="text-base font-bold">
                                  Self rating intermediate
                                </p>
                                <p className="text-base font-bold text-lime-500">
                                  Al assessment:
                                </p>
                                <p>
                                  Roting by Al Date: 02 Aug 2023 The candidate's
                                  responses to the interview questions were
                                  unprofessional and disrespectful. They did not
                                  provide any relevant or meaningful information
                                  about event-driven programming in Node.js or
                                  how to handle memory leaks. Their lack of
                                  interest and knowledge in these areas
                                  indicates a low level of expertise in node.js.
                                  Based on their responses, the candidate can be
                                  rated as Not experienced.
                                </p>
                                <p>Rating by Al: Not experienced</p>
                                <p className="text-lg font-bold text-black">
                                  React.Js
                                </p>
                                <p className="text-base font-bold">
                                  Self rating: beginner
                                </p>
                                <p className="text-base font-bold text-lime-500">
                                  Al assessment:
                                </p>
                                <p>
                                  The candidate has a beginner level of
                                  experience in React.js. They have a basic
                                  understanding of state management using
                                  useState and useEffect hooks. However, their
                                  explanation is not clear and lacks depth. They
                                  mention automating state changes using loops
                                  or timers, which is not the recommended
                                  approach in React.js. The candidate's
                                  explanation of the virtual DOM is also lacking
                                  clarity and does not demonstrate a strong
                                  understanding of the concept. Archive
                                </p>
                              </p>
                              <div className="mt-5 flex justify-end">
                                <p className="text-base font-normal text-black">
                                  Powered by
                                  <span className="ml-1 text-[#8d3f42]">
                                    eRemoteHire
                                  </span>
                                </p>
                              </div>
                            </div>
                            <div className="my-5 h-[100px] w-[950px] bg-white"></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="mt-5">
              <div className="relative- min-h-auto no-scrollbar mt-5 max-h-[420px] overflow-x-auto overflow-y-scroll shadow-md sm:rounded-lg">
                <table className="w-full  text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right">
                  <thead className="bg-opacity-[20%]- sticky top-0 bg-[#d7bfbf] text-sm text-gray-700 dark:bg-dark-CodGray dark:text-white">
                    <tr>
                      <th scope="col" className="px-6 py-3 dark:bg-[#863e41]">
                        {Strings.Name}
                      </th>
                      <th scope="col" className="px-6 py-3 dark:bg-[#863e41]">
                        {Strings.Test}
                      </th>
                      <th scope="col" className="px-6 py-3 dark:bg-[#863e41]">
                        {Strings.Date_taken}
                      </th>
                      <th scope="col" className="px-6 py-3 dark:bg-[#863e41]">
                        {Strings.Main_tech_stacks}
                      </th>
                      <th scope="col" className="px-6 py-3 dark:bg-[#863e41]">
                        {Strings.Soft_skills}
                      </th>
                      <th scope="col" className="px-6 py-3 dark:bg-[#863e41]">
                        {Strings.Proctoring_result}
                      </th>
                      <th scope="col" className="px-6 py-3 dark:bg-[#863e41]">
                        <span className="sr-only">{Strings.Edit}</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {archivedData.length === 0 ? (
                      <tr className="text-center">
                        <td colSpan={7} className="py-8">
                          <div className="flex flex-col items-center justify-center">
                            <Image
                              src={Images.NoRecords}
                              alt="/"
                              height={90}
                              width={90}
                            />
                            <span className="text-base font-bold text-black dark:text-white">
                              {Strings.No_records_found}
                            </span>
                          </div>
                        </td>
                      </tr>
                    ) : (
                      archivedData.map((rowData, index) => (
                        <tr
                          key={index}
                          className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-[#1B1B1B] dark:hover:bg-dark-tundora"
                        >
                          <th
                            scope="row"
                            className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                          >
                            {rowData.name}
                          </th>
                          <td className="px-6 py-4">{rowData.test}</td>
                          <td className="px-6 py-4">{rowData.dateTaken}</td>
                          <td className="px-6 py-4">
                            {rowData.mainTechStacks}
                          </td>
                          <td className="px-6 py-4">{rowData.softSkills}</td>
                          <td className="px-6 py-4">
                            {rowData.proctoringResult}
                          </td>
                          <td className="px-6 py-4 text-right">
                            <a
                              className=""
                              onClick={() => handleUndo(rowData, index)}
                            >
                              <div className="z-50 cursor-pointer text-sm font-bold text-green-500">
                                {Strings.Unarchive}
                              </div>
                            </a>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default gptvetting;
