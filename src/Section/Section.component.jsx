import { useEffect, useId, useState } from "react";
import dataJSON from "../data.json";

const Section = () => {
  const [data, setData] = useState([]);
  const id = useId();
  useEffect(() => {
    setData(dataJSON);
  }, []);
  const flattenArray = (input) => {
    return input.reduce(
      (acc, cur) => acc.concat(Array.isArray(cur) ? flattenArray(cur) : cur),
      []
    );
  };
  const returnArticleData = (receivedData, key) => {
    let articleData = [...new Set(flattenArray(receivedData))];
    if (articleData && articleData.length > 0) {
      return articleData.map((y, i) => {
        return (
          <article
            key={`${id}_${i}`}
            className="dark:bg-slate-800 dark:text-gray-300 hover:shadow-slate-500"
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

  const returnSection = (data) => {
    return data.map((x, i) => (
      <div key={`${id}_${i}`}>
        <section>
          <h1 className="text-4xl text-center dark:text-gray-200">
            {Object.keys(x).toString()}
          </h1>
          <div className="lg:md:grid lg:md:grid-cols-3 flex flex-wrap gap-10 p-6">
            {Object.keys(x).length > 0
              ? returnArticleData(Object.values(x), Object.keys(x).toString())
              : null}
          </div>
        </section>
        <hr className="bg-gray-100"></hr>
      </div>
    ));
  };

  return <div className=" dark:bg-slate-800">{returnSection(data)}</div>;
};
export default Section;
