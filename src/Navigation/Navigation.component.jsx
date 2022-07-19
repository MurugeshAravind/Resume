const Navigation = () => {
  const handleClick = (event, name) => {
    event.preventDefault();
    let finalNameString;
    if (name === "Work")
      finalNameString = name.toString().replace("Work", "Work History 💼");
    if (name === "Education")
      finalNameString = name.toString().replace("Education", "Education 🎓");
    const section = document.getElementById(
      finalNameString ? finalNameString : name
    );
    window.scrollTo({
      top: section?.offsetTop - 30 || 0,
      behavior: "smooth",
    });
  };
  return (
    <nav className="dark:bg-slate-900 bg-white fixed z-10 w-full">
      <ul className="flex space-x-3 hover:cursor-pointer justify-center dark:text-gray-200">
        <li
          className="lg:md:text-2xl hover:animate-pulse hover:underline"
          onClick={(e) => handleClick(e, "Home")}
        >
          Home
        </li>
        <li
          className="lg:md:text-2xl hover:animate-pulse hover:underline"
          onClick={(e) => handleClick(e, "Work")}
        >
          Work
        </li>
        <li
          className="lg:md:text-2xl hover:animate-pulse hover:underline"
          onClick={(e) => handleClick(e, "Education")}
        >
          Education
        </li>
        <li
          className="lg:md:text-2xl hover:animate-pulse hover:underline"
          onClick={(e) => handleClick(e, "Projects")}
        >
          Projects
        </li>
        <li
          className="lg:md:text-2xl hover:animate-pulse hover:underline"
          onClick={(e) => handleClick(e, "Top")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mt-2"
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
