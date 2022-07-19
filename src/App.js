import React, { Suspense } from "react";
import Navigation from "./Navigation/Navigation.component";
import Loader from "./Loader/Loader.component";
const Header = React.lazy(() => import("./Header/Header.component"));
const Section = React.lazy(() => import("./Section/Section.component"));
const Projects = React.lazy(() => import("./Projects/Projects.component"));
function App() {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Header />
        <Section />
        <Projects />
      </Suspense>
    </div>
  );
}

export default App;
