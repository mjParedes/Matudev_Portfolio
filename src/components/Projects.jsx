import React from "react";
import Link from "next/link";

const Projects = ({ projects }) => {
  console.log(projects);
  return (
    <main className="w-full min-h-screen py-8 px-4 sm:px-6 md:px-8 lg:px-12">
      <h1 className="text-6xl font-bold mx-auto">MY PROJECTS</h1>
      <div className="flex flex-col flex-wrap justify-center items-center mt-8 gap-6 sm:flex-row sm:justify-around">
        {projects.map((p) => (
          <div key={p.name} className="rounded-xl overflow-hidden">
            <img src={p.img} alt="something" width={500} />
            <div className="flex flex-col gap-4 mt-2">
              <h3>{p.name}</h3>
              <Link href={p.github}>Github repository</Link>
              <Link href={p.deploy}>Deploy</Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Projects;
