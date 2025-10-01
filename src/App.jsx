import { useState } from "react";
import Loadingscreen from "./components/Loadingscreen";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Project from "./components/Project/Project" 
import Contact from "./components/Contact/Contact";

function App() {
  const [iscompleted, setiscompleted] = useState(true);

  return (
    <>
      {iscompleted && (
        <Loadingscreen iscomplete={() => setiscompleted(false)} />
      )}
      <div
        className={` min-h-screen transition-opacity duration-700 ${
          !iscompleted ? "block relative z-50" : "hidden"
        } relative`}
      >
        <Navbar />
        <Home/>
        <About/>
        <Project/>
        <Contact/>

      </div>
    </>
  );
}

export default App;
