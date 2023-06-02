import React from "react";
import Image from "next/image";
import Logo from "../public/img/header/logo.svg";
import Link from "next/link";

const Header = () => {
  return (
    <header className=" py-6 lg:absolute lg:w-full lg:left-0">
      <div className="container mx-auto flex flex-col gap-y-6 lg:flex-row h-full justify-between items-center relative">
        <a href="#">
          <Image src={Logo} />
        </a>
        <nav className="text-xl flex gap-x-4 lg:gap-x-12">
          <Link href="#services">Services</Link>
          <Link href="#about">About</Link>
          <Link href="#blog">Blog</Link>
          <Link href="#contact">Contact</Link>
        </nav>
        <button className="btn btn-primary lg:btn-outline">Sign up</button>
      </div>
    </header>
  );
};

export default Header;
