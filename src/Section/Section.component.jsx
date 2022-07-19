import { useEffect, useId, useState } from "react";
import dataJSON from "../data.json";

const Section = () => {
  const [data, setData] = useState([]);
  const id = useId();
  // get the initial data from json
  useEffect(() => {
    setData(dataJSON);
  }, []);
  // Flatten deeply nested array
  const flattenArray = (input) => {
    return input.reduce(
      (acc, cur) => acc.concat(Array.isArray(cur) ? flattenArray(cur) : cur),
      []
    );
  };
  const returnArticleData = (receivedData) => {
    let articleData = [...new Set(flattenArray(receivedData))];
    if (articleData && articleData.length > 0) {
      return articleData.map((y, i) => {
        return (
          <article
            key={`${id}_${i}`}
            className="dark:bg-slate-900 dark:text-gray-300 hover:shadow-slate-500"
          >
            {flattenArray(Object.values(y)).map((value, i) => {
              return (
                <div key={value}>
                  <h3>
                    <strong>
                      <p
                        className={!i ? "text-2xl italic underline" : "text-lg"}
                      >
                        {value}
                      </p>
                    </strong>
                  </h3>
                </div>
              );
            })}
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
          <h1 className="text-4xl text-center dark:text-gray-200" id={Object.keys(x).toString()}>
            {Object.keys(x).toString()}
          </h1>
          <div className="lg:md:grid lg:md:grid-cols-2 flex flex-wrap gap-10 p-6">
            {Object.keys(x).length > 0
              ? returnArticleData(Object.values(x))
              : null}
          </div>
        </section>
        <hr className="bg-gray-100"></hr>
      </div>
    ));
  };

  return (
    <div className=" dark:bg-slate-900">
      {returnSection(data)}
    </div>
  );
};
export default Section;
