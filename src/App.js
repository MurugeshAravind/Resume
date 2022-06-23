import React from "react";
import Header from "./Header/Header.component";
import Image from "./Image/Image.component";
import Section from "./Section/Section.component";
function App() {
  return (
    <>
      <Image
        className={
          "float-left m-auto h-auto md:w-60 lg:w-60 w-auto mt-1 ml-1 rounded-lg"
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
