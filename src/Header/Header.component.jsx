import { MailIcon, PhoneIcon, SunIcon, MoonIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import styles from "./Header.component.module.css";
import Image from "../Image/Image.component";
const Header = () => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const htmlElement = document.getElementsByTagName("html")[0];
  useEffect(() => {
    setEmail("arvindh.balasubramaniam@gmail.com");
    setPhoneNumber(9443763344);
  }, []);
  const handleMail = (e) => {
    e.preventDefault();
    window.open(`mailto:${email}`);
  };
  const toggleMode = (e) => {
    e.preventDefault();
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) htmlElement.classList.remove("dark");
    else htmlElement.classList.add("dark");
  };
  const handleClick = (e) => {
    e.preventDefault();
    const { innerText } = e.target;
    htmlElement.classList.add("scroll-smooth");
    if (innerText === "Work") window.scrollTo(0, 0);
    if (innerText === "Education") window.scrollTo(0, 711);
    if (innerText === "Projects") window.scrollTo(0, 1081);
  };
  return (
    <div className="w-full dark:bg-slate-900 bg-white sticky top-0 z-10">
      <Image
        className={
          "float-left lg:md:w-72 w-auto h-auto lg:md:mt-1 lg:md:ml-1 rounded-md"
        }
        alt={"aravind"}
        src="./aravind.avif"
      />
      <nav className="dark:text-gray-200 p-9 text-center text-5xl shadow-md font-sans dark:bg-slate-900">
        <div>
          <h1 className="mb-2 font-mono text-4xl dark:text-gray-100 md:text-6xl">
            hi, I&apos;m <br className="block md:hidden" />
            <span className="relative">
              <span className="h-20 pt-2 overflow-x-hidden whitespace-nowrap text-brand-accent">
                Aravind <span className="text-3xl lg:md:text-5xl">👋</span>
              </span>
              <span
                className={`lg:md:${styles.cursor} absolute -bottom-0 left-0 -top-1 inline-block dark:bg-slate-900 bg-white lg:md:w-full animate-type will-change`}
              ></span>
            </span>
          </h1>
          <div>
            <MailIcon
              className="h-6 w-6 bg-transparent inline mt-2 hover:animate-pulse hover:scale-125"
              onClick={handleMail}
            />
            <span className="lg:md:text-lg text-2xl break-words inline">
              &nbsp;{email}
            </span>
          </div>
          <div>
            <PhoneIcon className="h-6 w-6 bg-transparent inline mt-2 hover:animate-pulse hover:scale-125" />
            <span className="lg:md:text-lg text-2xl break-words inline">
              &nbsp;{phoneNumber}
            </span>
          </div>
          <blockquote className="lg:md:text-lg text-2xl break-words inline">
            "I am a web developer !" 💻
          </blockquote>
        </div>
        <div className="lg:md:float-right lg:md:absolute lg:md:top-10 lg:md:right-10 float-none flex justify-center">
          {!isDarkMode ? (
            <SunIcon
              className="lg:md:h-6 lg:md:w-6 h-10 w-10 lg:md:m-10 m-5 text-slate-500 hover:text-amber-400 scale-150"
              onClick={toggleMode}
            />
          ) : (
            <MoonIcon
              className="lg:md:h-6 lg:md:w-6 h-10 w-10 lg:md:m-10 m-5 text-slate-500 scale-150 hover:text-slate-300"
              onClick={toggleMode}
            />
          )}
        </div>
        <>
          <ul className="flex lg:md:float-right justify-center space-x-3 text-sm hover:cursor-pointer">
            <li className="text-2xl hover:animate-pulse" onClick={handleClick}>
              Work
            </li>
            <li className="text-2xl hover:animate-pulse" onClick={handleClick}>
              Education
            </li>
            <li className="text-2xl hover:animate-pulse" onClick={handleClick}>
              Projects
            </li>
          </ul>
        </>
      </nav>
      <hr className="bg-gray-100"></hr>
    </div>
  );
};
export default Header;
