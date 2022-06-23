const Section = () => {
  return (
    <>
      <div className="flex flex-wrap mt-4 rounded-md shadow-slate-200">
        <section className="shadow-md">
          <h1 className="text-4xl m-5 text-center">Work History 💼</h1>
          <div className="flex flex-wrap gap-10 p-6">
            <article className="shadow-slate-200 text-gray-700 hover:shadow-slate-500 hover:animate-pulse lg:flex-1 md:flex-0">
              <h3 className="text-2xl">
                <strong>Software Engineer</strong>
              </h3>
              <h4 className="text-lg">
                <strong>Luxoft, India</strong>
              </h4>
              <p>
                ◼ Reviewed project specifications and designed technology
                solutions that met or exceeded performance expectations.
              </p>
              <p>
                ◼ Worked with software development and testing team members to
                design and develop robust solutions to meet client requirements
                for functionality, scalability and performance.
              </p>
            </article>
            <article className=" shadow-slate-200 text-gray-700 hover:shadow-slate-500 hover:animate-pulse lg:flex-1 md:flex-0">
              <h3 className="text-2xl">
                <strong>Senior Associate Consultant</strong>
              </h3>
              <h4 className="text-lg">
                <strong>Infosys, India</strong>
              </h4>
              <p>
                ◼ Worked in RHPAM project were migration of old technology
                screens to new react UI/UX look and feel was done.
              </p>
              <p>
                ◼ Monitored and frequently reported on project status to clients
                and verified projects met client requirements and quality
                standards.
              </p>
            </article>
            <article className=" shadow-slate-200 text-gray-700 hover:shadow-slate-500 hover:animate-pulse lg:flex-1 md:flex-0">
              <h3 className="text-2xl">
                <strong>Software Engineer</strong>
              </h3>
              <h4 className="text-lg">
                <strong>Amazecodes Solutions Pvt Ltd, Bangalore, India</strong>
              </h4>
              <p>
                ◼ Worked as contractor in Wipro for project called Quantum which
                deals with business and financial solutions of Wipro.
              </p>
              <p>
                ◼ Worked in project called HR App which deals with day to day
                activities of HR in organization.
              </p>
            </article>
            <article className=" shadow-slate-200 text-gray-700 hover:shadow-slate-500 hover:animate-pulse lg:flex-1 md:flex-0">
              <h3 className="text-2xl">
                <strong>Configuration Management Engineer</strong>
              </h3>
              <h4 className="text-lg">
                <strong>Altran Technologies / Ranstad India</strong>
              </h4>
              <p>
                ◼ Worked as contractor in Nokia Networks and Solutions as
                Configuration Management Engineer under payroll of Altran.
              </p>
              <p>
                ◼ Worked in project called Vodafone and Turk Telekom where we
                would be making configuration changes as per client requirement
                using Nokia's Net Act software.
              </p>
            </article>
            <article className=" shadow-slate-200 text-gray-700 hover:shadow-slate-500 hover:animate-pulse lg:flex-1 md:flex-0">
              <h3 className="text-2xl">
                <strong>Software Engineer</strong>
              </h3>
              <h4 className="text-lg">
                <strong>
                  ManpowerGroup Services India Pvt. Ltd., Bangalore, India
                </strong>
              </h4>
              <p>
                ◼ Worked as Digital Vendor Marketing publisher in digital
                marketing team in Target India Private Ltd under payroll of
                Manpower Group Services India Pvt. Ltd.
              </p>
            </article>
          </div>
        </section>
        <section className="mx-auto">
          <h1 className="text-4xl m-5 text-center">Education 🎓</h1>
          <div className="flex flex-wrap gap-10 p-6">
            <article className=" shadow-slate-200 text-gray-700 hover:shadow-slate-500 hover:animate-pulse flex-auto">
              <h3 className="text-2xl">
                <strong>Bachelor of Technology: Information Technology</strong>
              </h3>
              <h4 className="text-lg">
                <strong>K.S.Rangasamy College of Technology - India</strong>
              </h4>
              <p>✔ Completed with CGPA of 7.19</p>
            </article>
            <article className=" shadow-slate-200 text-gray-700 hover:shadow-slate-500 hover:animate-pulse flex-auto">
              <h3 className="text-2xl">
                <strong>Higher Secondary School Leaving Certificate</strong>
              </h3>
              <h4 className="text-lg">
                <strong>
                  Sri Vidhya Bharathi Matric Higher Secondary School
                </strong>
              </h4>
              <p>✔ Completed with 88.08% of marks.</p>
            </article>
            <article className=" shadow-slate-200 text-gray-700 hover:shadow-slate-500 hover:animate-pulse flex-auto">
              <h3 className="text-2xl">
                <strong>Secondary School Leaving Certificate</strong>
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
