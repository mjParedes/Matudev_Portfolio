import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="flex flex-col items-center justify-center gap-4 p-4 shadow-xl">
        <div>
          <h1 className="text-xl font-semibold"> MATUDEVS </h1>
        </div>
        <div>
          <h2>CONTACT TO ME</h2>
          <div className="flex flex-col gap-2 items-center">
            <Link href={"/"}>Github</Link>
            <Link href={"/"}>Linkedin</Link>
            <Link href={"/"}>Whatsapp</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
