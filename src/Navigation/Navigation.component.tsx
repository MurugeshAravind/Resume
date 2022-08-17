import React from "react";

const Navigation = () => {
  const handleClick = (event: any, name: string) => {
    event.preventDefault();
    let finalNameString;
    if (name === "Work")
      finalNameString = name.toString().replace("Work", "Work History 💼");
    if (name === "Education")
      finalNameString = name.toString().replace("Education", "Education 🎓");
    const section = document.getElementById(
      finalNameString ? finalNameString : name
    );
    const offsetTop: any = section?.offsetTop;
    window.scrollTo({
      top: offsetTop - 30 || 0,
      behavior: "smooth",
    });
  };
  let mainAnchorLinks = ['Home', 'Work', 'Education', 'Projects']
  return (
    <nav className="dark:bg-slate-900 bg-white fixed z-10 w-full">
      <ul className="flex hover:cursor-pointer space-x-5 justify-center dark:text-gray-200">
        {mainAnchorLinks.map((x) => {
          return <li
          key={x}
          className="lg:md:text-2xl hover:animate-pulse hover:underline"
          onClick={(e) => handleClick(e, x)}
        >{x}</li>
        })}
        <li
          className="lg:md:text-2xl hover:animate-pulse hover:underline"
          onClick={(e) => handleClick(e, "Top")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 lg:md:mt-2 mt-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
