'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectCard = ({ data }) => {
  return (
    <div className="bg-purple-600 flex flex-col items-center rounded-xl overflow-hidden mb-4">
      <img src={data.img} alt="photo" className="" width={800} height={600} />
      <div className="flex flex-col items-center justify-start gap-2 py-4">
        <h1 className="text-2xl font-semibold">{data.name}</h1>
        <Link href={data.deploy} className="hover:font-semibold">
          <h3>Go to deploy</h3>
        </Link>
        <Link href={data.github} className="hover:font-semibold">
          <h3>Github repository</h3>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
