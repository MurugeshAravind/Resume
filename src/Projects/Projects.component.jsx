const Projects = () => {
  return (
    <>
      <h1 className="text-4xl dark:bg-slate-900 dark:text-gray-200 text-center p-5 shadow-lg">Projects</h1>
      <div className="flex flex-wrap justify-evenly shadow-md">
        <div className=" dark:bg-slate-900 dark:text-gray-200 border-solid border-2 dark:border-slate-100 shadow-lg flex-auto">
          <h3 className="text-3xl p-5 relative text-center">
            <em>Weather App</em>
          </h3>
          <iframe
            src="https://arav-weather-app.herokuapp.com/"
            className=" dark:bg-slate-900 dark:text-gray-200 relative w-full"
            title="Weather App"
            height={"800px"}
          />
        </div>
        <div className=" dark:bg-slate-900 dark:text-gray-200 border-solid border-2 dark:border-slate-100 shadow-lg flex-auto">
          <h3 className="text-3xl p-5 relative text-center">
            <em>Movie Search</em>
          </h3>
          <iframe
            src="https://murugesharavind.github.io/OMDB_Movie_Search/"
            title="Movie Search"
            className=" dark:bg-slate-900 dark:text-gray-200 relative w-full"
            height={"800px"}
          />
        </div>
        <div className=" dark:bg-slate-900 dark:text-gray-200 border-solid border-2 dark:border-slate-100 shadow-lg flex-auto">
          <h3 className="text-3xl p-5 relative text-center">
            <em>Crown Clothing</em>
          </h3>
          <iframe
            src="https://thriving-otter-ead1ee.netlify.app/"
            title="Movie Search"
            className=" dark:bg-slate-900 dark:text-gray-200 relative w-full"
            height={"800px"}
          />
        </div>
      </div>
    </>
  );
};
export default Projects;