import React from "react";
import profilePic from "../../public/assets/images/PORTFOLIO_PIC.png";
import Image from "next/image";

const About = ({ id }) => {
  return (
    <main
      className="w-full min-h-screen py-8 px-4 sm:px-6 md:px-8 lg:px-12"
      id={id}
    >
      <h1 className="text-6xl font-bold mx-auto py-14">ABOUT ME</h1>
      <Image src={profilePic} alt="profile" width={600} height={800} className="m-auto mb-24" />
      <p className="text-3xl font-bold tracking-wide">
        Hi, I`m a passionate and experienced full-stack developer specializing
        in the MERN stack. I have a deep understanding of various technologies
        and methodologies. My journey in the world of software development has
        been an exciting and fulfilling one. I thrive on challenges and enjoy
        creating efficient and scalable solutions.
      </p>
    </main>
  );
};

export default About;
