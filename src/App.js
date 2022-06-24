import React from "react";
import Header from "./Header/Header.component";
import Image from "./Image/Image.component";
import Section from "./Section/Section.component";
function App() {
  return (
    <>
      <Image
        className={
          "float-left lg:md:w-60 mt-1 ml-1 rounded-md"
        }
        alt={"aravind"}
        src="./aravind.jpg"
      />
      <Header />
      <Section />
    </>
  );
}

export default App;
