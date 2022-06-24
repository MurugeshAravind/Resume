const Section = () => {
  return (
    <>
      <div className=" dark:bg-slate-800">
        <section>
          <h1 className="text-4xl text-center dark:text-gray-200">
            Work History 💼
          </h1>
          <div className="lg:md:grid lg:md:grid-rows-3 lg:md:grid-flow-col lg:md:gap-10 flex flex-wrap gap-10 p-6">
            <article className="dark:bg-slate-800 dark:text-gray-300 hover:shadow-slate-500 lg:flex-1 md:flex-0">
              <h3 className="text-2xl">
                <strong>Software Engineer</strong>
              </h3>
              <h4 className="text-lg">
                <strong>
                  Luxoft, India
                  <span className="italic text-base ml-2">
                    (Apr,2022 - Till now)
                  </span>
                </strong>
              </h4>
              <p>
                📌 Reviewed project specifications and designed technology
                solutions that met or exceeded performance expectations.
              </p>
              <p>
                📌 Worked with software development and testing team members to
                design and develop robust solutions to meet client requirements
                for functionality, scalability and performance.
              </p>
            </article>
            <article className=" dark:bg-slate-800 dark:text-gray-300 hover:shadow-slate-500 lg:flex-1 md:flex-0">
              <h3 className="text-2xl">
                <strong>Senior Associate Consultant</strong>
              </h3>
              <h4 className="text-lg">
                <strong>
                  Infosys, India
                  <span className="italic text-base ml-2">
                    (June,2020 - Apr,2022)
                  </span>
                </strong>
              </h4>
              <p>
                📌 Worked in RHPAM project were migration of old technology
                screens to new react UI/UX look and feel was done.
              </p>
              <p>
                📌 Monitored and frequently reported on project status to
                clients and verified projects met client requirements and
                quality standards.
              </p>
            </article>
            <article className=" dark:bg-slate-800 dark:text-gray-300 hover:shadow-slate-500 lg:flex-1 md:flex-0">
              <h3 className="text-2xl">
                <strong>Software Engineer</strong>
              </h3>
              <h4 className="text-lg">
                <strong>
                  Amazecodes Solutions Pvt Ltd, Bangalore, India
                  <span className="italic text-base ml-2">
                    (June,2018 - March,2020)
                  </span>
                </strong>
              </h4>
              <p>
                📌 Worked as contractor in Wipro for project called Quantum
                which deals with business and financial solutions of Wipro.
              </p>
              <p>
                📌 Worked in project called HR App which deals with day to day
                activities of HR in organization.
              </p>
            </article>
            <article className=" dark:bg-slate-800 dark:text-gray-300 hover:shadow-slate-500 lg:flex-1 md:flex-0">
              <h3 className="text-2xl">
                <strong>Configuration Management Engineer</strong>
              </h3>
              <h4 className="text-lg">
                <strong>
                  Altran Technologies / Ranstad India
                  <span className="italic text-base ml-2">
                    (December,2015 - May,2018)
                  </span>
                </strong>
              </h4>
              <p>
                📌 Worked as contractor in Nokia Networks and Solutions as
                Configuration Management Engineer under payroll of Altran.
              </p>
              <p>
                📌 Worked in project called Vodafone and Turk Telekom where we
                would be making configuration changes as per client requirement
                using Nokia's Net Act software.
              </p>
            </article>
            <article className=" dark:bg-slate-800 dark:text-gray-300 hover:shadow-slate-500 lg:flex-1 md:flex-0">
              <h3 className="text-2xl">
                <strong>Software Engineer</strong>
              </h3>
              <h4 className="text-lg">
                <strong>
                  ManpowerGroup Services India Pvt. Ltd., Bangalore, India
                  <span className="italic text-base ml-2">
                    (November,2015 - December,2015)
                  </span>
                </strong>
              </h4>
              <p>
                📌 Worked as Digital Vendor Marketing publisher in digital
                marketing team in Target India Private Ltd under payroll of
                Manpower Group Services India Pvt. Ltd.
              </p>
            </article>
          </div>
        </section>
        <hr className="bg-gray-100"></hr>
        <section className="mt-5">
          <h1 className="text-4xl text-center dark:text-gray-200">
            Education 🎓
          </h1>
          <div className="lg:md:grid lg:md:grid-rows-2 lg:md:grid-flow-col lg:md:gap-10 flex flex-wrap gap-10 p-6">
            <article className=" dark:bg-slate-800 dark:text-gray-300 hover:shadow-slate-500 flex-auto">
              <h3 className="text-2xl">
                <strong>Bachelor of Technology: Information Technology 
                <span className="italic text-base ml-2">(August,2010 - May,2014)</span></strong>
              </h3>
              <h4 className="text-lg">
                <strong>K.S.Rangasamy College of Technology - India
                </strong>
              </h4>
              <p>✔ Completed with CGPA of 7.19</p>
            </article>
            <article className=" dark:bg-slate-800 dark:text-gray-300 hover:shadow-slate-500 flex-auto">
              <h3 className="text-2xl">
                <strong>Higher Secondary School Leaving Certificate                  
                <span className="italic text-base ml-2">(March,2008 - March,2010)</span>
                </strong>
              </h3>
              <h4 className="text-lg">
                <strong>
                  Sri Vidhya Bharathi Matric Higher Secondary School
                </strong>
              </h4>
              <p>✔ Completed with 88.08% of marks.</p>
            </article>
            <article className=" dark:bg-slate-800 dark:text-gray-300 hover:shadow-slate-500 flex-auto">
              <h3 className="text-2xl">
                <strong>Secondary School Leaving Certificate
                <span className="italic text-base ml-2">(March,2007 - March,2008)</span>
                </strong>
              </h3>
              <h4 className="text-lg">
                <strong>Diamond Rays Matric Higher Secondary Schools</strong>
              </h4>
              <p>✔ Completed with 78% of marks.</p>
            </article>
          </div>
        </section>
      </div>
    </>
  );
};
export default Section;
