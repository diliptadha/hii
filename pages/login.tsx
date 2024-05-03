import { Images, Strings } from "@/constants";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";

import BlankLayout from "@/components/Layouts/BlankLayout";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

// import Loader from "@/Component/loader";

const LogInForm = () => {
  const [showpassword, setShowpassword] = useState(false);
  const [password, setpassword] = useState("");
  const [email, setEmail] = useState("");
  const [emailerr, setEmailerr] = useState(false);
  const [userPassworderr, setuserPassworderr] = useState(false);
  const [emailInvalidError, setEmailInvalidError] = useState(false);
  const [loading, setLoading] = useState(false); // Changed to false as loading should be false initially

  const router = useRouter();

  const togglepasswordVisibility = () => {
    setShowpassword(!showpassword);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (email.trim() === "" || password.trim() === "") {
      // Set error states for both email and password
      setEmailerr(email.trim() === "");
      setuserPassworderr(password.trim() === "");
      return; // Prevent further execution of the function
    }

    // Placeholder for API integration
    console.log("Submitting login form...");
    // Simulate loading for 2 seconds
    setLoading(true);
    console.log("Email:", email, "Password:", password);
    const options = {
      method: "POST",
      url: "https://api.eremotehire.com/user/login",
      data: { emailId: email, password: password },
    };

    axios
      .request(options)
      .then((response) => {
        console.log(response, "response");
        Cookies.set("token", response.data.signInData.access_token);
        Cookies.set("userId", response.data.signInData.userData.userId);
        router.push("/");
      })
      .catch((error) => {
        toast.error(error?.response?.data.message);
        console.error(error);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      router.push("/");
    }
  }, []);

  const validateEmail = (email: string) => {
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  function PasswordHandle(e: any) {
    setpassword(e.target.value);
    if (e.target.value.trim() === "" || e.target.value.length < 6) {
      setuserPassworderr(true);
    } else {
      setuserPassworderr(false);
    }
  }

  function EmailHandle(e: any) {
    const inputEmail = e.target.value;
    setEmail(inputEmail);

    // Check for empty email and invalid email format
    if (inputEmail.trim() === "") {
      setEmailerr(true);
      setEmailInvalidError(false); // Hide emailInvalidError when email is empty
    } else if (!validateEmail(inputEmail)) {
      setEmailerr(false); // Hide emailerr when email is invalid
      setEmailInvalidError(true);
    } else {
      // Email is not empty and valid
      setEmailerr(false);
      setEmailInvalidError(false);
    }
  }

  return (
    <BlankLayout>
      <section className="bg-[#FFFF] ">
        <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 xs:h-[90vh] md:h-screen  lg:py-0">
          <button
            onClick={() => router.push("/")}
            className="my-6 flex items-center text-2xl font-semibold  "
          >
            <Image
              src={Images.REMOTEHIRELOGODark}
              alt=" logo"
              width={165}
              height={63}
              className=""
            />
          </button>
          <div className="h-[300px]- w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0 ">
            <div className="md:space-y-6- space-y-2 p-2 sm:p-8  ">
              <div className="text-2xl font-bold">{Strings.LOGTN}</div>
              <form
                className="md:space-y-6- space-y-2"
                action="#"
                onSubmit={handleSubmit}
              >
                <div>
                  <div className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                    {" "}
                    {Strings.EMAIL}
                  </div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={EmailHandle}
                    className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-600 dark:focus:ring-blue-600 sm:text-sm"
                    placeholder="name@company.com"
                    required
                  />
                  {emailInvalidError && (
                    <p className="mt-2 font-outfit text-xs font-light text-red-500">
                      {Strings.Email_is_invalid}
                    </p>
                  )}
                  {!emailInvalidError && emailerr && (
                    <p className="mt-2 font-outfit text-xs font-light text-red-500">
                      {Strings.Email_is_Required}
                    </p>
                  )}
                </div>
                <div className="relative">
                  <div className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                    {Strings.PASSWORD}
                  </div>
                  <input
                    type={showpassword ? "text" : "password"}
                    value={password}
                    onChange={PasswordHandle}
                    name="password"
                    id="password"
                    placeholder="Password"
                    required
                    className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                  />
                  {userPassworderr && (
                    <p className="mt-2 font-outfit text-xs font-light text-red-500">
                      {Strings.Password_must}
                    </p>
                  )}
                  <span
                    className="absolute right-3 top-[50px] flex -translate-y-1/2 transform cursor-pointer items-center text-lg"
                    onClick={togglepasswordVisibility}
                  >
                    {showpassword ? <EyeInvisibleOutlined /> : <EyeOutlined />}
                  </span>
                </div>
                <div className="flex items-center justify-end">
                  <Link
                    href="/forgot-password"
                    className="text-primary-600 dark:text-primary-500 mb-5 text-sm font-medium hover:underline"
                  >
                    {Strings.forgot_password}
                  </Link>
                </div>

                <button
                  type="submit"
                  className={`from-tosca to-contessa hover:from-contessa hover:to-tosca w-full rounded-full bg-black bg-gradient-to-l py-3 text-center font-outfit text-lg font-medium text-white hover:bg-gradient-to-l ${
                    loading ? "cursor-not-allowed opacity-50" : ""
                  }`}
                  disabled={loading}
                >
                  {loading ? "Loading..." : Strings.LOGTN}
                </button>

                <div className="flex justify-center">
                  <p className="font-outfit text-sm font-light text-gray-500 dark:text-gray-400">
                    {Strings.if_you_dont_have}
                  </p>
                </div>
              </form>
            </div>
          </div>
          <div className="flex justify-center py-4 text-black">
            <p>{Strings.Are_you_a_dev} </p>
            <Link
              href="https://developer.eremotehire.com/login"
              target="_blank"
            >
              <button className="text-contessa ml-[5px] cursor-pointer underline">
                {Strings.Login_here}
              </button>
            </Link>
          </div>
        </div>
      </section>
    </BlankLayout>
  );
};

export default LogInForm;
