import React from "react";

const Experience = () => {
  return (
    <div
      name="experience"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Experience
          </p>
        </div>
        <p className="text-xl mt-5">
          <div>
            <p className="text-4xl">Deqode - Software Engineer</p>
            <p className="text-2xl mt-3">May-2023 - Present</p>
            <ul className="mt-3">
              <li className="p-1">
                {" "}
                • Developed and maintained cross-platform mobile applications
                using React Native, ensuring a seamless user experience across
                iOS and Android platforms
              </li>
              <li className="p-1">
                {" "}
                • Implemented state management using Redux, effectively managing
                application data and improving performance
              </li>
              <li className="p-1">
                {" "}
                • Collaborated with team members to brainstorm solutions and
                implement fixes in a timely manner.
              </li>
              <li className="p-1">
                {" "}
                • Participated in Agile ceremonies such as sprint planning,
                daily stand-ups, and retrospectives.
              </li>
            </ul>
            <p className="text-4xl">Metafic - Frontend Intern</p>
            <p className="text-2xl mt-3">Aug-2022 - Dec-2022</p>
            <ul className="mt-3">
              <li>• Worked on a mobile + web based technologies.</li>
              <li>
                • Responsibilities include resolving frontend design problems
                and integrating new API endpoints to the frontend.
              </li>
              <li>
                • Technologies - React.js, Redux Toolkit, Reactnative,
                Typescript.
              </li>
            </ul>
          </div>
        </p>
        <br />
        <p className="text-xl"></p>
      </div>
    </div>
  );
};

export default Experience;
