// import React from "react";
// import { Header } from "./components/Header/Header";
// import { TopContainer } from "./components/TopContainer/TopContainer";
// import { SkillContainer } from "./components/SkillContainer/SkillContainer";
// import { ProjectContain } from "./components/ProjectContain/ProjectContain";
// import "./App.css";
// import { EducationContainer } from "./components/EducationContainer/EducationContainer";
// import { Contact } from "./components/Contact/Contact";


// const App = () => {
//   const handleResize = () => {
//     // Handle resize logic here if needed
//   };

//   React.useEffect(() => {
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);
//   return ( 
//     // JSX - JAVASCRIPT + HTML
//     <div className="container">
//       <Header/>
//       <TopContainer/>
//       <SkillContainer/>
//       <ProjectContain/>
//       <EducationContainer/>
//       <Contact/>
//     </div>
//   )
// };
// export default App;
import React from "react";
import { Header } from "./components/Header/Header";
import { TopContainer } from "./components/TopContainer/TopContainer";
import { SkillContainer } from "./components/SkillContainer/SkillContainer";
import { ProjectContain } from "./components/ProjectContain/ProjectContain";
import { EducationContainer } from "./components/EducationContainer/EducationContainer";
import { Contact } from "./components/Contact/Contact";
import "./App.css";

const App = () => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Example of conditional rendering based on window width
  const isMobile = windowWidth <= 768;

  return (
    <div className="container">
      <Header />
      <TopContainer />
      <div className="content-container">
        {isMobile ? (
          <div>
            <SkillContainer />
            <ProjectContain />
            <EducationContainer />
            <Contact />
          </div>
        ) : (
          <div>
            <SkillContainer />
            <div className="right-column">
              <ProjectContain />
              <EducationContainer />
              <Contact />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
