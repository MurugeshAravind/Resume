import { useEffect, useState } from "react";
import dataJSON from "../data.json";

const Section = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(dataJSON);
  }, []);
  const returnArticleData = (articleData, index, key) => {
    if (articleData.length > 0) {
      console.log(articleData[index][key]);
      return articleData[index][key].map((y, i) => {
        debugger;
        return (
          <article
            key={i}
            className="dark:bg-slate-800 dark:text-gray-300 hover:shadow-slate-500 lg:flex-1 md:flex-0"
          >
            <h3 className="text-2xl">
              <strong>
                {key === "Work History 💼" ? y.Designation : y.Degree}
              </strong>
            </h3>
            <h4 className="text-lg">
              <strong>
                {key === "Work History 💼" ? y.Company : y.Institution}
                <span className="italic text-base ml-2">{y.Duration}</span>
              </strong>
            </h4>
            {key === "Work History 💼" &&
              y.Responsibilities.map((z, id) => <p key={id}>{z}</p>)}
            {key === "Education 🎓" && y.Marks}
          </article>
        );
      });
    } else {
      return null;
    }
  };

  return (
    <>
      <div className=" dark:bg-slate-800">
        <section>
          <h1 className="text-4xl text-center dark:text-gray-200">
            Work History 💼
          </h1>
          <div className="lg:md:grid lg:md:grid-rows-3 lg:md:grid-flow-col lg:md:gap-10 flex flex-wrap gap-10 p-6">
            {data.length > 0
              ? returnArticleData(data, 0, "Work History 💼")
              : null}
          </div>
        </section>
        <hr className="bg-gray-100"></hr>
        <section className="mt-5">
          <h1 className="text-4xl text-center dark:text-gray-200">
            Education 🎓
          </h1>
          <div className="lg:md:grid lg:md:grid-rows-2 lg:md:grid-flow-col lg:md:gap-10 flex flex-wrap gap-10 p-6">
            {data.length > 0
              ? returnArticleData(data, 1, "Education 🎓")
              : null}
          </div>
        </section>
      </div>
    </>
  );
};
export default Section;
