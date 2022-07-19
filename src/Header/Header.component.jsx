import { MailIcon, PhoneIcon, SunIcon, MoonIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
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
  return (
    <div className=" dark:bg-slate-900 bg-white w-full" id="Home">
      <Image
        className={
          "float-left lg:md:w-72 w-auto h-auto lg:md:mt-5 lg:md:ml-1"
        }
        alt={"aravind"}
        src="./aravind.avif"
      />
      <div className="dark:text-gray-200 p-9 text-center text-5xl shadow-md font-sans dark:bg-slate-900">
        <div>
          <h1 className="mb-2 font-mono text-4xl dark:text-gray-100 md:text-6xl">
            hi, I&apos;m <br className="block md:hidden" />
            <span className="relative">
              <span className="h-20 pt-2 overflow-x-hidden whitespace-nowrap text-brand-accent">
                Aravind <span className="text-3xl lg:md:text-5xl">👋</span>
              </span>
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
      </div>
      <hr className="bg-gray-100"></hr>
    </div>
  );
};
export default Header;
