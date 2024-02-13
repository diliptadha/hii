import "react-phone-input-2/lib/style.css";
import "react-phone-input-2/lib/material.css";

import {
  AudioOutlined,
  ClockCircleOutlined,
  CloseOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { Images, Strings } from "@/constants";
import React, { useEffect, useRef, useState } from "react";
import router, { useRouter } from "next/router";

import BlankLayout from "@/components/Layouts/BlankLayout";
import Image from "next/image";
import ModalComponent from "@/components/Layouts/Modal";
import PhoneInput from "react-phone-input-2";

// import { AudioContext } from "audio-context-polyfill";

const generateUniqueId = () => {
  return "_" + Math.random().toString(36).substr(2, 9);
};

const technicalvetting: React.FC = () => {
  const router = useRouter();
  const [showSecondLayout, setShowSecondLayout] = useState(false);
  const [step, setStep] = useState<number>(1);
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneError, setPhoneError] = useState(false);
  const [position, setPosition] = useState("");
  const [positionError, setPositionError] = useState(false);
  const [experience, setExperience] = useState("");
  const [experienceError, setExperienceError] = useState(false);
  const [linkedinURL, setLinkedinURL] = useState("");
  const [isValidURL, setIsValidURL] = useState(true);
  const [dragActive, setDragActive] = useState<boolean>(false);
  const inputRef = useRef<any>(null);
  const [files, setFiles] = useState<any>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  // const [inputLevel, setInputLevel] = useState<number>(0);
  // const [transcript, setTranscript] = useState<string>("");
  const [time, setTime] = useState(120);
  const [codingtime, setCodingTime] = useState(15 * 60);
  // let mediaRecorder: MediaRecorder | null = null;
  const [recording, setRecording] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isPermissionGranted, setIsPermissionGranted] = useState<
    boolean | null
  >(null);
  const [confirmationShown, setConfirmationShown] = useState(false);

  useEffect(() => {
    function handleContextMenu(event: MouseEvent) {
      event.preventDefault();
      alert("Please open this page desktop only");
    }

    function handleDevTools(event: {
      ctrlKey: any;
      shiftKey: any;
      keyCode: number;
      preventDefault: () => void;
    }) {
      if (
        event.ctrlKey &&
        event.shiftKey &&
        (event.keyCode === 73 || event.keyCode === 67)
      ) {
        event.preventDefault();
        alert("Please open this page desktop only");
      }
    }

    window.addEventListener("contextmenu", handleContextMenu);
    window.addEventListener("keydown", handleDevTools);

    return () => {
      window.removeEventListener("contextmenu", handleContextMenu);
      window.removeEventListener("keydown", handleDevTools);
    };
  }, []);

  useEffect(() => {
    const requestMediaPermissions = async () => {
      if (confirmationShown) {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({
            audio: true,
            video: true,
          });
          console.log("Microphone and camera access granted:", stream);
          setIsPermissionGranted(true);
        } catch (error) {
          console.error("Error accessing microphone and camera:", error);
          setIsPermissionGranted(false);
          alert("Microphone and camera access denied or not found.");
        }
      } else {
        setIsPermissionGranted(false);
      }
    };

    requestMediaPermissions();

    return () => {};
  }, [confirmationShown]);

  useEffect(() => {
    if (!confirmationShown) {
      const userConfirmed = window.confirm(
        "Do you want to allow access to your microphone and camera?"
      );
      setConfirmationShown(userConfirmed);
    }
  }, []);
  // useEffect(() => {
  //   const checkWindowOpener = () => {
  //     if (window.opener) {
  //       window.opener.location.reload();
  //       window.close();
  //     }
  //   };
  //   checkWindowOpener();
  //   window.addEventListener("beforeunload", checkWindowOpener);
  //   return () => {
  //     window.removeEventListener("beforeunload", checkWindowOpener);
  //   };
  // }, []);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        const confirmationMessage =
          "Are you sure you want to switch tabs? Your progress may be lost.";
        alert(confirmationMessage);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);
  // useEffect(() => {
  //   const handleVisibilityChange = () => {
  //     if (document.hidden) {
  //       alert("Please focus on this tab. Switching tabs is not allowed.");
  //     }
  //   };

  //   document.addEventListener("visibilitychange", handleVisibilityChange);

  //   return () => {
  //     document.removeEventListener("visibilitychange", handleVisibilityChange);
  //   };
  // }, []);
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      const message =
        "Are you sure you want to leave? Your changes may be lost.";
      event.returnValue = message;
      return message;
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const compileCode = async () => {
    const response = await fetch("http://localhost:3001/compile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code, language, input }),
    });

    const data = await response.json();
    setOutput(data.output);
  };

  useEffect(() => {
    if (step >= 11 && step <= 20) {
      const timerInterval = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime === 1) {
            setTime(120);
            setStep((prevStep) => prevStep + 1);
            // setIsModalVisible(true);
          }
          return prevTime > 0 ? prevTime - 1 : 0;
        });
      }, 1000);
      return () => clearInterval(timerInterval);
    } else if (step === 21) {
      const codingTimerInterval = setInterval(() => {
        setCodingTime((prevTime) => {
          if (prevTime === 1) {
            setStep(step + 1);
            // setIsModalVisible(true);
          }
          return prevTime > 0 ? prevTime - 1 : 0;
        });
      }, 1000);
      return () => clearInterval(codingTimerInterval);
    }
  }, [step]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      const chunks: BlobPart[] | undefined = [];

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunks.push(e.data);
        }
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: "audio/wav" });
        const reader = new FileReader();
        console.log("Recorded audio blob:", blob);
        // You can save the blob or send it to the server
        reader.onloadend = () => {
          const audioDataURL = reader.result as string;
          transcribeAudio(audioDataURL);
          console.log("Recorded Data:", audioDataURL);
        };

        reader.readAsDataURL(blob);
      };

      mediaRecorder.start();
      setRecording(true);
    } catch (error) {
      console.error("Error accessing microphone:", error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setRecording(false);
    }
  };

  const transcribeAudio = async (audioDataURL: string) => {
    try {
      const audioBlob = await fetch(audioDataURL).then((res) => res.blob());
      const audioBuffer = await audioBlob.arrayBuffer();
      const audioContext = new (window.AudioContext || window.AudioContext)();

      const audioBufferSource = audioContext.createBufferSource();

      audioBufferSource.buffer = await audioContext.decodeAudioData(
        audioBuffer
      );

      /// <reference lib="dom" />

      const SpeechRecognition =
        (window as any).SpeechRecognition ||
        (window as any).webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.lang = "en-US";
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.onresult = (event: { results: { transcript: any }[][] }) => {
        const transcription = event.results[0][0].transcript;
        console.log("Transcription:", transcription);
      };

      recognition.onerror = (event: { error: any }) => {
        console.error("Speech recognition error:", event.error);
      };

      audioBufferSource.connect(audioContext.destination);
      audioBufferSource.start();

      recognition.start();
    } catch (error) {
      console.error("Error transcribing audio:", error);
    }
  };

  const handleRecordButtonClick = () => {
    if (!recording) {
      startRecording();
    } else {
      stopRecording();
    }
  };
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const codingminutes = Math.floor(codingtime / 60);
  const codingseconds = codingtime % 60;

  // const startRecording = async () => {
  //   try {
  //     const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  //     mediaRecorder = new MediaRecorder(stream);

  //     mediaRecorder.ondataavailable = async (event) => {
  //       const audioData = event.data;
  //       const audioBuffer = await audioData.arrayBuffer();
  //       const audioArray = new Float32Array(audioBuffer);
  //       const averageAmplitude =
  //         audioArray.reduce((acc, val) => acc + Math.abs(val), 0) /
  //         audioArray.length;
  //       setInputLevel(averageAmplitude);

  //       const recognition = new (window as any).SpeechRecognition();

  //       recognition.onresult = (result: {
  //         results: { transcript: any }[][];
  //       }) => {
  //         const transcript = result.results[0][0].transcript;
  //         setTranscript(transcript);
  //         console.log("Speech Recognition Result:", transcript);
  //       };

  //       recognition.onerror = (error: any) => {
  //         console.error("Speech Recognition Error:", error);
  //       };

  //       recognition.start();
  //       recognition.onend = () => {
  //         recognition.stop();
  //       };
  //     };

  //     mediaRecorder.start();
  //   } catch (error) {
  //     console.error("Error accessing microphone:", error);
  //   }
  // };

  // const stopRecording = () => {
  //   if (mediaRecorder) {
  //     mediaRecorder.stop();
  //   }
  // };

  // useEffect(() => {
  //   return () => {
  //     stopRecording();
  //   };
  // }, []);

  const openModal = () => {
    setIsOpen(!isOpen);
  };
  const openModal1 = () => {
    setOpen(!open);
  };
  const openModal2 = () => {
    openModal1();
    setIsOpen1(!isOpen1);
  };

  const handleNextClick = () => {
    console.log("Name:", name);
    if (name.trim().length < 3) {
      setNameError(true);
    } else {
      setNameError(false);
      setStep(step + 1);
    }
  };

  const handlePhoneChange = (value: string) => {
    setPhoneNumber(value);
    if (value.replace(/\D/g, "").length < 9) {
      setPhoneError(true);
    } else {
      setPhoneError(false);
    }
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);

    if (validateEmail(e.target.value)) {
      setIsEmailValid(true);
      setEmailError("");
    } else {
      setIsEmailValid(false);
      setEmailError("Please enter a valid email address.");
    }
  };
  const isValidLinkedInURL = (url: string) => {
    const linkedInRegex =
      /^(https?:\/\/)?(www\.)?linkedin\.com\/[A-Za-z0-9_-]+\/?$/;
    return linkedInRegex.test(url);
  };

  const handleInputChange = (e: { target: { value: any } }) => {
    const inputValue = e.target.value;
    setLinkedinURL(inputValue);
    setIsValidURL(isValidLinkedInURL(inputValue));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (isValidURL) {
      console.log("Valid LinkedIn URL:", linkedinURL);
    } else {
      console.log("Invalid LinkedIn URL");
    }
  };
  const handleKeyDown = (e: { key?: any; preventDefault: any }) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit(e);
      console.log("hagsdhgfdhwfqd");
    }
  };

  const handleChange = (e: any) => {
    e.preventDefault();
    console.log("File has been added");
    if (e.target.files && e.target.files[0]) {
      console.log(e.target.files);
      setFiles([e.target.files[0]]);
    }
    setFiles((prevState: any) => [e.target.files[0]]);
  };
  const handleSubmitFile = (e: any) => {
    if (files.length === 0) {
      // no file has been submitted
    } else {
      // write submit logic here
    }
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

  const handleContinueClick = () => {
    setStep(step + 1);
    // setShowSecondLayout(true);
  };

  const handleBackToHome = () => {
    setIsModalVisible(false);
    setStep(10);
    setTime(120);
    setCodingTime(15 * 60);
  };

  const handleNextClick1 = () => {
    if (position.trim() === "") {
      setPositionError(true);
    } else {
      setPositionError(false);
      setStep(step + 1);
    }
  };
  const handleNextClick2 = () => {
    if (experience.trim() === "") {
      setExperienceError(true);
    } else {
      setExperienceError(false);
      setStep(step + 1);
    }
  };
  return (
    <>
      {step === 1 && (
        <BlankLayout>
          <div>
            <div className=" flex justify-center">
              <Image
                className=" h-[35px] w-[165px]"
                src={Images.REMOTEHIRELOGODark}
                alt="logo"
                height={50}
                width={50}
              />
            </div>
            <div className="mt-12 w-[360px] text-center">
              <h1 className="text-lg font-medium text-black">
                {Strings.THANK_YOU_FOR_YOUR_INTEREST}
              </h1>
              <p className="text-lg font-medium text-black">
                There are <span className="font-bold">2 steps</span> to this
                application:
              </p>
            </div>
            <div className="my-10 flex justify-center">
              <div className="h-28 w-72 space-y-4 rounded-xl border-2 p-4">
                <h1 className="flex items-center space-x-2">
                  <p className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8d3f42] bg-opacity-[20%] font-bold text-black">
                    1
                  </p>
                  <p className="font-semibold text-black">
                    {Strings.Your_basic_details}
                  </p>
                </h1>
                <h1 className="flex items-center space-x-2">
                  <p className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8d3f42] bg-opacity-[20%] font-bold text-black">
                    2
                  </p>
                  <p className="font-semibold text-black">
                    {Strings.A_technical_test}
                  </p>
                </h1>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                onClick={handleContinueClick}
                className="flex w-32 items-center justify-end rounded-full bg-[#8d3f42] p-2 text-lg text-white  hover:bg-[#161616] "
              >
                {Strings.Continue}
                <div className="ml-2 flex h-8 w-8 items-center justify-center rounded-full border-transparent bg-slate-500 bg-opacity-[20%]">
                  <RightOutlined />
                </div>
              </button>
            </div>
          </div>
        </BlankLayout>
      )}
      {step === 2 && (
        <>
          <BlankLayout>
            <p className="fixed right-7 top-7 text-lg font-bold text-black">
              1/7
            </p>
            <div className="space-y-7  ">
              <div className="">
                <p className="font-bold text-black xs:text-xl md:text-2xl lg:text-4xl">
                  {Strings.Q1}
                </p>
              </div>
              <div className="">
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  className={`rounded-lg border-[2px] p-2 py-5 text-black outline-none xs:w-full xs:text-base md:w-[600px] lg:text-xl xl:w-[900px] xl:text-2xl ${
                    nameError ? "border-red-500" : ""
                  }`}
                  value={name}
                  onChange={(e) => {
                    const inputValue = e.target.value;
                    const isAlphabetic = /^[a-zA-Z\s]*$/.test(inputValue);

                    if (isAlphabetic || inputValue === "") {
                      setName(inputValue);
                      setNameError(false);
                    }
                  }}
                />
              </div>
              {nameError && (
                <p className="font-normal text-red-500">{Strings.Name_Err}</p>
              )}
              <p className="border"></p>
              <div className="flex justify-end">
                <button
                  onClick={handleNextClick}
                  className="hover:gray-950 flex w-28 items-center justify-end rounded-full bg-[#8d3f42] px-2 text-lg text-white hover:bg-[#161616] xs:h-12 xl:h-14"
                >
                  {Strings.Next}
                  <div className="ml-2 flex h-10 w-10 items-center justify-center rounded-full border-transparent bg-slate-500 bg-opacity-[20%]">
                    <RightOutlined />
                  </div>
                </button>
              </div>
            </div>
          </BlankLayout>
        </>
      )}
      {step === 3 && (
        <>
          <BlankLayout>
            <p className="fixed right-7 top-7 text-lg font-bold text-black">
              2/7
            </p>
            <div className="space-y-7">
              <div className="">
                <p className="font-bold text-black xs:text-xl md:text-2xl lg:text-4xl">
                  {Strings.Q2}
                </p>
              </div>
              <div className="">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="rounded-lg border-[2px] p-2 py-5 text-black outline-none xs:w-full xs:text-base md:w-[600px] lg:text-xl xl:w-[900px]"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              {emailError && (
                <p className="text-sm text-red-500">{Strings.Email_err}</p>
              )}
              <p className="border"></p>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => {
                    setStep(step - 1);
                  }}
                  className="flex w-32 items-center justify-between rounded-full bg-[#8d3f42] bg-opacity-[60%] px-2 text-lg text-white hover:bg-[#161616] xs:h-12 xl:h-14"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-transparent bg-slate-500 bg-opacity-[20%]">
                    <LeftOutlined />
                  </div>
                  {Strings.Previous}
                </button>
                <button
                  onClick={() => {
                    console.log("email:", email);
                    if (validateEmail(email)) {
                      setIsEmailValid(true);
                      setStep(step + 1);
                    } else {
                      setIsEmailValid(false);
                      setEmailError("Please enter a valid email address.");
                    }
                  }}
                  disabled={email === "" || !isEmailValid}
                  className={`flex w-28 items-center justify-end rounded-full bg-[#8d3f42] px-2 text-lg text-white xs:h-12 xl:h-14 ${
                    email === "" || !isEmailValid
                      ? "cursor-not-allowed opacity-50"
                      : "hover:bg-gray-950 "
                  }`}
                >
                  {Strings.Next}
                  <div className="ml-2 flex h-10 w-10 items-center justify-center rounded-full border-transparent bg-slate-500 bg-opacity-[20%]">
                    <RightOutlined />
                  </div>
                </button>
              </div>
            </div>
          </BlankLayout>
        </>
      )}
      {step === 4 && (
        <>
          <BlankLayout>
            <p className="fixed right-7 top-7 text-lg font-bold text-black">
              3/7
            </p>
            <div className="space-y-7">
              <div>
                <p className="font-bold text-black xs:text-xl md:text-2xl lg:text-4xl">
                  {Strings.Q3}
                </p>
              </div>
              <div className="text-black">
                <PhoneInput
                  country={"in"}
                  value={phoneNumber}
                  placeholder="Your Phone Number"
                  onChange={handlePhoneChange}
                  inputClass="phoneinput"
                  specialLabel=""
                />
              </div>
              {phoneError && (
                <p className="text-sm text-red-500">{Strings.Phone_err}</p>
              )}
              <p className="border-Tosca border"></p>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => {
                    setStep(step - 1);
                  }}
                  className="flex w-32 items-center justify-between rounded-full bg-[#8d3f42] bg-opacity-[60%] px-2 text-lg text-white hover:bg-[#161616] xs:h-12 xl:h-14 "
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-transparent bg-slate-500 bg-opacity-[20%]">
                    <LeftOutlined />
                  </div>
                  {Strings.Previous}
                </button>
                <button
                  onClick={() => {
                    console.log("phoneNo.:", phoneNumber);
                    if (!phoneError) {
                      setStep(step + 1);
                    }
                  }}
                  disabled={phoneNumber === "" || phoneError}
                  className="hover:gray-950 flex w-28 items-center justify-end rounded-full bg-[#8d3f42] px-2 text-lg text-white hover:bg-[#161616] xs:h-12 xl:h-14"
                >
                  {Strings.Next}
                  <div className="ml-2 flex h-10 w-10 items-center justify-center rounded-full border-transparent bg-slate-500 bg-opacity-[20%]">
                    <RightOutlined />
                  </div>
                </button>
              </div>
            </div>
          </BlankLayout>
        </>
      )}
      {step === 5 && (
        <>
          <BlankLayout>
            <p className="fixed right-7 top-7 text-lg font-bold text-black">
              4/7
            </p>
            <div className="space-y-7  ">
              <div className="">
                <p className="font-bold text-black xs:text-xl md:text-2xl lg:text-4xl">
                  {Strings.Q4}
                </p>
              </div>
              <div className="">
                <input
                  type="text"
                  required
                  placeholder="Enter position (eg. UIUX designer,Frontend developer ect.)"
                  className="rounded-lg border-[2px] p-2 py-5 text-black outline-none xs:w-full xs:text-base md:w-[600px] lg:text-xl xl:w-[900px] xl:text-2xl "
                  value={position}
                  onChange={(e) => {
                    setPosition(e.target.value);
                    setPositionError(false);
                  }}
                />
                {positionError && (
                  <p className="mt-2 text-sm text-red-500">{Strings.Error}</p>
                )}
              </div>
              <p className="border"></p>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => {
                    setStep(step - 1);
                  }}
                  className="flex w-32 items-center justify-between rounded-full bg-[#8d3f42] bg-opacity-[60%] px-2 text-lg text-white hover:bg-[#161616] xs:h-12 xl:h-14 "
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-transparent bg-slate-500 bg-opacity-[20%]">
                    <LeftOutlined />
                  </div>
                  {Strings.Previous}
                </button>
                <button
                  onClick={handleNextClick1}
                  className="hover:gray-950 flex w-28 items-center justify-end rounded-full bg-[#8d3f42] px-2 text-lg text-white hover:bg-[#161616] xs:h-12 xl:h-14"
                >
                  {Strings.Next}
                  <div className="ml-2 flex h-10 w-10 items-center justify-center rounded-full border-transparent bg-slate-500 bg-opacity-[20%]">
                    <RightOutlined />
                  </div>
                </button>
              </div>
            </div>
          </BlankLayout>
        </>
      )}
      {step === 6 && (
        <>
          <BlankLayout>
            <p className="fixed right-7 top-7 text-lg font-bold text-black">
              5/7
            </p>
            <div className="space-y-7  ">
              <div className="">
                <p className="font-bold text-black xs:text-xl md:text-2xl lg:text-4xl">
                  {Strings.Q5}
                </p>
              </div>
              <div className="">
                <input
                  type="text"
                  required
                  placeholder="Number of years"
                  className="rounded-lg border-[2px] p-2 py-5 text-black outline-none xs:w-full xs:text-base md:w-[600px] lg:text-xl xl:w-[900px] xl:text-2xl "
                  value={experience}
                  onChange={(e) => {
                    const inputValue = e.target.value;
                    const isNumeric = /^[0-9]*$/.test(inputValue);

                    if (isNumeric || inputValue === "") {
                      setExperience(inputValue);
                      setExperienceError(false);
                    }
                  }}
                />
                {experienceError && (
                  <p className="mt-2 text-sm text-red-500">{Strings.Error}</p>
                )}
              </div>
              <p className="border"></p>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => {
                    setStep(step - 1);
                  }}
                  className="flex w-32 items-center justify-between rounded-full bg-[#8d3f42] bg-opacity-[60%] px-2 text-lg text-white hover:bg-[#161616] xs:h-12 xl:h-14 "
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-transparent bg-slate-500 bg-opacity-[20%]">
                    <LeftOutlined />
                  </div>
                  {Strings.Previous}
                </button>
                <button
                  onClick={handleNextClick2}
                  className="hover:gray-950 flex w-28 items-center justify-end rounded-full bg-[#8d3f42] px-2 text-lg text-white hover:bg-[#161616] xs:h-12 xl:h-14"
                >
                  {Strings.Next}
                  <div className="ml-2 flex h-10 w-10 items-center justify-center rounded-full border-transparent bg-slate-500 bg-opacity-[20%]">
                    <RightOutlined />
                  </div>
                </button>
              </div>
            </div>
          </BlankLayout>
        </>
      )}
      {step === 7 && (
        <>
          <BlankLayout>
            <p className="fixed right-7 top-7 text-lg font-bold text-black">
              6/7
            </p>
            <div className="space-y-7  ">
              <div className="">
                <p className="font-bold text-black xs:text-xl md:text-2xl lg:text-4xl">
                  {Strings.Q6}
                </p>
              </div>
              <div className="">
                <input
                  type="text"
                  required
                  placeholder="Enter your Linkedin link here"
                  className={` rounded-lg border-[2px] p-2 py-5 text-black outline-none xs:w-full xs:text-base md:w-[600px] lg:text-xl xl:w-[900px] ${
                    isValidURL ? "" : "border-red-500"
                  }`}
                  value={linkedinURL}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                />
              </div>
              {!isValidURL && (
                <p className="mt-2 font-outfit text-sm font-medium text-red-500">
                  {Strings.Q6_Err}
                </p>
              )}
              <p className="border"></p>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => {
                    setStep(step - 1);
                  }}
                  className="flex w-32 items-center justify-between rounded-full bg-[#8d3f42] bg-opacity-[60%] px-2 text-lg text-white hover:bg-[#161616] xs:h-12 xl:h-14 "
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-transparent bg-slate-500 bg-opacity-[20%]">
                    <LeftOutlined />
                  </div>
                  {Strings.Previous}
                </button>
                <button
                  onClick={() => {
                    console.log("Linkedin:", linkedinURL);
                    setStep(step + 1);
                  }}
                  disabled={!isValidURL || linkedinURL === ""}
                  className={`flex w-28 items-center justify-end rounded-full bg-[#8d3f42] px-2 text-lg text-white xs:h-12 xl:h-14 ${
                    linkedinURL === "" || !isValidURL
                      ? "cursor-not-allowed opacity-50"
                      : "hover:bg-gray-950"
                  }`}
                >
                  {Strings.Next}
                  <div className="ml-2 flex h-10 w-10 items-center justify-center rounded-full border-transparent bg-slate-500 bg-opacity-[20%]">
                    <RightOutlined />
                  </div>
                </button>
              </div>
            </div>
          </BlankLayout>
        </>
      )}
      {step === 8 && (
        <>
          <BlankLayout>
            <p className="fixed right-7 top-7 text-lg font-bold text-black">
              7/7
            </p>
            <div className="">
              <div className="space-y-7 ">
                <div className="">
                  <p className="font-bold  text-black xs:text-xl md:text-2xl lg:text-4xl">
                    {Strings.Q7}
                  </p>
                </div>
                {/* <div className="mt-12 h-56 w-full rounded-lg border-2 border-CodGray border-dashed bg-tundora"></div> */}
                <div className="flex items-center justify-center  ">
                  <form
                    className={`${
                      dragActive ? "bg-slate-500 bg-opacity-[20%]" : "bg-white"
                    }  flex min-h-[15rem] flex-col items-center justify-center  rounded-lg border-2 border-dashed p-4 text-center xs:w-[320px] md:w-[600px] xl:w-[900px]`}
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
                    />
                    <p className="font-bold text-black">
                      {Strings.Click_to_upload}
                      <span
                        className="cursor-pointer font-bold text-[#8d3f42]"
                        onClick={openFileExplorer}
                      >
                        <u> {Strings.Select_files}</u>
                      </span>
                      <br />
                      {Strings.PDF_DOCX}
                    </p>
                    <div className="flex flex-col items-center p-3">
                      {files.map((file: any, idx: any) => (
                        <div
                          key={idx}
                          className="flex flex-row items-center space-x-5"
                        >
                          <span>{file.name}</span>
                          <span
                            className="cursor-pointer text-lg text-red-500"
                            onClick={() => removeFile(file.name, idx)}
                          >
                            {Strings.Remove}
                          </span>
                        </div>
                      ))}
                    </div>
                    {/* <button
className="bg-black rounded-lg p-2 mt-3 w-auto"
onClick={handleSubmitFile}
>
<span className="p-2 text-white">Submit</span>
</button> */}
                  </form>
                </div>
                <p className="border"></p>
                <div className="flex justify-end space-x-4">
                  <button
                    onClick={() => {
                      setStep(step - 1);
                    }}
                    className="flex w-32 items-center justify-between rounded-full bg-[#8d3f42] bg-opacity-[60%] px-2 text-lg text-white hover:bg-[#161616] xs:h-12 xl:h-14 "
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border-transparent bg-slate-500 bg-opacity-[20%]">
                      <LeftOutlined />
                    </div>
                    {Strings.Previous}
                  </button>
                  <div className="">
                    <button
                      onClick={() => {
                        setStep(step + 1);
                      }}
                      disabled={files.length === 0}
                      className={`flex h-14  items-center justify-end rounded-full bg-[#8d3f42] px-2 text-lg text-white disabled:opacity-50 xs:h-12 xs:w-28 md:w-[8rem] xl:h-14 ${
                        files.length === 0
                          ? "cursor-not-allowed hover:bg-[#8d3f42]"
                          : "hover:bg-gray-950 "
                      }`}
                    >
                      {Strings.Submit}
                      <div className="ml-2 flex items-center justify-center rounded-full border-transparent bg-slate-500 bg-opacity-[20%] xs:h-8 xs:w-8 md:h-10 md:w-10">
                        <RightOutlined />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </BlankLayout>
        </>
      )}
      {step === 9 && (
        <BlankLayout>
          <div>
            <div className=" flex justify-center">
              <Image
                className=" h-[35px] w-[165px]"
                src={Images.REMOTEHIRELOGODark}
                alt="logo"
                height={50}
                width={50}
              />
            </div>
            <div className="mt-7 w-[650px] text-center">
              <h1 className="text-lg font-medium text-black">
                {Strings.This_test_designed_to_assess}
              </h1>
              <p className="my-5 text-lg font-medium text-black">
                {Strings.Please_note_that}
              </p>
            </div>
            <div className="flex justify-center">
              <button
                onClick={() => {
                  setStep(step + 1);
                }}
                className="flex w-32 items-center justify-end rounded-full bg-[#8d3f42] p-2 text-lg text-white  hover:bg-[#161616] "
              >
                {Strings.Continue}
                <div className="ml-2 flex h-8 w-8 items-center justify-center rounded-full border-transparent bg-slate-500 bg-opacity-[20%]">
                  <RightOutlined />
                </div>
              </button>
            </div>
          </div>
        </BlankLayout>
      )}
      {step === 10 && (
        <>
          <BlankLayout>
            <div>
              <h1 className="text-center text-3xl font-bold text-black">
                {Strings.Pre_defined_skill_set}
              </h1>
              <p className="my-5 w-[630px] text-center font-bold text-black">
                {Strings.Here_are_the_skills}
              </p>
              <div className="space-y-4">
                <h1 className="flex w-[580px] justify-between text-black">
                  <p className="font-bold ">{Strings.Main_skills}</p>
                  <p className="w-[280px] border-transparent font-bold">
                    {Strings.Rate_yourself}
                  </p>
                </h1>
                <div className="flex w-[580px] justify-between text-black">
                  <p className="w-[280px] rounded-md border-2 p-2 outline-none">
                    {Strings.Node_js}
                  </p>
                  <p className="w-[280px] rounded-md border-2 p-2 outline-none">
                    {Strings.Senior}
                  </p>
                </div>
                <div className="flex w-[580px] justify-between text-black">
                  <p className="w-[280px] rounded-md border-2 p-2 outline-none">
                    {Strings.AWS}
                  </p>
                  <p className="w-[280px] rounded-md border-2 p-2 outline-none">
                    {Strings.Mid_level}
                  </p>
                </div>
                <div className="flex w-[580px] justify-between text-black">
                  <p className="w-[280px] rounded-md border-2 p-2 outline-none">
                    {Strings.React_js}
                  </p>
                  <p className="w-[280px] rounded-md border-2 p-2 outline-none">
                    {Strings.Junior}
                  </p>
                </div>
                <div className="flex w-[580px] justify-between text-black">
                  <p className="w-[280px] rounded-md border-2 p-2 outline-none">
                    {Strings.Project_management}
                  </p>
                  <p className="w-[280px] rounded-md border-2 p-2 outline-none">
                    {Strings.Junior}
                  </p>
                </div>
              </div>
              <div className="my-5 flex justify-center">
                <button
                  onClick={openModal}
                  className="flex w-36 items-center justify-end rounded-full bg-[#8d3f42] p-2 text-lg text-white  hover:bg-[#161616] "
                >
                  {Strings.Start_test}
                  <div className="ml-2 flex h-8 w-8 items-center justify-center rounded-full border-transparent bg-slate-500 bg-opacity-[20%]">
                    <RightOutlined />
                  </div>
                </button>
              </div>
              <p className=" text-center font-medium text-slate-500">
                {Strings.Note}
              </p>
            </div>
            {isOpen && (
              <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center  justify-center bg-black bg-opacity-[80%] backdrop-blur-sm">
                <div className="h-[350px] w-[500px]  rounded-2xl bg-white p-4">
                  <div className="fixed ml-[500px]">
                    <button
                      className="flex h-8 w-8 items-center justify-center rounded-full border-transparent bg-white text-black opacity-[80%]"
                      onClick={openModal}
                    >
                      <CloseOutlined rev={undefined} />
                    </button>
                  </div>
                  <h1 className="text-2xl font-bold text-black">
                    {Strings.IMPORTANT_POINTS}
                  </h1>
                  <div className=" mx-7 mt-7 space-y-7">
                    <ul className="list-disc text-base font-semibold text-black">
                      <li>{Strings.Please_note}</li>
                    </ul>

                    <ol className="list-disc text-base font-semibold text-black">
                      <li>{Strings.We_encourage}</li>
                    </ol>

                    <ul className="list-disc text-base font-semibold text-black">
                      <li>{Strings.You_cant}</li>
                    </ul>
                  </div>
                  <div className="my-3 flex justify-end">
                    <button
                      onClick={() => {
                        openModal1();
                        openModal();
                      }}
                      className="flex w-36 items-center justify-center rounded-full bg-[#8d3f42] p-2 text-lg text-white  hover:bg-[#161616] "
                    >
                      Start test now
                    </button>
                  </div>
                </div>
              </div>
            )}
            {open && (
              <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-[80%] backdrop-blur-sm">
                <div className="h-[360px] w-[510px]  rounded-2xl bg-white p-4">
                  <div className="fixed ml-[500px]">
                    <button
                      className="flex h-8 w-8 items-center justify-center rounded-full border-transparent bg-white text-black opacity-[90%]"
                      onClick={openModal1}
                    >
                      <CloseOutlined rev={undefined} />
                    </button>
                  </div>
                  <h1 className="text-3xl font-bold text-black">
                    {Strings.Test_your_microphone}
                  </h1>
                  <select className=" my-5 w-[480px] rounded-lg border-2 px-1 py-4 text-sm text-black outline-none">
                    <option disabled selected>
                      {Strings.Your_microphone}
                    </option>
                    <option value="">{Strings.Default_Macbook}</option>
                    {/* <option value="">
                    {Strings.Default_Macbook}
                    </option>
                    <option value="">
                    {Strings.Default_Macbook}
                    </option> */}
                  </select>
                  <p className="text-lg font-semibold text-black">
                    {Strings.Speak_and_pause}
                  </p>
                  <p className="mt-5 text-base font-semibold text-black">
                    {Strings.Input_level}
                  </p>
                  {/* <p className="mt-2 w-[480px] rounded-lg border-2 p-3">
                    {inputLevel}
                  </p> */}
                  <p className="mt-2 w-[480px] rounded-lg border-2 p-3 ">
                    {/* {transcript} */}
                    <p className="w-[450px] border-[15px] border-dashed border-[#8d3f42] border-opacity-[20%]"></p>
                  </p>
                  <div className="mt-5 flex justify-end space-x-2">
                    <button
                      // onClick={startRecording}
                      className="w-20 rounded-full bg-[#8d3f42] bg-opacity-[60%] p-3 font-semibold text-white"
                    >
                      {Strings.Speak}
                    </button>
                    <button
                      onClick={openModal2}
                      className="w-16 rounded-full bg-[#8d3f42] p-3 font-semibold text-white"
                    >
                      {Strings.Yes}
                    </button>
                    <button className="w-16 rounded-full bg-red-400 p-3 font-semibold text-white">
                      {Strings.No}
                    </button>
                  </div>
                </div>
              </div>
            )}
            {isOpen1 && (
              <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-[80%] backdrop-blur-sm">
                <div className="h-[360px] w-[520px]  rounded-xl bg-white p-5">
                  <h1 className="text-3xl font-bold text-black">
                    {Strings.Camera_microphone}
                  </h1>
                  <p className="my-5 text-base font-semibold text-black">
                    {Strings.You_re_about}
                  </p>
                  <p className="text-base font-semibold text-black">
                    {Strings.Once_you_ve}
                  </p>
                  <p className="my-6 text-xl font-bold text-black">
                    {Strings.Best_of_luck}
                  </p>
                  <div className="flex justify-end">
                    <button
                      onClick={() => {
                        setIsOpen1(false);
                        setStep((prevStep) => prevStep + 1);
                      }}
                      className="flex w-28 items-center justify-center rounded-full bg-[#8d3f42] p-2 text-lg text-white  hover:bg-[#161616] "
                    >
                      {Strings.Continue}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </BlankLayout>
        </>
      )}
      {step === 11 && (
        <BlankLayout>
          <div>
            <div className="fixed right-7 top-7 flex w-20 items-center justify-between rounded-full bg-[#8d3f42] bg-opacity-[20%] px-2 py-1 text-lg font-bold text-black">
              <ClockCircleOutlined className=" text-[#8d3f42]" />
              <p>{`${minutes}:${seconds < 10 ? "0" : ""}${seconds}`}</p>
            </div>
            <p className="text-center text-lg font-bold text-black">1/11</p>
            <div className="flex  justify-center">
              <p className="my-5 w-[450px] text-center text-lg font-bold text-black">
                {Strings.QUS1}
              </p>
            </div>
            <div className="flex h-[250px] items-center justify-center rounded-2xl bg-[#8d3f42] bg-opacity-[20%] text-black md:w-[650px] lg:w-[950px] xl:w-[1200px]">
              <div className="text-center">
                <div className="flex justify-center">
                  <button
                    onClick={handleRecordButtonClick}
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-2xl"
                  >
                    <AudioOutlined />
                  </button>
                </div>
                <p className="mt-2 font-bold">
                  {recording ? "Recording..." : "Click to start recording"}
                </p>
              </div>
            </div>
            <div className="my-5 flex justify-center">
              <button
                onClick={() => {
                  setTime(120);
                  setStep(step + 1);
                }}
                className="flex w-52 items-center justify-between rounded-full bg-[#8d3f42] bg-opacity-[60%] p-2 text-lg text-white hover:bg-[#161616] "
              >
                {Strings.Submit_continue}
                <div className="ml-2 flex items-center justify-center rounded-full border-transparent bg-slate-500 bg-opacity-[20%] xs:h-8 xs:w-8 md:h-10 md:w-10">
                  <p className="rounded-sm bg-white p-2"></p>
                </div>
              </button>
            </div>
            <p className=" text-center font-medium text-slate-500">
              {Strings.Note}
            </p>
            <ModalComponent
              isVisible={isModalVisible}
              onBackToHome={handleBackToHome}
            />
          </div>
        </BlankLayout>
      )}
      {step === 12 && (
        <BlankLayout>
          <div>
            <div className="fixed right-7 top-7 flex w-20 items-center justify-between rounded-full bg-[#8d3f42] bg-opacity-[20%] px-2 py-1 text-lg font-bold text-black">
              <ClockCircleOutlined className=" text-[#8d3f42]" />
              <p>{`${minutes}:${seconds < 10 ? "0" : ""}${seconds}`}</p>
            </div>
            <p className="text-center text-lg font-bold text-black">2/11</p>
            <div className="flex  justify-center">
              <p className="my-5 w-[450px] text-center text-lg font-bold text-black">
                {Strings.QUS2}
              </p>
            </div>
            <div className="flex h-[250px] items-center justify-center rounded-2xl bg-[#8d3f42] bg-opacity-[20%] text-black md:w-[650px] lg:w-[950px] xl:w-[1200px]">
              <div className="text-center">
                <div className="flex justify-center">
                  <button
                    onClick={handleRecordButtonClick}
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-2xl"
                  >
                    <AudioOutlined />
                  </button>
                </div>
                <p className="mt-2 font-bold">
                  {recording ? "Recording..." : "Click to start recording"}
                </p>
              </div>
            </div>
            <div className="my-5 flex justify-center">
              <button
                onClick={() => {
                  setTime(120);
                  setStep(step + 1);
                }}
                className="flex w-52 items-center justify-between rounded-full bg-[#8d3f42] bg-opacity-[60%] p-2 text-lg text-white hover:bg-[#161616] "
              >
                {Strings.Submit_continue}
                <div className="ml-2 flex items-center justify-center rounded-full border-transparent bg-slate-500 bg-opacity-[20%] xs:h-8 xs:w-8 md:h-10 md:w-10">
                  <p className="rounded-sm bg-white p-2"></p>
                </div>
              </button>
            </div>
            <p className=" text-center font-medium text-slate-500">
              {Strings.Note}
            </p>
            <ModalComponent
              isVisible={isModalVisible}
              onBackToHome={handleBackToHome}
            />
            <ModalComponent
              isVisible={isModalVisible}
              onBackToHome={handleBackToHome}
            />
          </div>
        </BlankLayout>
      )}
      {step === 13 && (
        <BlankLayout>
          <div>
            <div className="fixed right-7 top-7 flex w-20 items-center justify-between rounded-full bg-[#8d3f42] bg-opacity-[20%] px-2 py-1 text-lg font-bold text-black">
              <ClockCircleOutlined className=" text-[#8d3f42]" />
              <p>{`${minutes}:${seconds < 10 ? "0" : ""}${seconds}`}</p>
            </div>
            <p className="text-center text-lg font-bold text-black">3/11</p>
            <div className="flex  justify-center">
              <p className="my-5 w-[450px] text-center text-lg font-bold text-black">
                {Strings.QUS3}
              </p>
            </div>
            <div className="flex h-[250px] items-center justify-center rounded-2xl bg-[#8d3f42] bg-opacity-[20%] text-black md:w-[650px] lg:w-[950px] xl:w-[1200px]">
              <div className="text-center">
                <div className="flex justify-center">
                  <button
                    onClick={handleRecordButtonClick}
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-2xl"
                  >
                    <AudioOutlined />
                  </button>
                </div>
                <p className="mt-2 font-bold">
                  {recording ? "Recording..." : "Click to start recording"}
                </p>
              </div>
            </div>
            <div className="my-5 flex justify-center">
              <button
                onClick={() => {
                  setTime(120);
                  setStep(step + 1);
                }}
                className="flex w-52 items-center justify-between rounded-full bg-[#8d3f42] bg-opacity-[60%] p-2 text-lg text-white hover:bg-[#161616] "
              >
                {Strings.Submit_continue}
                <div className="ml-2 flex items-center justify-center rounded-full border-transparent bg-slate-500 bg-opacity-[20%] xs:h-8 xs:w-8 md:h-10 md:w-10">
                  <p className="rounded-sm bg-white p-2"></p>
                </div>
              </button>
            </div>
            <p className=" text-center font-medium text-slate-500">
              {Strings.Note}
            </p>
            <ModalComponent
              isVisible={isModalVisible}
              onBackToHome={handleBackToHome}
            />
          </div>
        </BlankLayout>
      )}
      {step === 14 && (
        <BlankLayout>
          <div>
            <div className="fixed right-7 top-7 flex w-20 items-center justify-between rounded-full bg-[#8d3f42] bg-opacity-[20%] px-2 py-1 text-lg font-bold text-black">
              <ClockCircleOutlined className=" text-[#8d3f42]" />
              <p>{`${minutes}:${seconds < 10 ? "0" : ""}${seconds}`}</p>
            </div>
            <p className="text-center text-lg font-bold text-black">4/11</p>
            <div className="flex  justify-center">
              <p className="my-5 w-[450px] text-center text-lg font-bold text-black">
                {Strings.QUS4}
              </p>
            </div>
            <div className="flex h-[250px] items-center justify-center rounded-2xl bg-[#8d3f42] bg-opacity-[20%] text-black md:w-[650px] lg:w-[950px] xl:w-[1200px]">
              <div className="text-center">
                <div className="flex justify-center">
                  <button
                    onClick={handleRecordButtonClick}
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-2xl"
                  >
                    <AudioOutlined />
                  </button>
                </div>
                <p className="mt-2 font-bold">
                  {recording ? "Recording..." : "Click to start recording"}
                </p>
              </div>
            </div>
            <div className="my-5 flex justify-center">
              <button
                onClick={() => {
                  setTime(120);
                  setStep(step + 1);
                }}
                className="flex w-52 items-center justify-between rounded-full bg-[#8d3f42] bg-opacity-[60%] p-2 text-lg text-white hover:bg-[#161616] "
              >
                {Strings.Submit_continue}
                <div className="ml-2 flex items-center justify-center rounded-full border-transparent bg-slate-500 bg-opacity-[20%] xs:h-8 xs:w-8 md:h-10 md:w-10">
                  <p className="rounded-sm bg-white p-2"></p>
                </div>
              </button>
            </div>
            <p className=" text-center font-medium text-slate-500">
              {Strings.Note}
            </p>
            <ModalComponent
              isVisible={isModalVisible}
              onBackToHome={handleBackToHome}
            />
          </div>
        </BlankLayout>
      )}
      {step === 15 && (
        <BlankLayout>
          <div>
            <div className="fixed right-7 top-7 flex w-20 items-center justify-between rounded-full bg-[#8d3f42] bg-opacity-[20%] px-2 py-1 text-lg font-bold text-black">
              <ClockCircleOutlined className=" text-[#8d3f42]" />
              <p>{`${minutes}:${seconds < 10 ? "0" : ""}${seconds}`}</p>
            </div>
            <p className="text-center text-lg font-bold text-black">5/11</p>
            <div className="flex  justify-center">
              <p className="my-5 w-[450px] text-center text-lg font-bold text-black">
                {Strings.QUS5}
              </p>
            </div>
            <div className="flex h-[250px] items-center justify-center rounded-2xl bg-[#8d3f42] bg-opacity-[20%] text-black md:w-[650px] lg:w-[950px] xl:w-[1200px]">
              <div className="text-center">
                <div className="flex justify-center">
                  <button
                    onClick={handleRecordButtonClick}
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-2xl"
                  >
                    <AudioOutlined />
                  </button>
                </div>
                <p className="mt-2 font-bold">
                  {recording ? "Recording..." : "Click to start recording"}
                </p>
              </div>
            </div>
            <div className="my-5 flex justify-center">
              <button
                onClick={() => {
                  setTime(120);
                  setStep(step + 1);
                }}
                className="flex w-52 items-center justify-between rounded-full bg-[#8d3f42] bg-opacity-[60%] p-2 text-lg text-white hover:bg-[#161616] "
              >
                {Strings.Submit_continue}
                <div className="ml-2 flex items-center justify-center rounded-full border-transparent bg-slate-500 bg-opacity-[20%] xs:h-8 xs:w-8 md:h-10 md:w-10">
                  <p className="rounded-sm bg-white p-2"></p>
                </div>
              </button>
            </div>
            <p className=" text-center font-medium text-slate-500">
              {Strings.Note}
            </p>
            <ModalComponent
              isVisible={isModalVisible}
              onBackToHome={handleBackToHome}
            />
          </div>
        </BlankLayout>
      )}
      {step === 16 && (
        <BlankLayout>
          <div>
            <div className="fixed right-7 top-7 flex w-20 items-center justify-between rounded-full bg-[#8d3f42] bg-opacity-[20%] px-2 py-1 text-lg font-bold text-black">
              <ClockCircleOutlined className=" text-[#8d3f42]" />
              <p>{`${minutes}:${seconds < 10 ? "0" : ""}${seconds}`}</p>
            </div>
            <p className="text-center text-lg font-bold text-black">6/11</p>
            <div className="flex  justify-center">
              <p className="my-5 w-[450px] text-center text-lg font-bold text-black">
                {Strings.QUS6}
              </p>
            </div>
            <div className="flex h-[250px] items-center justify-center rounded-2xl bg-[#8d3f42] bg-opacity-[20%] text-black md:w-[650px] lg:w-[950px] xl:w-[1200px]">
              <div className="text-center">
                <div className="flex justify-center">
                  <button
                    onClick={handleRecordButtonClick}
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-2xl"
                  >
                    <AudioOutlined />
                  </button>
                </div>
                <p className="mt-2 font-bold">
                  {recording ? "Recording..." : "Click to start recording"}
                </p>
              </div>
            </div>
            <div className="my-5 flex justify-center">
              <button
                onClick={() => {
                  setTime(120);
                  setStep(step + 1);
                }}
                className="flex w-52 items-center justify-between rounded-full bg-[#8d3f42] bg-opacity-[60%] p-2 text-lg text-white hover:bg-[#161616] "
              >
                {Strings.Submit_continue}
                <div className="ml-2 flex items-center justify-center rounded-full border-transparent bg-slate-500 bg-opacity-[20%] xs:h-8 xs:w-8 md:h-10 md:w-10">
                  <p className="rounded-sm bg-white p-2"></p>
                </div>
              </button>
            </div>
            <p className=" text-center font-medium text-slate-500">
              {Strings.Note}
            </p>
            <ModalComponent
              isVisible={isModalVisible}
              onBackToHome={handleBackToHome}
            />
          </div>
        </BlankLayout>
      )}
      {step === 17 && (
        <BlankLayout>
          <div>
            <div className="fixed right-7 top-7 flex w-20 items-center justify-between rounded-full bg-[#8d3f42] bg-opacity-[20%] px-2 py-1 text-lg font-bold text-black">
              <ClockCircleOutlined className=" text-[#8d3f42]" />
              <p>{`${minutes}:${seconds < 10 ? "0" : ""}${seconds}`}</p>
            </div>
            <p className="text-center text-lg font-bold text-black">7/11</p>
            <div className="flex  justify-center">
              <p className="my-5 w-[450px] text-center text-lg font-bold text-black">
                {Strings.QUS7}
              </p>
            </div>
            <div className="flex h-[250px] items-center justify-center rounded-2xl bg-[#8d3f42] bg-opacity-[20%] text-black md:w-[650px] lg:w-[950px] xl:w-[1200px]">
              <div className="text-center">
                <div className="flex justify-center">
                  <button
                    onClick={handleRecordButtonClick}
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-2xl"
                  >
                    <AudioOutlined />
                  </button>
                </div>
                <p className="mt-2 font-bold">
                  {recording ? "Recording..." : "Click to start recording"}
                </p>
              </div>
            </div>
            <div className="my-5 flex justify-center">
              <button
                onClick={() => {
                  setTime(120);
                  setStep(step + 1);
                }}
                className="flex w-52 items-center justify-between rounded-full bg-[#8d3f42] bg-opacity-[60%] p-2 text-lg text-white hover:bg-[#161616] "
              >
                {Strings.Submit_continue}
                <div className="ml-2 flex items-center justify-center rounded-full border-transparent bg-slate-500 bg-opacity-[20%] xs:h-8 xs:w-8 md:h-10 md:w-10">
                  <p className="rounded-sm bg-white p-2"></p>
                </div>
              </button>
            </div>
            <p className=" text-center font-medium text-slate-500">
              {Strings.Note}
            </p>
            <ModalComponent
              isVisible={isModalVisible}
              onBackToHome={handleBackToHome}
            />
          </div>
        </BlankLayout>
      )}
      {step === 18 && (
        <BlankLayout>
          <div>
            <div className="fixed right-7 top-7 flex w-20 items-center justify-between rounded-full bg-[#8d3f42] bg-opacity-[20%] px-2 py-1 text-lg font-bold text-black">
              <ClockCircleOutlined className=" text-[#8d3f42]" />
              <p>{`${minutes}:${seconds < 10 ? "0" : ""}${seconds}`}</p>
            </div>
            <p className="text-center text-lg font-bold text-black">8/11</p>
            <div className="flex  justify-center">
              <p className="my-5 w-[450px] text-center text-lg font-bold text-black">
                {Strings.QUS8}
              </p>
            </div>
            <div className="flex h-[250px] items-center justify-center rounded-2xl bg-[#8d3f42] bg-opacity-[20%] text-black md:w-[650px] lg:w-[950px] xl:w-[1200px]">
              <div className="text-center">
                <div className="flex justify-center">
                  <button
                    onClick={handleRecordButtonClick}
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-2xl"
                  >
                    <AudioOutlined />
                  </button>
                </div>
                <p className="mt-2 font-bold">
                  {recording ? "Recording..." : "Click to start recording"}
                </p>
              </div>
            </div>
            <div className="my-5 flex justify-center">
              <button
                onClick={() => {
                  setTime(120);
                  setStep(step + 1);
                }}
                className="flex w-52 items-center justify-between rounded-full bg-[#8d3f42] bg-opacity-[60%] p-2 text-lg text-white hover:bg-[#161616] "
              >
                {Strings.Submit_continue}
                <div className="ml-2 flex items-center justify-center rounded-full border-transparent bg-slate-500 bg-opacity-[20%] xs:h-8 xs:w-8 md:h-10 md:w-10">
                  <p className="rounded-sm bg-white p-2"></p>
                </div>
              </button>
            </div>
            <p className=" text-center font-medium text-slate-500">
              {Strings.Note}
            </p>
            <ModalComponent
              isVisible={isModalVisible}
              onBackToHome={handleBackToHome}
            />
          </div>
        </BlankLayout>
      )}
      {step === 19 && (
        <BlankLayout>
          <div>
            <div className="fixed right-7 top-7 flex w-20 items-center justify-between rounded-full bg-[#8d3f42] bg-opacity-[20%] px-2 py-1 text-lg font-bold text-black">
              <ClockCircleOutlined className=" text-[#8d3f42]" />
              <p>{`${minutes}:${seconds < 10 ? "0" : ""}${seconds}`}</p>
            </div>
            <p className="text-center text-lg font-bold text-black">9/11</p>
            <div className="flex  justify-center">
              <p className="my-5 w-[450px] text-center text-lg font-bold text-black">
                {Strings.QUS9}
              </p>
            </div>
            <div className="flex h-[250px] items-center justify-center rounded-2xl bg-[#8d3f42] bg-opacity-[20%] text-black md:w-[650px] lg:w-[950px] xl:w-[1200px]">
              <div className="text-center">
                <div className="flex justify-center">
                  <button
                    onClick={handleRecordButtonClick}
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-2xl"
                  >
                    <AudioOutlined />
                  </button>
                </div>
                <p className="mt-2 font-bold">
                  {recording ? "Recording..." : "Click to start recording"}
                </p>
              </div>
            </div>
            <div className="my-5 flex justify-center">
              <button
                onClick={() => {
                  setTime(120);
                  setStep(step + 1);
                }}
                className="flex w-52 items-center justify-between rounded-full bg-[#8d3f42] bg-opacity-[60%] p-2 text-lg text-white hover:bg-[#161616] "
              >
                {Strings.Submit_continue}
                <div className="ml-2 flex items-center justify-center rounded-full border-transparent bg-slate-500 bg-opacity-[20%] xs:h-8 xs:w-8 md:h-10 md:w-10">
                  <p className="rounded-sm bg-white p-2"></p>
                </div>
              </button>
            </div>
            <p className=" text-center font-medium text-slate-500">
              {Strings.Note}
            </p>
            <ModalComponent
              isVisible={isModalVisible}
              onBackToHome={handleBackToHome}
            />
          </div>
        </BlankLayout>
      )}
      {step === 20 && (
        <BlankLayout>
          <div>
            <div className="fixed right-7 top-7 flex w-20 items-center justify-between rounded-full bg-[#8d3f42] bg-opacity-[20%] px-2 py-1 text-lg font-bold text-black">
              <ClockCircleOutlined className=" text-[#8d3f42]" />
              <p>{`${minutes}:${seconds < 10 ? "0" : ""}${seconds}`}</p>
            </div>
            <p className="text-center text-lg font-bold text-black">10/11</p>
            <div className="flex  justify-center">
              <p className="my-5 w-[450px] text-center text-lg font-bold text-black">
                {Strings.QUS10}
              </p>
            </div>
            <div className="flex h-[250px] items-center justify-center rounded-2xl bg-[#8d3f42] bg-opacity-[20%] text-black md:w-[650px] lg:w-[950px] xl:w-[1200px]">
              <div className="text-center">
                <div className="flex justify-center">
                  <button
                    onClick={handleRecordButtonClick}
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-2xl"
                  >
                    <AudioOutlined />
                  </button>
                </div>
                <p className="mt-2 font-bold">
                  {recording ? "Recording..." : "Click to start recording"}
                </p>
              </div>
            </div>
            <div className="my-5 flex justify-center">
              <button
                onClick={() => {
                  setTime(120);
                  setStep(step + 1);
                }}
                className="flex w-52 items-center justify-between rounded-full bg-[#8d3f42] bg-opacity-[60%] p-2 text-lg text-white hover:bg-[#161616] "
              >
                {Strings.Submit_continue}
                <div className="ml-2 flex items-center justify-center rounded-full border-transparent bg-slate-500 bg-opacity-[20%] xs:h-8 xs:w-8 md:h-10 md:w-10">
                  <p className="rounded-sm bg-white p-2"></p>
                </div>
              </button>
            </div>
            <p className=" text-center font-medium text-slate-500">
              {Strings.Note}
            </p>
            <ModalComponent
              isVisible={isModalVisible}
              onBackToHome={handleBackToHome}
            />
          </div>
        </BlankLayout>
      )}
      {step === 21 && (
        <>
          <BlankLayout>
            <div>
              <div className="flex items-center justify-between">
                <p className="fixed- left-7 top-7 text-lg font-bold text-black">
                  11/11
                </p>
                <div className="fixed- right-7 top-7 flex w-20 items-center justify-between rounded-full bg-[#8d3f42] bg-opacity-[20%] px-2 py-1 text-lg font-bold text-black">
                  <ClockCircleOutlined className=" text-[#8d3f42]" />
                  <p>
                    {String(codingminutes).padStart(2, "0")}:
                    {String(codingseconds).padStart(2, "0")}
                  </p>
                </div>
              </div>
              <div className="xlg:space-x-8 flex w-full justify-between md:space-x-4 lg:mt-2 xl:mt-4 xl:space-x-6">
                <div className="no-scrollbar overflow-y-scroll rounded-xl border bg-white p-4 shadow-lg md:w-[500px] lg:h-[540px] lg:w-[410px] xl:h-[650px] xl:w-[500px] 2xl:h-[650px] 2xl:w-[550px]">
                  <h1 className="text-lg font-bold text-black">
                    {Strings.Coding_exercise}
                  </h1>
                  <p className="mt-3 text-base font-semibold text-black">
                    {Strings.QUS11}
                  </p>
                  <div className="mt-4 rounded-xl bg-[#8d3f42] bg-opacity-[20%] p-2 text-base font-semibold text-black">
                    <h1 className="mt-4 text-lg font-bold ">
                      {Strings.EXAMPLE_1}
                    </h1>
                    <p>
                      <span className="text-base font-bold">
                        {Strings.Input}
                      </span>
                      {Strings.array}
                    </p>
                    <p>
                      <span className="text-base font-bold">
                        {" "}
                        {Strings.Output}
                      </span>{" "}
                      3
                    </p>
                    <p>
                      <span className="text-base font-bold">
                        {Strings.Explanation}{" "}
                      </span>
                      {Strings.The_largest_subarray}
                    </p>
                    <h1 className="mt-4 text-lg font-bold">
                      {Strings.EXAMPLE_2}
                    </h1>
                    <p>
                      <span className="text-base font-bold">
                        {" "}
                        {Strings.Input}{" "}
                      </span>
                      {Strings.array1}
                    </p>
                    <p>
                      <span className="text-base font-bold">
                        {" "}
                        {Strings.Output}{" "}
                      </span>
                      4
                    </p>
                    <p>
                      <span className="text-base font-bold">
                        {Strings.Explanation}
                      </span>
                      {Strings.The_largest}
                    </p>
                  </div>
                  <h1 className="mt-4 text-lg font-bold text-black">
                    {Strings.Requirements}
                  </h1>
                  <p className="mt-4">{Strings.The_length_of}</p>
                  <p>{Strings.The_elements}</p>
                  <p>{Strings.The_array_can}</p>
                  <p>{Strings.The_array_can_contain}</p>
                </div>
                <div className="no-scrollbar overflow-y-scroll rounded-xl bg-[#8d3f42] bg-opacity-[20%] p-4 shadow-lg md:w-[500px] lg:h-[540px] lg:w-[580px] xl:h-[650px] xl:w-[900px] 2xl:h-[650px] 2xl:w-[950px]">
                  <div className="mb-4 flex justify-between">
                    <select
                      className="w-[200px] rounded border p-2 outline-none"
                      value={language}
                      onChange={(e) => setLanguage(e.target.value)}
                    >
                      <option selected>{Strings.Language}</option>
                      <option value="javascript">{Strings.JavaScript}</option>
                      <option value="python">{Strings.Python}</option>
                      <option value="cpp">{Strings.C}</option>
                    </select>
                    <button
                      className="w-[200px] rounded bg-blue-500 p-2 text-white hover:bg-blue-700"
                      onClick={compileCode}
                    >
                      {Strings.Run_Code}
                    </button>
                  </div>
                  <textarea
                    className="mb-2 w-full rounded border bg-[#141b31] p-2 text-white"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="Enter your code here..."
                    rows={17}
                  ></textarea>
                  <div className=" flex justify-between">
                    <div>
                      <strong className="mb-2 block text-base font-bold text-gray-800">
                        {Strings.Output}
                      </strong>
                      <pre className="h-[120px] rounded border bg-[#141b31] p-2 lg:w-[270px] xl:w-[420px] 2xl:w-[450px]">
                        {output}
                      </pre>
                    </div>
                    <div className="">
                      <label className="mb-2 block text-base font-bold text-gray-800">
                        {Strings.Custom_input}
                      </label>
                      <textarea
                        className="h-[120px] rounded border p-2 lg:w-[270px] xl:w-[420px] 2xl:w-[450px]"
                        rows={4}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Custom input..."
                      />
                    </div>
                  </div>
                  <div className="mt-2 flex justify-end">
                    <button
                      onClick={() => {
                        setStep(step + 1);
                      }}
                      className="flex h-10 items-center justify-center  rounded-full bg-[#8d3f42] text-base  text-white hover:bg-gray-950 disabled:opacity-50 xs:w-28 md:w-[7rem]"
                    >
                      {Strings.Submit}
                    </button>
                  </div>
                </div>
                <ModalComponent
                  isVisible={isModalVisible}
                  onBackToHome={handleBackToHome}
                />
              </div>

              {/* End Compiler UI */}
            </div>
          </BlankLayout>
        </>
      )}
      {step === 22 && (
        <BlankLayout>
          <div>
            <div className="text-center">
              <div className="relative flex justify-center">
                <Image src={Images.check} width={70} height={70} alt={""} />
              </div>
              <h1 className="mt-7 text-xl font-bold text-black">
                {Strings.gpt_vetting_is_done}
              </h1>
              <p className="my-5 text-base font-semibold text-black">
                {Strings.feedback}
              </p>
              <div className="no-scrollbar flex h-[200px] w-[400px] items-center justify-center overflow-y-scroll rounded-lg bg-[#8d3f42] bg-opacity-[20%]">
                <div>
                  <textarea
                    className="w-[350px] rounded border bg-white p-2 text-black outline-none"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    placeholder="Write your feedback or experience here (optional)"
                    rows={4}
                  ></textarea>
                  <div className="mt-4 flex justify-center">
                    <button
                      onClick={() => {
                        setStep(22);
                      }}
                      className="flex h-10 items-center justify-center  rounded-full bg-[#8d3f42] text-base  text-white hover:bg-gray-950 disabled:opacity-50 xs:w-28 md:w-[7rem]"
                    >
                      {Strings.Submit}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BlankLayout>
      )}
      {/* // ): (
      //   <BlankLayout>
      //     fgd
      //   </BlankLayout>
      // )} */}
    </>
  );
};

export default technicalvetting;
