
'use client'
import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi"
import logoImg from '../../public/assets/logoApp.png'
import Image from "next/image";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white bg-opacity-10 sticky top-0">
      <div className="min-w-full flex items-center justify-between p-1 sm:p-2">
        <div>
          {/* <h1 className="text-2xl">MATUDEV-LOGO</h1> */}
          <Link href={'/'}>
            <Image src={logoImg} alt="logo" width={60} height={60} />
          </Link>
        </div>
        <div className="hidden md:flex gap-2 sm:gap-6 md:gap-8 lg:gap-10">
          <Link href={"#about"} className="hover:font-bold hover:scale-105">
            ABOUT ME
          </Link>
          <Link href={"#projects"} className="hover:font-bold hover:scale-105">
            MY PROJECTS
          </Link>
          <Link href={"#skills"} className="hover:font-bold hover:scale-105">
            MY SKILLS
          </Link>
          <Link href={"#contact"} className="hover:font-bold hover:scale-105">
            CONTACT ME
          </Link>
        </div>
        {/* Hamburguesa para resoluciones pequeñas */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white text-xl focus:outline-none"
          >
            <GiHamburgerMenu size={25}/>
          </button>
        </div>
      </div>
      {/* Menú desplegable para resoluciones pequeñas */}
      {menuOpen && (
        <div className="flex flex-col items-center justify-center px-4 py-2 md:hidden">
          <Link href={"/"} className="block py-2 hover:font-bold hover:scale-105">
            ABOUT ME
          </Link>
          <Link href={"/"} className="block py-2 hover:font-bold hover:scale-105">
            MY PROJECTS
          </Link>
          <Link href={"/"} className="block py-2 hover:font-bold hover:scale-105">
            MY STACK
          </Link>
          <Link href={"/"} className="block py-2 hover:font-bold hover:scale-105">
            CONTACT ME
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
