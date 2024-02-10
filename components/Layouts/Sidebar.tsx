import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import AnimateHeight from "react-animate-height";
import { IRootState } from "../../store";
import { Images } from "@/constants";
import Link from "next/link";
import PerfectScrollbar from "react-perfect-scrollbar";
import { fill } from "lodash";
import { toggleSidebar } from "../../store/themeConfigSlice";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

const Sidebar = () => {
  const router = useRouter();
  const [currentMenu, setCurrentMenu] = useState<string>("");
  const [errorSubMenu, setErrorSubMenu] = useState(false);
  const themeConfig = useSelector((state: IRootState) => state.themeConfig);
  const semidark = useSelector(
    (state: IRootState) => state.themeConfig.semidark
  );
  const toggleMenu = (value: string) => {
    setCurrentMenu((oldValue) => {
      return oldValue === value ? "" : value;
    });
  };

  useEffect(() => {
    const selector = document.querySelector(
      '.sidebar ul a[href="' + window.location.pathname + '"]'
    );
    if (selector) {
      selector.classList.add("active");
      const ul: any = selector.closest("ul.sub-menu");
      if (ul) {
        let ele: any =
          ul.closest("li.menu").querySelectorAll(".nav-link") || [];
        if (ele.length) {
          ele = ele[0];
          setTimeout(() => {
            ele.click();
          });
        }
      }
    }
  }, []);

  useEffect(() => {
    setActiveRoute();
    if (window.innerWidth < 1024 && themeConfig.sidebar) {
      dispatch(toggleSidebar());
    }
  }, [router.pathname]);

  const setActiveRoute = () => {
    let allLinks = document.querySelectorAll(".sidebar ul a.active");
    for (let i = 0; i < allLinks.length; i++) {
      const element = allLinks[i];
      element?.classList.remove("active");
    }
    const selector = document.querySelector(
      '.sidebar ul a[href="' + window.location.pathname + '"]'
    );
    selector?.classList.add("active");
  };

  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <div className={semidark ? "dark" : ""}>
      <nav
        className={`sidebar shadow-[5px_0_25px_0_rgba(94,92,154,0.1)]- fixed bottom-0 top-0 z-50 h-full min-h-screen w-[260px] transition-all duration-300 ${semidark ? "text-white-dark" : ""
          }`}
      >
        <div className="h-full bg-white dark:bg-[#000]">
          <div className="flex items-center justify-between px-4 py-3">
            <Link href="/" className="main-logo flex shrink-0 items-center">
              {themeConfig.theme === "light" ? (
                <img
                  className="inline h-[35px] w-[165px] ltr:-ml-1 rtl:-mr-1  "
                  src={Images.REMOTEHIRELOGODark}
                  alt="logo"
                />
              ) : (
                <img
                  className="inline h-[35px] w-[165px] ltr:-ml-1 rtl:-mr-1  "
                  src={Images.REMOTEHIRELOGO}
                  alt="logo"
                />
              )}

              {/* <img
                className="ml-[5px] h-[35px] w-[165px] flex-none"
                src={Images.REMOTEHIRELOGO}
                alt="logo"
              />
              <span className="align-middle text-2xl font-semibold ltr:ml-1.5 rtl:mr-1.5 dark:text-white-light lg:inline">
                {t("")}
              </span> */}
            </Link>

            <button
              type="button"
              className="collapse-icon flex h-8 w-8 items-center rounded-full transition duration-300 hover:bg-gray-500/10 dark:text-white-light dark:hover:bg-dark-light/10 rtl:rotate-180"
              onClick={() => dispatch(toggleSidebar())}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-6 w-6 text-[#8D3F42]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
          </div>
          <PerfectScrollbar className="relative h-[calc(100vh-80px)]">
            <ul className="relative space-y-0.5 p-4 py-0 font-semibold">
              <li className="nav-item">
                <ul>
                  <li className="nav-item">
                    <Link href="/" className="group">
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                          />
                        </svg>

                        <span className="text-black dark:text-[#fff] dark:group-hover:text-white-dark ltr:pl-3 rtl:pr-3">
                          {t("Dashboard")}
                        </span>
                      </div>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/apps/my-team" className="group">
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                          />
                        </svg>

                        <span className="text-black dark:text-[#fff] dark:group-hover:text-white-dark ltr:pl-3 rtl:pr-3">
                          {t("My Team")}
                        </span>
                      </div>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/apps/hire-new-talent" className="group">
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>

                        <span className="text-black dark:text-[#fff] dark:group-hover:text-white-dark ltr:pl-3 rtl:pr-3">
                          {t("Hire New Talent")}
                        </span>
                      </div>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/apps/search-talent" className="group">
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                          />
                        </svg>

                        <span className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#fff] dark:group-hover:text-white-dark">
                          {t("Search Talent")}
                        </span>
                      </div>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/apps/gpt-vetting" className="group">
                      <div className="flex items-center">
                        {/* <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg> */}
                        {/* <svg
                          version="1.2"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 25 25"
                          fill="none"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="h-5 w-5 font-thin"
                        >
                          <path d="m9.24 2.02c0 0.75-0.47 1.38-1.14 1.62v1.24h3.43v-1.24c-0.67-0.24-1.14-0.87-1.14-1.62 0-0.95 0.77-1.71 1.71-1.71 0.95 0 1.72 0.76 1.72 1.71 0 0.75-0.48 1.38-1.15 1.62v1.24h3.43v-1.24c-0.66-0.24-1.14-0.87-1.14-1.62 0-0.95 0.77-1.71 1.71-1.71 0.95 0 1.72 0.76 1.72 1.71 0 0.75-0.48 1.38-1.14 1.62v1.29c1.11 0.23 2 1.11 2.22 2.23h1.3c0.24-0.66 0.87-1.14 1.62-1.14 0.94 0 1.71 0.77 1.71 1.71 0 0.95-0.77 1.72-1.71 1.72-0.75 0-1.38-0.48-1.62-1.14h-1.24v3.42h1.24c0.24-0.66 0.87-1.14 1.62-1.14 0.94 0 1.71 0.77 1.71 1.72 0 0.94-0.77 1.71-1.71 1.71-0.75 0-1.38-0.48-1.62-1.14h-1.24v3.43h1.24c0.24-0.67 0.87-1.15 1.62-1.15 0.94 0 1.71 0.77 1.71 1.72 0 0.94-0.77 1.71-1.71 1.71-0.75 0-1.38-0.48-1.62-1.14h-1.3c-0.22 1.12-1.11 2-2.23 2.23v1.3c0.67 0.23 1.15 0.87 1.15 1.61 0 0.95-0.77 1.72-1.72 1.72-0.94 0-1.71-0.77-1.71-1.72 0-0.74 0.48-1.38 1.14-1.61v-1.25h-3.43v1.25c0.67 0.23 1.15 0.87 1.15 1.61 0 0.95-0.77 1.72-1.72 1.72-0.94 0-1.71-0.77-1.71-1.72 0-0.74 0.47-1.38 1.14-1.61v-1.25h-3.43v1.25c0.67 0.23 1.14 0.87 1.14 1.61 0 0.95-0.76 1.72-1.71 1.72-0.95 0-1.71-0.77-1.71-1.72 0-0.74 0.47-1.38 1.14-1.61v-1.3c-1.12-0.23-2-1.11-2.23-2.23h-1.3c-0.23 0.66-0.87 1.14-1.61 1.14-0.95 0-1.72-0.77-1.72-1.71 0-0.95 0.77-1.72 1.72-1.72 0.74 0 1.38 0.48 1.61 1.15h1.24v-3.43h-1.24c-0.23 0.66-0.87 1.14-1.61 1.14-0.95 0-1.72-0.77-1.72-1.71 0-0.95 0.77-1.72 1.72-1.72 0.74 0 1.38 0.48 1.61 1.14h1.24v-3.42h-1.24c-0.23 0.66-0.87 1.14-1.61 1.14-0.95 0-1.72-0.77-1.72-1.72 0-0.94 0.77-1.71 1.72-1.71 0.74 0 1.38 0.48 1.61 1.14h1.3c0.23-1.12 1.11-2 2.23-2.23v-1.29c-0.67-0.24-1.14-0.87-1.14-1.62 0-0.95 0.76-1.71 1.71-1.71 0.95 0 1.71 0.76 1.71 1.71zm-2.28 0c0 0.32 0.26 0.57 0.57 0.57 0.32 0 0.57-0.25 0.57-0.57 0-0.32-0.25-0.57-0.57-0.57-0.31 0-0.57 0.25-0.57 0.57zm4.57 0c0 0.32 0.26 0.57 0.57 0.57 0.32 0 0.57-0.25 0.57-0.57 0-0.32-0.25-0.57-0.57-0.57-0.31 0-0.57 0.25-0.57 0.57zm4.57 0c0 0.32 0.26 0.57 0.57 0.57 0.32 0 0.57-0.25 0.57-0.57 0-0.32-0.25-0.57-0.57-0.57-0.31 0-0.57 0.25-0.57 0.57zm-10.28 5.71v9.15c0 0.94 0.76 1.71 1.71 1.71h9.14c0.95 0 1.72-0.77 1.72-1.71v-9.15c0-0.94-0.77-1.71-1.72-1.71h-9.14c-0.95 0-1.71 0.77-1.71 1.71zm-4.58 0c0 0.32 0.26 0.58 0.58 0.58 0.31 0 0.57-0.26 0.57-0.58 0-0.31-0.26-0.57-0.57-0.57-0.32 0-0.58 0.26-0.58 0.57zm20.58 0c0 0.32 0.25 0.58 0.57 0.58 0.31 0 0.57-0.26 0.57-0.58 0-0.31-0.26-0.57-0.57-0.57-0.32 0-0.57 0.26-0.57 0.57zm-20.58 4.58c0 0.31 0.26 0.57 0.58 0.57 0.31 0 0.57-0.26 0.57-0.57 0-0.32-0.26-0.58-0.57-0.58-0.32 0-0.58 0.26-0.58 0.58zm20.58 0c0 0.31 0.25 0.57 0.57 0.57 0.31 0 0.57-0.26 0.57-0.57 0-0.32-0.26-0.58-0.57-0.58-0.32 0-0.57 0.26-0.57 0.58zm-20.58 4.57c0 0.31 0.26 0.57 0.58 0.57 0.31 0 0.57-0.26 0.57-0.57 0-0.32-0.26-0.57-0.57-0.57-0.32 0-0.58 0.25-0.58 0.57zm20.58 0c0 0.31 0.25 0.57 0.57 0.57 0.31 0 0.57-0.26 0.57-0.57 0-0.32-0.26-0.57-0.57-0.57-0.32 0-0.57 0.25-0.57 0.57zm-14.86 5.71c0 0.32 0.25 0.57 0.57 0.57 0.32 0 0.57-0.25 0.57-0.57 0-0.31-0.25-0.57-0.57-0.57-0.32 0-0.57 0.26-0.57 0.57zm4.57 0c0 0.32 0.26 0.57 0.57 0.57 0.32 0 0.57-0.25 0.57-0.57 0-0.31-0.25-0.57-0.57-0.57-0.31 0-0.57 0.26-0.57 0.57zm4.57 0c0 0.32 0.26 0.57 0.57 0.57 0.32 0 0.57-0.25 0.57-0.57 0-0.31-0.25-0.57-0.57-0.57-0.31 0-0.57 0.26-0.57 0.57z" />
                        </svg> */}
                        {/* <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 25 25"
                          fill="none"
                        >
                          <mask id="path-1-inside-1_7447_75270" fill="white">
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M7.53057 0.305664C6.5843 0.305664 5.81631 1.07365 5.81631 2.01992C5.81631 2.76572 6.29347 3.40054 6.95908 3.63583V4.93416C5.83967 5.16107 4.95747 6.04328 4.73055 7.1627H3.43222C3.1967 6.49707 2.56186 6.01992 1.81631 6.01992C0.870038 6.01992 0.102051 6.78791 0.102051 7.73418C0.102051 8.68045 0.870038 9.44844 1.81631 9.44844C2.56211 9.44844 3.19692 8.97128 3.43222 8.30566H4.67334V11.7342H3.43222C3.1967 11.0686 2.56186 10.5914 1.81631 10.5914C0.870038 10.5914 0.102051 11.3594 0.102051 12.3057C0.102051 13.2519 0.870038 14.0199 1.81631 14.0199C2.56211 14.0199 3.19692 13.5428 3.43222 12.8771H4.67334V16.3057H3.43222C3.1967 15.64 2.56186 15.1629 1.81631 15.1629C0.870038 15.1629 0.102051 15.9309 0.102051 16.8771C0.102051 17.8234 0.870038 18.5914 1.81631 18.5914C2.56211 18.5914 3.19692 18.1142 3.43222 17.4486H4.73055C4.95746 18.568 5.83967 19.4502 6.95908 19.6772V20.9755C6.29346 21.211 5.81631 21.8458 5.81631 22.5914C5.81631 23.5377 6.5843 24.3057 7.53057 24.3057C8.47684 24.3057 9.24483 23.5377 9.24483 22.5914C9.24483 21.8456 8.76766 21.2108 8.10205 20.9755V19.7344H11.5306V20.9755C10.8649 21.211 10.3878 21.8458 10.3878 22.5914C10.3878 23.5377 11.1558 24.3057 12.1021 24.3057C13.0483 24.3057 13.8163 23.5377 13.8163 22.5914C13.8163 21.8456 13.3391 21.2108 12.6735 20.9755V19.7344H16.102V20.9755C15.4364 21.211 14.9593 21.8458 14.9593 22.5914C14.9593 23.5377 15.7273 24.3057 16.6735 24.3057C17.6198 24.3057 18.3878 23.5377 18.3878 22.5914C18.3878 21.8456 17.9106 21.2108 17.245 20.9755V19.6772C18.3644 19.4503 19.2466 18.568 19.4736 17.4486H20.7719C21.0074 18.1143 21.6422 18.5914 22.3878 18.5914C23.3341 18.5914 24.1021 17.8234 24.1021 16.8771C24.1021 15.9309 23.3341 15.1629 22.3878 15.1629C21.642 15.1629 21.0072 15.6401 20.7719 16.3057H19.5308V12.8771H20.7719C21.0074 13.5428 21.6422 14.0199 22.3878 14.0199C23.3341 14.0199 24.1021 13.2519 24.1021 12.3057C24.1021 11.3594 23.3341 10.5914 22.3878 10.5914C21.642 10.5914 21.0072 11.0686 20.7719 11.7342H19.5308V8.30566H20.7719C21.0074 8.97129 21.6422 9.44844 22.3878 9.44844C23.3341 9.44844 24.1021 8.68045 24.1021 7.73418C24.1021 6.78791 23.3341 6.01992 22.3878 6.01992C21.642 6.01992 21.0072 6.49708 20.7719 7.1627H19.4736C19.2466 6.04328 18.3644 5.16108 17.245 4.93416V3.63583C17.9106 3.40031 18.3878 2.76548 18.3878 2.01992C18.3878 1.07365 17.6198 0.305664 16.6735 0.305664C15.7273 0.305664 14.9593 1.07365 14.9593 2.01992C14.9593 2.76572 15.4364 3.40054 16.102 3.63583V4.87695H12.6735V3.63583C13.3392 3.40031 13.8163 2.76548 13.8163 2.01992C13.8163 1.07365 13.0483 0.305664 12.1021 0.305664C11.1558 0.305664 10.3878 1.07365 10.3878 2.01992C10.3878 2.76572 10.865 3.40054 11.5306 3.63583V4.87695H8.10205V3.63583C8.76767 3.40031 9.24483 2.76548 9.24483 2.01992C9.24483 1.07365 8.47684 0.305664 7.53057 0.305664ZM7.53057 1.44844C7.84606 1.44844 8.10205 1.70443 8.10205 2.01992C8.10205 2.33541 7.84606 2.59141 7.53057 2.59141C7.21508 2.59141 6.95908 2.33541 6.95908 2.01992C6.95908 1.70443 7.21508 1.44844 7.53057 1.44844ZM12.1019 1.44844C12.4173 1.44844 12.6733 1.70443 12.6733 2.01992C12.6733 2.33541 12.4173 2.59141 12.1019 2.59141C11.7864 2.59141 11.5304 2.33541 11.5304 2.01992C11.5304 1.70443 11.7864 1.44844 12.1019 1.44844ZM16.6731 1.44844C16.9886 1.44844 17.2446 1.70443 17.2446 2.01992C17.2446 2.33541 16.9886 2.59141 16.6731 2.59141C16.3577 2.59141 16.1017 2.33541 16.1017 2.01992C16.1017 1.70443 16.3577 1.44844 16.6731 1.44844ZM7.53027 6.01973H16.6731C17.6194 6.01973 18.3874 6.78771 18.3874 7.73398V16.8769C18.3874 17.8231 17.6194 18.5911 16.6731 18.5911H7.53027C6.584 18.5911 5.81601 17.8231 5.81601 16.8769V7.73398C5.81601 6.78771 6.584 6.01973 7.53027 6.01973ZM1.81592 7.1625C2.13141 7.1625 2.3874 7.41849 2.3874 7.73398C2.3874 8.04948 2.13141 8.30547 1.81592 8.30547C1.50042 8.30547 1.24443 8.04948 1.24443 7.73398C1.24443 7.41849 1.50042 7.1625 1.81592 7.1625ZM22.387 7.1625C22.7025 7.1625 22.9585 7.41849 22.9585 7.73398C22.9585 8.04948 22.7025 8.30547 22.387 8.30547C22.0715 8.30547 21.8155 8.04948 21.8155 7.73398C21.8155 7.41849 22.0715 7.1625 22.387 7.1625ZM1.81606 11.734C2.13156 11.734 2.38755 11.99 2.38755 12.3055C2.38755 12.621 2.13156 12.877 1.81606 12.877C1.50057 12.877 1.24458 12.621 1.24458 12.3055C1.24458 11.99 1.50057 11.734 1.81606 11.734ZM22.3872 11.734C22.7026 11.734 22.9586 11.99 22.9586 12.3055C22.9586 12.621 22.7026 12.877 22.3872 12.877C22.0717 12.877 21.8157 12.621 21.8157 12.3055C21.8157 11.99 22.0717 11.734 22.3872 11.734ZM1.81606 16.3053C2.13156 16.3053 2.38755 16.5613 2.38755 16.8768C2.38755 17.1922 2.13156 17.4482 1.81606 17.4482C1.50057 17.4482 1.24458 17.1922 1.24458 16.8768C1.24458 16.5613 1.50057 16.3053 1.81606 16.3053ZM22.3872 16.3053C22.7026 16.3053 22.9586 16.5613 22.9586 16.8768C22.9586 17.1922 22.7026 17.4482 22.3872 17.4482C22.0717 17.4482 21.8157 17.1922 21.8157 16.8768C21.8157 16.5613 22.0717 16.3053 22.3872 16.3053ZM7.53042 22.0196C7.84591 22.0196 8.1019 22.2756 8.1019 22.5911C8.1019 22.9066 7.84591 23.1626 7.53042 23.1626C7.21493 23.1626 6.95893 22.9066 6.95893 22.5911C6.95893 22.2756 7.21493 22.0196 7.53042 22.0196ZM12.1017 22.0196C12.4172 22.0196 12.6732 22.2756 12.6732 22.5911C12.6732 22.9066 12.4172 23.1626 12.1017 23.1626C11.7862 23.1626 11.5302 22.9066 11.5302 22.5911C11.5302 22.2756 11.7862 22.0196 12.1017 22.0196ZM16.673 22.0196C16.9885 22.0196 17.2445 22.2756 17.2445 22.5911C17.2445 22.9066 16.9885 23.1626 16.673 23.1626C16.3575 23.1626 16.1015 22.9066 16.1015 22.5911C16.1015 22.2756 16.3575 22.0196 16.673 22.0196Z"
                            />
                          </mask>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M7.53057 0.305664C6.5843 0.305664 5.81631 1.07365 5.81631 2.01992C5.81631 2.76572 6.29347 3.40054 6.95908 3.63583V4.93416C5.83967 5.16107 4.95747 6.04328 4.73055 7.1627H3.43222C3.1967 6.49707 2.56186 6.01992 1.81631 6.01992C0.870038 6.01992 0.102051 6.78791 0.102051 7.73418C0.102051 8.68045 0.870038 9.44844 1.81631 9.44844C2.56211 9.44844 3.19692 8.97128 3.43222 8.30566H4.67334V11.7342H3.43222C3.1967 11.0686 2.56186 10.5914 1.81631 10.5914C0.870038 10.5914 0.102051 11.3594 0.102051 12.3057C0.102051 13.2519 0.870038 14.0199 1.81631 14.0199C2.56211 14.0199 3.19692 13.5428 3.43222 12.8771H4.67334V16.3057H3.43222C3.1967 15.64 2.56186 15.1629 1.81631 15.1629C0.870038 15.1629 0.102051 15.9309 0.102051 16.8771C0.102051 17.8234 0.870038 18.5914 1.81631 18.5914C2.56211 18.5914 3.19692 18.1142 3.43222 17.4486H4.73055C4.95746 18.568 5.83967 19.4502 6.95908 19.6772V20.9755C6.29346 21.211 5.81631 21.8458 5.81631 22.5914C5.81631 23.5377 6.5843 24.3057 7.53057 24.3057C8.47684 24.3057 9.24483 23.5377 9.24483 22.5914C9.24483 21.8456 8.76766 21.2108 8.10205 20.9755V19.7344H11.5306V20.9755C10.8649 21.211 10.3878 21.8458 10.3878 22.5914C10.3878 23.5377 11.1558 24.3057 12.1021 24.3057C13.0483 24.3057 13.8163 23.5377 13.8163 22.5914C13.8163 21.8456 13.3391 21.2108 12.6735 20.9755V19.7344H16.102V20.9755C15.4364 21.211 14.9593 21.8458 14.9593 22.5914C14.9593 23.5377 15.7273 24.3057 16.6735 24.3057C17.6198 24.3057 18.3878 23.5377 18.3878 22.5914C18.3878 21.8456 17.9106 21.2108 17.245 20.9755V19.6772C18.3644 19.4503 19.2466 18.568 19.4736 17.4486H20.7719C21.0074 18.1143 21.6422 18.5914 22.3878 18.5914C23.3341 18.5914 24.1021 17.8234 24.1021 16.8771C24.1021 15.9309 23.3341 15.1629 22.3878 15.1629C21.642 15.1629 21.0072 15.6401 20.7719 16.3057H19.5308V12.8771H20.7719C21.0074 13.5428 21.6422 14.0199 22.3878 14.0199C23.3341 14.0199 24.1021 13.2519 24.1021 12.3057C24.1021 11.3594 23.3341 10.5914 22.3878 10.5914C21.642 10.5914 21.0072 11.0686 20.7719 11.7342H19.5308V8.30566H20.7719C21.0074 8.97129 21.6422 9.44844 22.3878 9.44844C23.3341 9.44844 24.1021 8.68045 24.1021 7.73418C24.1021 6.78791 23.3341 6.01992 22.3878 6.01992C21.642 6.01992 21.0072 6.49708 20.7719 7.1627H19.4736C19.2466 6.04328 18.3644 5.16108 17.245 4.93416V3.63583C17.9106 3.40031 18.3878 2.76548 18.3878 2.01992C18.3878 1.07365 17.6198 0.305664 16.6735 0.305664C15.7273 0.305664 14.9593 1.07365 14.9593 2.01992C14.9593 2.76572 15.4364 3.40054 16.102 3.63583V4.87695H12.6735V3.63583C13.3392 3.40031 13.8163 2.76548 13.8163 2.01992C13.8163 1.07365 13.0483 0.305664 12.1021 0.305664C11.1558 0.305664 10.3878 1.07365 10.3878 2.01992C10.3878 2.76572 10.865 3.40054 11.5306 3.63583V4.87695H8.10205V3.63583C8.76767 3.40031 9.24483 2.76548 9.24483 2.01992C9.24483 1.07365 8.47684 0.305664 7.53057 0.305664ZM7.53057 1.44844C7.84606 1.44844 8.10205 1.70443 8.10205 2.01992C8.10205 2.33541 7.84606 2.59141 7.53057 2.59141C7.21508 2.59141 6.95908 2.33541 6.95908 2.01992C6.95908 1.70443 7.21508 1.44844 7.53057 1.44844ZM12.1019 1.44844C12.4173 1.44844 12.6733 1.70443 12.6733 2.01992C12.6733 2.33541 12.4173 2.59141 12.1019 2.59141C11.7864 2.59141 11.5304 2.33541 11.5304 2.01992C11.5304 1.70443 11.7864 1.44844 12.1019 1.44844ZM16.6731 1.44844C16.9886 1.44844 17.2446 1.70443 17.2446 2.01992C17.2446 2.33541 16.9886 2.59141 16.6731 2.59141C16.3577 2.59141 16.1017 2.33541 16.1017 2.01992C16.1017 1.70443 16.3577 1.44844 16.6731 1.44844ZM7.53027 6.01973H16.6731C17.6194 6.01973 18.3874 6.78771 18.3874 7.73398V16.8769C18.3874 17.8231 17.6194 18.5911 16.6731 18.5911H7.53027C6.584 18.5911 5.81601 17.8231 5.81601 16.8769V7.73398C5.81601 6.78771 6.584 6.01973 7.53027 6.01973ZM1.81592 7.1625C2.13141 7.1625 2.3874 7.41849 2.3874 7.73398C2.3874 8.04948 2.13141 8.30547 1.81592 8.30547C1.50042 8.30547 1.24443 8.04948 1.24443 7.73398C1.24443 7.41849 1.50042 7.1625 1.81592 7.1625ZM22.387 7.1625C22.7025 7.1625 22.9585 7.41849 22.9585 7.73398C22.9585 8.04948 22.7025 8.30547 22.387 8.30547C22.0715 8.30547 21.8155 8.04948 21.8155 7.73398C21.8155 7.41849 22.0715 7.1625 22.387 7.1625ZM1.81606 11.734C2.13156 11.734 2.38755 11.99 2.38755 12.3055C2.38755 12.621 2.13156 12.877 1.81606 12.877C1.50057 12.877 1.24458 12.621 1.24458 12.3055C1.24458 11.99 1.50057 11.734 1.81606 11.734ZM22.3872 11.734C22.7026 11.734 22.9586 11.99 22.9586 12.3055C22.9586 12.621 22.7026 12.877 22.3872 12.877C22.0717 12.877 21.8157 12.621 21.8157 12.3055C21.8157 11.99 22.0717 11.734 22.3872 11.734ZM1.81606 16.3053C2.13156 16.3053 2.38755 16.5613 2.38755 16.8768C2.38755 17.1922 2.13156 17.4482 1.81606 17.4482C1.50057 17.4482 1.24458 17.1922 1.24458 16.8768C1.24458 16.5613 1.50057 16.3053 1.81606 16.3053ZM22.3872 16.3053C22.7026 16.3053 22.9586 16.5613 22.9586 16.8768C22.9586 17.1922 22.7026 17.4482 22.3872 17.4482C22.0717 17.4482 21.8157 17.1922 21.8157 16.8768C21.8157 16.5613 22.0717 16.3053 22.3872 16.3053ZM7.53042 22.0196C7.84591 22.0196 8.1019 22.2756 8.1019 22.5911C8.1019 22.9066 7.84591 23.1626 7.53042 23.1626C7.21493 23.1626 6.95893 22.9066 6.95893 22.5911C6.95893 22.2756 7.21493 22.0196 7.53042 22.0196ZM12.1017 22.0196C12.4172 22.0196 12.6732 22.2756 12.6732 22.5911C12.6732 22.9066 12.4172 23.1626 12.1017 23.1626C11.7862 23.1626 11.5302 22.9066 11.5302 22.5911C11.5302 22.2756 11.7862 22.0196 12.1017 22.0196ZM16.673 22.0196C16.9885 22.0196 17.2445 22.2756 17.2445 22.5911C17.2445 22.9066 16.9885 23.1626 16.673 23.1626C16.3575 23.1626 16.1015 22.9066 16.1015 22.5911C16.1015 22.2756 16.3575 22.0196 16.673 22.0196Z"
                            fill="currentColor"
                            stroke="currentColor"
                            stroke-width="2.4"
                            mask="url(#path-1-inside-1_7447_75270)"
                          />
                          <path
                            d="M14.2695 14.2934H13.1113V12.0014C13.1113 11.6635 12.9498 11.4946 12.6269 11.4946C12.3645 11.4946 12.1449 11.6168 11.9683 11.861V14.2934H10.8026V12.0014C10.8026 11.6635 10.6411 11.4946 10.3182 11.4946C10.0759 11.4946 9.85893 11.6168 9.66717 11.861V14.2934H8.50146V10.5279H9.66717V10.9879C9.76305 10.8579 9.92201 10.7332 10.1441 10.6136C10.3661 10.4941 10.6083 10.4343 10.8707 10.4343C11.4107 10.4343 11.7564 10.6578 11.9078 11.1048C12.0238 10.9229 12.1954 10.767 12.4225 10.637C12.6546 10.5019 12.9044 10.4343 13.1719 10.4343C13.5201 10.4343 13.79 10.5305 13.9818 10.7228C14.1736 10.9099 14.2695 11.1906 14.2695 11.5648V14.2934Z"
                            fill="#6D7CFF"
                          />
                          <path
                            d="M16.4421 14.1688C16.3008 14.3143 16.1343 14.3871 15.9425 14.3871C15.7507 14.3871 15.5842 14.3143 15.4429 14.1688C15.3016 14.0232 15.231 13.8517 15.231 13.6542C15.231 13.4567 15.3016 13.2852 15.4429 13.1397C15.5842 12.9942 15.7507 12.9214 15.9425 12.9214C16.1343 12.9214 16.3008 12.9942 16.4421 13.1397C16.5834 13.2852 16.654 13.4567 16.654 13.6542C16.654 13.8517 16.5834 14.0232 16.4421 14.1688Z"
                            fill="#6D7CFF"
                          />
                        </svg> */}
                        <svg
                          version="1.2"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 32 32"
                          width="32"
                          height="32"
                          fill="currentColor"
                          stroke="currentColor"
                        >
                          <title>New Project</title>
                          <defs>
                            <clipPath clipPathUnits="userSpaceOnUse" id="cp1">
                              <path d="m12.62 3.18c0 0.95-0.61 1.75-1.45 2.05v1.58h4.35v-1.58c-0.84-0.3-1.45-1.1-1.45-2.05 0-1.2 0.98-2.18 2.18-2.18 1.2 0 2.18 0.98 2.18 2.18 0 0.95-0.61 1.75-1.45 2.05v1.58h4.35v-1.58c-0.84-0.3-1.45-1.1-1.45-2.05 0-1.2 0.98-2.18 2.18-2.18 1.2 0 2.18 0.98 2.18 2.18 0 0.95-0.61 1.75-1.45 2.05v1.65c1.42 0.29 2.54 1.41 2.83 2.83h1.65c0.3-0.84 1.1-1.45 2.05-1.45 1.2 0 2.18 0.98 2.18 2.18 0 1.2-0.98 2.18-2.18 2.18-0.95 0-1.75-0.61-2.05-1.45h-1.58v4.35h1.58c0.3-0.84 1.1-1.45 2.05-1.45 1.2 0 2.18 0.98 2.18 2.18 0 1.2-0.98 2.18-2.18 2.18-0.95 0-1.75-0.61-2.05-1.45h-1.58v4.35h1.58c0.3-0.84 1.1-1.45 2.05-1.45 1.2 0 2.18 0.98 2.18 2.18 0 1.2-0.98 2.18-2.18 2.18-0.95 0-1.75-0.61-2.05-1.45h-1.65c-0.29 1.42-1.41 2.54-2.83 2.83v1.65c0.84 0.3 1.45 1.1 1.45 2.05 0 1.2-0.98 2.18-2.18 2.18-1.2 0-2.18-0.98-2.18-2.18 0-0.95 0.61-1.75 1.45-2.05v-1.58h-4.35v1.58c0.84 0.3 1.45 1.1 1.45 2.05 0 1.2-0.98 2.18-2.18 2.18-1.2 0-2.18-0.98-2.18-2.18 0-0.95 0.61-1.75 1.45-2.05v-1.58h-4.35v1.58c0.84 0.3 1.45 1.1 1.45 2.05 0 1.2-0.98 2.18-2.18 2.18-1.2 0-2.18-0.98-2.18-2.18 0-0.95 0.61-1.75 1.45-2.05v-1.65c-1.42-0.29-2.54-1.41-2.83-2.83h-1.65c-0.3 0.84-1.1 1.45-2.05 1.45-1.2 0-2.18-0.98-2.18-2.18 0-1.2 0.98-2.18 2.18-2.18 0.95 0 1.75 0.61 2.05 1.45h1.58v-4.35h-1.58c-0.3 0.84-1.1 1.45-2.05 1.45-1.2 0-2.18-0.98-2.18-2.18 0-1.2 0.98-2.18 2.18-2.18 0.95 0 1.75 0.61 2.05 1.45h1.58v-4.35h-1.58c-0.3 0.84-1.1 1.45-2.05 1.45-1.2 0-2.18-0.98-2.18-2.18 0-1.2 0.98-2.18 2.18-2.18 0.95 0 1.75 0.61 2.05 1.45h1.65c0.29-1.42 1.41-2.54 2.83-2.83v-1.65c-0.84-0.3-1.45-1.1-1.45-2.05 0-1.2 0.98-2.18 2.18-2.18 1.2 0 2.18 0.98 2.18 2.18zm-2.91 0c0 0.4 0.33 0.72 0.73 0.72 0.4 0 0.73-0.32 0.73-0.72 0-0.4-0.33-0.73-0.73-0.73-0.4 0-0.73 0.33-0.73 0.73zm5.81 0c0 0.4 0.33 0.72 0.73 0.72 0.4 0 0.73-0.32 0.73-0.72 0-0.4-0.33-0.73-0.73-0.73-0.4 0-0.73 0.33-0.73 0.73zm5.81 0c0 0.4 0.33 0.72 0.73 0.72 0.4 0 0.73-0.32 0.73-0.72 0-0.4-0.33-0.73-0.73-0.73-0.4 0-0.73 0.33-0.73 0.73zm-13.07 19.34c0 0.95 0.77 1.72 1.72 1.72h12.54c0.95 0 1.72-0.77 1.72-1.72v-12.54c0-0.95-0.77-1.72-1.72-1.72h-12.54c-0.95 0-1.72 0.77-1.72 1.72zm-5.81-12.09c0 0.4 0.33 0.73 0.73 0.73 0.4 0 0.72-0.33 0.72-0.73 0-0.4-0.32-0.72-0.72-0.72-0.4 0-0.73 0.32-0.73 0.72zm26.14 0c0 0.4 0.33 0.73 0.73 0.73 0.4 0 0.73-0.33 0.73-0.73 0-0.4-0.33-0.72-0.73-0.72-0.4 0-0.73 0.32-0.73 0.72zm-26.14 5.81c0 0.4 0.33 0.73 0.73 0.73 0.4 0 0.72-0.33 0.72-0.73 0-0.4-0.32-0.72-0.72-0.72-0.4 0-0.73 0.32-0.73 0.72zm26.14 0c0 0.4 0.33 0.73 0.73 0.73 0.4 0 0.73-0.33 0.73-0.73 0-0.4-0.33-0.72-0.73-0.72-0.4 0-0.73 0.32-0.73 0.72zm-26.14 5.81c0 0.4 0.33 0.73 0.73 0.73 0.4 0 0.72-0.33 0.72-0.73 0-0.4-0.32-0.72-0.72-0.72-0.4 0-0.73 0.32-0.73 0.72zm26.14 0c0 0.4 0.33 0.73 0.73 0.73 0.4 0 0.73-0.33 0.73-0.73 0-0.4-0.33-0.72-0.73-0.72-0.4 0-0.73 0.32-0.73 0.72zm-18.88 7.26c0 0.4 0.33 0.73 0.73 0.73 0.4 0 0.73-0.33 0.73-0.73 0-0.4-0.33-0.72-0.73-0.72-0.4 0-0.73 0.32-0.73 0.72zm5.81 0c0 0.4 0.33 0.73 0.73 0.73 0.4 0 0.73-0.33 0.73-0.73 0-0.4-0.33-0.72-0.73-0.72-0.4 0-0.73 0.32-0.73 0.72zm5.81 0c0 0.4 0.33 0.73 0.73 0.73 0.4 0 0.73-0.33 0.73-0.73 0-0.4-0.33-0.72-0.73-0.72-0.4 0-0.73 0.32-0.73 0.72z" />
                            </clipPath>
                            <image
                              className="text-currentColor"
                              width="206"
                              height="180"
                              id="img1"
                              href="data:image/png;base64,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"
                            />
                          </defs>

                          <g id="Folder 1" filter="url(#f0)">
                            <g id="Clip-Path" clip-path="url(#cp1)">
                              <path
                                id="Layer"
                                fill-rule="evenodd"
                                className="s0"
                                d="m12.6 3.2c0 0.9-0.6 1.7-1.4 2v1.6h4.3v-1.6c-0.8-0.3-1.4-1.1-1.4-2 0-1.2 0.9-2.2 2.2-2.2 1.2 0 2.1 1 2.1 2.2 0 0.9-0.6 1.7-1.4 2v1.6h4.3v-1.6c-0.8-0.3-1.4-1.1-1.4-2 0-1.2 1-2.2 2.2-2.2 1.2 0 2.1 1 2.1 2.2 0 0.9-0.6 1.7-1.4 2v1.7c1.4 0.3 2.5 1.4 2.8 2.8h1.7c0.3-0.8 1.1-1.4 2-1.4 1.2 0 2.2 0.9 2.2 2.1 0 1.2-1 2.2-2.2 2.2-0.9 0-1.7-0.6-2-1.4h-1.6v4.3h1.6c0.3-0.8 1.1-1.4 2-1.4 1.2 0 2.2 0.9 2.2 2.1 0 1.3-1 2.2-2.2 2.2-0.9 0-1.7-0.6-2-1.4h-1.6v4.3h1.6c0.3-0.8 1.1-1.4 2-1.4 1.2 0 2.2 1 2.2 2.2 0 1.2-1 2.1-2.2 2.1-0.9 0-1.7-0.6-2-1.4h-1.7c-0.3 1.4-1.4 2.5-2.8 2.8v1.7c0.8 0.3 1.4 1.1 1.4 2 0 1.2-0.9 2.2-2.1 2.2-1.2 0-2.2-1-2.2-2.2 0-0.9 0.6-1.7 1.4-2v-1.6h-4.3v1.6c0.8 0.3 1.4 1.1 1.4 2 0 1.2-0.9 2.2-2.1 2.2-1.3 0-2.2-1-2.2-2.2 0-0.9 0.6-1.7 1.4-2v-1.6h-4.3v1.6c0.8 0.3 1.4 1.1 1.4 2 0 1.2-1 2.2-2.2 2.2-1.2 0-2.1-1-2.1-2.2 0-0.9 0.6-1.7 1.4-2v-1.7c-1.4-0.3-2.5-1.4-2.8-2.8h-1.7c-0.3 0.8-1.1 1.4-2 1.4-1.2 0-2.2-0.9-2.2-2.1 0-1.2 1-2.2 2.2-2.2 0.9 0 1.7 0.6 2 1.4h1.6v-4.3h-1.6c-0.3 0.8-1.1 1.4-2 1.4-1.2 0-2.2-0.9-2.2-2.2 0-1.2 1-2.1 2.2-2.1 0.9 0 1.7 0.6 2 1.4h1.6v-4.3h-1.6c-0.3 0.8-1.1 1.4-2 1.4-1.2 0-2.2-1-2.2-2.2 0-1.2 1-2.1 2.2-2.1 0.9 0 1.7 0.6 2 1.4h1.7c0.3-1.4 1.4-2.5 2.8-2.8v-1.7c-0.8-0.3-1.4-1.1-1.4-2 0-1.2 0.9-2.2 2.1-2.2 1.2 0 2.2 1 2.2 2.2zm-2.9 0c0 0.4 0.3 0.7 0.7 0.7 0.4 0 0.8-0.3 0.8-0.7 0-0.4-0.4-0.7-0.8-0.7-0.4 0-0.7 0.3-0.7 0.7zm5.8 0c0 0.4 0.3 0.7 0.7 0.7 0.5 0 0.8-0.3 0.8-0.7 0-0.4-0.3-0.7-0.8-0.7-0.4 0-0.7 0.3-0.7 0.7zm5.8 0c0 0.4 0.4 0.7 0.8 0.7 0.4 0 0.7-0.3 0.7-0.7 0-0.4-0.3-0.7-0.7-0.7-0.4 0-0.8 0.3-0.8 0.7zm-13 19.3c0 1 0.7 1.7 1.7 1.7h12.5c1 0 1.7-0.7 1.7-1.7v-12.5c0-1-0.7-1.7-1.7-1.7h-12.5c-1 0-1.7 0.7-1.7 1.7zm-5.8-12.1c0 0.4 0.3 0.7 0.7 0.7 0.4 0 0.7-0.3 0.7-0.7 0-0.4-0.3-0.7-0.7-0.7-0.4 0-0.7 0.3-0.7 0.7zm26.1 0c0 0.4 0.3 0.7 0.7 0.7 0.4 0 0.7-0.3 0.7-0.7 0-0.4-0.3-0.7-0.7-0.7-0.4 0-0.7 0.3-0.7 0.7zm-26.1 5.8c0 0.4 0.3 0.7 0.7 0.7 0.4 0 0.7-0.3 0.7-0.7 0-0.4-0.3-0.7-0.7-0.7-0.4 0-0.7 0.3-0.7 0.7zm26.1 0c0 0.4 0.3 0.7 0.7 0.7 0.4 0 0.7-0.3 0.7-0.7 0-0.4-0.3-0.7-0.7-0.7-0.4 0-0.7 0.3-0.7 0.7zm-26.1 5.8c0 0.4 0.3 0.7 0.7 0.7 0.4 0 0.7-0.3 0.7-0.7 0-0.4-0.3-0.7-0.7-0.7-0.4 0-0.7 0.3-0.7 0.7zm26.1 0c0 0.4 0.3 0.7 0.7 0.7 0.4 0 0.7-0.3 0.7-0.7 0-0.4-0.3-0.7-0.7-0.7-0.4 0-0.7 0.3-0.7 0.7zm-18.9 7.3c0 0.4 0.3 0.7 0.7 0.7 0.4 0 0.8-0.3 0.8-0.7 0-0.4-0.4-0.8-0.8-0.8-0.4 0-0.7 0.4-0.7 0.8zm5.8 0c0 0.4 0.3 0.7 0.7 0.7 0.5 0 0.8-0.3 0.8-0.7 0-0.4-0.3-0.8-0.8-0.8-0.4 0-0.7 0.4-0.7 0.8zm5.8 0c0 0.4 0.4 0.7 0.8 0.7 0.4 0 0.7-0.3 0.7-0.7 0-0.4-0.3-0.8-0.7-0.8-0.4 0-0.8 0.4-0.8 0.8z"
                              />
                            </g>
                            <use
                              id="Background copy 4"
                              href="#img1"
                              transform="matrix(.065,0,0,.065,9.62,10.169)"
                            />
                          </g>
                        </svg>
                        <span className="text-black dark:text-[#fff] dark:group-hover:text-white-dark ltr:pl-3 rtl:pr-3">
                          {t("gpt-vetting")}
                        </span>
                      </div>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/apps/payroll" className="group">
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>

                        <span className="text-black dark:text-[#fff] dark:group-hover:text-white-dark ltr:pl-3 rtl:pr-3">
                          {t("Payroll")}
                        </span>
                      </div>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/apps/reports" className="group">
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                          />
                        </svg>

                        <span className="text-black dark:text-[#fff] dark:group-hover:text-white-dark ltr:pl-3 rtl:pr-3">
                          {t("Reports")}
                        </span>
                      </div>
                    </Link>
                  </li>

                </ul>
              </li>
            </ul>
          </PerfectScrollbar>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
