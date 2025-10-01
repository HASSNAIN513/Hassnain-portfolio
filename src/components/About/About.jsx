import React from "react";
import { useState } from "react";
import Revealonscroll from "../Revealonscroll";

const About = () => {
  const [frontend, setfrontend] = useState([
    "React",
    "TailwindCSS",
    "TypeScript",
    "JavaScript",
  ]);
  const [backend, setbackend] = useState([
    "Node.js",
    "MongoDB",
    "Next.js",
    "Express.js",
  ]);
  return (
    <section
      id="about"
      className=" min-h-screen flex justify-center items-center py-20"
    >
      <Revealonscroll>

      
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-center text-transparent ">
          About Me
        </h2>

        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all ">
          <p className="text-gray-300 mb-6">
            Passionate full stack developer with expertise in building scalable
            web applictions and creating innovative solutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">


            <div className="rounded-xl p-6  hover:-translate-y-1 transition-all ">
              <h3 className="text-xl font-bold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontend.map((item, index) => {
                  return (
                    <span
                      key={index}
                      className="bg-blue/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition cursor-pointer"
                    >
                      {item}
                    </span>
                  );
                })}
              </div>
            </div>
            <div className="rounded-xl p-6  hover:-translate-y-1 transition-all ">
              <h3 className="text-xl font-bold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {backend.map((item, index) => {
                  return (
                    <span
                      key={index}
                      className="bg-blue/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all cursor-pointer"
                    >
                      {item}
                    </span>
                  );
                })}
              </div>
            </div>

            

          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

            <div className="p-6 rounded-xl border-white/10  border hover:-translate-y-2 transition-all ">

                <h3 className="text-3xl font-bold mb-4"> 🏫 Education</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>
                        <strong> B.S. in Computer Science </strong> - Arid University (2024-current)
                        
                    </li>
                    <li>
                        Relevant Coursework: Data structures, Web Development, Cloud Computing...
                    </li>
                </ul>

            </div>
            <div className="p-6 rounded-xl border-white/10  border hover:-translate-y-2 transition-all ">

                <h3 className="text-3xl font-bold mb-4"> 💼 Work Experience </h3>
                <div className="space-y-4 text-gray-300">
                    <div>
                    <h4 className="font-semibold">Intern at Grain & Grit Design (2024-2025) </h4>
                    <p>Developed and maintained web applications, delivering scalable, user-friendly solutions while collaborating with the team to ensure high-quality results</p>
                    </div>
                
                </div>

            </div>


        </div>





      </div>
      </Revealonscroll>
    </section>
  );
};

export default About;
