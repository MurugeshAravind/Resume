import { MailIcon, PhoneIcon, SunIcon, MoonIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import styles from "./Header.component.module.css";
const Header = () => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    setEmail("arvindh.balasubramaniam@gmail.com");
    setPhoneNumber(9443763344);
  }, []);
  const handleClick = (e) => {
    e.preventDefault();
    window.open(`mailto:${email}`);
  };
  const toggleMode = (e) => {
    e.preventDefault();
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode)
      document.getElementsByTagName("html")[0].classList.remove("dark");
    else document.getElementsByTagName("html")[0].classList.add("dark");
  };
  return (
    <>
      <nav className="dark:text-gray-200 p-9 text-center text-5xl shadow-md font-sans dark:bg-slate-800">
        <div>
          <h1 className="mb-2 font-mono text-4xl dark:text-gray-100 md:text-6xl">
            hi, I&apos;m <br className="block md:hidden" />
            <span className="relative">
              <span className="h-20 pt-2 overflow-x-hidden whitespace-nowrap text-brand-accent">
                Aravind <span className="text-3xl md:text-5xl">👋</span>
              </span>
              <span className={`${styles.cursor} absolute -bottom-0 left-0 -top-1 inline-block dark:bg-slate-800 bg-white w-full animate-type will-change`}></span>
            </span>
          </h1>
          <MailIcon
            className="h-6 w-6 bg-transparent inline mt-2 hover:animate-pulse hover:scale-125"
            onClick={handleClick}
          />
          <span className="text-lg inline mr-2">{email}</span>

          <PhoneIcon className="h-6 w-6 bg-transparent inline mt-2 hover:animate-pulse hover:scale-125" />
          <span className="text-lg inline mr-2">{phoneNumber}</span>
          <blockquote className="text-lg">
            "I am a web developer !" 💻
          </blockquote>
          <blockquote className="text-lg">
            "I would like to explore new things and like to keep my self
            updated" 🎯
          </blockquote>
        </div>
        <div className="lg:md:float-right lg:md:absolute lg:md:top-10 lg:md:right-10 float-none flex justify-center">
          {!isDarkMode ? (
            <SunIcon
              className="lg:md:h-6 lg:md:w-6 h-10 w-10 m-5 text-slate-500 hover:text-amber-400 scale-150"
              onClick={toggleMode}
            />
          ) : (
            <MoonIcon
              className="lg:md:h-6 lg:md:w-6 h-10 w-10 m-5 text-slate-500 scale-150 hover:text-slate-300"
              onClick={toggleMode}
            />
          )}
        </div>
      </nav>
      <hr className="bg-gray-100"></hr>
    </>
  );
};
export default Header;
