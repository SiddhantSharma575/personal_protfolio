import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          I'm a skilled React Native and React.js + Next.js developer with over
          a year of experience. I specialize in crafting seamless cross-platform
          mobile applications and high-performance web solutions. With a keen
          eye for detail and a passion for clean, efficient code, I thrive on
          turning ideas into robust digital products. Collaborative by nature, I
          excel in working with multidisciplinary teams to deliver exceptional
          user experiences. Let's build something extraordinary together!
        </p>
        <br />
        <p className="text-xl"></p>
      </div>
    </div>
  );
};

export default About;
