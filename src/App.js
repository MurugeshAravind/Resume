import React from "react";
import Header from "./Header/Header.component";
import Image from "./Image/Image.component";
import Section from "./Section/Section.component";
function App() {
  return (
    <>
      <Image
        className={
          "float-left lg:md:w-64 w-auto h-auto lg:md:mt-1 lg:md:ml-1 rounded-md"
        }
        alt={"aravind"}
        src="./aravind.avif"
      />
      <Header />
      <Section />
    </>
  );
}

export default App;
