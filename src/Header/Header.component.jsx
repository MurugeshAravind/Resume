import { MailIcon, PhoneIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
const Header = () => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(null);
  useEffect(() => {
    setEmail("arvindh.balasubramaniam@gmail.com");
    setPhoneNumber(9443763344);
  }, []);
  const handleClick = (e) => {
    e.preventDefault();
    window.open(`mailto:${email}`);
  };
  return (
    <>
      <nav className="text-zinc-700 p-9 border text-center text-5xl shadow-slate-500 shadow-2xl font-sans bg-gray-100">
        Murugesh Aravind
        <div>
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
      </nav>
    </>
  );
};
export default Header;
